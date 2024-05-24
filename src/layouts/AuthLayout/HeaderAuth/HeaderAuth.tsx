import React from 'react';
import { Link } from 'react-router-dom';
import styles from './header-auth.module.scss';
import Logo from '@/components/Logo/Logo';
import { INITIAL_PATH } from '@/utils/const/const';
import IconLogo from '@/components/Icons/IconLogo/IconLogo';

const HeaderAuth: React.FC<{ windowWidth: number }> = ({
  windowWidth,
}): JSX.Element => {
  return (
    <header className={styles.header}>
      <div className={styles.header__leftside}>
        <Link to={INITIAL_PATH} className={styles.header__leftside_link}>
          {windowWidth > 600 ? <Logo /> : <IconLogo />}
        </Link>
      </div>
      {windowWidth > 1250 && <div className={styles.header__rightside}></div>}
    </header>
  );
};

export default HeaderAuth;
