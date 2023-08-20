export const ROUTES = {
  ROOT: "/",
  NOT_FOUND: "/not_found",
  ADMIN: {
    ROOT: "/admin",
    LOGIN: "/admin/login",
    DASHBOARD: "/admin/dashboard",
    THEMES: "/admin/themes",
    LINKS: "/admin/links",
    MARKETING: "/admin/marketing/:tab",
    FEATURED_LIST: {
      CREATE: "/admin/marketing/featured-lists/create"
    },
    SETTINGS: {
      MANAGE_ADMINS: "/admin/settings/manage_admin_accounts"
    }
  }
};
