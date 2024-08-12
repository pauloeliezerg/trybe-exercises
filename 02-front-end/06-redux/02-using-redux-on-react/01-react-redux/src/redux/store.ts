import { legacy_createStore as createStore } from "redux";
import { composeWithDevTools } from "@redux-devtools/extension";
import { Action } from "redux";

const INITIAL_STATE = {
  count: 0,
};

const reducer = (state = INITIAL_STATE, action: Action) => state;

const store = createStore(reducer, composeWithDevTools());

export default store;
