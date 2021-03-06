const initialState = {
  passengers: [],
  flights: [],
  flightInfo: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_SEATS":
      return {
        ...state,
        flightInfo: action.payload,
      };
    case "GET_FLIGHT_ID":
      return {
        ...state,
        flights: action.payload,
        passengers: [],
      };
    case "GET_PASSENGER":
      return {
        ...state,
        passengers: [...state.passengers, action.payload],
      };
    default:
      return state;
  }
};

export default reducer;
