import {
  Grid,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import { Block } from "modules/core/presentation/components";
import { Nomenclature } from "modules/nomenclature/application/domain";
import { memo } from "react";
import { useIntl } from "react-intl";

export const NomenclatureDictionaryList = memo((nomenclature: Nomenclature) => {
  const intl = useIntl();

  return (
    <Grid item xs={12} md={8}>
      <Block>
        <Grid item xs={12}>
          <Typography
            component="h3"
            variant="h6"
            color="primary"
            gutterBottom
            justifyContent="center"
          ></Typography>
          <TableContainer component={Paper}>
            <Table aria-label="nomenclature items table">
              <TableHead>
                <TableRow>
                  <TableCell>
                    {intl.formatMessage({
                      id: "nomenclature_edit_items_id",
                    })}
                  </TableCell>
                  <TableCell>
                    {intl.formatMessage({
                      id: "nomenclature_edit_items_value",
                    })}
                  </TableCell>
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
  );
});

NomenclatureDictionaryList.displayName = "NomenclatureDictionaryList";
