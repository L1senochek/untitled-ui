import React from 'react';
import styles from './footer.module.scss';
import FooterSocial from '@/components/FooterSocial/FooterSocial';
import AppStoreActionsLinks from '@/components/AppStoreActionsLinks/AppStoreActionsLinks';

const Footer: React.FC = (): JSX.Element => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer__container}>
        <AppStoreActionsLinks />
      </div>
      <div className={styles.footer__container}>
        <FooterSocial />
      </div>
    </footer>
  );
};

export default Footer;
