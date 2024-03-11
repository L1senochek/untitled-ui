import { Link } from 'react-router-dom';
import styles from './home.module.scss';
import { UI_KIT_PATH } from '@/utils/const/const';
import TopSection from '@/components/Home/TopSection/TopSection';
import SocialProofSection from '@/components/Home/SocialProofSection/SocialProofSection';

const Home: React.FC = (): JSX.Element => {
  return (
    <div className={styles.home}>
      <TopSection />
      <SocialProofSection />
      <Link to={UI_KIT_PATH}>UI KIT PATH</Link>
    </div>
  );
};

export default Home;
