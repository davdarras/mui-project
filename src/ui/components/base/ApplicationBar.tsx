import MenuIcon from "@mui/icons-material/Menu";
import NotificationsIcon from "@mui/icons-material/Notifications";
import AppBar, { AppBarProps } from "@mui/material/AppBar";
import Badge from "@mui/material/Badge";
import IconButton from "@mui/material/IconButton";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { memo } from "react";
import { makeStyles } from "tss-react/mui";
import { MenuProps } from ".";

export type ApplicationBarProps = AppBarProps & {
  open: boolean;
};

export const ApplicationBar = memo((props: MenuProps) => {
  const { open, toggleDrawer, drawerWidth } = props;

  const { classes, cx } = useStyles({ drawerWidth: drawerWidth });

  return (
    <AppBar
      className={cx(classes.root, { [classes.expandAppBar]: open })}
      position="absolute"
    >
      <Toolbar className={classes.toolbar}>
        <IconButton
          className={cx(classes.burgerIcon, { [classes.hide]: open })}
          edge="start"
          color="inherit"
          aria-label="open drawer"
          onClick={toggleDrawer}
        >
          <MenuIcon />
        </IconButton>
        <Typography
          className={classes.globalTitle}
          component="h1"
          variant="h6"
          color="inherit"
          noWrap
        >
          Dashboard
        </Typography>

        <IconButton color="inherit">
          <Badge badgeContent={4} color="secondary">
            <NotificationsIcon />
          </Badge>
        </IconButton>
      </Toolbar>
    </AppBar>
  );
});

const useStyles = makeStyles<{ drawerWidth: number }>()(
  (theme, { drawerWidth }) => ({
    root: {
      zIndex: theme.zIndex.drawer + 1,
      transition: theme.transitions.create(["width", "margin"], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
    },
    expandAppBar: {
      marginLeft: drawerWidth,
      width: `calc(100% - ${drawerWidth}px)`,
      transition: theme.transitions.create(["width", "margin"], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
    },
    toolbar: {
      paddingRight: "24px",
    },
    burgerIcon: {
      marginRight: "24px",
    },
    globalTitle: {
      flexGrow: 1,
    },
    hide: {
      display: "none",
    },
  })
);

ApplicationBar.displayName = "ApplicationBar";
