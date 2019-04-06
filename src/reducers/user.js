const initialState = null;

const user = (state = initialState, action) => {
  switch (action.type) {
    case 'LOGIN':
      return {
        ...state,
        email: action.user.email,
        lastLoggedIn: action.user.lastLoggedIn,
      };
    case 'LOGOUT':
      return {};
    default:
      return state;
  }
};

export default user;
