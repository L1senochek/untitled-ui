import ContentSubheading from '@/components/ContentSubheading/ContentSubheading';
import styles from './metrics-section.module.scss';
import IconZap from '@/components/Icons/IconZap/IconZap';
import IMetricItems from '@/model/components/Home/metricItems/metricItems';
import { metricItems } from './metricItems/metricItems';
import { useEffect, useRef, useState } from 'react';
import PulseIcon from '@/components/AnimationsComponents/PulseIcon/PulseIcon';

const MetricsSection: React.FC = (): JSX.Element => {
  const metricsRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState<boolean>(false);

  useEffect((): (() => void) => {
    const handleScroll = (): void => {
      if (metricsRef.current) {
        const top = metricsRef.current.getBoundingClientRect().top;
        const windowHeight =
          window.innerHeight || document.documentElement.clientHeight;
        setIsVisible(top < windowHeight && top > 0);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return (): void => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={styles.metrics}>
      <ContentSubheading
        subheading={<PulseIcon icon={<IconZap />} />}
        heading="Unleash the full power of data"
        text="Everything you need to convert, engage, and retain more users."
      />
      <div className={styles.metrics__container} ref={metricsRef}>
        {metricItems.map(
          (item: IMetricItems, index: number): JSX.Element => (
            <div
              className={styles.metrics__item_wrapper}
              key={`metricItems${index}`}
            >
              <div
                className={`${styles.metrics__item}${
                  isVisible ? ` ${styles.slidethrough}` : ''
                }`}
                key={`metricItem${index}`}
              >
                <h2 className={styles.metrics__number}>{item.number}</h2>
                <p className={styles.metrics__text}>{item.text}</p>
              </div>
              {index !== metricItems.length - 1 && (
                <hr
                  className={styles.metrics__divider}
                  key={`metricDivider${index}HR`}
                />
              )}
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default MetricsSection;
