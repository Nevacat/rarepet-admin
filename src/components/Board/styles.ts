import styled from '@emotion/styled';

export const BoardContainer = styled.div`
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  padding: calc(70px + 1.5rem) calc(1.5rem * 0.5) 60px calc(1.5rem * 0.5);
`;

export const ChartWrap = styled.div`
  width: 100%;
  height: 100%;
  background-color: #fff;
  padding: 2rem 1.6rem;
`;

export const ChartHeader = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.xlarge};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  margin-bottom: 2rem;
  padding-left: 1rem;
`;

export const OptionWrap = styled.div`
  display: flex;
`;

export const SelectBox = styled.select``;
export const Option = styled.option``;

export const Table = styled.table`
  width: 100%;
  font-size: ${({ theme }) => theme.fontSizes.medium};
  display: table;
`;

export const Thead = styled.thead`
  width: 100%;
  display: table-header-group;
  background-color: #f3f3f3;
`;

export const Tr = styled.tr`
  display: table-row;
  width: 100%;
`;

export const Th = styled.th`
  padding: 2rem 0;
  text-align: center;
`;

export const Tbody = styled.tbody`
  width: 100%;
  display: table-row-group;
`;

export const Td = styled.td`
  padding: 2rem 0;
  text-align: center;
`;
