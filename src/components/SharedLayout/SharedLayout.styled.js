import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const StyledNavLink = styled(NavLink)`
  font-size: 20px;
  margin-right: 16px;
  text-decoration: none;
  color: black;
  &.active {
    color: orange;
  }
`;
