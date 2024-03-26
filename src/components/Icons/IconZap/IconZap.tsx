import React from 'react';
import styles from './icon-zap.module.scss';

const IconZap: React.FC = (): JSX.Element => {
  return (
    <>
      <svg
        width="20"
        height="22"
        viewBox="0 0 20 22"
        fill="none"
        className={styles.zap}
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M11 1L1 13H10L9 21L19 9H10L11 1Z"
          stroke="#7F56D9"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </>
  );
};

export default IconZap;
