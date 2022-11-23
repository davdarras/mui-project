import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Toolbar from "@mui/material/Toolbar";
import { NavMenu } from "modules/core/routes";
import { memo } from "react";
import { makeStyles } from "tss-react/mui";
import { ListItemLink } from ".";

export type SidebarNavProps = {
  open: boolean;
  toggleDrawer: () => void;
};

export const SidebarNav = memo((props: SidebarNavProps) => {
  const drawerWidth = 250;
  const { open } = props;

  const { classes, cx } = useStyles({ drawerWidth: drawerWidth });

  return (
    <Drawer
      className={cx(classes.root, { [classes.miniDrawer]: !open })}
      variant="permanent"
      open={open}
    >
      <Toolbar />
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
    miniDrawer: {
      "& .MuiDrawer-paper": {
        overflow: "hidden",
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

SidebarNav.displayName = "SidebarNav";
