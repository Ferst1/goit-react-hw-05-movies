import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const List = styled.ul`
  margin: 0 auto;
  padding: 0 16px;
`;

export const ListItem = styled.li`
  margin-bottom: 12px;
`;

export const ItemLink = styled(Link)`
  text-decoration: none;
  color: #333;
  font-weight: bold;

  &:hover {
    color: #ff5722;
  }
`;
