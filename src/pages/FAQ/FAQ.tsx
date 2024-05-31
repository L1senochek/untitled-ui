import ContentSubheading from '@/components/ContentSubheading/ContentSubheading';
import styles from './faq.module.scss';
import Input from '@/components/Input/Input';
import FaqSection from '@/components/Faq/FaqSection/FaqSection';
import TeamSection from '@/components/Faq/TeamSection/TeamSection';

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
      <FaqSection />
      <TeamSection />
      <div className={styles.faq__section_cta}>news letter cta</div>
    </div>
  );
};

export default Faq;
