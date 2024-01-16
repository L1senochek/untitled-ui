import { useState } from 'react';
import styles from './checkbox.module.scss';
import ICheckbox from '@/model/components/Checkbox/Checkbox';
import IconCheckMark from '@/components/Icons/IconCheckMark/IconCheckMark';

const Checkbox: React.FC<ICheckbox> = ({
  labelTitle,
  labelProps,
  inputProps,
}): JSX.Element => {
  const [isChecked, setChecked] = useState(false);

  const handleChecked = (): void => setChecked(!isChecked);

  return (
    <div className={styles.checkbox}>
      <div className={styles.checkbox__container}>
        <label
          className={`${styles.checkbox__checkmark} ${
            isChecked ? styles.checked : ''
          }`}
          {...labelProps}
        >
          <IconCheckMark />
        </label>
        <input
          className={styles.checkbox__input}
          type="checkbox"
          checked={isChecked}
          onChange={handleChecked}
          {...inputProps}
        />
      </div>
      <p className={styles.checkbox__title}>
        {labelTitle}: {isChecked ? 'true' : 'false'}
      </p>
    </div>
  );
};

export default Checkbox;
