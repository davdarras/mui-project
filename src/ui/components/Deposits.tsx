import { Button } from "@mui/material";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import * as React from "react";
import { memo } from "react";
import { Title } from "./base";

function preventDefault(event: React.MouseEvent) {
  event.preventDefault();
}

export const Deposits = memo(() => {
  return (
    <React.Fragment>
      <Title>Recent Deposits</Title>
      <Typography component="p" variant="h4">
        $3,024.00
      </Typography>
      <Typography color="secondary" sx={{ flex: 1 }}>
        on 15 March, 2019
      </Typography>
      <div>
        <Link color="primary" href="#" onClick={preventDefault}>
          View balance
        </Link>
      </div>
      <Button color="primary" variant="contained">
        Primary
      </Button>
      <Button color="secondary" variant="contained">
        Secondary
      </Button>
    </React.Fragment>
  );
});

Deposits.displayName = "Deposits";
