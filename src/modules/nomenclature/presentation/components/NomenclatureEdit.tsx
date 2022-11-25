import {
  Box,
  Button,
  Grid,
  Paper,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  Typography,
} from "@mui/material";
import { Block, Title } from "modules/core/presentation/components";
import { Nomenclature } from "modules/nomenclature/domain";
import useNomenclature from "modules/nomenclature/services/useNomenclature";
import * as React from "react";
import { memo, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import SaveIcon from "@mui/icons-material/Save";
import { useToast } from "modules/core/presentation/components/Toast";

export const NomenclatureEdit = memo(() => {
  const [nomenclature, setNomenclature] = useState<Nomenclature>();
  const { addToast } = useToast();
  const { getNomenclature, editNomenclature, addNomenclature } =
    useNomenclature();
  const { id } = useParams();
  const navigate = useNavigate();
  const isEditMode = id !== undefined ? true : false;
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<Nomenclature>();

  useEffect(() => {
    const idNumber = Number(id);
    if (isEditMode) {
      getNomenclature(idNumber).then((nomenclatureData) => {
        setNomenclature(nomenclatureData);
      });
    }
  }, []);

  // effect runs when user state is updated
  useEffect(() => {
    if (nomenclature !== undefined) {
      setValue("id", nomenclature.id);
      setValue("name", nomenclature.name);
    }
  }, [nomenclature]);

  const handleNomenclatureSubmit = handleSubmit((formData) => {
    if (isEditMode) {
      editNomenclature(formData).then(() => {
        addToast("Nomenclature saved", "success");
        navigate("/nomenclatures");
      });
      return;
    }
    addNomenclature(formData).then(() => {
      addToast("Nomenclature added", "success");
      navigate("/nomenclatures");
    });
  });

  return (
    <React.Fragment>
      <Grid component="main" container justifyContent="center" spacing={3}>
        <Grid item xs={12} md={8}>
          <Block>
            <Title>
              {isEditMode ? `Edit ${nomenclature?.name}` : "Add Nomenclature"}
            </Title>
            <Box component="form" onSubmit={handleNomenclatureSubmit}>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  margin="normal"
                  label="Name"
                  fullWidth
                  variant="outlined"
                  InputLabelProps={{ shrink: true }}
                  helperText={
                    errors.name
                      ? errors.name.message
                      : "Unique identifier of nomenclature"
                  }
                  error={errors.name !== undefined ? true : false}
                  {...register("name", {
                    required: "This is required",
                  })}
                />
              </Grid>

              <Grid item xs={12} sm={6}>
                <Button variant="contained" component="label">
                  Upload dictionary
                  <input type="file" hidden />
                </Button>
              </Grid>

              <Stack direction="row" justifyContent="center">
                <Button
                  type="submit"
                  color="info"
                  variant="contained"
                  startIcon={<SaveIcon />}
                >
                  Save nomenclature
                </Button>
              </Stack>
            </Box>
          </Block>
        </Grid>
        {nomenclature && (
          <Grid item xs={12} md={8}>
            <Block>
              <Grid item xs={12}>
                <Typography
                  component="h3"
                  variant="h6"
                  color="primary"
                  gutterBottom
                  justifyContent="center"
                >
                  First values of nomenclature
                </Typography>
                <TableContainer component={Paper}>
                  <Table aria-label="nomenclature items table">
                    <TableHead>
                      <TableRow>
                        <TableCell>ID</TableCell>
                        <TableCell>Value</TableCell>
                      </TableRow>
                    </TableHead>
                    {
                      <TableBody>
                        {nomenclature?.items?.map((nomenclatureItem) => (
                          <TableRow key={nomenclatureItem.name}>
                            <TableCell component="th" scope="row">
                              {nomenclatureItem.name}
                            </TableCell>
                            <TableCell>{nomenclatureItem.value}</TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    }
                  </Table>
                </TableContainer>
              </Grid>
            </Block>
          </Grid>
        )}
      </Grid>
    </React.Fragment>
  );
});

NomenclatureEdit.displayName = "NomenclatureEdit";
