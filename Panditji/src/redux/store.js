import {configureStore} from '@reduxjs/toolkit'
import authReducer  from './authSlice'
import storage from 'redux-persist/lib/storage'
import {persistReducer,persistStore} from 'redux-persist'

const persistConfig={
  key:"root",
  storage,
}

const Reducer=persistReducer(persistConfig,authReducer)
export const store = configureStore({
    reducer: {
        auth:Reducer,
    },
  });

export const persistor=persistStore(store);
