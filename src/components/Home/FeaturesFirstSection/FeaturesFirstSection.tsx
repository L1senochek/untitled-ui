import styles from './features-first-section.module.scss';
import IconCheckMark from '@/components/Icons/IconCheckMark/IconCheckMark';
import { containers } from './checkItems/checkItems';
import ICheckItems from '@/model/components/Home/FeaturesFirstSection/checkItems';
import { useEffect, useRef, useState } from 'react';

const FeaturesFirstSection: React.FC = (): JSX.Element => {
  const featuresSectionRef = useRef<HTMLDivElement>(null);
  const [scrolling, setScrolling] = useState<boolean>(false);

  useEffect((): (() => void) => {
    const handleScroll = (): void => {
      if (featuresSectionRef.current) {
        const parentTop =
          featuresSectionRef.current.getBoundingClientRect().top;
        setScrolling(parentTop <= 0);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={styles.featuressection} ref={featuresSectionRef}>
      <div className={styles.featuressection__containertitle}>
        <h2 className={styles.featuressection__subheading}>Features</h2>
        <h1 className={styles.featuressection__heading}>
          Analytics that feels like it’s from the future
        </h1>
        <p className={styles.featuressection__text}>
          Powerful, self-serve product and growth analytics to help you convert,
          engage, and retain more users. Trusted by over 4,000 startups.
        </p>
      </div>
      {containers.map((container, index) => (
        <div
          key={index}
          className={`${styles.featuressection__container}${
            index % 2 !== 0 ? ` ${styles.right}` : ''
          }`}
        >
          <div className={styles.featuressection__content}>
            <div className={styles.featuressection__content_wrapper}>
              <div className={styles.featuressection__content_iconwrapper}>
                <div
                  className={styles.featuressection__content_iconwrapper_pulse}
                >
                  {container.content.icon}
                </div>
              </div>
              <div className={styles.featuressection__content_text}>
                <h1 className={styles.featuressection__content_heading}>
                  {container.content.heading}
                </h1>
                <p className={styles.featuressection__content_supportingtext}>
                  {container.content.subheading}
                </p>
              </div>
            </div>
            <div className={styles.featuressection__content_checkitems}>
              {container.content.checkItems.map(
                (item: ICheckItems, index: number) => (
                  <div
                    className={`${styles.featuressection__content_item}${
                      scrolling ? ` ${styles.animate}` : ''
                    }`}
                    key={item.text + index}
                  >
                    <div
                      className={
                        styles.featuressection__content_checkmarkwrapper
                      }
                    >
                      <IconCheckMark />
                    </div>
                    <div className={styles.featuressection__content_checktext}>
                      {item.text}
                    </div>
                  </div>
                )
              )}
            </div>
          </div>
          <div
            className={`${styles.featuressection__contentimg}${
              index % 2 === 0 ? ` ${styles.right}` : ` ${styles.left}`
            }`}
          >
            <img
              className={`${
                index % 2 === 0 ? ` ${styles.right}` : ` ${styles.left}`
              }${scrolling ? ` ${styles.scrolling}` : ''}`}
              src={container.imgMockup}
              alt={container.alt}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default FeaturesFirstSection;
