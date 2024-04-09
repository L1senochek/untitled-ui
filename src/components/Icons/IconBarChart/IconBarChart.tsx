import React from 'react';
import styles from './icon-bar-chart.module.scss';

const IconBarChart: React.FC = (): JSX.Element => {
  return (
    <>
      <svg
        width="14"
        height="18"
        viewBox="0 0 14 18"
        fill="none"
        className={styles.barchart}
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M13 17V7M7 17V1M1 17V11"
          stroke="#7F56D9"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </>
  );
};

export default IconBarChart;
