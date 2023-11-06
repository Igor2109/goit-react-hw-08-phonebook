import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logOutThunk } from 'redux/authReducer';
import { UserEmail } from 'redux/selectors';
import styles from './UserMenu.module.css';
import css from './UserMenu.module.css';

const UserMenu = () => {
  const name = useSelector(state => state.auth.user.name);
  const userEmail = useSelector(UserEmail);
  const dispatch = useDispatch();
  return (
    <div className={css.userContainer}>
      <h2 className={css.user}>
        {' '}
        Hello, {name}, {userEmail}{' '}
      </h2>
      {/* <span className={css.user}>
        Hello, {name}, {userEmail}{' '}
      </span> */}
      <button
        onClick={() => dispatch(logOutThunk())}
        className={styles.btnDelete}
      >
        Log Out
      </button>
    </div>
  );
};

export default UserMenu;
