import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import * as Actions from '../../Store/User/Actions';
import {UserSelector} from '../../Store/User/Selector';

const UserComponent = () => {
  const dispatch = useDispatch();

  const getListUser = (page) => {
    dispatch(Actions.getUserList(page))
  };

  const userList = useSelector(state => UserSelector.getUserList(state));

  useEffect(() => {
    getListUser(1)
  }, []);

  useEffect(() => {
    if(userList){
      console.log('userList', userList)
    }
  }, [userList])
  return (
    <div>
      User List
    </div>
  );
};

export default UserComponent;