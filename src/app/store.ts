import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import dictionaryReducer from '../features/dictionary/dictionarySlice';

export const store = configureStore({
  reducer: {
    dictionary: dictionaryReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

/* eslint-disable @typescript-eslint/indent */
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;