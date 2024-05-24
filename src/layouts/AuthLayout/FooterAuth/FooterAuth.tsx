import React from 'react';
import { useLocation } from 'react-router-dom';
import styles from './footer-auth.module.scss';
import { SIGN_UP_PATH } from '@/utils/const/const';
import IconEmail from '@/components/Icons/IconEmail/IconEmail';

const FooterAuth: React.FC<{ windowWidth: number }> = ({
  windowWidth,
}): JSX.Element => {
  const location = useLocation();
  return (
    <footer className={styles.footer}>
      <div className={styles.footer__leftside}>
        <p className={styles.footer__leftside_text}>© Untitled UI 2077</p>
        {location.pathname === SIGN_UP_PATH && (
          <div className={styles.footer__leftside_email}>
            <IconEmail />
            <p>help@untitledui.com</p>
          </div>
        )}
      </div>
      {windowWidth > 1250 && <div className={styles.footer__rightside}></div>}
    </footer>
  );
};

export default FooterAuth;
