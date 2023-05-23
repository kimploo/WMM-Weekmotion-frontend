import { createSlice } from '@reduxjs/toolkit';

const emotionSlice = createSlice({
  name: 'emotion',
  initialState: {
    emotion: [] as string[]
  },
  reducers: {
    change: (state, action) => {
      state.emotion = action.payload;
    }
  }
});

export const { change } = emotionSlice.actions;
export default emotionSlice;
