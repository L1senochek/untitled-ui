import React from 'react';
import styles from './icon-plus.module.scss';
import IIconPlus from '@/model/components/Icons/IconPlus/IconPlus';

const IconPlus: React.FC<IIconPlus> = ({
  direction,
  className,
}): JSX.Element => {
  return (
    <svg
      className={`${styles.icon}${
        direction === 'plus' ? ` ${styles.plus}` : ''
      }${direction === 'x' ? ` ${styles.x}` : ''}${
        className ? ` ${className}` : ''
      }`}
      viewBox="0 0 12 12"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M9 3L3 9M3 3L9 9"
        stroke="#9E77ED"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default IconPlus;
