import React from 'react';
import { useNavigate } from 'react-router-dom';
import { SIGN_IN_PATH, SIGN_UP_PATH } from '@/utils/const/const';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { selectAuth, setAuth } from '@/store/slices/authSlice/authSlice';
import Btn from '@/components/Btn/Btn';

const HeaderNavigationBtn: React.FC = (): JSX.Element => {
  const isAuth = useAppSelector(selectAuth);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const signOutClick = () => {
    dispatch(setAuth(false));
  };

  return (
    <>
      {!isAuth ? (
        <>
          <Btn
            variantBtn="tertiary"
            onClick={() => navigate(SIGN_IN_PATH)}
            outlined
          >
            Log In
          </Btn>
          <Btn variantBtn="tertiary" onClick={() => navigate(SIGN_UP_PATH)}>
            Sign Up
          </Btn>
        </>
      ) : (
        <Btn variantBtn="tertiary" onClick={signOutClick}>
          Sign Out
        </Btn>
      )}
    </>
  );
};

export default HeaderNavigationBtn;
