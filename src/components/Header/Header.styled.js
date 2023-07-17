import styled from '@emotion/styled';

export const Nav = styled.nav`
  width: 100%;
  padding-left: 40px;
  position: sticky;
  top: 0;
  left: 0;
  z-index: 1;
  background-color: white;
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
`;

export const Ul = styled.div`
  display: flex;
  gap: 20px;
  width: 100%;
  padding: 20px;
  font-size: 24px;
  font-weight: 600;
  text-transform: uppercase;
`;
