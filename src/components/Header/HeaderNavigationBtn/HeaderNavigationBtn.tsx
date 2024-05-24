import React from 'react';
import { useNavigate } from 'react-router-dom';
import { LOG_IN_PATH, SIGN_UP_PATH } from '@/utils/const/const';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { selectAuth, setAuth } from '@/store/slices/authSlice/authSlice';
import Btn from '@/components/Btn/Btn';

const HeaderNavigationBtn: React.FC = (): JSX.Element => {
  const isAuth = useAppSelector<boolean>(selectAuth);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const signOutClick = (): void => {
    dispatch(setAuth(false));
  };

  return (
    <>
      {!isAuth ? (
        <>
          <Btn
            variantBtn="secondary"
            onClick={() => navigate(LOG_IN_PATH)}
            outlined
          >
            <span>Log In</span>
          </Btn>
          <Btn variantBtn="secondary" onClick={() => navigate(SIGN_UP_PATH)}>
            <span>Sign Up</span>
          </Btn>
        </>
      ) : (
        <Btn variantBtn="secondary" onClick={signOutClick}>
          <span>Sign Out</span>
        </Btn>
      )}
    </>
  );
};

export default HeaderNavigationBtn;
