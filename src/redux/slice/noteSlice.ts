import { createSlice } from '@reduxjs/toolkit';

const noteSlice = createSlice({
  name: 'note',
  initialState: {
    note: '' as string
  },
  reducers: {
    change: (state, action) => {
      state.note = action.payload;
    }
  }
});

export const { change } = noteSlice.actions;
export default noteSlice;
