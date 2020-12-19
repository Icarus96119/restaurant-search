import { LoadingState } from '../core/enums';
import { Restaurant } from '../core/models/restaurant.model';

export const SET_AUTH_TOKEN = 'SET_AUTH_TOKEN';
export const SET_LOADING_STATE = 'SET_LOADING_STATE';
export const SET_AVAILABLE_RESTAURANTS = 'SET_AVAILABLE_RESTAURANTS';

export const REQUEST_AVAILABLE_RESTAURANTS = 'REQUEST_AVAILABLE_RESTAURANTS';

// actions
type ACTION_SET_AUTH_TOKEN = typeof SET_AUTH_TOKEN;
type ACTION_SET_LOADING_STATE = typeof SET_LOADING_STATE;
type ACTION_SET_AVAILABLE_RESTAURANTS = typeof SET_AVAILABLE_RESTAURANTS;

// saga actions
type ACTION_REQUEST_AVAILABLE_RESTAURANTS = typeof REQUEST_AVAILABLE_RESTAURANTS;

// action interfaces
export interface SetAuthToken {
  type: ACTION_SET_AUTH_TOKEN;
  token: string;
}

export interface SetLoadingState {
  type: ACTION_SET_LOADING_STATE;
  loadingState: LoadingState;
}

export interface SetAvailableRestaurants {
  type: ACTION_SET_AVAILABLE_RESTAURANTS;
  restaurants: Restaurant[];
}

// saga action interfaces
export interface RequestAvailableRestaurants {
  type: ACTION_REQUEST_AVAILABLE_RESTAURANTS;
  keyword: string;
  date: string;
}

export type ActionType = SetAuthToken | SetLoadingState | SetAvailableRestaurants | RequestAvailableRestaurants;

export const setAuthToken = (authToken: string) => ({ type: SET_AUTH_TOKEN, authToken });
export const setLoadingState = (loadingState: LoadingState) => ({ type: SET_LOADING_STATE, loadingState });
export const setAvailableRestaurants = (restaurants: Restaurant[]) => ({ type: SET_AVAILABLE_RESTAURANTS, restaurants });
export const requestAvailableRestaurants = (keyword: string, date: string) => ({ type: REQUEST_AVAILABLE_RESTAURANTS, keyword, date});