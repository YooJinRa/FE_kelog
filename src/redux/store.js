import { combineReducers, configureStore } from "@reduxjs/toolkit";
import postSlice from "./modules/postSlice";
import commentSlice from "./modules/commentSlice";

// ::: 여러개의 reducer 통합
const reducer = combineReducers({
  postSlice,
  commentSlice
});

// ::: 스토어 생성, 미들웨어 설정
export default configureStore({
  reducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware()
});