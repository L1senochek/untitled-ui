import { useState } from 'react';
import styles from './input.module.scss';
import IInput from '@/model/components/Input/Input';
import Btn from '@/components/Btn/Btn';
import IconEyeOn from '@/components/Icons/IconEyeOn/IconEyeOn';
import IconEyeOff from '@/components/Icons/IconEyeOff/IconEyeOff';
import IconAlertCircle from '@/components/Icons/IconAlertCircle/IconAlertCircle';
import IconEmail from '@/components/Icons/IconEmail/IconEmail';
import IconSearch from '@/components/Icons/IconSearch/IconSearch';
import { RegisterOptions, useFormContext } from 'react-hook-form';
import { loginFields, registrationFields } from '@/utils/validation/schema';

const Input: React.FC<IInput> = ({
  inputName,
  classNameWrapper,
  titleLabel,
  classNameLabel,
  fieldsForm,
  customErrorMessage,
  type,
  ...props
}): JSX.Element => {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const formContext = useFormContext();
  const { register } = formContext || {};

  const errors = formContext?.formState?.errors || {};
  const errorMessage = errors[inputName!]?.message || customErrorMessage;

  const fields = fieldsForm === 'register' ? registrationFields : loginFields;

  const inputProps = formContext
    ? {
        ...register(
          inputName as keyof typeof fields,
          {
            ...fields[inputName as keyof typeof fields],
          } as unknown as RegisterOptions
        ),
        ...props,
      }
    : props;

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
      {type === 'password' && (
        <div
          className={`${styles.input__wrapper} ${styles.password}${
            errorMessage ? ` ${styles.error}` : ''
          }`}
        >
          <input
            {...inputProps}
            className={`${styles.input__wrapper_input}${
              errorMessage ? ` ${styles.error}` : ''
            }`}
            type={showPassword ? 'text' : 'password'}
            autoComplete="current-password"
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
      {type === 'email' && (
        <div
          className={`${styles.input__wrapper} ${styles.email}${
            errorMessage ? ` ${styles.error}` : ''
          }`}
        >
          <IconEmail />
          <input
            {...inputProps}
            className={`${styles.input__wrapper_input}${
              errorMessage ? ` ${styles.error}` : ''
            }`}
            autoComplete="username"
          />
          {errorMessage && <IconAlertCircle />}
        </div>
      )}
      {type === 'search' && (
        <div className={`${styles.input__wrapper} ${styles.search}`}>
          <IconSearch />
          <input {...inputProps} className={`${styles.input__wrapper_input}`} />
        </div>
      )}
      {type !== 'email' && type !== 'password' && type !== 'search' && (
        <input
          {...inputProps}
          className={`${styles.input__input}${
            errorMessage ? ` ${styles.error}` : ''
          }`}
        />
      )}
      <h3
        className={`${styles.input__error}${
          errorMessage ? ` ${styles.input__error_visible}` : ''
        }`}
      >
        {errorMessage?.toString()}
      </h3>
    </div>
  );
};

export default Input;
