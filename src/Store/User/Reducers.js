import { INITIAL_STATE } from './States';
import * as ActionsTypes from './Constants';

const setUserList = (state = INITIAL_STATE, action) => {
  switch(action.type){
    case ActionsTypes.GET_USER_LIST_SUCCESS: 
      return {
        ...state,
        userList: action.payload,
      }
    default: 
      return state
  }
}

export const UserReducer = {
  setUserList
}