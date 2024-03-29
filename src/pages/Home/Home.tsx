import { Link } from 'react-router-dom';
import styles from './home.module.scss';
import { UI_KIT_PATH } from '@/utils/const/const';
import TopSection from '@/components/Home/TopSection/TopSection';
import SocialProofSection from '@/components/Home/SocialProofSection/SocialProofSection';
import FeaturesFirstSection from '@/components/Home/FeaturesFirstSection/FeaturesFirstSection';
import FeaturesSecondSection from '@/components/Home/FeaturesSecondSection/FeaturesSecondSection';

const Home: React.FC = (): JSX.Element => {
  return (
    <div className={styles.home}>
      <TopSection />
      <SocialProofSection />
      <FeaturesFirstSection />
      <FeaturesSecondSection />
    </div>
  );
};

export default Home;
