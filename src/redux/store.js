import { configureStore } from '@reduxjs/toolkit';
import contactReducer from './contactSlice';
import filterReducer from './filterSlice';
// import { combineReducers } from 'redux';
// import { presisitReducer, persistStore } from 'redux-persist';
// import storage from 'redux-persist/lib/storage';

export default configureStore({
  reducer: {
    contacts: contactReducer,
    filter: filterReducer,
  },
});
