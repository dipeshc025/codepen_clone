

const initialState = {
  user: null,
  error: null,
  loading: false,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
      case 'LOGIN_SUCCESS':
      case 'SIGNUP_SUCCESS':
          return { ...state, user: action.payload, error: null, loading: false };

      case 'LOGIN_FAIL':
      case 'REGISTER_FAIL':
          return { ...state, error: action.payload, loading: false };

      case 'LOGIN_REQUEST':
      case 'REGISTER_REQUEST':
          return { ...state, loading: true, error: null };

      case 'LOGOUT':
          return { ...state, user: null, error: null };

      default:
          return state;
  }
};

export default authReducer;
