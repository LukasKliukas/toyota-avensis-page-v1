import styled from 'styled-components';

export const Header = styled.div`
  @media only screen and (max-width: 1200px) {
    flex-direction: column;
  }
  /* margin-bottom: 4rem; */
  top: 0;
  width: 100%;
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #d8d4d3;
  color: #3e94f4;
`;
export const LogoImg = styled.img`
  @media only screen and (max-width: 1200px) {
    width: 4rem;
  }
  width: 8rem;
`;
export const ALinks = styled.a`
  @media only screen and (max-width: 1200px) {
    font-size: 1rem;
  }
  font-family: 'Rubik Dirt', cursive;
  font-size: 1.5rem;
  color: #000;
  margin: 0rem 2rem;
  text-decoration: none;
  :hover {
    transition: 0.5s;
    color: #3e94f4;
  }
`;
