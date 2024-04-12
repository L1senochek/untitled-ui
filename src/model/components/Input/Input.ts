import { loginFields, registrationFields } from '@/utils/validation/schema';
import { InputHTMLAttributes } from 'react';
import { FieldValues, UseFormRegister } from 'react-hook-form';

type Register = UseFormRegister<FieldValues>;
export type FormTypes = 'register' | 'login';

type RegistrationFields = typeof registrationFields;
export type RegistrationFieldKeys = keyof RegistrationFields;

type LoginFields = typeof loginFields;
export type LoginFieldKeys = keyof LoginFields;

interface IInput extends InputHTMLAttributes<HTMLInputElement> {
  inputName?: string;
  validation?: Record<string, unknown>;
  classNameWrapper?: string;
  titleLabel?: string;
  classNameLabel?: string;
  error?: object;
  register?: Register;
  fieldsForm?: FormTypes;
  customErrorMessage?: string;
}

export default IInput;
