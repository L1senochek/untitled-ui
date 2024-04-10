import { InputHTMLAttributes } from 'react';
import { FieldError, FieldValues, UseFormRegister } from 'react-hook-form';

type Register = UseFormRegister<FieldValues>;

interface IInput extends InputHTMLAttributes<HTMLInputElement> {
  inputName?: string;
  validation?: Record<string, unknown>;
  classNameWrapper?: string;
  titleLabel?: string;
  classNameLabel?: string;
  errorMessage?: string | FieldError;
  error?: object;
  register?: Register;
}

export default IInput;
