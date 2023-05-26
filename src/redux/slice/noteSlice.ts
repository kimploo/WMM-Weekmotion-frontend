import { createSlice } from '@reduxjs/toolkit';

const noteSlice = createSlice({
  name: 'note',
  initialState: {
    note: {
      title: '' as string,
      note: '' as string,
      date: new Date()
        .toLocaleDateString(undefined, {
          year: 'numeric',
          month: '2-digit',
          day: '2-digit'
        })
        .split(' ')
        .join('')
        .slice(0, -1) as string
    }
  },
  reducers: {
    change: (state, action) => {
      state.note = action.payload;
    }
  }
});

export const { change } = noteSlice.actions;
export default noteSlice;
