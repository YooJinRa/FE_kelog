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
  postDetail: {}
}

// ::: 메인 게시글 리스트 출력
export const __getPostAll = createAsyncThunk(
  "main/__getPostAll",
  async (payload, thunkAPI) => {
    try {
      const response = await axios.get(`${URL.BASE}api/post`);
      return thunkAPI.fulfillWithValue(response.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

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

const postSlice = createSlice({
  name: "postSlice",
  initialState,
  reducers: {},
  extraReducers: {
    // :: 전체 게시글 불러오기
    [__getPostAll.pending]: (state, action) => {
      state.isLoading = true;
    },
    [__getPostAll.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.post = [...action.payload.data];
    },
    [__getPostAll.rejected]: (state, action) => {
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

