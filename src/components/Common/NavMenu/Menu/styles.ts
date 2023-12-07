import styled from '@emotion/styled';
import { IoIosArrowForward } from 'react-icons/io';
import { NavLink } from 'react-router-dom';

export const NavmenuLink = styled(NavLink)`
  width: 100%;
  height: 4.5rem;
  display: flex;
  align-items: center;
  gap: 1.2rem;
  cursor: pointer;
  text-decoration: none;
  color: ${({ theme }) => theme.colors.gray};
  font-size: ${({ theme }) => theme.fontSizes.medium};
  padding: 1rem 2.4rem;
  margin-bottom: 1rem;
  position: relative;
  &:hover {
    color: ${({ theme }) => theme.colors.brown};
  }
`;

export const NavmenuIcon = styled.div`
  font-size: 1.8rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const NavmenuTitle = styled.p``;

export const ArrowIcon = styled(IoIosArrowForward)`
  position: absolute;
  right: 2.4rem;
  font-size: 1.8rem;
`;
