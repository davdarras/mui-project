import { AppBar, Toolbar } from "@mui/material";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import { memo } from "react";
import { makeStyles } from "tss-react/mui";

export const Footer = memo(() => {
  const { classes } = useStyles();
  const year = new Date().getFullYear();
  return (
    <AppBar component="footer" position="fixed" className={classes.root}>
      <Typography variant="body2" align="center">
        Copyright ©{" "}
        <Link color="inherit" href="https://mui.com/">
          Your Website
        </Link>{" "}
        {year}.
      </Typography>
    </AppBar>
  );
});

const useStyles = makeStyles()((theme) => ({
  root: {
    backgroundColor: "#000000",
    color: "#FFFFFF",
    top: "auto",
    bottom: "0",
    padding: "3px",
    zIndex: theme.zIndex.drawer + 1,
  },
}));

Footer.displayName = "Footer";
