import { Toolbar } from "@mui/material";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import { memo } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Footer } from "../components/base/Footer";
import { Header } from "../components/base/Header";
import { ErrorPage } from "../pages/ErrorPage";
import { HomePage } from "../pages/HomePage";
import { OrdersPage } from "../pages/OrdersPage";
import { ReportsPage } from "../pages/ReportsPage";
import { makeStyles } from "tss-react/mui";

export const Application = memo(() => {
  const { classes } = useStyles();

  return (
    <Box className={classes.root}>
      <BrowserRouter>
        <Header />
        <Container maxWidth="lg" className={classes.container}>
          <Toolbar />
          <Grid container spacing={3}>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/orders" element={<OrdersPage />} />
              <Route path="/reports" element={<ReportsPage />} />
              <Route path="*" element={<ErrorPage />} />
            </Routes>
          </Grid>
          <Footer className={classes.footer} />
        </Container>
      </BrowserRouter>
    </Box>
  );
});

const useStyles = makeStyles()((theme) => ({
  root: {
    display: "flex",
  },
  container: {
    marginTop: theme.spacing(4),
    marginBottom: theme.spacing(4),
  },
  footer: {
    paddingTop: theme.spacing(4),
  },
}));

Application.displayName = "Application";
