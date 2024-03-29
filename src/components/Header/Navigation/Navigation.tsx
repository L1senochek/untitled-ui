import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './navigation.module.scss';
import { HOME_PATH, PRICING_PATH } from '@/utils/const/const';
import DropdownNavItem from '@/components/Header/Navigation/DropdownNavItem/DropdownNavItem';
import { productsArr, resoursesArr } from './navItems/navItems';

const Navigation: React.FC = (): JSX.Element => {
  return (
    <nav className={styles.navigation}>
      <ul className={styles.navigation__items}>
        <li className={styles.navigation__item}>
          <NavLink
            className={({ isActive }): string =>
              `${styles.navigation__link} ${isActive ? styles.active : ''}`
            }
            to={HOME_PATH}
          >
            <h2 className={styles.navigation__label}>Home</h2>
            <span className={styles.navigation__line}></span>
          </NavLink>
        </li>
        <li className={styles.navigation__item}>
          <DropdownNavItem titleNav="Products" items={productsArr} />
        </li>
        <li className={styles.navigation__item}>
          <DropdownNavItem titleNav="Resourses" items={resoursesArr} />
        </li>
        <li className={styles.navigation__item}>
          <NavLink
            className={({ isActive }): string =>
              `${styles.navigation__link} ${isActive ? styles.active : ''}`
            }
            to={PRICING_PATH}
          >
            <h2 className={styles.navigation__label}>Pricing</h2>
            <span className={styles.navigation__line}></span>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
