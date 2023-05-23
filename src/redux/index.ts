import { configureStore } from '@reduxjs/toolkit';
import emotionSlice from './slice/emotionSlice';

const store = configureStore({
  reducer: {
    emotion: emotionSlice.reducer
  }
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
