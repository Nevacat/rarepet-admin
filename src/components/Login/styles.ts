import styled from '@emotion/styled';

export const Container = styled.div`
  width: 100%;
  height: calc(100vh - 60px);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const LoginWrap = styled.div`
  min-width: 52rem;
  width: 30%;
  height: 70vh;
  background-color: ${({ theme }) => theme.colors.lightOrange};
  padding: 2rem;
  border-radius: 18px;
`;

export const LoginBackground = styled.div`
  width: 100%;
  height: 100%;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 18px;
  gap: 10rem;
`;

export const Logo = styled.h1`
  font-size: ${({ theme }) => theme.fontSizes.title};
  font-weight: 700;
  color: ${({ theme }) => theme.colors.brown};
`;

export const InputWrap = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
`;

export const Input = styled.input`
  width: 60%;
  height: 3.2rem;
  border-radius: 12px;
  padding: 1rem;
  font-size: ${({ theme }) => theme.fontSizes.medium};
  border: none;
  background-color: ${({ theme }) => theme.colors.lightOrange};
  &:focus {
    outline: none;
  }
`;

export const Button = styled.button`
  cursor: pointer;
  width: calc(60% + 2rem);
  height: 5.2rem;
  border-radius: 12px;
  background-color: ${({ theme }) => theme.colors.brown};
  color: #fff;
  font-size: ${({ theme }) => theme.fontSizes.medium};
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const PasswordWrap = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;

export const IconWrap = styled.div`
  position: absolute;
  right: 21%;
`;
