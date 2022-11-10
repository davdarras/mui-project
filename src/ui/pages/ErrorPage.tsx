import { Grid } from "@mui/material";
import { memo } from "react";
import { Block } from "../components/base";
import { Error } from "../components/base/Error";

export const ErrorPage = memo(() => {
  return (
    <Grid item xs={12}>
      <Block>
        <Error />
      </Block>
    </Grid>
  );
});

ErrorPage.displayName = "ErrorPage";
