import styles from './uikit.module.scss';

const UIKit: React.FC = (): JSX.Element => {
  return (
    <div className={styles.uikit}>
      <h1 className={styles.uikit__title}>UI KIT</h1>
      <div className={styles.uikit__wrapper}></div>
    </div>
  );
};

export default UIKit;
