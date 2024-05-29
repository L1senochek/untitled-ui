import { useState } from 'react';
import styles from './checkbox.module.scss';
import ICheckbox from '@/model/components/Checkbox/Checkbox';
import IconCheckMark from '@/components/Icons/IconCheckMark/IconCheckMark';
import { useFormContext } from 'react-hook-form';
// import { useFormContext } from 'react-hook-form';

const Checkbox: React.FC<ICheckbox> = ({
  labelTitle,
  labelProps,
  square = false,
  registerInputName,
  inputProps,
}): JSX.Element => {
  const [isChecked, setChecked] = useState<boolean>(
    inputProps?.checked || false
  );

  const formContext = useFormContext();
  const { register } = formContext || {};

  const errors = formContext?.formState?.errors || {};
  const errorMessage = errors[registerInputName!]?.message;

  const handleChecked = (): void => setChecked(!isChecked);

  const checkboxInputProps = formContext
    ? { ...register(`${registerInputName}`), ...inputProps }
    : inputProps;

  return (
    <div className={styles.checkbox}>
      <div className={styles.checkbox__wrapper}>
        <div
          className={`${styles.checkbox__container}${
            inputProps?.disabled ? ` ${styles.disabled}` : ''
          }`}
        >
          <div
            className={`${styles.checkbox__checkmark}${
              square ? ` ${styles.square}` : ''
            } ${isChecked ? styles.checked : ''} ${
              inputProps?.disabled ? styles.disabled : ''
            }`}
          >
            <IconCheckMark />
          </div>
          <input
            {...checkboxInputProps}
            className={`${styles.checkbox__input}${
              inputProps?.disabled ? ` ${styles.disabled}` : ''
            }`}
            type="checkbox"
            checked={isChecked}
            onChange={handleChecked}
          />
        </div>
        <label
          className={styles.checkbox__title}
          {...labelProps}
          dangerouslySetInnerHTML={{ __html: labelTitle ? labelTitle : '' }}
        ></label>
      </div>
      <h3
        className={`${styles.checkbox__error}${
          !isChecked ? ` ${styles.checkbox__error_visible}` : ''
        }`}
      >
        {errorMessage?.toString()}
      </h3>
    </div>
  );
};

export default Checkbox;
