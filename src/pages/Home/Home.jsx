import React from 'react';
import * as S from './Home.style';

const Home = () => {
  return (
    <S.Wrapper>
      <S.Header>
        Hello, this page is made about Toyota Avensis cars. Here you can find
        information about all three released genders of Avensis automobiles.
      </S.Header>
      <S.logoImg src='images\Avensis_logo.jpg' alt='avensis_logo' />
    </S.Wrapper>
  );
};

export default Home;
