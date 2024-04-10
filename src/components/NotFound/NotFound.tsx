import styles from './notfound.module.scss';
import ContentSubheading from '@/components/ContentSubheading/ContentSubheading';
import NavigateButtons from './NavigateButtons/NavigateButtons';
import imgNotFound from '@/assets/img/404/404Image.png';
import IconHardDrawnLine from '@/components/Icons/IconHardDrawnLine/IconHardDrawnLine';

const NotFound: React.FC = (): JSX.Element => {
  return (
    <div className={styles.notfound}>
      <div className={styles.notfound__leftside}>
        <ContentSubheading
          subheading="404 error"
          heading="Page not found"
          text="Sorry, the page you are looking for doesn't exist.
          Here are some helpful links:"
        />
        <NavigateButtons />
      </div>
      <div className={styles.notfound__rightside}>
        <div className={styles.notfound__rightside_wrapper}>
          <img
            className={styles.notfound__rightside_notfound}
            src={imgNotFound}
            alt={'404 not found'}
            loading="lazy"
          />
          <div className={styles.notfound__rightside_line}>
            <IconHardDrawnLine />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
