import React, { useEffect, useState } from 'react';
import Logo from '@/components/Logo/Logo';
import Navigation from '@/components/Navigation/Navigation';
import styles from './header.module.scss';
import { Link } from 'react-router-dom';
import { INITIAL_PATH } from '@/utils/const/const';
import BurgerMenu from '@/components/BurgerMenu/BurgerMenu';
import HeaderNavigationBtn from '@/components/HeaderNavigationBtn/HeaderNavigationBtn';

const Header: React.FC = (): JSX.Element => {
  const [windowWidth, setWindowWidth] = useState<number>(window.innerWidth);

  const handleResize = (): void => setWindowWidth(window.innerWidth);

  useEffect((): (() => void) => {
    window.addEventListener('resize', handleResize);
    return (): void => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <header className={styles.header}>
      <div className={styles.header__leftside}>
        <Link to={INITIAL_PATH}>
          <Logo />
        </Link>
        {windowWidth > 1000 && <Navigation />}
      </div>
      <div className={styles.header__rightside}>
        {windowWidth > 1000 ? <HeaderNavigationBtn /> : <BurgerMenu />}
      </div>
    </header>
  );
};

export default Header;
