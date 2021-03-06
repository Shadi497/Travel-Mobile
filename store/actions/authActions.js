import instance from "./instance";
import decode from "jwt-decode";
import AsyncStorage from "@react-native-async-storage/async-storage";

const setUser = (token) => {
  AsyncStorage.setItem("Token", token);
  instance.defaults.headers.common.Authorization = `Bearer ${token}`;
  return {
    type: "SET_USER",
    payload: decode(token),
  };
};

export const signup = (newUser) => {
  return async (dispatch) => {
    try {
      const res = await instance.post("/signup", newUser);
      AsyncStorage.setItem("Token", res.data.token);
      dispatch(setUser(res.data.token));
    } catch (error) {
      console.error(error);
    }
  };
};

export const signin = (userData) => {
  return async (dispatch) => {
    try {
      const res = await instance.post("/signin", userData);
      AsyncStorage.setItem("Token", res.data.token);
      dispatch(setUser(res.data.token));
    } catch (error) {
      console.error(error);
    }
  };
};

export const airlinesignin = (userData) => {
  return async (dispatch) => {
    try {
      const res = await instance.post("/airline-signin", userData);
      AsyncStorage.setItem("Token", res.data.token);
      dispatch(setUser(res.data.token));
    } catch (error) {
      console.error(error);
    }
  };
};

export const signout = () => {
  AsyncStorage.removeItem("Token");
  delete instance.defaults.headers.common.Authorization;
  return {
    type: "SET_USER",
    payload: null,
  };
};

export const checkToken = () => async (dispatch) => {
  const token = await AsyncStorage.getItem("Token");

  if (token) {
    const user = decode(token);

    if (Date.now() < user.exp) {
      dispatch(setUser(token));
    } else {
      AsyncStorage.removeItem("Token");
      dispatch(signout());
    }
  }
};

export const profile = () => async (dispatch) => {
  try {
    const res = await instance.get("/profile");
    dispatch({
      type: "FETCH_PROFILE",
      payload: res.data,
    });
  } catch (error) {
    console.error(error);
  }
};

export const clearProfile = () => {
  return {
    type: "FETCH_PROFILE",
    payload: null,
  };
};

export const profileEdit = (updatedProfile) => {
  return async (dispatch) => {
    try {
      const res = await instance.put("/profile/edit", updatedProfile);
      dispatch({
        type: "UPDATE_PROFILE",
        payload: { updatedProfile: res.data },
      });
    } catch (error) {
      console.log(error);
    }
  };
};
