import {configureStore} from '@reduxjs/toolkit';
import scoreReducer from './scoreReducer';

export default configureStore({
  reducer: {
    score: scoreReducer,
  },
});