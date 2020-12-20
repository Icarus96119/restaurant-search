import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';

import { reducer } from './reducers';
import appSaga from './sagas';
import { LoadingState } from '../core/enums';
import { Restaurant } from '../core/models/restaurant.model';

export interface GlobalState {
  authToken: string;
  loadingState: LoadingState;
  restaurants: Restaurant[];
}

export const initialState: GlobalState = {
  authToken: '',
  loadingState: LoadingState.Loaded,
  restaurants: [],
}

const sagaMiddleware = createSagaMiddleware();

export const store = createStore(
  reducer,
  composeWithDevTools(
    applyMiddleware(sagaMiddleware)
  )
);

sagaMiddleware.run(appSaga);