import { createReducer } from '@reduxjs/toolkit';

import { createSlice } from '@reduxjs/toolkit';
import testType from '../../redux/qaTests/qaTests-actions';

import { qaOperations } from './qaTests-operations';

const { getResults } = qaOperations;

const initialState = {
  testResult: {
    mainMessage: '',
    result: '',
    secondaryMessage: '',
  },
  loading: false,
  error: false,
};

export const setTestType = createReducer(null, {
  [testType]: (state, { payload }) => {
    return (state = payload);
  },
});

const qaSlice = createSlice({
  name: 'qaTests',
  initialState,
  extraReducers: {
    [getResults.pending]: state => {
      state.loading = true;
      state.error = false;
    },
    [getResults.fulfilled]: (state, { payload }) => {
      state.testResult = { ...payload };
      state.loading = false;
    },
    [getResults.rejected]: state => {
      state.loading = false;
      state.error = true;
    },
  },
});

export default qaSlice.reducer;
