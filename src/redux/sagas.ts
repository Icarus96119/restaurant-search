import { call, put, takeLatest } from 'redux-saga/effects';

import { apiFetchAvailableRestaurants } from '../api';
import { LoadingState } from '../core/enums';
import {
  REQUEST_AVAILABLE_RESTAURANTS,
  RequestAvailableRestaurants,
  setAvailableRestaurants,
  setLoadingState
} from './actions';

function* fetchAvailableRestaurants(action: RequestAvailableRestaurants): any {
  try {
    yield put(setLoadingState(LoadingState.Loading));
    const [restaurants] = yield call(apiFetchAvailableRestaurants, action.keyword, action.date);
    yield put(setAvailableRestaurants(restaurants));
  } catch (e) {
    yield put(setAvailableRestaurants([]));
    console.log('failed to load available restaurants');
  } finally {
    yield put(setLoadingState(LoadingState.Loaded));
  }
}

function *appSaga() {
  yield takeLatest(REQUEST_AVAILABLE_RESTAURANTS, fetchAvailableRestaurants);
}

export default appSaga;