import React, { memo, useState } from "react";
import { ApplicationBar } from "./ApplicationBar";
import { Menu } from ".";

export const Header = memo(() => {
  const drawerWidth = 240;
  const [open, setOpen] = useState<boolean>(true);
  const toggleDrawer = () => {
    setOpen(!open);
  };

  return (
    <React.Fragment>
      <ApplicationBar
        open={open}
        toggleDrawer={toggleDrawer}
        drawerWidth={drawerWidth}
      />
      <Menu open={open} toggleDrawer={toggleDrawer} drawerWidth={drawerWidth} />
    </React.Fragment>
  );
});

Header.displayName = "Header";
