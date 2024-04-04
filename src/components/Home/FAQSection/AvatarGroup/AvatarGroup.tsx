import Tooltip from '@/components/Tooltip/Tooltip';
import styles from './avatar-group.module.scss';
import { avatars } from './avatars/avatars';
import { useState } from 'react';
import IAvatars from '@/model/components/Home/FAQSections/avatars';

const AvatarGroup: React.FC = (): JSX.Element => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div className={styles.avatargroup}>
      {avatars.map(
        (avatar: IAvatars, index: number): JSX.Element => (
          <div
            className={`${styles.avatargroup__item} ${
              hoveredIndex === index && index !== avatars.length - 1
                ? styles.hovered
                : ''
            }`}
            key={`avatarGroup${index}`}
            onMouseEnter={(): void => setHoveredIndex(index)}
            onMouseLeave={(): void => setHoveredIndex(null)}
          >
            <Tooltip
              content={
                <div className={styles.avatargroup__tooltip}>
                  <p className={styles.avatargroup__tooltip_message}>
                    {avatar.name}
                  </p>
                  <p className={styles.avatargroup__tooltip_company}>
                    {avatar.company}
                  </p>
                </div>
              }
              iconTooltip={
                <div className={styles.avatargroup__icon}>
                  <img src={avatar.src} alt={avatar.name} loading="lazy" />
                </div>
              }
              dark
              triangle={false}
            />
          </div>
        )
      )}
    </div>
  );
};

export default AvatarGroup;
