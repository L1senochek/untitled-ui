import React, { useRef, useState } from 'react';
import styles from './dropdown-nav-item.module.scss';
import { Link } from 'react-router-dom';
import IDropdownNavItem, {
  IDropdownItems,
} from '@/model/components/DropdownNavItem/DropdownNavItem';
import IconDown from '@/components/Icons/IconDown/IconDown';
import IconArrow from '@/components/Icons/IconArrow/IconArrow';

const DropdownNavItem: React.FC<IDropdownNavItem> = ({
  titleNav,
  items,
}): JSX.Element => {
  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);
  const [isArrowVisible, setIsArrowVisible] = useState<number | null>(null);
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  const handleMouseEnter = (): void => setIsDropdownOpen(true);
  const handleMouseLeave = (): void => setIsDropdownOpen(false);
  const handleLinkClick = (): void => setIsDropdownOpen(false);
  const toggleDropdown = (): void => setIsDropdownOpen(!isDropdownOpen);
  const handleItemMouseEnter = (index: number): void =>
    setIsArrowVisible(index);
  const handleItemMouseLeave = (): void => setIsArrowVisible(null);

  return (
    <div
      ref={dropdownRef}
      className={styles.dropdownnavitem}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div
        className={`${styles.dropdownnavitem__wrapper} ${
          isDropdownOpen ? styles.open : ''
        }`}
        onClick={toggleDropdown}
      >
        <h2 className={styles.dropdownnavitem__title}>{titleNav}</h2>
        <IconDown direction={isDropdownOpen ? 'up' : 'down'} />
      </div>

      <div
        className={`${styles.dropdownnavitem__items} ${
          isDropdownOpen ? styles.open : ''
        }`}
      >
        <div className={styles.dropdownnavitem__items_wrapper}>
          {items.map(
            (item: IDropdownItems, index: number): JSX.Element => (
              <Link
                to={item.path}
                key={index}
                className={styles.dropdownnavitem__item}
                onClick={handleLinkClick}
                onMouseEnter={(): void => handleItemMouseEnter(index)}
                onMouseLeave={handleItemMouseLeave}
              >
                <span className={styles.dropdownnavitem__leftside}>
                  <span className={styles.dropdownnavitem__leftside_icon}>
                    {item.icon ? item.icon : null}
                  </span>
                  <span className={styles.dropdownnavitem__leftside_item}>
                    <h2>{item.item}</h2>
                    <h3>{item.description}</h3>
                  </span>
                </span>
                <span
                  className={`${styles.dropdownnavitem__rightside}${
                    isArrowVisible === index ? ` ${styles.hover}` : ''
                  }`}
                >
                  <IconArrow direction="right" />
                </span>
              </Link>
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default DropdownNavItem;
