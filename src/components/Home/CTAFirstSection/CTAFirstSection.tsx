import Btn from '@/components/Btn/Btn';
import styles from './cta-first-section.module.scss';
import { useEffect, useRef, useState } from 'react';

const CTAFirstSection: React.FC = (): JSX.Element => {
  const CTARef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState<boolean>(false);

  useEffect((): (() => void) => {
    const handleScroll = (): void => {
      if (CTARef.current) {
        const top = CTARef.current.getBoundingClientRect().top;
        const windowHeight =
          window.innerHeight || document.documentElement.clientHeight;
        setIsVisible(top < windowHeight && top > 0);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return (): void => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={styles.cta} ref={CTARef}>
      <div
        className={`${styles.cta__container}${
          isVisible ? ` ${styles.visible}` : ''
        }`}
      >
        <div className={styles.cta__leftside}>
          <h2 className={styles.cta__heading}>Start your 30-day free trial</h2>
          <p className={styles.cta__supporttext}>
            Join over 4,000+ startups already growing with Untitled.
          </p>
        </div>
        <div className={styles.cta__rightside}>
          <Btn variantBtn="secondary" outlined>
            Learn more
          </Btn>
          <Btn variantBtn="secondary">Get started</Btn>
        </div>
        <></>
      </div>
    </div>
  );
};

export default CTAFirstSection;
