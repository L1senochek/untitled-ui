import { useState, useEffect } from 'react';
import styles from './progress-bar.module.scss';
import IProgressBar from '@/model/components/ProgressBar/ProgressBar';
import IconProgressCircles from '@/components/Icons/IconProgressCircles/IconProgressCircles';

const ProgressBar: React.FC<IProgressBar> = ({
  value,
  maxValue,
  label = '',
  circles = false,
}) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const calculatedProgress = (value / maxValue) * 100;
    setProgress(calculatedProgress);
  }, [maxValue, value]);

  return (
    <div
      className={`${styles.progressbar}${circles ? ` ${styles.circles}` : ''}`}
    >
      <div className={styles.progressbar__wrapper}>
        {circles ? (
          <IconProgressCircles progress={progress} />
        ) : (
          <div
            className={styles.progressbar__progress}
            style={{ width: `${progress}%` }}
          ></div>
        )}
      </div>
      {label && !circles && (
        <label className={styles.progressbar__label}>
          {label === '%' ? `${progress}%` : label}
        </label>
      )}
    </div>
  );
};

export default ProgressBar;
