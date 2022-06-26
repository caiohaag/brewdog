const AuthReducer = (state, actions) => {
  switch (actions.type) {    
    case "LOGIN_SUCCESS":
      return {
        user: actions.payload,
        isFetching: false,
        error: false,
      };
    case "LOGIN_FAILURE":
      return {
        user: null,
        isFetching: false,
        error: actions.payload,
      };
    default:
      return state;
  }
};

export default AuthReducer;