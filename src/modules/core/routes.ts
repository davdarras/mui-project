import DashboardIcon from "@mui/icons-material/Dashboard";
import DynamicFormIcon from "@mui/icons-material/DynamicForm";
import ErrorIcon from "@mui/icons-material/Error";
import ViewListIcon from "@mui/icons-material/ViewList";

const NavMenu = [
  {
    label: "menu_home",
    pathname: "/",
    icon: DashboardIcon,
  },
  {
    label: "menu_nomenclatures",
    pathname: "/nomenclatures",
    icon: ViewListIcon,
  },
  {
    label: "menu_campaigns",
    pathname: "/campaigns",
    icon: DynamicFormIcon,
  },
  {
    label: "menu_error",
    pathname: "/url-inexistante",
    icon: ErrorIcon,
  },
];

export { NavMenu };
