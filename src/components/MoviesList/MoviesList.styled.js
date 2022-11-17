import styled from 'styled-components';

export const MoviesListStyled = styled.ul`
  display: grid;
  gap: 20px;
  grid-template-columns: repeat(auto-fill, minmax(185px, 1fr));
`;
