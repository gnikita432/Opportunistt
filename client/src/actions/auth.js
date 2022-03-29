import { AUTH } from "../constants/actionTypes";
import * as api from "../api/index.js";

//Sign in  the user
export const signin = (formData, navigate) => async (dispatch) => {
  try {
    navigate("/");
  } catch (error) {
    console.log(error);
  }
};

//signing up the user
export const signup = (formData, navigate) => async (dispatch) => {
  try {
    navigate("/");
  } catch (error) {
    console.log(error);
  }
};
