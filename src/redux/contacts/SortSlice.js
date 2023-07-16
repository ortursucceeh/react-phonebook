import { createSlice } from '@reduxjs/toolkit';
import { sortStatuses } from './../constants';

const sortInitialState = {
  status: sortStatuses.createdAt,
};

const sortSlice = createSlice({
  name: 'sort',
  initialState: sortInitialState,
  reducers: {
    setSortStatus(state, action) {
      state.status = action.payload;
    },
  },
});

export const { setSortStatus } = sortSlice.actions;
export default sortSlice.reducer;
