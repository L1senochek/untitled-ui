import { ReactNode } from 'react';

interface IDropdown {
  options: string[];
  onSelect?: (selectedOption: string | null) => void;
  label?: string;
  icon?: ReactNode;
}

export default IDropdown;
