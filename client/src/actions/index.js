import axios from "axios";
import { FETCH_USER } from "./types";

//action creator

export const fetchUser = () => {
  return async (dispatch) => {
    const res = await axios.get("/api/current_user");
    dispatch({ type: FETCH_USER, payload: res.data });
  };
};

//another format  same as above
export const handleToken = (token) => async (dispatch) => {
  const res = await axios.post("/api/stripe", token);
  dispatch({ type: FETCH_USER, payload: res.data });
};