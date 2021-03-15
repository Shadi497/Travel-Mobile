const initialState = {
  user: null,
  profile: null,
  booking: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.payload,
      };
    case "FETCH_PROFILE":
      return {
        ...state,
        profile: action.payload,
        booking: action.payload ? action.payload.booking : null,
      };

    case "UPDATE_PROFILE":
      return {
        ...state,
        profile: action.payload.updatedProfile,
      };

    default:
      return state;
  }
};

export default reducer;
