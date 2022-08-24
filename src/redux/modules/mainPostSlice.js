import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const userToken = localStorage.getItem('access-token')
  ? localStorage.getItem('access-token')
  : null;

const refreshToken = localStorage.getItem('refresh-token')
  ? localStorage.getItem('refresh-token')
  : null;

const initialState = {
  post: [],
  trendingPost: [],
  todayPost: [],
  weekPost: [],
  monthPost: [],
  yearPost: [],
  myPost: [],
  isLoading: false,
  clickData: '',
  error: null,
  userToken,
  refreshToken,
};

const api = 'http://43.200.179.217:8080';

// 게시글 가져오기
// payload -> 전체 글 데이터

// 최신순 -> post
export const getData = createAsyncThunk(
  'post/getData',
  async (payload, { getState, rejectWithValue }) => {
    const { user } = getState();
    try {
      const response = await axios.get(`http://3.213.218.180:8080/api/post`);
      return response.data;
    } catch (error) {
      console.log(error);
      return rejectWithValue(error);
    }
  }
);

// 트렌딩 페이지 -> trendingPost
export const getTrendingData = createAsyncThunk(
  'post/getTrendingData',
  async (payload, { getState, rejectWithValue }) => {
    const { user } = getState();
    try {
      const response = await axios.get(`http://3.213.218.180:8080/api/post`);
      return response.data;
    } catch (error) {
      console.log(error);
      return rejectWithValue(error);
    }
  }
);

// 오늘 -> todayPost
export const getTodayData = createAsyncThunk(
  'post/getDayData',
  async (payload, { getState, rejectWithValue }) => {
    const { user } = getState();
    try {
      const response = await axios.get(`http://3.213.218.180:8080/api/post`);
      return response.data;
    } catch (error) {
      console.log(error);
      return rejectWithValue(error);
    }
  }
);

// 이번 주 -> weekPost
export const getWeekData = createAsyncThunk(
  'post/getWeekData',
  async (payload, { getState, rejectWithValue }) => {
    const { user } = getState();
    try {
      const response = await axios.get(`http://3.213.218.180:8080/api/post`);
      return response.data;
    } catch (error) {
      console.log(error);
      return rejectWithValue(error);
    }
  }
);

// 이번 달 -> monthPost
export const getMonthData = createAsyncThunk(
  'post/getMonthData',
  async (payload, { getState, rejectWithValue }) => {
    const { user } = getState();
    try {
      const response = await axios.get(`http://3.213.218.180:8080/api/post`);
      return response.data;
    } catch (error) {
      console.log(error);
      return rejectWithValue(error);
    }
  }
);

// 올해 -> yearPost
export const getYearData = createAsyncThunk(
  'post/getYearData',
  async (payload, { getState, rejectWithValue }) => {
    const { user } = getState();
    try {
      const response = await axios.get(`http://3.213.218.180:8080/api/post`);
      return response.data;
    } catch (error) {
      console.log(error);
      return rejectWithValue(error);
    }
  }
);

// 마이 페이지 -> myPost (헤더에 토큰)
export const getMyData = createAsyncThunk(
  'post/getMyData',
  async (payload, { getState, rejectWithValue }) => {
    const { user } = getState();
    try {
      const response = await axios.get(`http://3.213.218.180:8080/api/post`);
      return response.data;
    } catch (error) {
      console.log(error);
      return rejectWithValue(error);
    }
  }
);

// 게시글 등록
// payload -> title,content
// export const postData = createAsyncThunk(
//   'post/postData',
//   async (payload, { getState, rejectWithValue }) => {
//     const { user } = getState();
//     try {
//       console.log(user);
//       const config = {
//         headers: {
//           'Content-Type': 'application/json',
//           Authorization: user.userToken,
//           RefreshToken: user.refreshToken,
//         },
//       };
//       const response = await axios.post(`${api}/api/post`, payload, config);
//       console.log(response);
//       return response.data.data;
//     } catch (error) {
//       console.log(error);
//       return rejectWithValue(error);
//     }
//   }
// );

// 게시글 수정
// payload -> 수정할 게시글 데이터(title,content,url,id)
// export const putData = createAsyncThunk(
//   'post/patchData',
//   async ({ title, content, id }, { getState, rejectWithValue }) => {
//     const { user } = getState();
//     console.log(user);
//     const config = {
//       headers: {
//         'Content-Type': 'application/json',
//         Authorization: user.userToken,
//         RefreshToken: user.refreshToken,
//       },
//     };
//     try {
//       const response = await axios.put(
//         `${api}/api/post/${id}`,
//         {
//           title: title,
//           content: content,
//         },
//         config
//       );
//       console.log(response.data);
//       return response.data;
//     } catch (error) {
//       console.log(error);
//       return rejectWithValue(error);
//     }
//   }
// );

// 게시글 삭제
// payload-> 게시글 id
// export const deleteData = createAsyncThunk(
//   'post/deleteData',
//   async (payload, { getState, rejectWithValue }) => {
//     const { user } = getState();
//     console.log(user);
//     const config = {
//       headers: {
//         'Content-Type': 'application/json',
//         Authorization: user.userToken,
//         RefreshToken: user.refreshToken,
//       },
//     };
//     try {
//       const response = await axios.delete(`${api}/api/post/${payload}`, config);
//       console.log(response);
//       return payload;
//     } catch (error) {
//       console.log(error);
//       return rejectWithValue(error);
//     }
//   }
// );

export const postSlice = createSlice({
  name: 'post',
  initialState,
  reducers: {
    clickData: (state, action) => {
      state.clickData = action.payload;
    },
  },
  extraReducers: {
    [getData.pending]: (state) => {
      state.isLoading = true;
    },
    [getData.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.post = action.payload;
    },
    [getData.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    [getTrendingData.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.trendingPost = action.payload;
    },
    [getTodayData.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.todayPost = action.payload;
    },
    [getWeekData.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.weekPost = action.payload;
    },
    [getMonthData.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.monthPost = action.payload;
    },
    [getYearData.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.yearPost = action.payload;
    },
    [getMyData.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.myPost = action.payload;
    },
    // [postData.pending]: (state) => {
    //   state.isLoading = true;
    // },
    // [postData.fulfilled]: (state, action) => {
    //   state.isLoading = false;
    //   console.log(action.payload);
    //   state.post = [{ ...state.post, ...action.payload }];
    // },
    // [postData.rejected]: (state, action) => {
    //   state.isLoading = false;
    //   state.error = action.payload;
    // },
    // [putData.pending]: (state) => {
    //   state.isLoading = true;
    // },
    // [putData.fulfilled]: (state, action) => {
    //   state.isLoading = false;
    //   console.log(action.payload);
    //   let id = action.payload.data.id;
    //   state.post = state.post.map((item) =>
    //     item.id === id
    //       ? {
    //           ...item,
    //           title: action.payload.title,
    //           content: action.payload.content,
    //         }
    //       : item
    //   );
    // },
    // [putData.rejected]: (state, action) => {
    //   state.isLoading = false;
    //   state.error = action.payload;
    // },
    // [deleteData.pending]: (state) => {
    //   state.isLoading = true;
    // },
    // [deleteData.fulfilled]: (state, action) => {
    //   state.isLoading = false;
    //   state.post = state.post.filter((item) => item.id !== action.payload);
    // },
    // [deleteData.rejected]: (state, action) => {
    //   state.isLoading = false;
    //   state.error = action.payload;
    // },
  },
});

export const { clickData } = postSlice.actions;
export default postSlice.reducer;
