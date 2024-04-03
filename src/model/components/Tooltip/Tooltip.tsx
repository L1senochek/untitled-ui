import { ReactNode } from 'react';

interface ITooltip {
  content: ReactNode;
  dark?: true;
  triangle?: false;
  iconTooltip?: ReactNode;
}

export default ITooltip;
