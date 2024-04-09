import { Link } from 'react-router-dom';
import { INITIAL_PATH } from '@/utils/const/const';
import styles from './notfound.module.scss';
import ContentSubheading from '@/components/ContentSubheading/ContentSubheading';
import NavigateButtons from './NavigateButtons/NavigateButtons';

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
        <h2 className={styles.notfound__title}>Page not found!</h2>
        <h2 className={styles.notfound__message}>404</h2>
        <Link className={`${styles.notfound__btn} btn`} to={INITIAL_PATH}>
          Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
