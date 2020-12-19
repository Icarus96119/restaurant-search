import { ActionType, SET_AUTH_TOKEN, SET_AVAILABLE_RESTAURANTS, SET_LOADING_STATE } from './actions';
import { GlobalState, initialState } from './store';

export const reducer = (state: GlobalState = initialState, action: ActionType): GlobalState => {
  switch (action.type) {
    case SET_AUTH_TOKEN: {
      return Object.assign({}, { ...state, authToken: action.authToken });
    }
    case SET_LOADING_STATE: {
      return Object.assign({}, { ...state, loadingState: action.loadingState });
    }
    case SET_AVAILABLE_RESTAURANTS: {
      return Object.assign({}, { ...state, restaurants: action.restaurants });
    }
    // TODO: add more actions here
  }
  return state;
}