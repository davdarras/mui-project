import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import { makeStyles } from "tss-react/mui";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import Toolbar from "@mui/material/Toolbar";
import { memo } from "react";
import { NavMenu } from "../../root/routes.js";
import { ListItemLink } from ".";

export type MenuProps = {
  open: boolean;
  toggleDrawer: () => void;
  drawerWidth: number;
};

export const Menu = memo((props: MenuProps) => {
  const { open, toggleDrawer, drawerWidth } = props;

  const { classes, cx } = useStyles({ drawerWidth: drawerWidth });

  return (
    <Drawer
      className={cx(classes.root, { [classes.miniDrawer]: !open })}
      variant="permanent"
      open={open}
    >
      <Toolbar className={classes.toolbar}>
        <IconButton onClick={() => toggleDrawer()}>
          <ChevronLeftIcon />
        </IconButton>
      </Toolbar>
      <Divider />
      <List component="nav">
        {NavMenu.map((item, index) => (
          <ListItemLink
            key={`${index}-${item.label}`}
            to={item.pathname}
            primary={item.label}
            Icon={item.icon}
          />
        ))}
      </List>
    </Drawer>
  );
});

const useStyles = makeStyles<{ drawerWidth: number }>()(
  (theme, { drawerWidth }) => ({
    root: {
      "& .MuiDrawer-paper": {
        position: "relative",
        whiteSpace: "nowrap",
        width: drawerWidth,
        transition: theme.transitions.create("width", {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.enteringScreen,
        }),
        boxSizing: "border-box",
      },
    },
    toolbar: {
      display: "flex",
      alignItems: "center",
      justifyContent: "flex-end",
      px: [1],
    },
    miniDrawer: {
      "& .MuiDrawer-paper": {
        overflowX: "hidden",
        transition: theme.transitions.create("width", {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.leavingScreen,
        }),
        width: theme.spacing(6),
        [theme.breakpoints.up("sm")]: {
          width: theme.spacing(9),
        },
      },
    },
  })
);

Menu.displayName = "Menu";
