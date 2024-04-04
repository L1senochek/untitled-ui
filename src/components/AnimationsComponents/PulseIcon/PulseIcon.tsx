import styles from './pulse-icon.module.scss';
import IPulseIcon from '@/model/components/AnimationsComponents/pulseIcon';

const PulseIcon: React.FC<IPulseIcon> = ({ icon }: IPulseIcon): JSX.Element => {
  return <div className={styles.pulseicon}>{icon}</div>;
};

export default PulseIcon;
