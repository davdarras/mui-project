import {
  Box,
  Button,
  Grid,
  Input,
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
import * as React from "react";
import { memo, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import SaveIcon from "@mui/icons-material/Save";
import { useToast } from "modules/core/presentation/components/Toast";
import { makeNomenclatureUseCase } from "modules/nomenclature/factory/NomenclatureFactory";
import { useIntl } from "react-intl";

type NomenclatureForm = {
  nomenclature: Nomenclature;
  files: FileList;
};

export const NomenclatureEditPage = memo(() => {
  const [nomenclature, setNomenclature] = useState<Nomenclature>();
  const { addToast } = useToast();
  const nomenclatureUseCase = makeNomenclatureUseCase();
  const { id } = useParams();
  const navigate = useNavigate();
  const isEditMode = id !== undefined ? true : false;
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<NomenclatureForm>();
  const intl = useIntl();

  useEffect(() => {
    const idNumber = Number(id);
    if (isEditMode) {
      nomenclatureUseCase.getNomenclature(idNumber).then((nomenclatureData) => {
        setNomenclature(nomenclatureData);
      });
    }
  }, []);

  // effect runs when user state is updated
  useEffect(() => {
    if (nomenclature !== undefined) {
      setValue("nomenclature.id", nomenclature.id);
      setValue("nomenclature.name", nomenclature.name);
    }
  }, [nomenclature]);

  const handleNomenclatureSubmit = handleSubmit(async (data) => {
    let dictionaryFile: File | undefined = undefined;
    if (data.files?.length > 0) {
      dictionaryFile = data.files[0];
    }

    if (isEditMode) {
      nomenclatureUseCase
        .editNomenclature(data.nomenclature, dictionaryFile)
        .then(() => {
          addToast(
            intl.formatMessage({ id: "nomenclature_edit_success" }),
            "success"
          );
          navigate("/nomenclatures");
        });
      return;
    }
    nomenclatureUseCase
      .addNomenclature(data.nomenclature, dictionaryFile)
      .then(() => {
        addToast(
          intl.formatMessage({ id: "nomenclature_edit_success" }),
          "success"
        );
        navigate("/nomenclatures");
      });
  });

  return (
    <React.Fragment>
      <Grid component="main" container justifyContent="center" spacing={3}>
        <Grid item xs={12} md={8}>
          <Block>
            <Title>
              {isEditMode
                ? intl.formatMessage(
                    { id: "nomenclature_edit_label" },
                    { name: nomenclature?.name }
                  )
                : intl.formatMessage({ id: "nomenclature_add_label" })}
            </Title>
            <Box component="form" onSubmit={handleNomenclatureSubmit}>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  margin="normal"
                  label={intl.formatMessage({ id: "nomenclature_edit_name" })}
                  fullWidth
                  variant="outlined"
                  InputLabelProps={{ shrink: true }}
                  helperText={
                    errors.nomenclature?.name
                      ? errors.nomenclature.name.message
                      : intl.formatMessage({
                          id: "nomenclature_edit_name_unique",
                        })
                  }
                  error={errors.nomenclature?.name !== undefined ? true : false}
                  {...register("nomenclature.name", {
                    required: "This is required",
                  })}
                />
              </Grid>

              <Grid item xs={12} sm={6}>
                <Button variant="contained" component="label">
                  {intl.formatMessage({ id: "nomenclature_edit_upload" })}
                  <Input
                    sx={{ display: "none" }}
                    type="file"
                    {...register("files")}
                  />
                </Button>
              </Grid>

              <Stack direction="row" justifyContent="center">
                <Button
                  type="submit"
                  color="info"
                  variant="contained"
                  startIcon={<SaveIcon />}
                >
                  {intl.formatMessage({ id: "nomenclature_edit_save" })}
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
                            id: "nomenclature_edit_items_values",
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
        )}
      </Grid>
    </React.Fragment>
  );
});

NomenclatureEditPage.displayName = "NomenclatureEditPage";
