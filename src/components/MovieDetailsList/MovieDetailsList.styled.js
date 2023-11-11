import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color: #f5f5f5;
`;
export const GoBackLink = styled(Link)`
  align-self: start;
  color: #007bff;
  text-decoration: none;
  margin-bottom: 20px;

  &:hover {
    text-decoration: underline;
  }
`;

export const MovieInfo = styled.div`
  display: flex;
`;

export const MovieImage = styled.img`
  width: 350px;
  border-radius: 8px;
`;

export const MovieDesc = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 16px;
`;

export const Title = styled.h2`
  font-size: 24px;
  margin: 10px 0;
  color: #333;
`;

export const Score = styled.p`
  font-size: 16px;
  color: #666;
`;

export const Overview = styled.p`
  font-size: 18px;
  margin: 20px 0;
`;

export const Genres = styled.ul`
  font-size: 18px;
  padding: 0;
  margin-top: 10px;
`;

export const Genre = styled.li`
  list-style: none;
  font-size: 16px;
  font-weight: bold;
  margin-top: 5px;
`;

export const AdditionalInfo = styled.div`
  align-self: start;
  margin-top: 20px;
  background-color: #fff;
  padding: 20px;
  border-radius: 8px;
`;

export const InfoLink = styled(Link)`
  color: #007bff;
  text-decoration: none;
  margin-right: 10px;
  transition: color 0.3s ease;

  &:hover {
    color: #ff5722;
  }
`;
