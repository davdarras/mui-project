import {
  Grid,
  TextField,
  FormControlLabel,
  Checkbox,
  Box,
} from "@mui/material";
import { Block, Title } from "modules/core/presentation/components";
import useNomenclature from "modules/nomenclature/services/useNomenclature";
import * as React from "react";
import { memo, useEffect } from "react";
import { useParams } from "react-router-dom";

export const NomenclatureAdd = memo(() => {
  const { nomenclature, getNomenclature } = useNomenclature();
  const { id } = useParams();

  useEffect(() => {
    const idNumber = Number(id);
    getNomenclature(idNumber);
  }, []);
  return (
    <React.Fragment>
      <Grid component="main" container justifyContent="center">
        <Grid item xs={12} md={8}>
          <Block>
            <Title>Nomenclature</Title>
            <Box component="form">
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  id="firstName"
                  name="firstName"
                  label="First name"
                  fullWidth
                  autoComplete="given-name"
                  variant="outlined"
                  helperText="plop"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  id="lastName"
                  name="lastName"
                  label="Last name"
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  id="address1"
                  name="address1"
                  label="Address line 1"
                  fullWidth
                  autoComplete="shipping address-line1"
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  id="address2"
                  name="address2"
                  label="Address line 2"
                  fullWidth
                  autoComplete="shipping address-line2"
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  id="city"
                  name="city"
                  label="City"
                  fullWidth
                  autoComplete="shipping address-level2"
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  id="state"
                  name="state"
                  label="State/Province/Region"
                  fullWidth
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  id="zip"
                  name="zip"
                  label="Zip / Postal code"
                  fullWidth
                  autoComplete="shipping postal-code"
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  id="country"
                  name="country"
                  label="Country"
                  fullWidth
                  autoComplete="shipping country"
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel
                  control={
                    <Checkbox
                      color="secondary"
                      name="saveAddress"
                      value="yes"
                    />
                  }
                  label="Use this address for payment details"
                />
              </Grid>
            </Box>
          </Block>
        </Grid>
      </Grid>
    </React.Fragment>
  );
});

NomenclatureAdd.displayName = "NomenclatureAdd";
