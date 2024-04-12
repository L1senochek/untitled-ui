import React from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import styles from './authlayout.module.scss';
import Logo from '@/components/Logo/Logo';
import { INITIAL_PATH, SIGN_UP_PATH } from '@/utils/const/const';
import IconEmail from '@/components/Icons/IconEmail/IconEmail';

const AuthLayout: React.FC = (): JSX.Element => {
  const location = useLocation();
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
          {location.pathname === SIGN_UP_PATH && (
            <div className={styles.footer__leftside_email}>
              <IconEmail />
              <p>help@untitledui.com</p>
            </div>
          )}
        </div>
        <div className={styles.footer__rightside}></div>
      </footer>
    </>
  );
};

export default AuthLayout;
