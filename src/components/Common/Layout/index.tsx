import Headers from '../Headers';
import NavMenu from '../NavMenu';
import * as S from './styles';
import { Outlet } from 'react-router-dom';
function Layout() {
  const pathname = window.location.pathname;
  console.log(pathname);
  return (
    <S.LayoutContainer>
      <Headers />
      <S.LayoutWrap path={pathname}>
        {pathname !== '/' && <NavMenu />}
        <Outlet />
      </S.LayoutWrap>
    </S.LayoutContainer>
  );
}

export default Layout;
