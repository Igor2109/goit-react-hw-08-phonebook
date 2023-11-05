import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logOutThunk } from 'redux/authReducer';
import { UserEmail } from 'redux/selectors';

const UserMenu = () => {
  const name = useSelector(state => state.auth.user.name);
  const userEmail = useSelector(UserEmail);
  const dispatch = useDispatch;
  return (
    <div>
      <span>
        Hello, {name}, {userEmail}{' '}
      </span>
      <button onClick={() => dispatch(logOutThunk())}>Log Out</button>
    </div>
  );
};

export default UserMenu;
