import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import { reducer } from './reducers';

export interface GlobalState {
  authToken: string;
}

export const initialState: GlobalState = {
  authToken: '11111',
}

export const store = createStore(
  reducer,
  composeWithDevTools()
);