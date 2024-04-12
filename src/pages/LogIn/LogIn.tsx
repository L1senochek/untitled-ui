import React from 'react';
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import LogInFormFields from './LogInFormFields/LogInFormFields';
import Btn from '@/components/Btn/Btn';
import Input from '@/components/Input/Input';
import { schemaLogIn } from '@/utils/validation/schema';
import ILoginFormData from '@/model/pages/LogIn/loginFormData';

const LogIn: React.FC = (): JSX.Element => {
  const methods = useForm<ILoginFormData>({
    resolver: yupResolver(schemaLogIn),
    mode: 'onChange',
  });

  const { handleSubmit } = methods;

  const onSubmit: SubmitHandler<ILoginFormData> = (data): void => {
    if (methods.formState.isValid) {
      try {
        console.log(data);
      } catch (err) {
        console.error(err);
      }
    }
  };

  return (
    <FormProvider {...methods}>
      <div>LOG IN</div>
      <form onSubmit={handleSubmit(onSubmit)}>
        {LogInFormFields.map((field, index) => (
          <Input
            key={`LogInFormFields${field.name}${index}`}
            inputName={field.name}
            titleLabel={field.titleLabel}
            fieldsForm="login"
          />
        ))}
        <Btn type="submit" variantBtn="primary">
          Sign in
        </Btn>
      </form>
    </FormProvider>
  );
};

export default LogIn;
