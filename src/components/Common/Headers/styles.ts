import styled from '@emotion/styled';

export const HeaderWrap = styled.div`
  width: 100vw;
  height: 60px;
  background-color: #fff;
  border-bottom: 1px solid #ddd;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
`;
export const LogoWrap = styled.div`
  display: flex;
  align-items: center;
`;

export const Box = styled.div`
  width: 3em;
  height: 3rem;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.colors.brown};
`;

export const LogoText = styled.h1`
  color: ${({ theme }) => theme.colors.brown};
  font-size: 2.4rem;
  font-weight: 700;
  margin-left: 5px;
`;
