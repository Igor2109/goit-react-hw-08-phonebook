import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const StyledAppContainer = styled.div`
  color: white;
  background-color: #473838;
  min-width: 320px;
  min-height: 100vh;

  padding: 44px;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const StyledNavLink = styled(NavLink)`
  color: wheat;

  border: 1px solid black;
  border-radius: 10px;
  display: inline-block;
  padding: 20px;
  font-size: 22px;
  text-decoration: none;

  margin-right: 15px;
  margin-bottom: 20px;

  transition: all 0.3s;

  &.active {
    border: 1px solid white;
    background-color: black;
    color: white;
  }
`;
