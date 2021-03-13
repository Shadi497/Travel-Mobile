const initialState = {
  airports: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_AIRPORTS":
      return {
        ...state,
        airports: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
