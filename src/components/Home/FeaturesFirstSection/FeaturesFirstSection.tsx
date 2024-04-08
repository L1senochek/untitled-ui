import { useEffect, useRef, useState } from 'react';
import styles from './features-first-section.module.scss';
import { containers } from './checkItems/checkItems';
import ContentSubheading from '@/components/ContentSubheading/ContentSubheading';
import AnimationCheckItemsList from '@/components/AnimationsComponents/CheckItemsList/CheckItemsList';
import AnimationImage from '@/components/AnimationsComponents/Image/Image';
import PulseIcon from '@/components/AnimationsComponents/PulseIcon/PulseIcon';
import IContainers from '@/model/components/Home/FeaturesFirstSection/containers';

const FeaturesFirstSection: React.FC = (): JSX.Element => {
  const featuresSectionRef = useRef<HTMLDivElement>(null);
  const [scrolling, setScrolling] = useState<boolean>(false);
  const [screenWidth, setScreenWidth] = useState<number>(window.innerWidth);
  const [containerWidth, setContainerWidth] = useState<number>(0);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect((): (() => void) => {
    const handleResize = (): void => {
      setScreenWidth(window.innerWidth);
      if (containerRef.current) {
        const width = containerRef.current.offsetWidth;
        setContainerWidth(width);
      }
    };
    handleResize();

    window.addEventListener('resize', handleResize);

    return (): void => {
      window.removeEventListener('resize', handleResize);
    };
  }, [containerWidth, screenWidth]);

  useEffect((): (() => void) => {
    const handleScroll = (): void => {
      if (featuresSectionRef.current) {
        const parentTop =
          featuresSectionRef.current.getBoundingClientRect().top;
        setScrolling(parentTop <= 0);
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
        subheading="Features"
        heading="Analytics that feels like it’s from the future"
        text="Powerful, self-serve product and growth analytics to help you convert, engage, and retain more users. Trusted by over 4,000 startups."
      />
      {containers.map(
        (container: IContainers, index: number): JSX.Element => (
          <div
            key={`container${index}`}
            className={`${styles.featuressection__container}${
              index % 2 !== 0 ? ` ${styles.left}` : ''
            }`}
            ref={containerRef}
            style={
              index % 2 !== 0
                ? { left: `-${(screenWidth - containerWidth) / 2}px` }
                : {}
            }
          >
            <div
              className={`${styles.featuressection__content}${
                index % 2 !== 0 ? ` ${styles.left}` : ''
              }`}
            >
              <div className={styles.featuressection__content_wrapper}>
                <PulseIcon icon={container.content.icon} />
                <div className={styles.featuressection__content_text}>
                  <h2 className={styles.featuressection__content_heading}>
                    {container.content.heading}
                  </h2>
                  <p className={styles.featuressection__content_supportingtext}>
                    {container.content.subheading}
                  </p>
                </div>
              </div>
              <AnimationCheckItemsList
                checkItems={container.content.checkItems}
                scrolling={scrolling}
              />
            </div>
            <AnimationImage
              src={container.imgMockup}
              alt={container.alt}
              index={index}
              scrolling={scrolling}
            />
          </div>
        )
      )}
    </div>
  );
};

export default FeaturesFirstSection;
