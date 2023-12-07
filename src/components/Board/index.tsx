import React from 'react';
import * as S from './styles';
import { BoardHead } from '../../constants/board';

type BoardProps = {
  accessor: string;
  Header: string;
};

function Board() {
  return (
    <S.BoardContainer>
      <S.ChartHeader>게시판 관리</S.ChartHeader>
      <S.ChartWrap>
        <S.OptionWrap>
          <S.SelectBox>
            <S.Option>ddd</S.Option>
          </S.SelectBox>
        </S.OptionWrap>
        <S.Table>
          <S.Thead role="table">
            <S.Tr role="row">
              {BoardHead.map((item: BoardProps) => {
                return (
                  <S.Th role="columnheader" key={item.accessor}>
                    {item.Header}
                  </S.Th>
                );
              })}
            </S.Tr>
          </S.Thead>
          <S.Tbody>
            <S.Tr>
              <S.Td>1</S.Td>
              <S.Td>monkey</S.Td>
              <S.Td>Nov.11.2023</S.Td>
              <S.Td>sam smith</S.Td>
              <S.Td>fish</S.Td>
              <S.Td>pending</S.Td>
              <S.Td>12</S.Td>
              <S.Td>20,000</S.Td>
              <S.Td>X</S.Td>
            </S.Tr>
          </S.Tbody>
        </S.Table>
      </S.ChartWrap>
    </S.BoardContainer>
  );
}

export default Board;
