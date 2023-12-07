import styled from '@emotion/styled';

export const NavmenuContainer = styled.div`
  width: 25rem;
  height: calc(100vh - 6rem);
  background-color: #fff;
  position: fixed;
  left: 0;
  top: 6rem;
  z-index: 1;
  box-shadow: 0px 4px 17.1px 0px rgba(0, 0, 0, 0.05);
`;

export const NavmenuWrap = styled.div`
  margin-top: 4rem;
  .active {
    color: ${({ theme }) => theme.colors.brown};
    font-weight: 700;
  }
`;
