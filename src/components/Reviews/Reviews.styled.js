import styled from '@emotion/styled';

export const ReviewsSection = styled.section`
  padding-bottom: 20px;
`;

export const ReviewsList = styled.div`
  margin: 20px 25px;
`;

export const ReviewsItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 25px;

  &:last-child {
    margin-bottom: 0px;
  }
`;
