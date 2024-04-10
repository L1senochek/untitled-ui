import FormInput from '@/components/FormInput/FormInput';
import IFormData from '@/model/pages/LogIn/formData';
import { FormProvider, useForm } from 'react-hook-form';

const LogIn: React.FC = (): JSX.Element => {
  const { handleSubmit } = useForm<IFormData>();
  const methods = useForm({
    mode: 'onChange',
  });
  const onSubmit = (data: IFormData) => {
    console.log(data);
  };

  return (
    <>
      <div>LOG IN</div>
      <FormProvider {...methods}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <FormInput
            name="email"
            type="email"
            titleLabel="Email"
            validation={{
              required: 'Email is required',
              pattern: { value: /^\S+@\S+$/i, message: 'Invalid email' },
            }}
          />
          <FormInput
            name="password"
            type="password"
            titleLabel="Password"
            validation={{ required: 'Password is required' }}
          />
          <button type="submit">Submit</button>
        </form>
      </FormProvider>
    </>
  );
};

export default LogIn;
