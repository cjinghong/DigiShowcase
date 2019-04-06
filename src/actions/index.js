import { LOGIN, LOGOUT } from './actionTypes';

export const loginUser = (email) => {
  const user = {
    email,
    lastLoggedIn: new Date().getDate(),
  };
  return {
    type: LOGIN,
    user,
  };
};

export const logoutUser = () => ({
  type: LOGOUT,
});
