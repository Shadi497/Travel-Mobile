const initialState = {
  inbound: [],
  outbound: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_FLIGHTS":
      return {
        ...state,
        inbound: action.payload,
      };
    case "FETCH_ROUNDWAY_FLIGHT":
      return {
        ...state,
        outbound: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
