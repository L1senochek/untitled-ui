import styles from './uikit.module.scss';
import { uiKitElements } from '@/utils/uiKitElements/uiKitElements';

const UIKit: React.FC = (): JSX.Element => {
  
  return (
    <div className={styles.uikit}>
      <h2 className={styles.uikit__title}>UI KIT</h2>
      <div className={styles.uikit__wrapper}>
        {uiKitElements.map((element) => {
          return(
            <div className={styles.uikit__border}>
              {element}
            </div>
          )
        })}
      </div>
    </div>
  );
};

export default UIKit;
