import AddCircleIcon from "@mui/icons-material/AddCircle";
import EditIcon from "@mui/icons-material/Edit";
import {
  Button,
  Grid,
  IconButton,
  Paper,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { Block, Title } from "modules/core/presentation/components";
import { Nomenclature } from "modules/nomenclature/domain";
import { makeNomenclatureUseCase } from "modules/nomenclature/factory/NomenclatureFactory";
import * as React from "react";
import { memo, useEffect, useState } from "react";
import { useIntl } from "react-intl";
import { Link } from "react-router-dom";
import { NomenclatureDelete } from "../components/NomenclatureDelete";

export const NomenclatureListPage = memo(() => {
  const [nomenclatures, setNomenclatures] = useState<Nomenclature[]>();
  const nomenclatureUseCase = makeNomenclatureUseCase();
  const intl = useIntl();

  useEffect(() => {
    loadNomenclatures();
  }, []);

  const loadNomenclatures = (): void => {
    nomenclatureUseCase.getNomenclatures().then((nomenclaturesData) => {
      setNomenclatures(nomenclaturesData);
    });
  };

  return (
    <Grid component="main" container justifyContent="center">
      <Grid item xs={12} md={6}>
        <Block>
          <Title>{intl.formatMessage({ id: "nomenclature_list_label" })}</Title>
          <Stack direction="row" justifyContent="end">
            <Link to={`/nomenclatures/add`}>
              <Button
                color="info"
                variant="contained"
                startIcon={<AddCircleIcon />}
              >
                {intl.formatMessage({ id: "nomenclature_list_btn_add" })}
              </Button>
            </Link>
          </Stack>
          <TableContainer component={Paper}>
            <Table aria-label="nomenclature table">
              <TableHead>
                <TableRow>
                  <TableCell>
                    {intl.formatMessage({ id: "nomenclature_list_items_name" })}
                  </TableCell>
                  <TableCell align="center">
                    {intl.formatMessage({
                      id: "nomenclature_list_items_actions",
                    })}
                  </TableCell>
                </TableRow>
              </TableHead>
              {
                <TableBody>
                  {nomenclatures?.map((nomenclature) => (
                    <TableRow key={nomenclature.id}>
                      <TableCell component="th" scope="row">
                        {nomenclature.name}
                      </TableCell>
                      <TableCell align="center">
                        <Link to={`/nomenclatures/${nomenclature.id}`}>
                          <IconButton aria-label="edit">
                            <EditIcon />
                          </IconButton>
                        </Link>
                        <NomenclatureDelete
                          nomenclature={nomenclature}
                          loadNomenclatures={loadNomenclatures}
                        />
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              }
            </Table>
          </TableContainer>
        </Block>
      </Grid>
    </Grid>
  );
});

NomenclatureListPage.displayName = "NomenclatureListPage";
