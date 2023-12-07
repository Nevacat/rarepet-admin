import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const DashboardContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  padding: 8rem 6rem 4rem;
`;

export const ChartWrap = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  grid-template-rows: repeat(5, 1fr);
  grid-column-gap: 10px;
  grid-row-gap: 10px;
  div:nth-of-type(1) {
    grid-area: 1 / 1 / 2 / 3;
  }
  div:nth-of-type(2) {
    grid-area: 1 / 3 / 2 / 5;
  }
  div:nth-of-type(3) {
    grid-area: 1 / 5 / 2 / 7;
  }
  div:nth-of-type(4) {
    grid-area: 1 / 7 / 2 / 9;
  }
`;

export const DashboardHeader = styled.div`
  width: 100%;
  height: 4vh;
`;

export const Title = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.xlarge};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  @media (min-width: 1440px) {
    font-size: ${({ theme }) => theme.fontSizes.xxxlarge};
  }
`;

const CommonBoard = css`
  background-color: #fff;
  box-shadow: 0px 4px 17.1px 0px rgba(0, 0, 0, 0.05);
  border-radius: 4px;
  padding: 2rem 1.6rem;
`;

export const CircleBoard = styled.div`
  width: 100%;
  box-sizing: border-box;
  ${CommonBoard}
`;

export const ChartBoard = styled.div`
  grid-area: 2 / 1 / 4 / 6;
  ${CommonBoard}
`;

export const ListBoard = styled.div`
  grid-area: 2 / 6 / 4 / 9;
  ${CommonBoard}
`;

export const OrderTable = styled.div`
  grid-area: 4 / 1 / 6 / 9;
  ${CommonBoard}
`;
