import React, { useEffect, useState } from 'react';
import styles from './animation-image.module.scss';
import IImageProps from '@/model/components/AnimationsComponents/image';
import HoverArrow from '@/components/HoverArrow/HoverArrow';

const AnimationImage: React.FC<IImageProps> = ({
  src,
  alt,
  index,
  scrolling,
  hoverArrow = false,
  hoverArrowText,
}: IImageProps): JSX.Element => {
  const [windowWidth, setWindowWidth] = useState<number>(window.innerWidth);

  const handleResize = (): void => setWindowWidth(window.innerWidth);

  useEffect((): (() => void) => {
    window.addEventListener('resize', handleResize);
    return (): void => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div
      className={`${styles.animationimage}${
        hoverArrow && windowWidth > 1200 ? ` ${styles.hoverarrow}` : ''
      }${index % 2 === 0 ? ` ${styles.right}` : ` ${styles.left}`}`}
    >
      <img
        className={`${
          index % 2 === 0 ? ` ${styles.right}` : ` ${styles.left}`
        }${scrolling ? ` ${styles.scrolling}` : ''}`}
        src={src}
        alt={alt}
      />
      {hoverArrow ? (
        windowWidth > 1200 ? (
          <HoverArrow text={hoverArrowText!} />
        ) : null
      ) : null}
    </div>
  );
};

export default AnimationImage;
