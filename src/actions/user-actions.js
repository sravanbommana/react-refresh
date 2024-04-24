import axios from "axios"
import { FETCH_USER_DATA, FETCH_USER_FAILURE, FETCH_USER_SUCCESS } from "../constants/constant"

export const fetchUserData = () => {
  return {
    type: FETCH_USER_DATA
  }
}

export const fetchUserFailure = (error) => {
  return {
    type: FETCH_USER_FAILURE,
    payload:error
  }
}

export const fetchUserSuccess = (data) => {
  return {
    type: FETCH_USER_SUCCESS,
    payload:data
  }
}

export const fetchData = () => {
  return (dispatch) => {
      dispatch(fetchUserData());
      axios.get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        const data = response.data;
        dispatch(fetchUserSuccess(data));
      })
      .catch((error) => {
        console.log(error);
        dispatch(fetchUserFailure(error));
      })
  }
}