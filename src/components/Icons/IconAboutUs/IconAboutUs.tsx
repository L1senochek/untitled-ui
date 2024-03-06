import React from 'react';
import styles from './icon-about-us.module.scss';

const IconAboutUs: React.FC = (): JSX.Element => {
  return (
    <svg
      width="19"
      height="22"
      viewBox="0 0 19 22"
      fill="none"
      className={styles.aboutus}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1.33331 14C1.33331 14 2.33331 13 5.33331 13C8.33331 13 10.3333 15 13.3333 15C16.3333 15 17.3333 14 17.3333 14V2C17.3333 2 16.3333 3 13.3333 3C10.3333 3 8.33331 1 5.33331 1C2.33331 1 1.33331 2 1.33331 2V14ZM1.33331 14V21"
        stroke="#7F56D9"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default IconAboutUs;
