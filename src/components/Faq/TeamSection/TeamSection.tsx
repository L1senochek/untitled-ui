import styles from './team-section.module.scss';
import ContentSubheading from '@/components/ContentSubheading/ContentSubheading';
import Btn from '@/components/Btn/Btn';

const TeamSection: React.FC = (): JSX.Element => {
  return (
    <div className={styles.team}>
      <div className={styles.team__header}>
        <ContentSubheading
          subheading="Get to know us"
          heading="We`re just getting started"
          text={[
            'Untitled is growing fast, and we are always looking for passionate, dynamic, and talented individuals to join our distributed team all around the world.',
            'Our philisophy is simple — hire a team of diverse, passionate people and foster a culture that empowers you to do you best work. Read more about ',
          ]}
          leftside
        />
        <div className={styles.team__btns}>
          <Btn variantBtn="secondary" outlined>
            About us
          </Btn>
          <Btn variantBtn="secondary">See open roles</Btn>
        </div>
      </div>
      <div className={styles.team__images}>
        123
        {/* {teamImages.map(() => ())} */}
      </div>
    </div>
  );
};

export default TeamSection;
