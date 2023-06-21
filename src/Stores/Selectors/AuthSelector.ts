import { TRootState } from '@/Stores';

export const selectAuth = (state: TRootState) => state.authState.user;
