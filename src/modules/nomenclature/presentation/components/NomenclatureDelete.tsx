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
import { Nomenclature } from "modules/nomenclature/domain";
import useNomenclature from "modules/nomenclature/services/useNomenclature";
import React, { memo, useState } from "react";

type NomenclatureDeleteType = {
  nomenclature: Nomenclature;
  refreshNomenclatures: () => void;
};

export const NomenclatureDelete = memo(
  ({ nomenclature, refreshNomenclatures }: NomenclatureDeleteType) => {
    const [openConfirmationDialog, setOpenConfirmationDialog] = useState(false);
    const { addToast } = useToast();
    const { deleteNomenclature } = useNomenclature();

    const toggleConfirmationDialog = () => {
      setOpenConfirmationDialog(!openConfirmationDialog);
    };

    const handleDelete = () => {
      deleteNomenclature(nomenclature.id).then((data) => {
        console.log("afterDelete");
        console.log(data);
        addToast("Nomenclature deleted", "success");
        refreshNomenclatures();
        console.log("afterRefresh");
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
          <DialogTitle id="alert-dialog-title">Delete confirmation</DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              Do you really want to delete the following nomenclature :{" "}
              {nomenclature.name}
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button
              color="info"
              variant="contained"
              onClick={toggleConfirmationDialog}
            >
              Disagree
            </Button>
            <Button
              color="error"
              variant="contained"
              onClick={handleDelete}
              autoFocus
            >
              Agree
            </Button>
          </DialogActions>
        </Dialog>
      </React.Fragment>
    );
  }
);

NomenclatureDelete.displayName = "NomenclatureDelete";
