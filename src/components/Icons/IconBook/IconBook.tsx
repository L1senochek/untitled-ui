import React from 'react';
import styles from './icon-book.module.scss';

const IconBook: React.FC = (): JSX.Element => {
  return (
    <svg
      width="25"
      height="24"
      viewBox="0 0 25 24"
      fill="none"
      className={styles.book}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4.5 19.5C4.5 18.837 4.76339 18.2011 5.23223 17.7322C5.70107 17.2634 6.33696 17 7 17H20.5M4.5 19.5C4.5 20.163 4.76339 20.7989 5.23223 21.2678C5.70107 21.7366 6.33696 22 7 22H20.5V2H7C6.33696 2 5.70107 2.26339 5.23223 2.73223C4.76339 3.20107 4.5 3.83696 4.5 4.5V19.5Z"
        stroke="#7F56D9"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default IconBook;
