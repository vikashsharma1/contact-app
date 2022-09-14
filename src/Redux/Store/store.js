import contactReducer from '../Reducer/contactReducer';
// import { createStore } from 'redux';
import { configureStore } from '@reduxjs/toolkit'

const store = configureStore({
  reducer: {
    contactInfo: contactReducer
  }
  })

export default store;
