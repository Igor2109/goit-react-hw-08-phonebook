import { StyledNavLink } from 'App.styled';
import React from 'react';
import { useSelector } from 'react-redux';
// import { logOutThunk } from 'redux/authReducer';
import UserMenu from './UserMenu';

const Navigation = () => {
  // const name = useSelector(state => state.auth.user.name);
  // const dispatch = useDispatch();
  const authenticated = useSelector(state => state.auth.authenticated);
  return (
    <header>
      <nav>
        <StyledNavLink className="header-link" to="/">
          Home
        </StyledNavLink>
        {authenticated ? (
          <>
            <StyledNavLink className="header-link" to="/contacts">
              Contacts
            </StyledNavLink>
            <UserMenu />
            {/* <span>Hello,{name} </span>
            <button onClick={() => dispatch(logOutThunk())}>Log Out</button> */}
          </>
        ) : (
          <>
            <StyledNavLink className="header-link" to="/login">
              Login
            </StyledNavLink>
            <StyledNavLink className="header-link" to="/register">
              Register
            </StyledNavLink>
          </>
        )}
      </nav>
    </header>
  );
};

export default Navigation;
