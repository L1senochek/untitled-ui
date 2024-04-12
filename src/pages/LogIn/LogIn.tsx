import React from 'react';
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import LogInFormFields from './LogInFormFields/LogInFormFields';
import Btn from '@/components/Btn/Btn';
import Input from '@/components/Input/Input';
import { schemaLogIn } from '@/utils/validation/schema';
import ILoginFormData from '@/model/pages/LogIn/loginFormData';
import styles from './login.module.scss';
import imgLogIn from '@/assets/img/login/ScreenMockupLogIn.png';
import iconGoogle from '@/assets/svg/social/google.svg';
import { Link } from 'react-router-dom';
import { SIGN_UP_PATH } from '@/utils/const/const';
import Checkbox from '@/components/Checkbox/Checkbox';

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
    <div className={styles.login}>
      <div className={styles.login__leftside}>
        <FormProvider {...methods}>
          <form
            className={styles.login__leftside_form}
            onSubmit={handleSubmit(onSubmit)}
          >
            <div className={styles.login__leftside_text}>
              <h2 className={styles.login__leftside_head}>Log in</h2>
              <p className={styles.login__leftside_supportingtext}>
                Welcome back! Please enter your details.
              </p>
            </div>
            <div className={styles.login__leftside_content}>
              {LogInFormFields.map((field, index) => (
                <Input
                  key={`LogInFormFields${field.name}${index}`}
                  inputName={field.name}
                  titleLabel={field.titleLabel}
                  type={field.type}
                  fieldsForm="login"
                />
              ))}
              <div className={styles.login__leftside_remember}>
                <Checkbox
                  labelTitle="Remember for 30 days"
                  labelProps={{ htmlFor: 'rememberCheckbox' }}
                  inputProps={{ id: 'rememberCheckbox' }}
                  square
                />
                <Link to={'/'}>Forgot password</Link>
              </div>
              <div className={styles.login__leftside_buttons}>
                <Btn type="submit" variantBtn="primary">
                  Sign in
                </Btn>
                <Btn variantBtn="primary" outlined>
                  <img
                    className={styles.login__leftside_icon}
                    src={iconGoogle}
                    alt="google"
                    loading="lazy"
                  />
                  Sign in with Google
                </Btn>
              </div>
            </div>
            <div className={styles.login__leftside_row}>
              <p>Don`t have an account?</p>
              <Link to={SIGN_UP_PATH}>Sign up</Link>
            </div>
          </form>
        </FormProvider>
      </div>
      <div className={styles.login__rightside}>
        <img
          className={styles.login__rightside_img}
          src={imgLogIn}
          alt="login"
          loading="lazy"
        />
      </div>
    </div>
  );
};

export default LogIn;
