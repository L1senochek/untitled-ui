import React from 'react';
import styles from './icon-progress-circles.module.scss';
import IIconProgressCirclesProps from '@/model/components/Icons/IconProgressCircles/IconProgressCircles';

const IconProgressCircles: React.FC<IIconProgressCirclesProps> = ({
  progress,
  radius = 140,
  strokeWidth = 28,
}): JSX.Element => {
  const circumference = 2 * Math.PI * (radius - strokeWidth / 2);
  const strokeDashoffset = circumference - (progress / 100) * circumference;

  return (
    <div className={styles.progress}>
      <svg
        className={styles.progress__circles}
        width={radius * 2}
        height={radius * 2}
        viewBox={`0 0 ${radius * 2} ${radius * 2}`}
      >
        <circle
          className={styles.progress__background}
          cx={radius}
          cy={radius}
          r={radius - strokeWidth / 2}
          strokeWidth={strokeWidth}
        />
        <circle
          className={styles.progress__fill}
          cx={radius}
          cy={radius}
          r={radius - strokeWidth / 2}
          strokeWidth={strokeWidth}
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
        />
      </svg>
      <div className={styles.progress__percent}>{progress}%</div>
    </div>
  );
};

export default IconProgressCircles;
