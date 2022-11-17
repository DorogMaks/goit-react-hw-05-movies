import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const MovieItem = styled.li`
  text-align: center;
  background-color: rgb(238, 238, 238);
  border: 1px solid rgb(204, 204, 204);
  border-radius: 6px;
  overflow: hidden;
  transition: transform 250ms ease;

  :hover,
  :focus {
    transform: scale(1.025);
  }
`;

export const MovieLinkStyled = styled(Link)`
  display: block;
  padding-bottom: 16px;
  color: inherit;
  font-weight: 600;
  text-decoration: none;
  transition: color 250ms ease;

  :hover,
  :focus {
    color: rgb(34, 139, 34);
  }
`;

export const MovieImage = styled.img`
  display: block;
  margin-bottom: 16px;
  background-color: rgb(255, 255, 255);
  object-fit: cover;
`;
