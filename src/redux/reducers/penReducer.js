

const initialState = {
  pens: [],
  loading: false,
  error: null,
};

const penReducer = (state = initialState, action) => {
  switch (action.type) {
      case 'FETCH_PENS_REQUEST':
          return { ...state, loading: true, error: null };
      case 'FETCH_PENS_SUCCESS':
          return { ...state, loading: false, pens: action.payload };
      case 'FETCH_PENS_FAILURE':
          return { ...state, loading: false, error: action.payload };
      case 'CREATE_PEN_SUCCESS':
          return { ...state, pens: [...state.pens, action.payload] };
      case 'UPDATE_PEN_SUCCESS':
          return {
              ...state,
              pens: state.pens.map((pen) => 
                  pen.id === action.payload.id ? action.payload : pen
              ),
          };
      case 'DELETE_PEN_SUCCESS':
          return {
              ...state,
              pens: state.pens.filter((pen) => pen.id !== action.payload),
          };
      default:
          return state;
  }
};

export default penReducer;
