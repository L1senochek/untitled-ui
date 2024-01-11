import styles from './uikit.module.scss';

const UIKit: React.FC = (): JSX.Element => {
  const arrElements = [<div>fonts</div>, <div>btn</div> , <div>3</div>, <div>4</div>]

  return (
    <div className={styles.uikit}>
      <h2 className={styles.uikit__title}>UI KIT</h2>
      <div className={styles.uikit__wrapper}>
        {arrElements.map((element) => {
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
