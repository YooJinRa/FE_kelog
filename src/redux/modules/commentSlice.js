import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const URL = {
  BASE: process.env.REACT_APP_BASE_URL,
};

// ::: 초기값
const initialState = {
  isLoading: false,
  error: null,
  comment: [],
}

// ::: 댓글 게시글 리스트 출력
export const __getCommentAllByPostId = createAsyncThunk(
  "detail/__getCommentAllByPostId",
  async (payload, thunkAPI) => {
    try {
      const response = await axios.get(`${URL.BASE}api/comment/${payload}`);
      console.log("#########", payload);
      console.log("~~~~~~~~~~~~~~~~~", response.data);
      return thunkAPI.fulfillWithValue(response.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);


const commentSlice = createSlice({
  name: "commentSlice",
  initialState,
  reducers: {},
  extraReducers: {
    // :: 전체 게시글 불러오기
    [__getCommentAllByPostId.pending]: (state, action) => {
      state.isLoading = true;
    },
    [__getCommentAllByPostId.fulfilled]: (state, action) => {
      state.isLoading = false;
      console.log("!!!!!!!!!!", state.comment);
      state.comment = [...action.payload.data];
    },
    [__getCommentAllByPostId.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },

  }
});


export default commentSlice.reducer;

