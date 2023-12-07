import React from 'react';
import * as S from './styles';

type MenuItemProps = {
  title: string;
  path: string;
  icon: React.ReactNode;
};

function MenuItem({ data }: { data: MenuItemProps }) {
  const { title, path, icon } = data;

  return (
    <S.NavmenuLink className={({ isActive }) => (isActive ? 'active' : '')} to={path}>
      <S.NavmenuIcon>{icon}</S.NavmenuIcon>
      <S.NavmenuTitle>{title}</S.NavmenuTitle>
      <S.ArrowIcon />
    </S.NavmenuLink>
  );
}

export default MenuItem;
