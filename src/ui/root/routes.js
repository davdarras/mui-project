import BarChartIcon from "@mui/icons-material/BarChart";
import ErrorIcon from "@mui/icons-material/Error";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import DashboardIcon from "@mui/icons-material/Dashboard";

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
    label: "URL inexistante",
    pathname: "/url-inexistante",
    icon: ErrorIcon,
  },
];

export { NavMenu };
