import { createSlice } from '@reduxjs/toolkit';

const emotionSlice = createSlice({
  name: 'emotion',
  initialState: {
    emotion: []
  },
  reducers: {
    CHANGE: (state, action) => {
      state = action.payload;
    }
  }
});

export default emotionSlice;
