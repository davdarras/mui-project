import { Grid } from "@mui/material";
import { memo } from "react";
import { Block } from "modules/core/presentation/components";
import { Deposits } from "../components/Deposits";

export const OrdersPage = memo(() => {
  return (
    <Grid component="main" container justifyContent="center" spacing={3}>
      <Grid item xs={12}>
        <Block>
          <Deposits />
        </Block>
      </Grid>
    </Grid>
  );
});

OrdersPage.displayName = "OrdersPage";
