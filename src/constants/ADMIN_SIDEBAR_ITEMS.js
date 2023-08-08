import {
  BarChartFill,
  ExclamationSquareFill,
  HouseFill,
  Link45deg,
  ListUl,
  PaletteFill,
  PenFill,
  PeopleFill
} from "react-bootstrap-icons";
import { ROUTES } from "./ROUTES";

export const ADMIN_SIDEBAR_ITEMS = [
  {
    name: "Dashboard",
    icon: <HouseFill width='15px' />,
    link: ROUTES.ADMIN.ROOT,
    baseUrl: ROUTES.ADMIN.ROOT,
    disabled: true
  },
  {
    name: "Categories",
    icon: <ListUl width='15px' />,
    link: ROUTES.ADMIN.ROOT,
    baseUrl: ROUTES.ADMIN.ROOT,
    disabled: true
  },
  {
    name: "Manage Blogs",
    icon: <PenFill width='15px' />,
    link: ROUTES.ADMIN.ROOT,
    baseUrl: ROUTES.ADMIN.ROOT,
    disabled: true
  },
  {
    name: "Manage Links",
    icon: <Link45deg width='15px' />,
    link: ROUTES.ADMIN.LINKS,
    baseUrl: ROUTES.ADMIN.LINKS,
    disabled: false
  },
  {
    name: "Manage Themes",
    icon: <PaletteFill width='15px' />,
    link: ROUTES.ADMIN.THEMES,
    baseUrl: ROUTES.ADMIN.THEMES,
    disabled: false
  },
  {
    name: "Manage Users",
    icon: <PeopleFill width='15px' />,
    link: ROUTES.ADMIN.ROOT,
    baseUrl: ROUTES.ADMIN.ROOT,
    disabled: true
  },
  {
    name: "Marketing",
    icon: <ExclamationSquareFill width='15px' />,
    link: ROUTES.ADMIN.ROOT,
    baseUrl: ROUTES.ADMIN.ROOT,
    disabled: true
  },
  {
    name: "Reports",
    icon: <BarChartFill width='15px' />,
    link: ROUTES.ADMIN.ROOT,
    baseUrl: ROUTES.ADMIN.ROOT,
    disabled: true
  }
];
