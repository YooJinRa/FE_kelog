import { combineReducers, configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import user from './modules/userSlice';
import post from './modules/mainPostSlice';
import commentSlice from "./modules/commentSlice";
import postSlice from "./modules/postSlice";

const middlewares = [thunk];

// 리듀서 통합
const rootReducer = combineReducers({
  user,
  post,
  postSlice,
  commentSlice
});

// 스토어 연결
const store = configureStore({
  reducer: rootReducer,
  middleware: [thunk],
});

export default store;
