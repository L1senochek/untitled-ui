import styles from './top-section.module.scss';
import Btn from '@/components/Btn/Btn';
import IconVideo from '@/components/Icons/IconVideo/IconVideo';
import { SIGN_UP_PATH, VIDEO_TUTORIALS_PATH } from '@/utils/const/const';
import { useNavigate } from 'react-router';

const TopSection: React.FC = (): JSX.Element => {
  const navigate = useNavigate();

  return (
    <div className={styles.topsection}>
      <div className={styles.topsection__container}>
        <div className={styles.topsection__textwrapper}>
          <h1 className={styles.topsection__heading}>
            Beautiful analytics to grow smarter
          </h1>
          <p className={styles.topsection__supportingtext}>
            Powerful, self-serve product and growth analytics to help you
            convert, engage, and retain more users. Trusted by over 4,000
            startups.
          </p>
        </div>
        <div className={styles.topsection__btns}>
          <Btn
            variantBtn="primary"
            onClick={() => navigate(VIDEO_TUTORIALS_PATH)}
            outlined
          >
            <IconVideo />
            <span>Demo</span>
          </Btn>
          <Btn variantBtn="primary" onClick={() => navigate(SIGN_UP_PATH)}>
            Sign up
          </Btn>
        </div>
      </div>
      <div className={styles.topsection__container}>
        <img
          className={styles.topsection__img}
          alt="Macbook Pro 16"
          src="./src/assets/img/MacbookPro16.png"
        />
      </div>
    </div>
  );
};

export default TopSection;
