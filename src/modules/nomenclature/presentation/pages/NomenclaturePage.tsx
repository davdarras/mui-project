import { Grid } from "@mui/material";
import { Block } from "modules/core/presentation/components";
import { memo } from "react";
import { NomenclatureList } from "../components/NomenclatureList";

export const NomenclaturePage = memo(() => {
  return (
    <Grid component="main" container justifyContent="center">
      <Grid item xs={12} md={6}>
        <Block>
          <NomenclatureList />
        </Block>
      </Grid>
    </Grid>
  );
});

NomenclaturePage.displayName = "NomenclaturePage";
