import { useEffect, useState } from 'react';
import styles from './signup.module.scss';
import imgSignUp from '@/assets/img/signin/iPhone12MockupSignIn.png';
import signUpFormFields from './SignUpFormField/SignUpFormField';
import Input from '@/components/Input/Input';
import { Link } from 'react-router-dom';
import { LOG_IN_PATH } from '@/utils/const/const';
import Btn from '@/components/Btn/Btn';
import iconGoogle from '@/assets/svg/social/google.svg';
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form';
import ISignUpFormData from '@/model/pages/SignUp/loginFormData';
import { schemaSignUp } from '@/utils/validation/schema';
import { yupResolver } from '@hookform/resolvers/yup';

const SignUp: React.FC = (): JSX.Element => {
  const [windowWidth, setWindowWidth] = useState<number>(window.innerWidth);
  const methods = useForm<ISignUpFormData>({
    resolver: yupResolver(schemaSignUp),
    mode: 'onChange',
  });

  const { handleSubmit } = methods;

  const onSubmit: SubmitHandler<ISignUpFormData> = (data): void => {
    if (methods.formState.isValid) {
      try {
        console.log(data);
      } catch (err) {
        console.error(err);
      }
    }
  };

  const handleResize = (): void => setWindowWidth(window.innerWidth);

  useEffect((): (() => void) => {
    window.addEventListener('resize', handleResize);
    return (): void => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className={styles.signup}>
      <div className={styles.signup__leftside}>
        <FormProvider {...methods}>
          <form
            className={styles.signup__leftside_form}
            onSubmit={handleSubmit(onSubmit)}
          >
            <div className={styles.signup__leftside_text}>
              <h2 className={styles.signup__leftside_head}>Sign Up</h2>
              <p className={styles.signup__leftside_supportingtext}>
                Start your 30-day free trial.
              </p>
            </div>
            <div className={styles.signup__leftside_content}>
              {signUpFormFields.map((field, index) => (
                <Input
                  key={`SignUpFormFields${field.name}${index}`}
                  inputName={field.name}
                  titleLabel={field.titleLabel}
                  type={field.type}
                  placeholder={field.placeholder}
                  fieldsForm="register"
                />
              ))}
            </div>
            <div className={styles.signup__leftside_buttons}>
              <Btn type="submit" variantBtn="primary">
                Create account
              </Btn>
              <Btn variantBtn="primary" outlined>
                <img
                  className={styles.signup__leftside_icon}
                  src={iconGoogle}
                  alt="google"
                  loading="lazy"
                />
                Sign up with Google
              </Btn>
            </div>
            <div className={styles.signup__leftside_row}>
              <p>Already have an account?</p>
              <Link to={LOG_IN_PATH}>Log in</Link>
            </div>
          </form>
        </FormProvider>
      </div>
      {windowWidth > 1250 && (
        <div className={styles.signup__rightside}>
          <img
            className={styles.signup__rightside_img}
            src={imgSignUp}
            alt="signup"
            loading="lazy"
          />
        </div>
      )}
    </div>
  );
};

export default SignUp;
