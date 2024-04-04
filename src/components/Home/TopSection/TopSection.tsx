import styles from './top-section.module.scss';
import Btn from '@/components/Btn/Btn';
import IconVideo from '@/components/Icons/IconVideo/IconVideo';
import ICursorPosition from '@/model/components/Home/topSection/cursorPosition';
import { useAppSelector } from '@/store/hooks';
import { selectAuth } from '@/store/slices/authSlice/authSlice';
import { SIGN_UP_PATH, VIDEO_TUTORIALS_PATH } from '@/utils/const/const';
import { useState } from 'react';
import { useNavigate } from 'react-router';

const TopSection: React.FC = (): JSX.Element => {
  const isAuth = useAppSelector<boolean>(selectAuth);
  const navigate = useNavigate();
  const [isZoomed, setIsZoomed] = useState<boolean>(false);
  const [cursorPosition, setCursorPosition] = useState<ICursorPosition>({
    x: 0,
    y: 0,
  });

  const handleMouseMove = (e: React.MouseEvent<HTMLImageElement>): void => {
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    setCursorPosition({ x: e.clientX, y: e.clientY + scrollTop });
  };

  return (
    <div className={styles.topsection}>
      <div className={styles.topsection__container}>
        <div className={styles.topsection__textwrapper}>
          <h1 className={styles.topsection__heading}>
            Beautiful analytics to grow smarter
          </h1>
          <p className={styles.topsection__supportingtext}>
            Powerful, self-serve product and growth analytics to help you
            convert, engage, and retain more users. Trusted by over 4,000
            startups.
          </p>
        </div>
        <div className={styles.topsection__btns}>
          <Btn
            variantBtn="primary"
            onClick={(): void => navigate(VIDEO_TUTORIALS_PATH)}
            outlined
          >
            <IconVideo />
            <span>Demo</span>
          </Btn>
          {!isAuth ? (
            <Btn
              variantBtn="primary"
              onClick={(): void => navigate(SIGN_UP_PATH)}
            >
              Sign up
            </Btn>
          ) : null}
        </div>
      </div>
      <div className={styles.topsection__container}>
        <img
          className={`${styles.topsection__img}${
            isZoomed ? ` ${styles.zoomed}` : ''
          }`}
          alt="Macbook Pro 16"
          src="./src/assets/img/MacbookPro16.png"
          onMouseEnter={(): void => setIsZoomed(true)}
          onMouseLeave={(): void => setIsZoomed(false)}
          onMouseMove={handleMouseMove}
        />
        {isZoomed && (
          <div
            className={styles.topsection__img_circle}
            style={{ left: cursorPosition.x, top: cursorPosition.y }}
          />
        )}
      </div>
    </div>
  );
};

export default TopSection;
