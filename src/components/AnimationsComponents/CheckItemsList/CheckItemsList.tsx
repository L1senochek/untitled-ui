import IconCheckMark from '@/components/Icons/IconCheckMark/IconCheckMark';
import styles from './check-items-list.module.scss';
import ICheckItems from '@/model/components/Home/FeaturesFirstSection/checkItems';
import ICheckItemsListProps from '@/model/components/AnimationsComponents/checkItemsList';

const AnimationCheckItemsList: React.FC<ICheckItemsListProps> = ({
  checkItems,
  scrolling,
}: ICheckItemsListProps): JSX.Element => {
  return (
    <div className={styles.itemlist__checkitems}>
      {checkItems.map(
        (item: ICheckItems, index: number): JSX.Element => (
          <div
            className={`${styles.itemlist__item}${
              scrolling ? ` ${styles.animate}` : ''
            }`}
            key={item.text + index}
          >
            <div className={styles.itemlist__checkmarkwrapper}>
              <IconCheckMark />
            </div>
            <div className={styles.itemlist__checktext}>{item.text}</div>
          </div>
        )
      )}
    </div>
  );
};

export default AnimationCheckItemsList;
