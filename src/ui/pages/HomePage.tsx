import { Grid } from "@mui/material";
import React, { memo } from "react";
import { Chart } from "../components/Chart";
import { Deposits } from "../components/Deposits";
import { Orders } from "../components/Orders";

import { makeStyles } from "tss-react/mui";
import { Block } from "../components/base";

export const HomePage = memo(() => {
  const { classes } = useStyles();
  return (
    <React.Fragment>
      <Grid item xs={12} md={8} lg={9}>
        <Block className={classes.paperChart}>
          <Chart />
        </Block>
      </Grid>

      <Grid item xs={12} md={4} lg={3}>
        <Block className={classes.paperChart}>
          <Deposits />
        </Block>
      </Grid>
      <Grid item xs={12}>
        <Block>
          <Orders />
        </Block>
      </Grid>
    </React.Fragment>
  );
});

const useStyles = makeStyles()((theme) => ({
  paper: {
    padding: theme.spacing(2),
    display: "flex",
    flexDirection: "column",
  },
  paperChart: {
    height: "240px",
  },
}));

HomePage.displayName = "HomePage";
