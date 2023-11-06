import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const NavLinkStyled = styled(NavLink)`
  text-decoration: none;
  font-size: 18px;

  &.active {
    color: orange;
  }
`;
