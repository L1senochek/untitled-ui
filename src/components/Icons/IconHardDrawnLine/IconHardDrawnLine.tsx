import React from 'react';
import styles from './icon-hard-drawn-line.module.scss';

const IconHardDrawnLine: React.FC = (): JSX.Element => {
  return (
    <svg
      width="840"
      height="331"
      viewBox="0 0 840 331"
      fill="none"
      className={styles.hardline}
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_b_6986_6952)">
        <path
          d="M16 196.476C19.5468 186.102 26.5418 178.346 34.331 169.849C68.2441 132.852 109.092 100.75 155.096 75.6871C251.68 23.0695 367.551 -3.67021 477.228 32.8537C539.924 53.7325 608.711 100.118 618.246 162.679C623.661 198.206 604.298 229.04 576.709 253.888C547.144 280.518 508.9 301.764 467.685 311.06C435.812 318.249 380.348 319.515 376.853 279.974C374.914 258.043 387.466 237.393 402.255 220.694C433.066 185.908 477.785 164.903 525.218 152.618C607.668 131.265 695.702 139.585 767.088 182.741C794.214 199.137 848.993 247.755 868 278.076"
          stroke="white"
          strokeOpacity="0.1"
          strokeWidth="32"
          strokeLinecap="round"
          className={styles.hardline__path}
        />
      </g>
      <defs>
        <filter
          id="filter0_b_6986_6952"
          x="-24.0043"
          y="-24.0072"
          width="932.006"
          height="379.007"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feGaussianBlur in="BackgroundImageFix" stdDeviation="12" />
          <feComposite
            in2="SourceAlpha"
            operator="in"
            result="effect1_backgroundBlur_6986_6952"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_backgroundBlur_6986_6952"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
};

export default IconHardDrawnLine;
