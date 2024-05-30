import React from 'react';
import styles from './textarea.module.scss';
import ITextArea from '@/model/components/Textarea/Textarea';
import { useFormContext } from 'react-hook-form';

const Textarea: React.FC<ITextArea> = ({
  inputName,
  titleLabel,
  placeholder,
  customErrorMessage,
  ...props
}): JSX.Element => {
  const formContext = useFormContext();
  const { register } = formContext || {};

  const errors = formContext?.formState?.errors || {};
  const errorMessage = errors[inputName!]?.message || customErrorMessage;

  const inputProps = formContext
    ? { ...register(`${inputName}`), ...props }
    : props;

  return (
    <div className={styles.textarea}>
      <h3 className={styles.textarea__title}>{titleLabel}</h3>
      <textarea
        {...inputProps}
        className={`${styles.textarea__input}${
          errorMessage ? ` ${styles.error}` : ''
        }`}
        placeholder={placeholder}
      ></textarea>
      <h3
        className={`${styles.textarea__error}${
          errorMessage ? ` ${styles.textarea__error_visible}` : ''
        }`}
      >
        {errorMessage?.toString()}
      </h3>
    </div>
  );
};

export default Textarea;
