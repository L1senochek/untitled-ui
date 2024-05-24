import { useState } from 'react';
import styles from './checkbox.module.scss';
import ICheckbox from '@/model/components/Checkbox/Checkbox';
import IconCheckMark from '@/components/Icons/IconCheckMark/IconCheckMark';

const Checkbox: React.FC<ICheckbox> = ({
  labelTitle,
  labelProps,
  inputProps,
  square = false,
}): JSX.Element => {
  const [isChecked, setChecked] = useState<boolean>(
    inputProps?.checked || false
  );

  const handleChecked = (): void => setChecked(!isChecked);

  return (
    <div className={styles.checkbox}>
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
          className={`${styles.checkbox__input}${
            inputProps?.disabled ? ` ${styles.disabled}` : ''
          }`}
          type="checkbox"
          checked={isChecked}
          onChange={handleChecked}
          {...inputProps}
        />
      </div>
      <label className={styles.checkbox__title} {...labelProps}>
        {labelTitle}
      </label>
    </div>
  );
};

export default Checkbox;
