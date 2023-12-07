import { useState } from 'react';
import * as S from './styles';
import { IoMdEye, IoMdEyeOff } from 'react-icons/io';
function Login() {
  const [isView, setIsView] = useState(false);
  const onView = () => {
    setIsView(!isView);
  };

  return (
    <S.Container>
      <S.LoginWrap>
        <S.LoginBackground>
          <S.Logo>
            <img src="/images/logo.webp" alt="logo" />
          </S.Logo>
          <S.InputWrap>
            <S.Input placeholder="아이디" />
            <S.PasswordWrap>
              <S.Input placeholder="비밀번호" type={isView ? 'text' : 'password'} />
              <S.IconWrap onClick={onView}>{isView ? <IoMdEyeOff /> : <IoMdEye />}</S.IconWrap>
            </S.PasswordWrap>
          </S.InputWrap>
          <S.Button>로그인</S.Button>
        </S.LoginBackground>
      </S.LoginWrap>
    </S.Container>
  );
}

export default Login;
