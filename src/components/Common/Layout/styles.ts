import styled from '@emotion/styled';

export const LayoutContainer = styled.div`
  width: calc(100vw - 25rem);
  height: 100vh;
`;

export const LayoutWrap = styled.div<{ path: string }>`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: ${({ path }) => (path === '/' ? 'center' : 'flex-start')};
  margin-left: ${({ path }) => (path === '/' ? '0' : '25rem')};
`;
