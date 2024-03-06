import React from 'react';
import styles from './footer-social.module.scss';
import IconTwitter from '@/components/Icons/IconTwitter/IconTwitter';
import IconLinkedin from '@/components/Icons/IconLinkedin/IconLinkedin';
import IconGithub from '@/components/Icons/IconGithub/IconGithub';
import { Link } from 'react-router-dom';

const FooterSocial: React.FC = (): JSX.Element => {
  return (
    <div className={styles.container}>
      <div className={styles.container__text}>
        © 2077 Untitled UI. All rights reserved.
      </div>
      <div className={styles.container__icons}>
        <Link to={'https://twitter.com/'} target="_blank">
          <IconTwitter />
        </Link>
        <Link to={'https://linkedin.com/'} target="_blank">
          <IconLinkedin />
        </Link>
        <Link to={'https://github.com/L1senochek/'} target="_blank">
          <IconGithub />
        </Link>
      </div>
    </div>
  );
};

export default FooterSocial;
