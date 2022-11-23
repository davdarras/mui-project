import { ThemeProvider } from "@emotion/react";
import { CssBaseline } from "@mui/material";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { memo, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { makeStyles } from "tss-react/mui";
import { ErrorPage } from "modules/core/pages/ErrorPage";
import { FormPage } from "modules/core/pages/FormPage";
import { HomePage } from "modules/core/pages/HomePage";
import { NomenclaturePage } from "modules/nomenclature/presentation/pages/NomenclaturePage";
import { OrdersPage } from "modules/core/pages/OrdersPage";
import { ReportsPage } from "modules/core/pages/ReportsPage";
import { Footer, Header, SidebarNav } from "./components";
import { appTheme } from "./theme";
import { NomenclatureAdd } from "modules/nomenclature/presentation/components/NomenclatureAdd";
import { CampaignList } from "modules/campaign/presentation/pages/CampaignList";

export const Application = memo(() => {
  const { classes } = useStyles();
  const [open, setOpen] = useState<boolean>(true);
  const toggleDrawer = () => {
    setOpen(!open);
  };

  return (
    <ThemeProvider theme={appTheme}>
      <CssBaseline />
      <Header open={open} toggleDrawer={toggleDrawer} />
      <BrowserRouter>
        <Box className={classes.horizontalContainer}>
          <SidebarNav open={open} toggleDrawer={toggleDrawer} />
          <Container maxWidth="lg" className={classes.container}>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/form" element={<FormPage />} />
              <Route path="/orders" element={<OrdersPage />} />
              <Route path="/reports" element={<ReportsPage />} />
              <Route path="/nomenclatures" element={<NomenclaturePage />} />
              <Route path="/nomenclatures/:id" element={<NomenclatureAdd />} />
              <Route path="/campaigns" element={<CampaignList />} />
              <Route path="*" element={<ErrorPage />} />
            </Routes>
          </Container>
        </Box>
      </BrowserRouter>
      <Footer />
    </ThemeProvider>
  );
});

const useStyles = makeStyles()((theme) => ({
  container: {
    marginTop: theme.spacing(11),
    marginBottom: theme.spacing(5),
    flexGrow: "1",
  },
  horizontalContainer: {
    display: "flex",
    minHeight: "100vh",
    backgroundColor: "#E1E8EF",
  },
}));

Application.displayName = "Application";
