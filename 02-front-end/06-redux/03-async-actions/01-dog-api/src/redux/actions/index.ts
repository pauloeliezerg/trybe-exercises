export const REQUEST_STARTED = 'REQUEST_STARTED';
export const REQUEST_SUCCESSFUL = 'REQUEST_SUCCESSFUL';
export const REQUEST_FAILED = 'REQUEST_FAILED';

function requestStarted() {
  return { type: REQUEST_STARTED };
}

function requestSuccessful(imageURL: string) {
  return {
    type: REQUEST_SUCCESSFUL,
    payload: imageURL,
  };
}

function requestFailed(error: string) {
  return {
    type: REQUEST_FAILED,
    payload: error,
  };
}
