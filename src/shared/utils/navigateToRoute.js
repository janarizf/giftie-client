import { ROUTES } from "../../constants/ROUTES";

export const navigateToRoute = {
  toMarketing: (tab) => `${ROUTES.ADMIN.MARKETING}`.replace(":tab", tab),
  toSettings: (tab) => `${ROUTES.ADMIN.SETTINGS}`.replace(":tab", tab),
  notFound: () => ROUTES.NOT_FOUND
};
