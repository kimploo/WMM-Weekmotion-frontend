import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import emotionSlice from './slice/emotionSlice';
import noteSlice from './slice/noteSlice';

const store = configureStore({
  reducer: {
    emotion: emotionSlice.reducer,
    note: noteSlice.reducer
  }
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
