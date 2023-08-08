import { ROUTES } from "shared/constants/ROUTES";

export const navigateToRoute = {
  toMarketing: (tab) => `${ROUTES.ADMIN.MARKETING}`.replace(":tab", tab),
  notFound: () => ROUTES.NOT_FOUND
};
