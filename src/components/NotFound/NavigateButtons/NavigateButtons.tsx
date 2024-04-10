import { useNavigate } from 'react-router-dom';
import { INITIAL_PATH } from '@/utils/const/const';
import styles from './navigate-buttons.module.scss';
import Btn from '@/components/Btn/Btn';
import IconArrow from '@/components/Icons/IconArrow/IconArrow';

const NavigateButtons: React.FC = (): JSX.Element => {
  const navigate = useNavigate();

  const goBack = (): void => navigate(-1);
  const goHome = (): void => navigate(INITIAL_PATH);

  return (
    <div className={styles.navigatebtns}>
      <Btn variantBtn="primary" outlined onClick={goBack}>
        <IconArrow direction="left" />
        <span>Go back</span>
      </Btn>
      <Btn variantBtn="primary" onClick={goHome}>
        Take me home
      </Btn>
    </div>
  );
};

export default NavigateButtons;
