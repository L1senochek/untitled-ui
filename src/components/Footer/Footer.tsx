import React, { useEffect, useRef, useState } from 'react';
import styles from './footer.module.scss';
import FooterSocial from '@/components/Footer/FooterSocial/FooterSocial';
import AppStoreActionsLinks from '@/components/Footer/AppStoreActionsLinks/AppStoreActionsLinks';

const Footer: React.FC = (): JSX.Element => {
  const [screenWidth, setScreenWidth] = useState<number>(window.innerWidth);
  const [footerWidth, setFooterWidth] = useState<number>(0);
  const footerRef = useRef<HTMLDivElement>(null);

  useEffect((): (() => void) => {
    const handleResize = (): void => {
      setScreenWidth(window.innerWidth);
      if (footerRef.current) {
        const width = footerRef.current.offsetWidth;
        setFooterWidth(width);
      }
    };
    handleResize();

    window.addEventListener('resize', handleResize);

    return (): void => {
      window.removeEventListener('resize', handleResize);
    };
  }, [footerWidth, screenWidth]);

  return (
    <footer className={styles.footer} ref={footerRef}>
      <div className={`${styles.footer__container} ${styles.actions}`}>
        <AppStoreActionsLinks />
      </div>
      <div className={styles.footer__container}>
        <FooterSocial />
      </div>
      <div
        className={styles.footer__background}
        style={{
          maxWidth: `${screenWidth}px`,
          left: `-${(screenWidth - footerWidth) / 2}px`,
        }}
      ></div>
    </footer>
  );
};

export default Footer;
