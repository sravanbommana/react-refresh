import { FETCH_USER_DATA, FETCH_USER_FAILURE, FETCH_USER_SUCCESS } from "../constants/constant"

const initialState = {
  users: [],
  isLoading: false,
  error: ''
}

export const userReducer = (state=initialState, action) => {
  switch(action.type) {
    case FETCH_USER_DATA:
      return {
        ...state,
        error: '',
        isLoading: true,
        users:[]
      }
    case FETCH_USER_SUCCESS:
      return {
        ...state,
        error: '',
        isLoading: false,
        users: action.payload
      }
      case FETCH_USER_FAILURE:
        return {
          ...state,
          users:[],
          isLoading: false,
          error: action.payload
        }
        default:
          return state
  }
}