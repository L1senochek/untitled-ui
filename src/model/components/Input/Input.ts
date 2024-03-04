import { InputHTMLAttributes } from 'react';

interface IInput extends InputHTMLAttributes<HTMLInputElement> {
  // registerInput: string;
  // registerValidation?: object;
  classNameWrapper?: string;
  titleLabel?: string;
  classNameLabel?: string;
  errorMessage?: string;
  error?: object;
}

export default IInput;
