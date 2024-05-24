import Btn from '@/components/Btn/Btn';
import styles from './cta-last-section.module.scss';
import { useEffect, useRef, useState } from 'react';
import { ctaCheckItems, ctaImage } from './ctaCheckItems/ctaCheckItems';
import AnimationCheckItemsList from '@/components/AnimationsComponents/CheckItemsList/CheckItemsList';
import AnimationImage from '@/components/AnimationsComponents/AnimationImage/AnimationImage';

const CTALastSection: React.FC = (): JSX.Element => {
  const CTARef = useRef<HTMLDivElement>(null);
  const [scrolling, setScrolling] = useState<boolean>(false);

  useEffect((): (() => void) => {
    const handleScroll = (): void => {
      if (CTARef.current) {
        const rect = CTARef.current.getBoundingClientRect();
        const windowHeight =
          window.innerHeight || document.documentElement.clientHeight;
        const topVisible = rect.top <= windowHeight;
        const bottomVisible = rect.bottom >= 0;
        setScrolling(topVisible && bottomVisible);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return (): void => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={styles.cta} ref={CTARef}>
      <div className={styles.cta__leftside}>
        <h2 className={styles.cta__heading}>
          Join 4,000+ startups growing with Untitled
        </h2>
        <AnimationCheckItemsList
          checkItems={ctaCheckItems}
          scrolling={scrolling}
        />
        <div className={styles.cta__btnwrapper}>
          <Btn variantBtn="secondary" outlined>
            Learn more
          </Btn>
          <Btn variantBtn="secondary">Get started</Btn>
        </div>
      </div>
      <div className={styles.cta__rightside}>
        <AnimationImage
          src={ctaImage.imgMockup}
          alt={ctaImage.alt}
          index={0}
          scrolling={scrolling}
          hoverArrow
          hoverArrowText="Olivia Rhye"
        />
      </div>
    </div>
  );
};

export default CTALastSection;
