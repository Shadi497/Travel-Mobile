const initialState = {
  inbound: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_FLIGHTS":
      return {
        ...state,
        inbound: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
