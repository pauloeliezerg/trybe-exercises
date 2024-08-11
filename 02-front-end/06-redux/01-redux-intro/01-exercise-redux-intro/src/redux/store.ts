import { legacy_createStore as createStore } from 'redux';
import { composeWithDevTools } from '@redux-devtools/extension/lib/types/logOnly';
import { INITIAL_STATE } from './reducer';

type ActionType = {
  type: string,
};

const reducer = (state = INITIAL_STATE, action: ActionType) => {
  return state;
}

const store = createStore(reducer, composeWithDevTools());
