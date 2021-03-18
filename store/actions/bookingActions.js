//Imports
import { ToastAndroid } from "react-native";
import instance from "./instance";

//Actions
export const bookFlight = async (flightInfo, user) => {
  try {
    let res;
    if (user) {
      const res = await instance.post("/booking/user", flightInfo);
    } else {
      res = await instance.post("/booking", flightInfo);
    }
    ToastAndroid.show(
      "Booked Successfully 😃.  Don't forget to have your PCR test ready 😉  ",
      ToastAndroid.LONG
    );
  } catch (error) {
    ToastAndroid.show("Somethig went wrong ! ", ToastAndroid.LONG);

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

export const getPassengerInfo = (passengerInfo) => {
  return async (dispatch) => {
    try {
      dispatch({
        type: "GET_PASSENGER",
        payload: passengerInfo,
      });
      // toast.success(
      //   `${passengerInfo.firstName} ${passengerInfo.lastName} Added`
      // );
    } catch (error) {
      console.error(error);
    }
  };
};
