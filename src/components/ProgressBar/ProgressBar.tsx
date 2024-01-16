import { useState, useEffect } from 'react';
import styles from './progress-bar.module.scss';
import IProgressBar from '@/model/components/ProgressBar/ProgressBar';

const ProgressBar: React.FC<IProgressBar> = ({
  value,
  maxValue,
  label = '',
}) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const calculatedProgress = (value / maxValue) * 100;
    setProgress(calculatedProgress);
  }, [maxValue, value]);

  return (
    <div className={styles.progressbar}>
      <div
        className={styles.progressbar__progress}
        style={{ width: `${progress}%` }}
      ></div>
      {label && <label>{label}</label>}
    </div>
  );
};

export default ProgressBar;
