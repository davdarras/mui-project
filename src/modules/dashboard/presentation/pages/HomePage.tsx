import { Grid } from "@mui/material";
import React, { memo } from "react";

import { makeStyles } from "tss-react/mui";
import { Block } from "modules/core/presentation/components";
import { Chart } from "../components/Chart";
import { Deposits } from "../components/Deposits";
import { Orders } from "../components/Orders";
import { ContactForm } from "../components/ContactForm";

export const HomePage = memo(() => {
  const { classes } = useStyles();
  return (
    <React.Fragment>
      <Grid component="main" container justifyContent="center" spacing={3}>
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
        <Grid item xs={12}>
          <Block>
            <ContactForm />
          </Block>
        </Grid>
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
