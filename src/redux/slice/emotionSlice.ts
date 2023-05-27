import { createSlice } from '@reduxjs/toolkit';
import { tag } from '../types';

const emotionSlice = createSlice({
  name: 'emotion',
  initialState: {
    emotion: [] as tag[]
  },
  reducers: {
    change: (state, action) => {
      state.emotion = action.payload;
    }
  }
});

export const { change } = emotionSlice.actions;
export default emotionSlice;
