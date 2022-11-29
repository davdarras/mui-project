import DeleteIcon from "@mui/icons-material/Delete";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  IconButton,
} from "@mui/material";
import { useToast } from "modules/core/presentation/components/Toast";
import { Nomenclature } from "modules/nomenclature/application/domain";
import { makeNomenclatureUseCase } from "modules/nomenclature/factory/NomenclatureFactory";
import React, { memo, useState } from "react";
import { useIntl } from "react-intl";

type NomenclatureDeleteType = {
  nomenclature: Nomenclature;
  loadNomenclatures: () => void;
};

export const NomenclatureDelete = memo(
  ({ nomenclature, loadNomenclatures }: NomenclatureDeleteType) => {
    const [openConfirmationDialog, setOpenConfirmationDialog] = useState(false);
    const { addToast } = useToast();
    const nomenclatureUseCase = makeNomenclatureUseCase();
    const intl = useIntl();

    const toggleConfirmationDialog = () => {
      setOpenConfirmationDialog(!openConfirmationDialog);
    };

    const handleDelete = () => {
      nomenclatureUseCase
        .deleteNomenclature(nomenclature.id)
        .then(() => {
          addToast(
            intl.formatMessage({ id: "nomenclature_delete_success" }),
            "success"
          );
        })
        .then(() => {
          loadNomenclatures();
        });
      setOpenConfirmationDialog(false);
    };

    return (
      <React.Fragment>
        <IconButton aria-label="delete" onClick={toggleConfirmationDialog}>
          <DeleteIcon />
        </IconButton>
        <Dialog
          open={openConfirmationDialog}
          onClose={toggleConfirmationDialog}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">
            {intl.formatMessage({
              id: "nomenclature_delete_confirmation_label",
            })}
          </DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              {intl.formatMessage(
                { id: "nomenclature_delete_confirmation_body" },
                { name: nomenclature.name }
              )}
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button
              color="info"
              variant="contained"
              onClick={toggleConfirmationDialog}
            >
              {intl.formatMessage({
                id: "nomenclature_delete_confirmation_disagree",
              })}
            </Button>
            <Button
              color="error"
              variant="contained"
              onClick={handleDelete}
              autoFocus
            >
              {intl.formatMessage({
                id: "nomenclature_delete_confirmation_agree",
              })}
            </Button>
          </DialogActions>
        </Dialog>
      </React.Fragment>
    );
  }
);

NomenclatureDelete.displayName = "NomenclatureDelete";
