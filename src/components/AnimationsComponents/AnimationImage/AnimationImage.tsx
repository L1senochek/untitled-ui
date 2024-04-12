import React from 'react';
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
  return (
    <div
      className={`${styles.animationimage}${
        hoverArrow ? ` ${styles.hoverarrow}` : ''
      }${index % 2 === 0 ? ` ${styles.right}` : ` ${styles.left}`}`}
    >
      <img
        className={`${
          index % 2 === 0 ? ` ${styles.right}` : ` ${styles.left}`
        }${scrolling ? ` ${styles.scrolling}` : ''}`}
        src={src}
        alt={alt}
      />
      {hoverArrow ? <HoverArrow text={hoverArrowText!} /> : null}
    </div>
  );
};

export default AnimationImage;
