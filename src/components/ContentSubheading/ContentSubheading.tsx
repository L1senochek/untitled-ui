import IContentSubheadingProps from '@/model/components/contentSubheading/contentSubheading';
import styles from './content-subheading.module.scss';

const ContentSubheading: React.FC<IContentSubheadingProps> = ({
  subheading,
  heading,
  text,
}): JSX.Element => {
  return (
    <div className={styles.content}>
      {!subheading ? null : typeof subheading === 'string' ? (
        <h2 className={styles.content__subheading}>{subheading}</h2>
      ) : (
        <div>{subheading}</div>
      )}
      <h1 className={styles.content__heading}>{heading}</h1>
      <p className={styles.content__text}>{text}</p>
    </div>
  );
};

export default ContentSubheading;
