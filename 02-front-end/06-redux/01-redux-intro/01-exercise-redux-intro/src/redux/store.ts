import { legacy_createStore as createStore } from 'redux';
import { composeWithDevTools } from '@redux-devtools/extension/lib/types/logOnly';
import reducer from './reducer';

const store = createStore(reducer, composeWithDevTools());

export default store;
