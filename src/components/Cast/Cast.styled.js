import styled from 'styled-components';

export const CastWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
`;

export const CastList = styled.ul`
  list-style: none;
  justify-content: center;
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  gap: 20px;
  padding: 0;
  margin: 0;
`;

export const CastListItem = styled.li`
  background-color: #f9f9f9;
  border-radius: 8px;
  padding: 10px;
  text-align: center;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

export const CastImage = styled.img`
  width: 186px;
  height: auto;
  height: 280px;
  border-radius: 8px;
`;

export const CastName = styled.p`
  margin-top: 8px;
  font-weight: bold;
`;
