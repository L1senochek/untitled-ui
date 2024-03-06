import React, { useEffect, useRef, useState } from 'react';
import styles from './burger-menu.module.scss';
import Navigation from '@/components/Navigation/Navigation';
import HeaderNavigationBtn from '../HeaderNavigationBtn/HeaderNavigationBtn';
import { useLocation } from 'react-router';

const BurgerMenu: React.FC = (): JSX.Element => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const menuRef = useRef<HTMLDivElement | null>(null);
  const location = useLocation();

  const toggleMenu = (): void => setIsMenuOpen(!isMenuOpen);

  const handleClickOutside = (event: MouseEvent): void => {
    if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
      setIsMenuOpen(false);
    }
  };

  useEffect((): (() => void) => {
    document.addEventListener('mousedown', handleClickOutside);

    return (): void => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  useEffect((): void => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  return (
    <div className={styles.burgermenu} ref={menuRef}>
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
