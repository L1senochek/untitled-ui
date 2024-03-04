import { useLocation } from 'react-router';
import styles from './logo.module.scss';
import IconLogo from '@/components/Icons/IconLogo/IconLogo';

const Logo: React.FC = (): JSX.Element => {
  const location = useLocation();
  console.log(location);
  return (
    <div className={styles.logo}>
      <IconLogo />
      <h1 className={styles.logo__title}>Untitled UI</h1>
    </div>
  );
};

export default Logo;
