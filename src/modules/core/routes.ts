import DashboardIcon from "@mui/icons-material/Dashboard";
import DynamicFormIcon from "@mui/icons-material/DynamicForm";
import ErrorIcon from "@mui/icons-material/Error";
import ViewListIcon from "@mui/icons-material/ViewList";

const NavMenu = [
  {
    label: "Home",
    pathname: "/",
    icon: DashboardIcon,
  },
  {
    label: "Nomenclatures de test",
    pathname: "/nomenclatures",
    icon: ViewListIcon,
  },
  {
    label: "Campagnes",
    pathname: "/campaigns",
    icon: DynamicFormIcon,
  },
  {
    label: "URL inexistante",
    pathname: "/url-inexistante",
    icon: ErrorIcon,
  },
];

export { NavMenu };
