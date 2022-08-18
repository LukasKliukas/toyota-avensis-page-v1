import React from 'react';
import * as S from './Header.style';

const Header = ({ buttons }) => {
  return (
    <S.Header>
      <img src='images\Toyota_carlogo.svg.png' alt='logo' />
      {buttons.map((button) => {
        return (
          <a href={button.link} key={button.title}>
            {button.title}
          </a>
        );
      })}
    </S.Header>
  );
};

export default Header;
