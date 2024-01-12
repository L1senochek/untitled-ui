import { ButtonHTMLAttributes, ReactNode } from 'react';

interface IBtn extends ButtonHTMLAttributes<HTMLButtonElement> {
  variantBtn: 'primary' | 'secondary' | 'tertiary';
  className?: string;
  outlined?: true;
  children?: ReactNode;
}

export default IBtn;
