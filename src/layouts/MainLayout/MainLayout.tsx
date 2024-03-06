import { Outlet, useLocation } from 'react-router';
import styles from './layout.module.scss';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';

const MainLayout: React.FC = (): JSX.Element => {
  const location = useLocation();
  console.log(location);

  return (
    <>
      <Header />
      <main className={styles.main}>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default MainLayout;
