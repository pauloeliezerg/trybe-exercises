import { REQUEST_STARTED, REQUEST_SUCCESSFUL, REQUEST_FAILED } from '../actions';

const INITIAL_STATE = {
  isFetching: false,
  imageURL: '',
  errorMessage: '',
};

type ActionType = {
  type: string,
  payload: string,
};

function dogReducer(state = INITIAL_STATE, action: ActionType) {
  switch (action.type) {
    case REQUEST_STARTED:
      return {
        ...state,
        isFetching: true,
        imageURL: '',
        errorMessage: '',
      };
    case REQUEST_SUCCESSFUL:
      return {
        ...state,
        isFetching: false,
        imageURL: action.payload,
        errorMessage: '',
      };
    case REQUEST_FAILED:
      return {
        ...state,
        isFetching: false,
        imageURL: '',
        errorMessage: action.payload,
      };
    default:
      return state;
  }
}

export default dogReducer;
