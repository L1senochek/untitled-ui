import { isValidElement, useState } from 'react';
import styles from './tooltip.module.scss';
import IconHelp from '@/components/Icons/IconHelp/IconHelp';
import ITooltip from '@/model/components/Tooltip/Tooltip';

const Tooltip: React.FC<ITooltip> = ({
  content,
  dark = false,
  triangle = true,
  iconTooltip,
}): JSX.Element => {
  const [showTooltip, setShowTooltip] = useState<boolean>(false);

  const handleMouseEnter = (): void => setShowTooltip(true);
  const handleMouseLeave = (): void => setShowTooltip(false);

  return (
    <div className={styles.tooltip}>
      {showTooltip && (
        <div
          className={`${styles.tooltip__content}${
            dark ? ` ${styles.dark}` : ''
          }`}
        >
          {triangle ? (
            <div className={styles.tooltip__content_triangle}></div>
          ) : null}
          {content}
        </div>
      )}
      <div
        className={styles.tooltip__icon}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {isValidElement(iconTooltip) ? iconTooltip : <IconHelp />}
      </div>
    </div>
  );
};

export default Tooltip;
