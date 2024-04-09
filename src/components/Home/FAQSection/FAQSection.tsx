import Btn from '@/components/Btn/Btn';
import styles from './faq-section.module.scss';
import AvatarGroup from './AvatarGroup/AvatarGroup';
import QuestionsAnswers from './QuestionsAnswers/QuestionsAnswers';

const FAQSection: React.FC = (): JSX.Element => {
  return (
    <div className={styles.faq}>
      <div className={styles.faq__head}>
        <h2 className={styles.faq__heading}>Frequently asked questions</h2>
        <p className={styles.faq__supporttext}>
          Everything you need to know about the product and billing.
        </p>
      </div>
      <QuestionsAnswers />
      <div className={styles.faq__supporting}>
        <AvatarGroup />
        <div className={styles.faq__supporting_wrappertext}>
          <h4 className={styles.faq__supporting_heading}>
            Still have questions?
          </h4>
          <p className={styles.faq__supporting_text}>
            Can`t find the answer you`re looking for? Please chat to our
            friendly team.
          </p>
        </div>
        <div className={styles.faq__supporting_buttons}>
          <Btn variantBtn="tertiary">Get in touch</Btn>
        </div>
      </div>
    </div>
  );
};

export default FAQSection;
