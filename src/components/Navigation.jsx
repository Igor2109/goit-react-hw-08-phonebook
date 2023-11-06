import { StyledNavLink } from 'App.styled';
import React from 'react';
import { useSelector } from 'react-redux';
import UserMenu from './UserMenu/UserMenu';
import css from './App.module.css';

const Navigation = () => {
  const authenticated = useSelector(state => state.auth.authenticated);
  return (
    <header>
      <nav className={css.navContainer}>
        <StyledNavLink className={css.home} to="/">
          Home
        </StyledNavLink>
        {authenticated ? (
          <>
            <StyledNavLink className="header-link" to="/contacts">
              Contacts
            </StyledNavLink>
            <UserMenu />
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
