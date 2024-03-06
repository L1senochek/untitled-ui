import React from 'react';
import styles from './footer.module.scss';
import FooterSocial from '@/components/FooterSocial/FooterSocial';

const Footer: React.FC = (): JSX.Element => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer__container}>1</div>
      <div className={styles.footer__container}>2</div>
      <div className={styles.footer__container}>
        <FooterSocial />
      </div>
    </footer>
  );
};

export default Footer;
