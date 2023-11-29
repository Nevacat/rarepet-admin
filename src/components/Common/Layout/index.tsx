import Headers from '../Headers';
import * as S from './styles';
import { Outlet } from 'react-router-dom';
function Layout() {
  return (
    <S.LayoutContainer>
      <Headers />
      <Outlet />
    </S.LayoutContainer>
  );
}

export default Layout;
