import { IUser } from '@/Stores';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface InitialState {
  user?: IUser;
}

const initialState: InitialState = {};

export const AuthSlice = createSlice({
  name: 'auth-slice',
  initialState,
  reducers: {
    saveUser: (state, action: PayloadAction<any>) => {
      return {
        ...state,
        user: action.payload,
      };
    },
    clearAuth: () => initialState,
  },
});
