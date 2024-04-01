import styles from './home.module.scss';
import TopSection from '@/components/Home/TopSection/TopSection';
import SocialProofSection from '@/components/Home/SocialProofSection/SocialProofSection';
import FeaturesFirstSection from '@/components/Home/FeaturesFirstSection/FeaturesFirstSection';
import FeaturesSecondSection from '@/components/Home/FeaturesSecondSection/FeaturesSecondSection';
import MetricsSection from '@/components/Home/MetricsSection/MetricsSection';
import CTAFirstSection from '@/components/Home/CTAFirstSection/CTAFirstSection';

const Home: React.FC = (): JSX.Element => {
  return (
    <div className={styles.home}>
      <TopSection />
      <SocialProofSection />
      <FeaturesFirstSection />
      <FeaturesSecondSection />
      <MetricsSection />
      <CTAFirstSection />
    </div>
  );
};

export default Home;
