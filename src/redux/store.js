import { configureStore } from '@reduxjs/toolkit';

import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import userReducer from './userAccount/userAccount-slice';
import qaReducer from './qaTests/qaTests-reducer';
import {setTestType} from './qaTests/qaTests-reducer';

const persistConfig = {
  key: 'auth',
  storage,
  whitelist: ['accessToken'], 
};

const persistTypeConfig = {
  key:'testType',
  storage,
}

const persistedUserReducer = persistReducer(persistConfig, userReducer);

const persistTypeReducer = persistReducer(persistTypeConfig, setTestType)

export const store = configureStore({
  reducer: {
    auth: persistedUserReducer, 
    testType: persistTypeReducer,  
    qaTests: qaReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoreActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});
export const persistor = persistStore(store);
