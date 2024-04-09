import React from 'react';
import styles from './image.module.scss';
import IImageProps from '@/model/components/AnimationsComponents/image';

const AnimationImage: React.FC<IImageProps> = ({
  src,
  alt,
  index,
  scrolling,
}: IImageProps): JSX.Element => {
  return (
    <div
      className={`${styles.animationimage}${
        index % 2 === 0 ? ` ${styles.right}` : ` ${styles.left}`
      }`}
    >
      <img
        className={`${
          index % 2 === 0 ? ` ${styles.right}` : ` ${styles.left}`
        }${scrolling ? ` ${styles.scrolling}` : ''}`}
        src={src}
        alt={alt}
      />
    </div>
  );
};

export default AnimationImage;
