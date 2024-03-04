import React from 'react';
import styles from './icon-arrow.module.scss';
import IIconArrow from '@/model/components/Icons/IconArrow/IconArrow';

const IconArrow: React.FC<IIconArrow> = ({
  direction,
  className,
}): JSX.Element => {
  return (
    <svg
      className={`${styles.arrow}${direction === 'up' ? ` ${styles.up}` : ''}${
        direction === 'right' ? ` ${styles.right}` : ''
      }${direction === 'down' ? ` ${styles.down}` : ''}${
        direction === 'left' ? ` ${styles.left}` : ''
      }${className ? ` ${className}` : ''}`}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12 19V5M12 5L5 12M12 5L19 12"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default IconArrow;
