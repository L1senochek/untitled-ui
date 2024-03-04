import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './navigation.module.scss';
import {
  ABOUT_US_PATH,
  BLOGS_PATH,
  CONTACTS_PATH,
  FAQ_PATH,
  HOME_PATH,
  LEGAL_PATH,
  PRICING_PATH,
  VIDEO_TUTORIALS_PATH,
} from '@/utils/const/const';
import DropdownNavItem from '@/components/DropdownNavItem/DropdownNavItem';

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
          <DropdownNavItem
            titleNav="Products"
            items={[
              { item: 'Tutorials', path: VIDEO_TUTORIALS_PATH },
              { item: 'Contacts', path: CONTACTS_PATH },
              { item: 'FAQs', path: FAQ_PATH },
            ]}
          />
        </li>
        <li className={styles.navigation__item}>
          <DropdownNavItem
            titleNav="Resourses"
            items={[
              { item: 'Blogs', path: BLOGS_PATH },
              { item: 'About us', path: ABOUT_US_PATH },
              { item: 'Legal', path: LEGAL_PATH },
            ]}
          />
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
