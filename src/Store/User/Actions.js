import * as Types from './Constants';
import axios from 'axios';

export const getUserList = (page) => {
  return dispatch => {
    dispatch({ type: Types.GET_USER_LIST , page});

    return axios.get(`https://reqres.in/api/users?page=${page}`, page)
      .then(response => dispatch(getUserListSuccess(response.data.data)))
      .catch(err => {
        dispatch(getUserListFail(err))
      })
  }
}

const getUserListSuccess = (userList) => ({
  type: Types.GET_USER_LIST_SUCCESS,
  payload: {
    ...userList,
  }
});

const getUserListFail = err => ({
  type: Types.GET_USER_LIST_FAIL,
  paylopad: {
    err
  }
});

