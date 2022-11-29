import { Paper } from "@mui/material";
import React, { memo } from "react";
import { makeStyles } from "tss-react/mui";

export type BlocProps = {
  children?: React.ReactNode;
  className?: string;
};

export const Block = memo((props: BlocProps) => {
  const { classes } = useStyles();
  const { children, className } = props;

  return <Paper className={`${classes.block} ${className}`}>{children}</Paper>;
});

const useStyles = makeStyles()((theme) => ({
  block: {
    padding: theme.spacing(2),
    display: "flex",
    flexDirection: "column",
  },
}));

Block.displayName = "Block";
