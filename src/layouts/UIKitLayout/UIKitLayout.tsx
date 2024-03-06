import { Outlet } from 'react-router';
import styles from './uikitlayout.module.scss';
import IconLogo from '@/components/Icons/IconLogo/IconLogo';
import { Link } from 'react-router-dom';
import { INITIAL_PATH } from '@/utils/const/const';

const UIKitLayout: React.FC = (): JSX.Element => {
  return (
    <>
      <header className={styles.header}>
        <Link to={INITIAL_PATH}>
          <IconLogo />
        </Link>
        <h2>UI KIT Layout</h2>
        <div></div>
      </header>
      <main className={styles.main}>
        <Outlet />
      </main>
    </>
  );
};

export default UIKitLayout;
