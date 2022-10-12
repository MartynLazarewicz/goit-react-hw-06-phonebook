import styled from 'styled-components';
import addressBook from '../images/address-book.svg';

export const AppWrapper = styled.div``;

export const MainTitle = styled.h1`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const LogoIcon = styled.span`
  display: inline-block;
  width: 35px;
  height: 24px;
  background-image: url(${addressBook});
  background-repeat: no-repeat;
  background-position: center;
  background-size: 35px 24px;
`;
