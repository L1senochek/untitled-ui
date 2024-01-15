import { ButtonHTMLAttributes, ReactNode } from 'react';

interface IBtn extends ButtonHTMLAttributes<HTMLButtonElement> {
  variantBtn: 'primary' | 'secondary' | 'tertiary' | 'none';
  className?: string;
  outlined?: true;
  children?: ReactNode;
}

export default IBtn;
