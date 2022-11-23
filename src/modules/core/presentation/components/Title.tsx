import * as React from "react";
import Typography from "@mui/material/Typography";
import { memo } from "react";

export type TitleProps = {
  children: React.ReactNode | undefined;
};

export const Title = memo((props: TitleProps) => {
  return (
    <Typography component="h2" variant="h6" color="primary" gutterBottom>
      {props.children}
    </Typography>
  );
});

Title.displayName = "Title";
