import React from 'react';
import * as S from './Header.style';

const Header = ({ buttons }) => {
  return (
    <S.Header>
      <S.LogoImg src='images\Toyota_carlogo.svg.png' alt='logo' />
      <nav>
        {buttons.map((button) => {
          return (
            <S.ALinks href={button.link} key={button.title}>
              {button.title}
            </S.ALinks>
          );
        })}
      </nav>
    </S.Header>
  );
};

export default Header;
