import {combineReducers} from 'redux';
import {UserReducer} from '../User/Reducers';

const rootReducer = combineReducers({
  ListUser: UserReducer.setUserList,
});

export default rootReducer