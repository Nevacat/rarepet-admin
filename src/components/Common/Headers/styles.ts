import styled from '@emotion/styled';

export const HeaderWrap = styled.div`
  width: 100vw;
  height: 60px;
  background-color: #fff;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  box-shadow: 0px 4px 12.6px 0px rgba(137, 137, 137, 0.11);
  position: fixed;
  top: 0;
  z-index: 100;
`;
export const LogoWrap = styled.div`
  display: flex;
  align-items: center;
`;

export const Box = styled.div`
  width: 3em;
  height: 3rem;
  border-radius: 5px;
  background-color: ${({ theme }) => theme.colors.brown};
`;

export const LogoText = styled.h1`
  color: ${({ theme }) => theme.colors.brown};
  font-size: 2rem;
  font-weight: 700;
  margin-left: 5px;
`;
