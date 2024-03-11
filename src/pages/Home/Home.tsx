import { Link } from 'react-router-dom';
import styles from './home.module.scss';
import { UI_KIT_PATH } from '@/utils/const/const';

const Home: React.FC = (): JSX.Element => {
  return (
    <div className={styles.home}>
      <h1>welcome</h1>
      <Link to={UI_KIT_PATH}>UI KIT PATH</Link>
    </div>
  );
};

export default Home;
