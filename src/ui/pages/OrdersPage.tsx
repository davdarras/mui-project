import { Grid } from "@mui/material";
import { memo } from "react";
import { Block } from "../components/base";
import { Deposits } from "../components/Deposits";

export const OrdersPage = memo(() => {
  return (
    <Grid item xs={12}>
      <Block>
        <Deposits />
      </Block>
    </Grid>
  );
});

OrdersPage.displayName = "OrdersPage";
