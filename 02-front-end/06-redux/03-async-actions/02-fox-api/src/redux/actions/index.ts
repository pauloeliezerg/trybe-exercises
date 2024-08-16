export const REQUEST_API = 'REQUEST_API';
export const GET_PICTURE = 'GET_PICTURE';

export const requestAPI = () => ({ type: REQUEST_API });

export const getPicture = (image: string) => ({
  type: GET_PICTURE,
  payload: image,
});

export function fetchAPI() {
  // Criar
}
