import BarChartIcon from "@mui/icons-material/BarChart";
import ErrorIcon from "@mui/icons-material/Error";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import DashboardIcon from "@mui/icons-material/Dashboard";
import DynamicFormIcon from "@mui/icons-material/DynamicForm";
import ViewListIcon from "@mui/icons-material/ViewList";

const NavMenu = [
  {
    label: "Home",
    pathname: "/",
    icon: DashboardIcon,
  },
  {
    label: "Orders",
    pathname: "/orders",
    icon: ShoppingCartIcon,
  },
  {
    label: "Reports",
    pathname: "/reports",
    icon: BarChartIcon,
  },
  {
    label: "Form",
    pathname: "/form",
    icon: DynamicFormIcon,
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
