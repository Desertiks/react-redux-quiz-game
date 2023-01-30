import { configureStore } from '@reduxjs/toolkit';
import dictionaryReducer from '../features/dictionary/dictionarySlice';
import logsReducer from '../features/gameLog/gameLogSlice';

export const store = configureStore({
  reducer: {
    dictionary: dictionaryReducer,
    logs: logsReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;