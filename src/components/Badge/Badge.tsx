import React from 'react';
import styles from './badge.module.scss';
import IBadge from '@/model/components/Badge/Badge';

const Badge: React.FC<IBadge> = ({
  title,
  childrenRight,
  childrenLeft,
  badgeClass,
  badgeTitleClass,
}): JSX.Element => {
  return (
    <div className={`${styles.badge}${badgeClass ? ` ${badgeClass}` : ''}`}>
      <div className={styles.badge__left}>{childrenLeft}</div>
      <h4
        className={`${styles.badge__title}${
          badgeTitleClass ? ` ${badgeTitleClass}` : ''
        }`}
      >
        {title}
      </h4>
      <div className={styles.badge__right}>{childrenRight}</div>
    </div>
  );
};

export default Badge;
