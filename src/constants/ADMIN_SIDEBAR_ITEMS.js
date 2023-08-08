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
import { navigateToRoute } from "../shared/utils/navigateToRoute";

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
    disabled: false
  },
  {
    name: "Reports",
    icon: <BarChartFill width='15px' />,
    link: ROUTES.ADMIN.ROOT,
    baseUrl: ROUTES.ADMIN.ROOT,
    disabled: true
  }
];

export const MARKETING_SUB_MENUS = [
  {
    name: "Advertisements",
    link: navigateToRoute.toMarketing("advertisements"),
    baseUrl: ROUTES.ADMIN.MARKETING,
    disabled: true
  },
  {
    name: "Featured Lists",
    link: navigateToRoute.toMarketing("featured-lists"),
    baseUrl: ROUTES.ADMIN.MARKETING,
    disabled: false
  }
];
