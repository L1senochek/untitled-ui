import { Link } from 'react-router-dom';
import { INITIAL_PATH } from '@/utils/const/const';
import styles from './notfound.module.scss';

const NotFound: React.FC = (): JSX.Element => {
  return (
    <div className={styles.notfound}>
      <h2 className={styles.notfound__title}>Page not found!</h2>
      <h2 className={styles.notfound__message}>404</h2>
      <Link className={`${styles.notfound__btn} btn`} to={INITIAL_PATH}>
        Home
      </Link>
    </div>
  );
};

export default NotFound;
