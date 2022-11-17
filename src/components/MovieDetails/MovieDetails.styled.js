import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const BackLink = styled(Link)`
  display: inline-block;
  margin-bottom: 16px;
  padding: 10px;
  border-radius: 8px;
  font-weight: 600;
  text-decoration: none;
  color: inherit;
  transition: color 250ms ease, background-color 250ms ease;

  :hover,
  :focus {
    color: rgb(255, 255, 255);
    background-color: rgb(34, 139, 34);
  }
`;
