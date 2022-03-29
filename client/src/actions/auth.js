import { AUTH } from "../constants/actionTypes";
import * as api from "../api/index.js";

//Sign in  the user
export const signin = (formData, navigate) => async (dispatch) => {
  try {
    const { data } = await api.signIn(formData);

    dispatch({ type: AUTH, data });

    navigate("/");
  } catch (error) {
    console.log(error);
  }
};

//signing up the user
export const signup = (formData, navigate) => async (dispatch) => {
  try {
    const { data } = await api.signUp(formData);

    dispatch({ type: AUTH, data });
    
    navigate("/");
  } catch (error) {
    console.log(error);
  }
};
