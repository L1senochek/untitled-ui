import React from 'react';
import styles from './textarea.module.scss';
import ITextArea from '@/model/components/Textarea/Textarea';

const Textarea: React.FC<ITextArea> = ({
  errorMessage,
  ...props
}): JSX.Element => {
  return (
    <div className={styles.textarea}>
      <textarea
        {...props}
        className={`${styles.textarea__input}${
          errorMessage ? ` ${styles.error}` : ''
        }`}
      ></textarea>
      <h3
        className={`${styles.textarea__error}${
          errorMessage ? ` ${styles.textarea__error_visible}` : ''
        }`}
      >
        {errorMessage}
      </h3>
    </div>
  );
};

export default Textarea;
