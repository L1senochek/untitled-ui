import React from 'react';
import styles from './icon-down.module.scss';
import IIconDown from '@/model/components/Icons/IconDown/IIconDown';

const IconDown: React.FC<IIconDown> = ({ direction }): JSX.Element => {
  return (
    <svg
      width="12"
      height="8"
      viewBox="0 0 12 8"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`${styles.down}${direction === 'up' ? ` ${styles.up}` : ''}`}
    >
      <path
        d="M1 1.5L6 6.5L11 1.5"
        stroke="#667085"
        strokeWidth="1.67"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default IconDown;
