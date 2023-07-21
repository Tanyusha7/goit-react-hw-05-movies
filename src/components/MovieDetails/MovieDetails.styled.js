import styled from '@emotion/styled';

export const MovieSection = styled.section`
  padding: 20px 0;
`;

export const BtnBack = styled.button`
  display: flex;
  column-gap: 10px;
  margin-bottom: 20px;
  padding: 6px 4px;
  width: 100px;
  justify-content: space-around;
  background: transparent;
  border-radius: 8px;
  cursor: pointer;
`;

export const MovieDesc = styled.div`
  display: flex;
  gap: 20px;
`;

export const MovieCont = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  padding: 10px;
`;

export const Genreslist = styled.div`
  display: flex;
  gap: 10px;
`;

export const AddInfoSection = styled.section`
  padding: 25px 0;
  border-bottom: 1px solid darkblue;
  border-top: 1px solid darkblue;
`;

export const AddInfoList = styled.ul`
  margin-left: 30px;
  font-size: 16px;
`;

export const AddInfoText = styled.p`
  margin-bottom: 20px;
`;

export const AddInfoItem = styled.li`
  &:last-child {
    margin-top: 10px;
  }
`;
