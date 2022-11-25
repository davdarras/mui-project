import { ThemeProvider } from "@emotion/react";
import { CssBaseline } from "@mui/material";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { CampaignList } from "modules/campaign/presentation/pages/CampaignList";
import { HomePage } from "modules/dashboard/presentation/pages/HomePage";
import { NomenclatureEdit } from "modules/nomenclature/presentation/components/NomenclatureEdit";
import { NomenclaturePage } from "modules/nomenclature/presentation/pages/NomenclaturePage";
import { SnackbarProvider } from "notistack";
import { memo, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { makeStyles } from "tss-react/mui";
import { Footer, Header, SidebarNav } from "./components";
import { ErrorPage } from "./pages/ErrorPage";
import { appTheme } from "./theme";

export const Application = memo(() => {
  const { classes } = useStyles();
  const [open, setOpen] = useState<boolean>(true);
  const toggleDrawer = () => {
    setOpen(!open);
  };

  return (
    <ThemeProvider theme={appTheme}>
      <SnackbarProvider maxSnack={3}>
        <CssBaseline />
        <Header open={open} toggleDrawer={toggleDrawer} />
        <BrowserRouter>
          <Box className={classes.horizontalContainer}>
            <SidebarNav open={open} toggleDrawer={toggleDrawer} />
            <Container maxWidth="lg" className={classes.container}>
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/nomenclatures" element={<NomenclaturePage />} />
                <Route
                  path="/nomenclatures/:id"
                  element={<NomenclatureEdit />}
                />
                <Route
                  path="/nomenclatures/add"
                  element={<NomenclatureEdit />}
                />
                <Route path="/campaigns" element={<CampaignList />} />
                <Route path="*" element={<ErrorPage />} />
              </Routes>
            </Container>
          </Box>
        </BrowserRouter>
        <Footer />
      </SnackbarProvider>
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
