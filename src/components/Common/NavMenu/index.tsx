import MenuItem from './Menu';
import * as S from './styles';
import {
  BsBarChartFill,
  BsBasket3Fill,
  BsFillBadgeAdFill,
  BsGlobeAsiaAustralia,
  BsFillTelephoneFill,
  BsPersonCircle,
} from 'react-icons/bs';

const NavMenuData = [
  {
    title: '게시판',
    path: '/board',
    icon: <BsBarChartFill />,
  },
  {
    title: '상품',
    path: '/products',
    icon: <BsBasket3Fill />,
  },
  {
    title: '광고',
    path: '/advertisement',
    icon: <BsFillBadgeAdFill />,
  },
  {
    title: '경매',
    path: '/auction',
    icon: <BsGlobeAsiaAustralia />,
  },
  {
    title: '주문',
    path: '/orders',
    icon: <BsFillTelephoneFill />,
  },
  {
    title: '사용자',
    path: '/users',
    icon: <BsPersonCircle />,
  },
];

function NavMenu() {
  return (
    <S.NavmenuContainer>
      <S.NavmenuWrap>
        {NavMenuData.map((item, index) => {
          return <MenuItem data={item} key={index} />;
        })}
      </S.NavmenuWrap>
    </S.NavmenuContainer>
  );
}

export default NavMenu;
