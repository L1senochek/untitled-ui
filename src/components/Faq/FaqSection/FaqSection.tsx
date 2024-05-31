import styles from './faq-section.module.scss';
import PulseIcon from '@/components/AnimationsComponents/PulseIcon/PulseIcon';
import faqContent from './faqContent/faqContent';
import IFaqContent from '@/model/components/Faq/FaqContent';

const FaqSection: React.FC = (): JSX.Element => {
  return (
    <div className={styles.faqsection}>
      {faqContent.map(
        (item: IFaqContent, index: number): JSX.Element => (
          <div
            className={styles.faqsection__item}
            key={`faqContentItem${index}`}
          >
            <PulseIcon icon={item.icon} />
            <div className={styles.faqsection__text}>
              <h2 className={styles.faqsection__heading}>{item.heading}</h2>
              <p className={styles.faqsection_subheading}>{item.subheading}</p>
            </div>
          </div>
        )
      )}
    </div>
  );
};

export default FaqSection;
