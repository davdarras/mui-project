import {
  IconButton,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { Title } from "modules/core/presentation/components";
import useNomenclature from "modules/nomenclature/services/useNomenclature";
import * as React from "react";
import { memo, useEffect } from "react";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { Link } from "react-router-dom";

export const NomenclatureList = memo(() => {
  const { nomenclatures, getNomenclatures } = useNomenclature();

  useEffect(() => {
    getNomenclatures();
  }, []);

  return (
    <React.Fragment>
      <Title>Gestion des nomenclatures de test</Title>
      <TableContainer component={Paper}>
        <Table aria-label="nomenclature table">
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell align="center">Actions</TableCell>
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
                    <Link to={`/nomenclatures/${nomenclature.id}/delete`}>
                      <IconButton aria-label="delete">
                        <DeleteIcon />
                      </IconButton>
                    </Link>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          }
        </Table>
      </TableContainer>
    </React.Fragment>
  );
});

NomenclatureList.displayName = "NomenclatureList";

NomenclatureList.whyDidYouRender = true;
