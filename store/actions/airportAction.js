//Imports
import instance from "./instance";

export const fetchAirports = () => {
  return async (dispatch) => {
    try {
      const res = await instance.get("/airports");
      dispatch({
        type: "FETCH_AIRPORTS",
        payload: res.data,
      });
    } catch (error) {
      console.error(error);
    }
  };
};
