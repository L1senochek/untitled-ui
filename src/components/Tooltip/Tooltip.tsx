import { useState } from 'react';
import styles from './tooltip.module.scss';
import IconHelp from '@/components/Icons/IconHelp/IconHelp';
import ITooltip from '@/model/components/Tooltip/Tooltip';

const Tooltip: React.FC<ITooltip> = ({ content, dark = false }) => {
  const [showTooltip, setShowTooltip] = useState(false);

  const handleMouseEnter = () => setShowTooltip(true);
  const handleMouseLeave = () => setShowTooltip(false);

  return (
    <div className={styles.tooltip}>
      {showTooltip && (
        <div
          className={`${styles.tooltip__content}${
            dark ? ` ${styles.dark}` : ''
          }`}
        >
          <div className={styles.tooltip__content_triangle}></div>
          {content}
        </div>
      )}
      <div
        className={styles.tooltip__icon}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <IconHelp />
      </div>
    </div>
  );
};

export default Tooltip;
