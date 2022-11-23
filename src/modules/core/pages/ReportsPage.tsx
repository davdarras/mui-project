import { Grid } from "@mui/material";
import { memo } from "react";
import { Block } from "modules/core/presentation/components";
import { Chart } from "../components/Chart";

export const ReportsPage = memo(() => {
  return (
    <Grid component="main" container justifyContent="center" spacing={3}>
      <Grid item xs={12}>
        <Block>
          <Chart />
        </Block>
      </Grid>
    </Grid>
  );
});

ReportsPage.displayName = "ReportsPage";
