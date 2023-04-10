import { configureStore } from '@reduxjs/toolkit'
import useReducer from './navbarSlice';
import dashReducer from './navbardashSlice';


const store = configureStore({
  reducer: {
    navbar: useReducer,
    navbardash: dashReducer
    }

  });

export default store;
