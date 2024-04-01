import ContentSubheading from '@/components/Home/ContentSubheading/ContentSubheading';
import styles from './metrics-section.module.scss';
import IconZap from '@/components/Icons/IconZap/IconZap';
import IMetricItems from '@/model/components/Home/metricItems/metricItems';
import { metricItems } from './metricItems/metricItems';

const MetricsSection: React.FC = (): JSX.Element => {
  return (
    <div className={styles.metrics}>
      <ContentSubheading
        subheading={
          <div className={styles.metrics__featuredicon}>
            <IconZap />
          </div>
        }
        heading="Unleash the full power of data"
        text="Everything you need to convert, engage, and retain more users."
      />
      <div className={styles.metrics__container}>
        {metricItems.map(
          (item: IMetricItems, index: number): JSX.Element => (
            <>
              <div className={styles.metrics__item} key={`metric${index}`}>
                <h2 className={styles.metrics__number}>{item.number}</h2>
                <p className={styles.metrics__text}>{item.text}</p>
              </div>
              {index !== metricItems.length - 1 && (
                <hr
                  className={styles.metrics__divider}
                  key={`metricHR${index}`}
                />
              )}
            </>
          )
        )}
      </div>
    </div>
  );
};

export default MetricsSection;
