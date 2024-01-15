import React from 'react';
import styles from './btn.module.scss';
import IBtn from '@/model/components/Btn/Btn';

const Btn: React.FC<IBtn> = ({
  variantBtn,
  className,
  outlined,
  ...props
}): JSX.Element => {
  return (
    <button
      className={`${styles.btn}${
        variantBtn === 'primary' ? ` ${styles.primary}` : ''
      }${variantBtn === 'secondary' ? ` ${styles.secondary}` : ''}${
        variantBtn === 'tertiary' ? ` ${styles.tertiary}` : ''
      }${outlined ? ` ${styles.outlined}` : ''}${
        variantBtn === 'none' ? ` ${styles.none}` : ''
      }${className ? ` ${className}` : ''}`}
      {...props}
    >
      {props.children}
    </button>
  );
};

export default Btn;
