import React from 'react';
import Logo from '@/components/Logo/Logo';
import styles from './header.module.scss';

const Header: React.FC = (): JSX.Element => {
  return (
    <header className={styles.header}>
      <Logo />
    </header>
  );
};

export default Header;
