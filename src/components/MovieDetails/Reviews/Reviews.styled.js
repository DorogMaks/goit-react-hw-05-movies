import styled from 'styled-components';

export const ReviewList = styled.ul`
  padding: 8px;
`;

export const ReviewItem = styled.li`
  padding: 16px;
  border: 1px solid rgb(204, 204, 204);
  border-radius: 6px;

  :not(:last-child) {
    margin-bottom: 32px;
  }
`;

export const Author = styled.p`
  margin-bottom: 16px;
  font-size: 600;
  font-weight: 20px;
`;
