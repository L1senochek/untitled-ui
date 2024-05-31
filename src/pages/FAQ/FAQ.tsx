import ContentSubheading from '@/components/ContentSubheading/ContentSubheading';
import styles from './faq.module.scss';
import Input from '@/components/Input/Input';
import PulseIcon from '@/components/AnimationsComponents/PulseIcon/PulseIcon';
import faqContent from './faqContent/faqContent';

const Faq: React.FC = (): JSX.Element => {
  return (
    <div className={styles.faq}>
      <div className={styles.faq__header}>
        <ContentSubheading
          subheading="FAQs"
          heading="Ask us anything"
          text="Need something cleared up? Here are our most frequently asked questions."
        />
        <Input type="search" placeholder="Search" />
      </div>
      <div className={styles.faq__section_faq}>
        {faqContent.map(
          (item, index: number): JSX.Element => (
            <div
              className={styles.faq__section_faq_item}
              key={`faqContentItem${index}`}
            >
              <PulseIcon icon={item.icon} />
              <div className={styles.featuressection__content_text}>
                <h2 className={styles.featuressection__content_heading}>
                  {item.heading}
                </h2>
                <p className={styles.featuressection__content_supportingtext}>
                  {item.subheading}
                </p>
              </div>
            </div>
          )
        )}
      </div>
      <div className={styles.faq__section_team}>Team</div>
      <div className={styles.faq__section_cta}>news letter cta</div>
    </div>
  );
};

export default Faq;
