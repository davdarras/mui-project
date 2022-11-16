import { ThemeProvider } from "@emotion/react";
import { CssBaseline, Toolbar } from "@mui/material";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import { memo, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { makeStyles } from "tss-react/mui";
import { Header, SidebarNav } from "ui/components/base";
import { Footer } from "../components/base/Footer";
import { ErrorPage } from "../pages/ErrorPage";
import { HomePage } from "../pages/HomePage";
import { OrdersPage } from "../pages/OrdersPage";
import { ReportsPage } from "../pages/ReportsPage";
import { appTheme } from "./theme";

export const Application = memo(() => {
  const { classes } = useStyles();
  const [open, setOpen] = useState<boolean>(true);
  const toggleDrawer = () => {
    setOpen(!open);
  };

  return (
    <ThemeProvider theme={appTheme}>
      <CssBaseline />
      <Box className={classes.root}>
        <Header open={open} toggleDrawer={toggleDrawer} />
        <BrowserRouter>
          <Box className={classes.horizontalContainer}>
            <SidebarNav open={open} toggleDrawer={toggleDrawer} />
            <Container maxWidth="lg" className={classes.container}>
              <Toolbar />
              <Grid component="main" container spacing={3}>
                <Routes>
                  <Route path="/" element={<HomePage />} />
                  <Route path="/orders" element={<OrdersPage />} />
                  <Route path="/reports" element={<ReportsPage />} />
                  <Route path="*" element={<ErrorPage />} />
                </Routes>
              </Grid>
            </Container>
          </Box>
        </BrowserRouter>
        <Footer />
      </Box>
    </ThemeProvider>
  );
});

const useStyles = makeStyles()((theme) => ({
  root: {
    display: "flex",
    height: "100vh",
    flexDirection: "column",
  },
  container: {
    marginTop: theme.spacing(4),
    marginBottom: theme.spacing(4),
    flexGrow: "1",
    padding: "3px",
  },
  horizontalContainer: {
    display: "flex",
    height: "100%",
    backgroundColor: "#E1E8EF",
  },
}));

Application.displayName = "Application";
