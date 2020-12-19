import { GlobalState } from './store';

export const selectAuthToken = (state: GlobalState) => state.authToken;
export const selectRestaurants = (state: GlobalState) => state.restaurants;
export const selectLoadingState = (state: GlobalState) => state.loadingState;