import React from 'react';
import Logo from '@/components/Logo/Logo';
import Navigation from '@/components/Navigation/Navigation';
import styles from './header.module.scss';
import { Link } from 'react-router-dom';
import { INITIAL_PATH } from '@/utils/const/const';

const Header: React.FC = (): JSX.Element => {
  return (
    <header className={styles.header}>
      <div className={styles.header__leftside}>
        <Link to={INITIAL_PATH}>
          <Logo />
        </Link>
        <Navigation />
      </div>
      <div className={styles.header__rightside}></div>
    </header>
  );
};

export default Header;
