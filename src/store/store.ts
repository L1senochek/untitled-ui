import { combineReducers, configureStore } from '@reduxjs/toolkit';
import authSlice from './slices/authSlice/authSlice';

const rootReducer = combineReducers({
  authSlice: authSlice.reducer,
});

export const store = () => {
  return configureStore({
    reducer: rootReducer,
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof store>;
export type AppDispatch = AppStore['dispatch'];
export default store;
