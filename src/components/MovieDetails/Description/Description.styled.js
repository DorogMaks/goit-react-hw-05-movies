import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const DescriptionContainer = styled.div`
  margin-bottom: 32px;

  @media screen and (min-width: 768px) {
    display: grid;
    grid-template-columns: 240px 1fr;
  }
`;

export const MovieImage = styled.img`
  display: block;
  width: 100%;
  max-width: 280px;
  height: auto;
  margin-left: auto;
  margin-right: auto;
  object-fit: contain;
  border-radius: 6px;

  @media screen and (max-width: 767px) {
    margin-bottom: 16px;
    max-width: 340px;
  }
`;

export const MovieDescription = styled.div`
  padding: 16px;
`;

export const MovieTitle = styled.h2`
  margin-bottom: 16px;

  @media screen and (max-width: 767px) {
    text-align: center;
  }
`;

export const Paragraph = styled.p`
  :not(:last-child) {
    margin-bottom: 16px;
  }
`;

export const ParagraphTitle = styled.h3`
  display: block;
  margin-bottom: 8px;
  font-weight: 600;
  font-size: 22px;
`;

export const LinksList = styled.ul`
  display: flex;
  justify-content: center;
  margin-bottom: 32px;
  padding: 8px;
`;

export const LinksItem = styled.li`
  :not(:last-child) {
    margin-right: 16px;
  }
`;

export const NavigationLink = styled(NavLink)`
  display: inline-block;
  padding: 8px;
  border-radius: 6px;
  font-weight: 600;
  text-decoration: none;
  color: inherit;
  transition: color 250ms ease, background-color 250ms ease;

  &.active {
    color: rgb(255, 255, 255);
    background-color: rgb(34, 139, 34);
  }

  :hover:not(.active),
  :focus:not(.active) {
    color: rgb(34, 139, 34);
  }

  :not(:last-child) {
    margin-right: 16px;
  }
`;
