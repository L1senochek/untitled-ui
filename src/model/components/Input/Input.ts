import { InputHTMLAttributes } from 'react';

interface IInput extends InputHTMLAttributes<HTMLInputElement> {
  // registerInput: string;
  // registerValidation?: object;
  classNameWrapper?: string;
  titleLabel?: string;
  classNameLabel?: string;
  error?: object;
}

export default IInput;
