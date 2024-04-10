import FormInput from '@/components/FormInput/FormInput';
import IFormData from '@/model/pages/LogIn/formData';
import { FormProvider, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import schema from '@/utils/validation/schema';
import LogInFormFields from './LogInFormFields/LogInFormFields';
import Btn from '@/components/Btn/Btn';

const LogIn: React.FC = (): JSX.Element => {
  const { handleSubmit } = useForm<IFormData>();
  const methods = useForm({
    resolver: yupResolver(schema),
    mode: 'onChange',
  });

  const onSubmit = (data: IFormData): void => {
    console.log(data);
  };

  return (
    <>
      <div>LOG IN</div>
      <FormProvider {...methods}>
        <form onSubmit={handleSubmit(onSubmit)}>
          {LogInFormFields.map((field, index) => (
            <FormInput
              key={`LogInFormFields${field.name}${index}`}
              name={field.name}
              type={field.type}
              titleLabel={field.titleLabel}
            />
          ))}
          <Btn variantBtn="primary" type="submit">
            Sign in
          </Btn>
        </form>
      </FormProvider>
    </>
  );
};

export default LogIn;
