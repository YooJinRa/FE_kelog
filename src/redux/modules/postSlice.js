import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const URL = {
  BASE: process.env.REACT_APP_BASE_URL,
};

// ::: 초기값
const initialState = {
  isLoading: false,
  error: null,
  post: [],
  postDetail: {},
  userDetail: {}
}

// ::: 상세 게시글 출력
export const __getPostDetail = createAsyncThunk(
  "main/__getPostDetail",
  async (payload, thunkAPI) => {
    try {
      const response = await axios.get(`${URL.BASE}api/post/${payload}`);
      return thunkAPI.fulfillWithValue(response.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// ::: 상세 유저정보 출력
export const __getUserDetail = createAsyncThunk(
  "detail/__getUserDetail",
  async (payload, thunkAPI) => {
    try {
      const response = await axios.get(`${URL.BASE}api/info/${payload}`);

      console.log("######user", response.data);
      return thunkAPI.fulfillWithValue(response.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);


const postSlice = createSlice({
  name: "postSlice",
  initialState,
  reducers: {},
  extraReducers: {
    // :: 유저 정보 불러오기
    [__getUserDetail.pending]: (state, action) => {
      state.isLoading = true;
    },
    [__getUserDetail.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.userDetail = action.payload;
    },
    [__getUserDetail.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },

    // :: 상세 게시글 불러오기
    [__getPostDetail.pending]: (state, action) => {
      state.isLoading = true;
    },
    [__getPostDetail.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.postDetail = action.payload.data;
    },
    [__getPostDetail.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  }
});


export default postSlice.reducer;

