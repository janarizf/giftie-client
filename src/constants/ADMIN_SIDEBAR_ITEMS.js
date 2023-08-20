import {
  BarChartFill,
  ExclamationSquareFill,
  GearFill,
  HouseFill,
  Link45deg,
  ListUl,
  PaletteFill,
  PenFill,
  PeopleFill
} from "react-bootstrap-icons";
import { ROUTES } from "./ROUTES";
import { navigateToRoute } from "../shared/utils/navigateToRoute";
import { ADMIN_USERS } from "./ADMIN_USERS";

export const ADMIN_SIDEBAR_ITEMS = [
  {
    name: "Dashboard",
    icon: <HouseFill width='15px' />,
    link: ROUTES.ADMIN.ROOT,
    baseUrl: ROUTES.ADMIN.ROOT,
    disabled: true,
    access: [ADMIN_USERS.SUPER_ADMIN, ADMIN_USERS.ADMIN]
  },
  {
    name: "Categories",
    icon: <ListUl width='15px' />,
    link: ROUTES.ADMIN.ROOT,
    baseUrl: ROUTES.ADMIN.ROOT,
    disabled: true,
    access: [ADMIN_USERS.SUPER_ADMIN, ADMIN_USERS.ADMIN]
  },
  {
    name: "Manage Blogs",
    icon: <PenFill width='15px' />,
    link: ROUTES.ADMIN.ROOT,
    baseUrl: ROUTES.ADMIN.ROOT,
    disabled: true,
    access: [ADMIN_USERS.SUPER_ADMIN, ADMIN_USERS.ADMIN]
  },
  {
    name: "Manage Links",
    icon: <Link45deg width='15px' />,
    link: ROUTES.ADMIN.LINKS,
    baseUrl: ROUTES.ADMIN.LINKS,
    disabled: false,
    access: [ADMIN_USERS.SUPER_ADMIN, ADMIN_USERS.ADMIN]
  },
  {
    name: "Manage Themes",
    icon: <PaletteFill width='15px' />,
    link: ROUTES.ADMIN.THEMES,
    baseUrl: ROUTES.ADMIN.THEMES,
    disabled: false,
    access: [ADMIN_USERS.SUPER_ADMIN, ADMIN_USERS.ADMIN]
  },
  {
    name: "Manage Users",
    icon: <PeopleFill width='15px' />,
    link: ROUTES.ADMIN.ROOT,
    baseUrl: ROUTES.ADMIN.ROOT,
    disabled: true,
    access: [ADMIN_USERS.SUPER_ADMIN, ADMIN_USERS.ADMIN]
  },
  {
    name: "Marketing",
    icon: <ExclamationSquareFill width='15px' />,
    link: ROUTES.ADMIN.ROOT,
    baseUrl: ROUTES.ADMIN.ROOT,
    disabled: false,
    access: [ADMIN_USERS.SUPER_ADMIN, ADMIN_USERS.ADMIN]
  },
  {
    name: "Reports",
    icon: <BarChartFill width='15px' />,
    link: ROUTES.ADMIN.ROOT,
    baseUrl: ROUTES.ADMIN.ROOT,
    disabled: true,
    access: [ADMIN_USERS.SUPER_ADMIN, ADMIN_USERS.ADMIN]
  },
  {
    name: "Settings",
    icon: <GearFill width='15px' />,
    link: ROUTES.ADMIN.ROOT,
    baseUrl: ROUTES.ADMIN.ROOT,
    disabled: false,
    access: [ADMIN_USERS.SUPER_ADMIN]
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

export const SUPER_ADMIN_SETTINGS = [
  {
    name: "Admin Accounts",
    link: navigateToRoute.toSettings("accounts"),
    baseUrl: ROUTES.ADMIN.MARKETING,
    disabled: true
  }
];
