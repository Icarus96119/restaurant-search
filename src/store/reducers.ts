import { ActionType, SET_AUTH_TOKEN } from './actions';
import { GlobalState, initialState } from './store';

export const reducer = (state: GlobalState = initialState, action: ActionType): GlobalState => {
  switch (action.type) {
    case SET_AUTH_TOKEN: {
      return Object.assign({}, { ...state, authToken: action.token });
    }
    // TODO: add more actions here
  }
  return state;
}