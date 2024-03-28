import React, { useRef, useState } from 'react';
import styles from './dropdown-nav-item.module.scss';
import { Link } from 'react-router-dom';
import IDropdownNavItem, {
  IDropdownItems,
} from '@/model/components/DropdownNavItem/DropdownNavItem';
import IconDown from '@/components/Icons/IconDown/IconDown';

const DropdownNavItem: React.FC<IDropdownNavItem> = ({
  titleNav,
  items,
}): JSX.Element => {
  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  const handleMouseEnter = (): void => setIsDropdownOpen(true);
  const handleMouseLeave = (): void => setIsDropdownOpen(false);
  const handleLinkClick = (): void => setIsDropdownOpen(false);
  const toggleDropdown = (): void => setIsDropdownOpen(!isDropdownOpen);

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
        {items.map(
          (item: IDropdownItems, index: number): JSX.Element => (
            <Link
              to={item.path}
              key={index}
              className={styles.dropdownnavitem__item}
              onClick={handleLinkClick}
            >
              <span className={styles.dropdownnavitem__leftside}>
                {item.icon ? item.icon : null}
              </span>
              <span className={styles.dropdownnavitem__rightside}>
                <h2>{item.item}</h2>
                <h3>{item.description}</h3>
              </span>
            </Link>
          )
        )}
      </div>
    </div>
  );
};

export default DropdownNavItem;
