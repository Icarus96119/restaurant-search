export const SET_AUTH_TOKEN = 'SET_TOKEN';

type SET_AUTH_TOKEN = typeof SET_AUTH_TOKEN;

export interface SetAuthToken {
  type: SET_AUTH_TOKEN,
  token: string;
}

export type ActionType = SetAuthToken;

export const setAuthToken = (authToken: string) => ({ type: SET_AUTH_TOKEN, authToken });