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

export const fetchSecondFlights = (flight, arrivalDate) => {
  return async (dispatch) => {
    try {
      const departureDateFrom = moment(flight.arrivalDate).format("LLLL");
      const res = await instance.get(
        `flights/search/outbound/?departureId=${
          flight.departureAirport
        }&arrivalId=${flight.arrivalAirport}&${
          flight.seatType === "economy"
            ? `economySeats=${flight.passengers}`
            : `businessSeats=${flight.passengers}`
        }&departureDate=${departureDateFrom}&arrivalDate=${arrivalDate}`
      );
      dispatch({
        type: "FETCH_ROUNDWAY_FLIGHT",
        payload: res.data,
      });
    } catch (error) {
      console.error(error);
    }
  };
};
