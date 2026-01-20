export type menuItems = {
  id: number;
  label: string;
  path: string;
  icon?: string;
  submenu?: menuItems[];
};
