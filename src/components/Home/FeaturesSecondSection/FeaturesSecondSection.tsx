import Btn from '@/components/Btn/Btn';
import ContentSubheading from '@/components/Home/ContentSubheading/ContentSubheading';
import styles from './features-second-section.module.scss';
import { socialBadges } from './socialBadges/socialBadges';
import ISocialBadges from '@/model/components/Home/socialBadges/socialBadges';
import { Link } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';

const FeaturesSecondSection: React.FC = (): JSX.Element => {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const featuresSectionRef = useRef<HTMLDivElement | null>(null);

  useEffect((): (() => void) => {
    const handleScroll = (): void => {
      if (featuresSectionRef.current) {
        const rect = featuresSectionRef.current.getBoundingClientRect();
        const windowHeight =
          window.innerHeight || document.documentElement.clientHeight;
        setIsVisible(rect.top < windowHeight && rect.bottom >= 0);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return (): void => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={styles.featuressection} ref={featuresSectionRef}>
      <ContentSubheading
        subheading="Integrations"
        heading="Get more value from your tools"
        text="Connect your tools, connect your teams. With over 200 apps already available in our directory, your team’s favourite tools are just a click away."
      />
      <div
        className={`${styles.featuressection__badges}${
          isVisible ? ` ${styles.visible}` : ''
        }`}
      >
        {socialBadges.map(
          (badges: ISocialBadges, index: number): JSX.Element => (
            <Link
              className={styles.featuressection__badges_wrapperitem}
              key={`badges${index}`}
              to={badges.link}
              target="_blank"
            >
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
