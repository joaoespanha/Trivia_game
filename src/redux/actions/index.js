export const LOGIN = 'LOGIN';
export const REQUEST_TOKEN = 'REQUEST_TOKEN';

export const login = (userData) => ({
  type: LOGIN,
  userData,
});
