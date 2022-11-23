import Typography from "@mui/material/Typography";
import * as React from "react";
import { memo } from "react";
import { Title } from "modules/core/presentation/components";

export const CampaignEdit = memo(() => {
  return (
    <React.Fragment>
      <Title>Edition de la nomenclature</Title>
      <Typography component="p">Ajouter nomenclature</Typography>
    </React.Fragment>
  );
});

CampaignEdit.displayName = "CampaignEdit";
