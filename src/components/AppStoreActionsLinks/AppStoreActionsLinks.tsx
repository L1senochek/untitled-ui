import React from 'react';
import styles from './app-store-actions.module.scss';
import Logo from '@/components/Logo/Logo';
import { Link } from 'react-router-dom';
import { FAQ_PATH, LEGAL_PATH, PRICING_PATH } from '@/utils/const/const';
import IconMobileAppStore from '@/components/Icons/IconMobileAppStore/IconMobileAppStore';
import IconMobileGooglePlay from '@/components/Icons/IconMobileGooglePlay/IconMobileGooglePlay';

const AppStoreActionsLinks: React.FC = (): JSX.Element => {
  return (
    <div className={styles.container}>
      <div className={styles.container__rightside}>
        <Logo />
        <h3 className={styles.container__supporttext}>
          Design amazing digital experiences that create more happy in the
          world.
        </h3>
        <div className={styles.container__links}>
          <Link to={PRICING_PATH}>Pricing</Link>
          <Link to={FAQ_PATH}>Help</Link>
          <Link to={LEGAL_PATH}>Privacy</Link>
        </div>
      </div>
      <div className={styles.container__leftside}>
        <h2 className={styles.container__leftside_header}>Get the app</h2>
        <Link to={'https://www.apple.com/app-store/'} target="_blank">
          <IconMobileAppStore />
        </Link>
        <Link to={'https://play.google.com/store/'} target="_blank">
          <IconMobileGooglePlay />
        </Link>
      </div>
    </div>
  );
};

export default AppStoreActionsLinks;
