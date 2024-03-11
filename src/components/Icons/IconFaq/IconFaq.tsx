import React from 'react';
import styles from './icon-faq.module.scss';

const IconFaq: React.FC = (): JSX.Element => {
  return (
    <svg
      width="23"
      height="22"
      viewBox="0 0 23 22"
      fill="none"
      className={styles.faq}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4.43 3.93L8.67 8.17M14.33 13.83L18.57 18.07M18.57 3.93L14.33 8.17L17.86 4.64M4.43 18.07L8.67 13.83M21.5 11C21.5 16.5228 17.0228 21 11.5 21C5.97715 21 1.5 16.5228 1.5 11C1.5 5.47715 5.97715 1 11.5 1C17.0228 1 21.5 5.47715 21.5 11ZM15.5 11C15.5 13.2091 13.7091 15 11.5 15C9.29086 15 7.5 13.2091 7.5 11C7.5 8.79086 9.29086 7 11.5 7C13.7091 7 15.5 8.79086 15.5 11Z"
        stroke="#7F56D9"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default IconFaq;
