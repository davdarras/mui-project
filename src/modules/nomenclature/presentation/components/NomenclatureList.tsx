import AddCircleIcon from "@mui/icons-material/AddCircle";
import EditIcon from "@mui/icons-material/Edit";
import {
  Button,
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
import { Title } from "modules/core/presentation/components";
import { Nomenclature } from "modules/nomenclature/domain";
import useNomenclature from "modules/nomenclature/services/useNomenclature";
import * as React from "react";
import { memo, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { NomenclatureDelete } from "./NomenclatureDelete";

export const NomenclatureList = memo(() => {
  const [nomenclatures, setNomenclatures] = useState<Nomenclature[]>();
  const { getNomenclatures } = useNomenclature();

  useEffect(() => {
    refreshNomenclatures();
  }, []);

  const refreshNomenclatures = (): void => {
    getNomenclatures().then((nomenclaturesData) => {
      setNomenclatures(nomenclaturesData);
      console.log("refreshDone");
    });
  };

  return (
    <React.Fragment>
      <Title>Nomenclatures List</Title>
      <Stack direction="row" justifyContent="end">
        <Link to={`/nomenclatures/add`}>
          <Button
            color="info"
            variant="contained"
            startIcon={<AddCircleIcon />}
          >
            Add nomenclature
          </Button>
        </Link>
      </Stack>
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
                    <NomenclatureDelete
                      nomenclature={nomenclature}
                      refreshNomenclatures={refreshNomenclatures}
                    />
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
