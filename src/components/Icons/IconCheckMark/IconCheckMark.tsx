import React from 'react';
import styles from './icon-check-mark.module.scss';

const IconCheckMark: React.FC = (): JSX.Element => {
  return (
    <>
      <svg
        width="14"
        height="14"
        viewBox="0 0 14 14"
        className={styles['check-mark']}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M11.6666 3.5L5.24998 9.91667L2.33331 7"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </>
  );
};

export default IconCheckMark;
