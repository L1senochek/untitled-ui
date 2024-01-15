import { Outlet, useLocation } from 'react-router';
import styles from './uikitlayout.module.scss';

const UIKitLayout: React.FC = (): JSX.Element => {
  const location = useLocation();
  console.log(location);
  return (
    <>
      <header>
        <h2>UI KIT Layout</h2>
      </header>
      <main className={styles.main}>
        <Outlet />
      </main>
    </>
  );
};

export default UIKitLayout;
