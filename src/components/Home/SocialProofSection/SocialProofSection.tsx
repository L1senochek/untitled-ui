import styles from './social-proof-section.module.scss';
import { companyLogo } from './companyLogo/companyLogo';
import ICompanyLogo from '@/model/components/Home/companyLogo/companyLogo';
import { useEffect, useRef, useState } from 'react';

const SocialProofSection: React.FC = (): JSX.Element => {
  const socialProofRef = useRef<HTMLDivElement>(null);
  const [isHoverText, setIsHoverText] = useState<boolean>(false);
  const [isVisibleLogo, setIsVisibleLogo] = useState<boolean>(false);

  useEffect((): (() => void) => {
    const refCurrent: HTMLDivElement | null = socialProofRef.current;
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: [0, 0.4],
    };

    const observer = new IntersectionObserver(
      (entries: IntersectionObserverEntry[]): void => {
        entries.forEach((entry: IntersectionObserverEntry): void => {
          setIsVisibleLogo(entry.intersectionRatio > 0);
        });
      },
      options
    );

    refCurrent ? observer.observe(refCurrent) : null;

    return (): void => {
      refCurrent ? observer.unobserve(refCurrent) : null;
    };
  }, []);

  return (
    <div className={styles.socialproof}>
      <p
        className={`${styles.socialproof__text} ${
          isHoverText ? styles.hovered : ''
        }`}
        onMouseEnter={(): void => setIsHoverText(!isHoverText)}
      >
        {!isHoverText
          ? 'Join 4,000+ companies already growing'
          : 'More than 27,000+ successful projects'}
      </p>
      <div className={styles.socialproof__logos} ref={socialProofRef}>
        {companyLogo.map(
          (logo: ICompanyLogo, index: number): JSX.Element => (
            <div
              className={`${styles.socialproof__companylogo} ${
                isVisibleLogo && styles.visible
              }`}
              key={logo.img + index}
            >
              <img
                className={styles.socialproof__companylogo_img}
                alt={logo.name}
                src={logo.img}
              />
              <h2 className={styles.socialproof__companylogo_name}>
                {logo.name}
              </h2>
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default SocialProofSection;
