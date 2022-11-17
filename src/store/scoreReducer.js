
import {createSlice} from '@reduxjs/toolkit';

const todoSlice = createSlice({
  name: 'score',
  initialState: {
    score: 0,
  },
  reducers: {
    addScore(state) {
      state.score= state.score + 1;
    },
  },
});

export const {addScore} = todoSlice.actions;

export default todoSlice.reducer;