import { configureStore } from '@reduxjs/toolkit';
import contactReducer from './contactSlice';
import filterReducer from './filterSlice';
import { combineReducers } from 'redux';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

export default configureStore({
  reducer: {
    contacts: contactReducer,
    filter: filterReducer,
  },
});

const rootReducer = combineReducers({
  contacts: contactReducer,
  filter: filterReducer,
});

const persistConfig = {
  key: 'root',
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
});

export const persistor = persistStore(store);
