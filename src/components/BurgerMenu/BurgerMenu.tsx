import React, { useState } from 'react';
import styles from './burger-menu.module.scss';
import Navigation from '@/components/Navigation/Navigation';
import HeaderNavigationBtn from '../HeaderNavigationBtn/HeaderNavigationBtn';

const BurgerMenu: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className={styles.burgermenu}>
      <div className={styles.burgermenu__icon} onClick={toggleMenu}>
        <span
          className={`${styles.burgermenu__bar} ${
            isMenuOpen ? styles.burgermenu__cross : ''
          }`}
        ></span>
        <span
          className={`${styles.burgermenu__bar} ${
            isMenuOpen ? styles.burgermenu__cross : ''
          }`}
        ></span>
        <span
          className={`${styles.burgermenu__bar} ${
            isMenuOpen ? styles.burgermenu__cross : ''
          }`}
        ></span>
      </div>
      {isMenuOpen && (
        <div className={styles.burgermenu__items}>
          <Navigation />
          <HeaderNavigationBtn />
        </div>
      )}
    </div>
  );
};

export default BurgerMenu;
