import type { menuItems } from "@/types";

export const primaryMenu: menuItems[] = [
  {
    id: 1,
    label: "Corporate",
    path: "/corporate",
    // icon: "corporate",
    submenu: [
      {
        id: 1,
        label: "About",
        path: "/corporate/about",
        // icon: "home",
      },
      {
        id: 2,
        label: "Team",
        path: "/corporate/team",
        // icon: "users",
      },
    ],
  },
  {
    id: 2,
    label: "Projects",
    path: "/projects",
    // icon: "shopping-bag",
    submenu: [
      {
        id: 1,
        label: "All Projects",
        path: "/projects",
        // icon: "home",
      },
      {
        id: 2,
        label: "Gold Mine",
        path: "/projects/gold-mine",
        // icon: "home",
      },
      {
        id: 3,
        label: "Copper Mine",
        path: "/projects/copper-mine",
        // icon: "home",
      },
      {
        id: 4,
        label: "Tin Mine",
        path: "/projects/tin-mine",
        // icon: "home",
      },
    ],
  },
  {
    id: 3,
    label: "Investors",
    path: "/investors",
    // icon: "info",
    submenu: [
      {
        id: 1,
        label: "Shareholder Information",
        path: "/investors/shareholder-information",
        // icon: "home",
      },
      {
        id: 2,
        label: "Financial Statements",
        path: "/investors/financial-statements",
        // icon: "users",
      },
    ],
  },
  {
    id: 4,
    label: "News",
    path: "/news",
    // icon: "info",
  },
  {
    id: 5,
    label: "Contact",
    path: "/contact",
    // icon: "mail",
  },
];

export const secondaryMenu = [
  {
    id: 1,
    label: "Account",
    path: "/account",
    icon: "user",
  },
  {
    id: 2,
    label: "Settings",
    path: "/settings",
    icon: "settings",
  },
  {
    id: 3,
    label: "Help",
    path: "/help",
    icon: "help-circle",
  },
  {
    id: 4,
    label: "Logout",
    path: "/logout",
    icon: "log-out",
  },
];
