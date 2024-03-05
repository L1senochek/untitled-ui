import React from 'react';
import Logo from '@/components/Logo/Logo';
import Navigation from '@/components/Navigation/Navigation';
import Btn from '@/components/Btn/Btn';
import styles from './header.module.scss';
import { Link, useNavigate } from 'react-router-dom';
import { INITIAL_PATH, SIGN_IN_PATH, SIGN_UP_PATH } from '@/utils/const/const';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { selectAuth, setAuth } from '@/store/slices/authSlice/authSlice';

const Header: React.FC = (): JSX.Element => {
  const isAuth = useAppSelector(selectAuth);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const signOutClick = () => {
    dispatch(setAuth(false));
  };

  return (
    <header className={styles.header}>
      <div className={styles.header__leftside}>
        <Link to={INITIAL_PATH}>
          <Logo />
        </Link>
        <Navigation />
      </div>
      <div className={styles.header__rightside}>
        {!isAuth ? (
          <>
            <Btn
              variantBtn="tertiary"
              className={styles.header__btn}
              onClick={() => navigate(SIGN_IN_PATH)}
              outlined
            >
              Log In
            </Btn>
            <Btn
              variantBtn="tertiary"
              className={styles.header__btn}
              onClick={() => navigate(SIGN_UP_PATH)}
            >
              Sign Up
            </Btn>
          </>
        ) : (
          <Btn
            variantBtn="tertiary"
            className={styles.header__btn}
            onClick={signOutClick}
          >
            Sign Out
          </Btn>
        )}
      </div>
    </header>
  );
};

export default Header;
