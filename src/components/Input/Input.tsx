import { useState } from 'react';
// import { useFormContext } from "react-hook-form";
import styles from './input.module.scss';
import IInput from '@/model/components/Input/Input';
import Btn from '@/components/Btn/Btn';
import IconEyeOn from '@/components/Icons/IconEyeOn/IconEyeOn';
import IconEyeOff from '@/components/Icons/IconEyeOff/IconEyeOff';
import IconAlertCircle from '@/components/Icons/IconAlertCircle/IconAlertCircle';
import IconEmail from '@/components/Icons/IconEmail/IconEmail';

const Input: React.FC<IInput> = ({
  // registerInput,
  // registerValidation,
  classNameWrapper,
  titleLabel,
  classNameLabel,
  ...props
}): JSX.Element => {
  const [showPassword, setShowPassword] = useState(false);
  // const methods = useFormContext();
  // const { register, formState } = methods;
  // const errorMessage = formState.errors[registerInput]?.message || '';
  const errorMessage = 'error';

  return (
    <div
      className={`${styles.input}${
        classNameWrapper ? ` ${classNameWrapper}` : ''
      }`}
    >
      {titleLabel && (
        <h3
          className={`${styles.input__title}${
            classNameLabel ? ` ${classNameLabel}` : ''
          }`}
        >
          {titleLabel}
        </h3>
      )}
      {props.type === 'password' && (
        <div
          className={`${styles.input__wrapper} ${styles.password}${
            errorMessage ? ` ${styles.error}` : ''
          }`}
        >
          <input
            {...props}
            className={`${styles.input__wrapper_input}${
              errorMessage ? ` ${styles.error}` : ''
            }`}
            // {...register(registerInput, registerValidation)}
            type={showPassword ? 'text' : 'password'}
          />
          <Btn
            type="button"
            variantBtn="none"
            className={styles.input__wrapper_btnPass}
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? <IconEyeOn /> : <IconEyeOff />}
          </Btn>
          {errorMessage && <IconAlertCircle />}
        </div>
      )}
      {props.type === 'email' && (
        <div
          className={`${styles.input__wrapper} ${styles.email}${
            errorMessage ? ` ${styles.error}` : ''
          }`}
        >
          <IconEmail />
          <input
            {...props}
            className={`${styles.input__wrapper_input}${
              errorMessage ? ` ${styles.error}` : ''
            }`}
            // {...register(registerInput, registerValidation)}
          />
          {errorMessage && <IconAlertCircle />}
        </div>
      )}
      {props.type !== 'email' && props.type !== 'password' && (
        <input
          {...props}
          className={`${styles.input__input}${
            errorMessage ? ` ${styles.error}` : ''
          }`}
          // {...register(registerInput, registerValidation)}
        />
      )}
      <h3
        className={`${styles.input__error}${
          errorMessage ? ` ${styles.input__error_visible}` : ''
        }`}
      >
        {errorMessage.toString()}
      </h3>
    </div>
  );
};

export default Input;
