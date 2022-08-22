import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

const Api = 'http://43.200.179.217:8080';

export const userLogin = createAsyncThunk(
  'user/login',
  async (payload, { getState, rejectWithValue }) => {
    const { user } = getState();
    try {
      const config = {
        headers: {
          'Content-Type': 'application/json',
          Authorization: user.userToken,
        },
      };

      const response = await axios.post(
        `${Api}/api/member/login`,
        payload,
        config
      );
      localStorage.setItem('access-token', response.headers.authorization);
      localStorage.setItem('refresh-token', response.headers.refreshtoken);
      console.log(response);
      return response;
    } catch (error) {
      // return custom error message from API if any
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);

export const registerUser = createAsyncThunk(
  'user/register',
  async (payload, { rejectWithValue }) => {
    try {
      const config = {
        headers: {
          'Content-Type': 'application/json',
        },
      };
      await axios.post(`${Api}/api/member/signup`, payload, config);
    } catch (error) {
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);

export const logoutUser = createAsyncThunk(
  'user/logout',
  async (arg, { getState, rejectWithValue }) => {
    const { user } = getState();
    console.log(user);
    try {
      await axios.post(
        `${Api}/api/member/logout`,
        {},
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization: user.userToken,
          },
        }
      );
    } catch (error) {
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);

export const existMemberId = createAsyncThunk(
  'user/existMemberId',
  async ({ email }, { rejectWithValue }) => {
    try {
      const config = {
        headers: {
          'Content-Type': 'application/json',
        },
      };
      const response = await axios.post(
        'http://43.200.179.217:8080/api/member/exist/memberId',
        { email },
        config
      );
      console.log(response);
      return response;
    } catch (error) {
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);
