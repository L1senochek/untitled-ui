import React, { useEffect, useRef, useState } from 'react';
import styles from './hover-arrow.module.scss';
import iconArrowNavigation from '@/assets/svg/icons/arrowNavigation.svg';
import IHoverArrow from '@/model/components/HoverArrow/hoverArrow';

const HoverArrow: React.FC<IHoverArrow> = ({ text }): JSX.Element => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(true);
  const hoverRef = useRef<HTMLDivElement>(null);
  const arrowRef = useRef<HTMLImageElement>(null);

  const handleMouseMove = (e: MouseEvent): void => {
    const hoverElement = hoverRef.current;
    const arrowElement = arrowRef.current;

    if (hoverElement && arrowElement) {
      const hoverRect = hoverElement.getBoundingClientRect();
      const arrowRect = arrowElement.getBoundingClientRect();

      const mouseX = e.clientX;
      const mouseY = e.clientY;

      if (hoverElement.contains(e.target as Node)) {
        let newX = mouseX - hoverRect.left - arrowRect.width / 2;
        let newY = mouseY - hoverRect.top - arrowRect.height;

        if (newX < 0) {
          newX = 0;
        } else if (newX > hoverRect.width - arrowRect.width) {
          newX = hoverRect.width - arrowRect.width;
        }

        if (newY < 0) {
          newY = 0;
        } else if (newY > hoverRect.height - arrowRect.height) {
          newY = hoverRect.height - arrowRect.height;
        }

        setPosition({ x: newX, y: newY });
      }
    }
  };

  const handleMouseEnter = (): void => setIsVisible(true);
  const handleMouseLeave = (): void => setIsVisible(false);

  useEffect((): (() => void) => {
    document.addEventListener('mousemove', handleMouseMove);

    return (): void => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div
      className={styles.hover}
      ref={hoverRef}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div
        className={`${styles.hover__arrowwrapper} ${
          isVisible ? styles.visible : ''
        }`}
        style={{ left: position.x, top: position.y }}
      >
        <img
          src={iconArrowNavigation}
          alt="arrow navigation"
          className={styles.hover__arrow}
          ref={arrowRef}
        />
        <span className={styles.hover__text}>{text}</span>
      </div>
    </div>
  );
};

export default HoverArrow;
