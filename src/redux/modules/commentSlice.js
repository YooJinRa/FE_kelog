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

// ::: 댓글 리스트 출력
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

// ::: 댓글 삭제
export const __deleteCommentByCommentId = createAsyncThunk(
  "detail/__deleteCommentByCommentId",
  async (payload, thunkAPI) => {
    try {
      const response = await axios.delete(`${URL.BASE}api/comment/${payload}`, {

      }, {
        headers: {
          Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJtZW1iZXJOYW1lIjoic3BhcnRhIiwibWVtYmVyTmlja25hbWUiOiJHZXJhcmQgQnV0bGVyIiwiZXhwIjoxNjYwNTYwNDE3fQ.5xcXeT96I4hRBLmcpmr1HKBrIbVIRR-D3rxF66eRhsc"
        }
      });

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
    // :: 전체 댓글 불러오기
    [__getCommentAllByPostId.pending]: (state, action) => {
      state.isLoading = true;
    },
    [__getCommentAllByPostId.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.comment = [...action.payload.data];
    },
    [__getCommentAllByPostId.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },


    // :: 댓글 삭제
    [__deleteCommentByCommentId.pending]: (state, action) => {
      state.isLoading = true;
    },
    [__deleteCommentByCommentId.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.comment = state.comment.filter(
        (commentCard) => commentCard.commentId !== action.payload
      );
    },
    [__deleteCommentByCommentId.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },

  }
});


export default commentSlice.reducer;

