import React from 'react';
import styles from './icon-alert-circle.module.scss';

const IconAlertCircle: React.FC = (): JSX.Element => {
  return (
    <>
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        className={styles['alert-circle']}
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clipPath="url(#clip0_6666_23597)">
          <path
            className={styles['alert-circle__path']}
            d="M7.99992 5.33325V7.99992M7.99992 10.6666H8.00659M14.6666 7.99992C14.6666 11.6818 11.6818 14.6666 7.99992 14.6666C4.31802 14.6666 1.33325 11.6818 1.33325 7.99992C1.33325 4.31802 4.31802 1.33325 7.99992 1.33325C11.6818 1.33325 14.6666 4.31802 14.6666 7.99992Z"
            stroke="#F04438"
            strokeWidth="1.33333"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
        <defs>
          <clipPath id="clip0_6666_23597">
            <rect width="16" height="16" fill="white" />
          </clipPath>
        </defs>
      </svg>
    </>
  );
};

export default IconAlertCircle;
