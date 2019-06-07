const initStat = {};
const authReducer = (state = initStat, action) => {
  switch (action.type) {
    case "LOGIN_SUCCESS":
      return {
        ...state,
        authErr: null
      };

    case "LOGIN_ERROR":
      return {
        ...state,
        authErr: action.err.message
      };
    case "SIGNOUT_SUCCESS":
      return state;
      
      case "SIGNUP_SUCCESS":
            return {
                ...state,
                signUpErr : null

            };
      case "SIGNUP_ERROR":
      return {
        ...state,
        signUpErr: action.err.message
      };
      case "DELETE_AUTH_ERROR":
        return {
          ...state,
          authErr:null
        };
        case "DELETE_SIGNUP_ERROR":
          return {
            ...state,
            signUpErr:null
          };
   


    default:
      return state;
  }
};
export default authReducer;
