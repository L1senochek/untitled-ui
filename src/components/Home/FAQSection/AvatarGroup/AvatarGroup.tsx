import Tooltip from '@/components/Tooltip/Tooltip';
import styles from './avatar-group.module.scss';
import { avatars } from './avatars/avatars';

const AvatarGroup: React.FC = (): JSX.Element => {
  return (
    <div className={styles.avatargroup}>
      {avatars.map((avatar, index) => (
        <div className={styles.avatargroup__item} key={`avatarGroup${index}`}>
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
                <img src={avatar.src} alt={avatar.name} />
              </div>
            }
            dark
            triangle={false}
          />
        </div>
      ))}
    </div>
  );
};

export default AvatarGroup;
