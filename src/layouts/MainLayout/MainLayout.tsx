import { Outlet, useLocation } from 'react-router';
import styles from './layout.module.scss';

const MainLayout: React.FC = (): JSX.Element => {
  const location = useLocation();
  console.log(location);
  return (
    <>
      <header>header</header>
      <main className={styles.main}>
        <Outlet />
      </main>
      <footer>footer</footer>
    </>
  );
};

export default MainLayout;
