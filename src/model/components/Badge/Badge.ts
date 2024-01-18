import { ReactNode } from 'react';

interface IBadge {
  title: string;
  childrenRight?: ReactNode;
  childrenLeft?: ReactNode;
  badgeClass?: string;
  badgeTitleClass?: string;
}

export default IBadge;
