import { combineReducers } from "redux";
import navbarReducer from './navbarSlice';
import navbardashReducer from './navbardashSlice'

const rootReducer = combineReducers({
    navbar: navbarReducer,
    navbardash: navbardashReducer
  });
  
export default rootReducer;
