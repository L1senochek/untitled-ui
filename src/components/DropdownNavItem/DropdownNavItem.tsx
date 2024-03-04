import React, { useState } from 'react';
import styles from './dropdown-nav-item.module.scss';
import { Link } from 'react-router-dom';
import IDropdownNavItem from '@/model/components/DropdownNavItem/DropdownNavItem';
import IconDown from '@/components/Icons/IconDown/IconDown';

const DropdownNavItem: React.FC<IDropdownNavItem> = ({
  titleNav,
  items,
}): JSX.Element => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);

  return (
    <div className={styles.dropdownnavitem}>
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
        {items.map((item, index) => (
          <Link
            to={item.path}
            key={index}
            className={styles.dropdownnavitem__item}
          >
            <span className={styles.dropdownnavitem__leftside}>
              {item.icon ? item.icon : null}
            </span>
            <span className={styles.dropdownnavitem__rightside}>
              <h2>{item.item}</h2>
              <h3>{item.description}</h3>
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default DropdownNavItem;
