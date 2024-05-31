import styles from './faq-section.module.scss';
import PulseIcon from '@/components/AnimationsComponents/PulseIcon/PulseIcon';
import faqContent from './faqContent/faqContent';
import IFaqContent from '@/model/components/Faq/FaqContent';
import Btn from '@/components/Btn/Btn';

const FaqSection: React.FC = (): JSX.Element => {
  return (
    <div className={styles.faqsection}>
      <div className={styles.faqsection__featureitems}>
        {faqContent.map(
          (item: IFaqContent, index: number): JSX.Element => (
            <div
              className={styles.faqsection__item}
              key={`faqContentItem${index}`}
            >
              <PulseIcon icon={item.icon} />
              <div className={styles.faqsection__text}>
                <h3 className={styles.faqsection__heading}>{item.heading}</h3>
                <p className={styles.faqsection__subheading}>
                  {item.subheading}
                </p>
              </div>
            </div>
          )
        )}
      </div>
      <div className={styles.faqsection__questions}>
        <div className={styles.faqsection__text}>
          <h3 className={styles.faqsection__heading}>Still have questions?</h3>
          <p className={styles.faqsection__subheading}>
            Can`t find the answer you`re looking for? Please chat to our
            friendly team.
          </p>
        </div>
        <Btn variantBtn="secondary">Get in touch</Btn>
      </div>
    </div>
  );
};

export default FaqSection;
