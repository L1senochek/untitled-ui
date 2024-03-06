import { useState } from 'react';
import IToggle from '@/model/components/Toggle/Toggle';
import Btn from '@/components/Btn/Btn';
import styles from './toggle.module.scss';

const Toggle: React.FC<IToggle> = ({ disabled = false }): JSX.Element => {
  const [isToggled, setToggle] = useState<boolean>(false);

  const handleToggle = (): void => setToggle(!isToggled);

  return (
    <div className={styles.toggle}>
      <Btn
        className={`${styles.toggle__btn} ${
          isToggled ? styles.false : styles.true
        }${disabled ? ` ${styles.disabled}` : ''}`}
        variantBtn="none"
        role="switch"
        onClick={handleToggle}
        disabled={disabled}
      >
        <span
          className={`${styles.toggle__btn_switcher} ${
            isToggled ? styles.false : styles.true
          }`}
        ></span>
      </Btn>
    </div>
  );
};

export default Toggle;
