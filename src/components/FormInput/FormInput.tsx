import React from 'react';
import { FieldError, useFormContext } from 'react-hook-form';
import Input from '@/components/Input/Input';
import IFormInputProps from '@/model/components/FormInput/formInput';

const FormInput: React.FC<IFormInputProps> = ({
  name,
  type,
  validation,
  ...props
}) => {
  const {
    formState: { errors },
  } = useFormContext();
  const errorMessage =
    errors[name] &&
    typeof errors[name] === 'object' &&
    'message' in errors[name]!
      ? (errors[name] as FieldError).message
      : typeof errors[name] === 'string'
        ? (errors[name] as unknown as string)
        : undefined;

  return (
    <Input
      inputName={name}
      errorMessage={errorMessage}
      validation={validation}
      type={type}
      {...props}
    />
  );
};

export default FormInput;
