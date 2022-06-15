import { configureStore } from '@reduxjs/toolkit';
import EditData from './EditData';

export const store = configureStore({
  reducer: {
    EditData : EditData,
  },
});
