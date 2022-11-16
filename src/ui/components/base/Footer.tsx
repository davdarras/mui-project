import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import { memo } from "react";
import { makeStyles } from "tss-react/mui";

export const Footer = memo(() => {
  const { classes } = useStyles();
  const year = new Date().getFullYear();
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      className={classes.root}
    >
      Copyright ©{" "}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{" "}
      {year}.
    </Typography>
  );
});

const useStyles = makeStyles()((theme) => ({
  root: {
    backgroundColor: "#000000",
    color: "#FFFFFF",
    padding: "5px",
  },
}));

Footer.displayName = "Footer";
