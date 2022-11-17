import styled from 'styled-components';

export const CastList = styled.ul`
  display: grid;
  gap: 20px;
  grid-template-columns: repeat(auto-fill, minmax(185px, 1fr));
`;

export const CastItem = styled.li`
  padding-bottom: 16px;
  text-align: center;
  background-color: rgb(238, 238, 238);
  border: 1px solid rgb(204, 204, 204);
  border-radius: 6px;
  overflow: hidden;
`;

export const CastImage = styled.img`
  display: block;
  margin-bottom: 16px;
  background-color: rgb(255, 255, 255);
  object-fit: cover;
`;

export const ActorName = styled.p`
  margin-bottom: 8px;
  font-size: 20px;
  font-weight: 600;
`;
