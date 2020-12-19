import { GlobalState } from './store';

export const selectAuthToken = (state: GlobalState) => state.authToken;