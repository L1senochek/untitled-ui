import Btn from '@/components/Btn/Btn';
import ContentSubheading from '@/components/Home/ContentSubheading/ContentSubheading';
import styles from './features-second-section.module.scss';
import { socialBadges } from './socialBadges/socialBadges';
import ISocialBadges from '@/model/components/Home/socialBadges/socialBadges';
import { Link } from 'react-router-dom';

const FeaturesSecondSection: React.FC = (): JSX.Element => {
  return (
    <div className={styles.featuressection}>
      <ContentSubheading
        subheading="Integrations"
        heading="Get more value from your tools"
        text="Connect your tools, connect your teams. With over 200 apps already available in our directory, your team’s favourite tools are just a click away."
      />
      <div className={`${styles.featuressection__badges}`}>
        {socialBadges.map(
          (badges: ISocialBadges, index: number): JSX.Element => (
            <Link key={index} to={badges.link} target="_blank">
              <img
                key={index}
                className={styles.featuressection__badges_img}
                src={badges.src}
                alt={badges.name}
                title={badges.name}
              />
            </Link>
          )
        )}
      </div>
      <div className={styles.featuressection__btn}>
        <Btn variantBtn="secondary">View all integrations</Btn>
      </div>
    </div>
  );
};

export default FeaturesSecondSection;
