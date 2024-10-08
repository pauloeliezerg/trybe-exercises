type ActionType = {
  type: string;
  payload: number;
};

const INITIAL_STATE = {
  count: 0,
};

function counterReducer(state = INITIAL_STATE, action: ActionType) {
  switch (action.type) {
    case 'INCREMENT_COUNTER':
      return {
        ...state,
        count: state.count + action.payload
      };
    default:
      return state;
  }
}

export default counterReducer;
