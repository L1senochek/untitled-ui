import { useNavigate } from 'react-router-dom';
import Btn from '@/components/Btn/Btn';
import IconArrow from '@/components/Icons/IconArrow/IconArrow';

const BackButton: React.FC = (): JSX.Element => {
  const navigate = useNavigate();

  const goBack = (): void => navigate(-1);

  return (
    <Btn variantBtn="primary" outlined onClick={goBack}>
      <IconArrow direction="left" />
      <span>Go back</span>
    </Btn>
  );
};

export default BackButton;
