//Imports
import instance from "./instance";
import moment from "moment";

//Actions
export const fetchFlights = (flight) => {
  return async (dispatch) => {
    try {
      const departureDate = moment(flight.departureDate).format("LLLL");
      const res = await instance.get(
        `flights/search/inbound/?departureId=${
          flight.departureAirport
        }&arrivalId=${flight.arrivalAirport}&${
          flight.seatType === "economy"
            ? `economySeats=${flight.passengers}`
            : `businessSeats=${flight.passengers}`
        }&departureDate=${departureDate}`
      );
      dispatch({
        type: "FETCH_FLIGHTS",
        payload: res.data,
      });
    } catch (error) {
      console.error(error);
    }
  };
};
