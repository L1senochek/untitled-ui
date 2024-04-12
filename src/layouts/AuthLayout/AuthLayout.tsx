import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import styles from './authlayout.module.scss';
import Logo from '@/components/Logo/Logo';
import { INITIAL_PATH } from '@/utils/const/const';

const AuthLayout: React.FC = (): JSX.Element => {
  return (
    <>
      <header className={styles.header}>
        <div className={styles.header__leftside}>
          <Link to={INITIAL_PATH}>
            <Logo />
          </Link>
        </div>
        <div className={styles.header__rightside}></div>
      </header>
      <main className={styles.main}>
        <Outlet />
      </main>
      <footer className={styles.footer}>
        <div className={styles.footer__leftside}>
          <p>© Untitled UI 2077</p>
        </div>
        <div className={styles.footer__rightside}></div>
      </footer>
    </>
  );
};

export default AuthLayout;
