import React from 'react';
import styles from './email-subscribe.module.scss';
import Input from '@/components/Input/Input';
import Btn from '@/components/Btn/Btn';

const EmailSubscribe: React.FC = (): JSX.Element => {
  return (
    <div className={styles.wrapperbtns}>
      <Input type="email" placeholder="Enter your email" />
      <Btn variantBtn="secondary" outlined>
        Subscribe
      </Btn>
    </div>
  );
};

export default EmailSubscribe;
