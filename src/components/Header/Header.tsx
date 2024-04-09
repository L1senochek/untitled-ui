import React, { useEffect, useState } from 'react';
import Logo from '@/components/Logo/Logo';
import Navigation from '@/components/Header/Navigation/Navigation';
import styles from './header.module.scss';
import { Link } from 'react-router-dom';
import { INITIAL_PATH } from '@/utils/const/const';
import BurgerMenu from '@/components/Header/BurgerMenu/BurgerMenu';
import HeaderNavigationBtn from '@/components/Header/HeaderNavigationBtn/HeaderNavigationBtn';

const Header: React.FC = (): JSX.Element => {
  const [isSticky, setIsSticky] = useState<boolean>(false);
  const [windowWidth, setWindowWidth] = useState<number>(window.innerWidth);

  const handleResize = (): void => setWindowWidth(window.innerWidth);

  useEffect((): (() => void) => {
    window.addEventListener('resize', handleResize);
    return (): void => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect((): (() => void) => {
    const handleScroll = (): void => {
      window.scrollY > 0 ? setIsSticky(true) : setIsSticky(false);
    };
    window.onscroll = handleScroll;

    return (): void => {
      window.onscroll = null;
    };
  }, []);

  return (
    <header
      className={`${styles.header}${isSticky ? ` ${styles.sticky}` : ''}`}
    >
      <div className={styles.header__content}>
        <div className={styles.header__leftside}>
          <Link to={INITIAL_PATH}>
            <Logo />
          </Link>
          {windowWidth > 1000 && <Navigation />}
        </div>
        <div className={styles.header__rightside}>
          {windowWidth > 1000 ? <HeaderNavigationBtn /> : <BurgerMenu />}
        </div>
      </div>
    </header>
  );
};

export default Header;
