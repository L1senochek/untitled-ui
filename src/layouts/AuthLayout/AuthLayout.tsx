import React, { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import styles from './authlayout.module.scss';
import HeaderAuth from './HeaderAuth/HeaderAuth';
import FooterAuth from './FooterAuth/FooterAuth';

const AuthLayout: React.FC = (): JSX.Element => {
  const [windowWidth, setWindowWidth] = useState<number>(window.innerWidth);

  const handleResize = (): void => setWindowWidth(window.innerWidth);

  useEffect((): (() => void) => {
    window.addEventListener('resize', handleResize);
    return (): void => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
      <HeaderAuth windowWidth={windowWidth} />
      <main className={styles.main}>
        <Outlet />
      </main>
      {windowWidth > 600 && <FooterAuth windowWidth={windowWidth} />}
    </>
  );
};

export default AuthLayout;
