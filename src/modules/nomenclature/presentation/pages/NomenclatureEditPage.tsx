import SaveIcon from "@mui/icons-material/Save";
import { Box, Button, Grid, Input, Stack, TextField } from "@mui/material";
import { Block, Title } from "modules/core/presentation/components";
import { Loader } from "modules/core/presentation/components/Loader";
import { useToast } from "modules/core/presentation/components/Toast";
import { Nomenclature } from "modules/nomenclature/application/domain";
import { makeNomenclatureUseCase } from "modules/nomenclature/factory/NomenclatureFactory";
import * as React from "react";
import { memo, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useIntl } from "react-intl";
import { useNavigate, useParams } from "react-router-dom";
import { NomenclatureDictionaryList } from "../components/NomenclatureDictionaryList";
import LoadingButton from "@mui/lab/LoadingButton";

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
  const [isLoading, setLoading] = useState(false);
  const [isSubmitting, setSubmitting] = useState(false);

  useEffect(() => {
    const idNumber = Number(id);
    if (isEditMode) {
      setLoading(true);
      nomenclatureUseCase.getNomenclature(idNumber).then((nomenclatureData) => {
        setNomenclature(nomenclatureData);
        setLoading(false);
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
    setSubmitting(true);
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
        })
        .catch(() => {
          addToast(intl.formatMessage({ id: "error_request_failed" }), "error");
        })
        .finally(() => {
          setSubmitting(false);
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
      })
      .catch(() => {
        addToast(intl.formatMessage({ id: "error_request_failed" }), "error");
      })
      .finally(() => {
        setSubmitting(false);
      });
  });

  return (
    <React.Fragment>
      <Grid component="main" container justifyContent="center" spacing={3}>
        <Grid item xs={12} md={8}>
          <Block>
            <Loader isLoading={isLoading}>
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
                    error={
                      errors.nomenclature?.name !== undefined ? true : false
                    }
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
                  <LoadingButton
                    type="submit"
                    color="info"
                    variant="contained"
                    startIcon={<SaveIcon />}
                    loading={isSubmitting}
                    loadingPosition="start"
                  >
                    {intl.formatMessage({ id: "nomenclature_edit_save" })}
                  </LoadingButton>
                </Stack>
              </Box>
            </Loader>
          </Block>
        </Grid>
        {nomenclature && <NomenclatureDictionaryList {...nomenclature} />}
      </Grid>
    </React.Fragment>
  );
});

NomenclatureEditPage.displayName = "NomenclatureEditPage";
