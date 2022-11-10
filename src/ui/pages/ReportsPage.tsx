import { Grid } from "@mui/material";
import { memo } from "react";
import { Block } from "../components/base";
import { Chart } from "../components/Chart";

export const ReportsPage = memo(() => {
  return (
    <Grid item xs={12}>
      <Block>
        <Chart />
      </Block>
    </Grid>
  );
});

ReportsPage.displayName = "ReportsPage";
