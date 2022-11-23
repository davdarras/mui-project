import Typography from "@mui/material/Typography";
import * as React from "react";
import { memo } from "react";
import { Block, Title } from "modules/core/presentation/components";
import { Grid } from "@mui/material";

export const CampaignList = memo(() => {
  return (
    <Grid component="main" container justifyContent="center" spacing={3}>
      <Grid item xs={12}>
        <Block>
          <Title>Gestion des campagnes</Title>
          <Typography component="p">Ajouter nomenclature</Typography>
        </Block>
      </Grid>
    </Grid>
  );
});

CampaignList.displayName = "CampaignList";
