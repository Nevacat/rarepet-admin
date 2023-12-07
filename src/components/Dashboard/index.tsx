import React from 'react';
import * as S from './styles';

function Dashboard() {
  return (
    <S.DashboardContainer>
      <S.DashboardHeader>
        <S.Title>Dashborad</S.Title>
      </S.DashboardHeader>
      <S.ChartWrap>
        <S.CircleBoard>1</S.CircleBoard>
        <S.CircleBoard>2</S.CircleBoard>
        <S.CircleBoard>3</S.CircleBoard>
        <S.CircleBoard>4</S.CircleBoard>
        <S.ChartBoard>5</S.ChartBoard>
        <S.ListBoard>6</S.ListBoard>
        <S.OrderTable>7</S.OrderTable>
      </S.ChartWrap>
    </S.DashboardContainer>
  );
}

export default Dashboard;
