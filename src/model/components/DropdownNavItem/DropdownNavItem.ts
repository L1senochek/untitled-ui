export interface IDropdownItems {
  item: string;
  path: string;
  icon?: React.ReactNode;
  description?: string;
}

interface IDropdownNavItem {
  titleNav: string;
  items: IDropdownItems[];
}

export default IDropdownNavItem;
