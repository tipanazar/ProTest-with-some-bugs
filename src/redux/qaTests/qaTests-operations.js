import { createAsyncThunk } from '@reduxjs/toolkit';

import qaApi from 'shared/api/qaApi/qaApi';

const getTest = createAsyncThunk(
  'test/getTest',
  async (type, { rejectWithValue }) => {
    try {
      const result = await qaApi.getTest(type);
      return result;
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);

const getResults = createAsyncThunk(
  'test/getResult',
  async (answers, { rejectWithValue }) => {
    try {
      const result = await qaApi.getResult(answers);
      return result;
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);

export const qaOperations = {
  getTest,
  getResults,
};
