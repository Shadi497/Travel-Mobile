//Imports
import instance from "./instance";

//Actions
export const bookFlight = async (flightInfo) => {
  try {
    const res = await instance.post("/booking", flightInfo);
    console.log(res.status);
  } catch (error) {
    console.error(error);
  }
};

export const getFlightInfo = (flight) => {
  return async (dispatch) => {
    try {
      dispatch({
        type: "GET_SEATS",
        payload: flight,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const getFightId = (flightIds) => {
  return async (dispatch) => {
    try {
      dispatch({
        type: "GET_FLIGHT_ID",
        payload: flightIds,
      });
    } catch (error) {
      console.log(error);
    }
  };
};
