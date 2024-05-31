import React from 'react';
import styles from './icon-credit-card.module.scss';

const IconCreditCard: React.FC = (): JSX.Element => {
  return (
    <svg
      width="24"
      height="24"
      className={styles.icon}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1 10H23M3 4H21C22.1046 4 23 4.89543 23 6V18C23 19.1046 22.1046 20 21 20H3C1.89543 20 1 19.1046 1 18V6C1 4.89543 1.89543 4 3 4Z"
        stroke="#7F56D9"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default IconCreditCard;
