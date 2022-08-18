import styled from 'styled-components';

export const Header = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: #d8d4d3;
  color: #3e94f4;
`;
export const LogoImg = styled.img`
  width: 8rem;
`;
export const ALinks = styled.a`
  font-size: 1.5rem;
  color: #000;
  margin: 0rem 2rem;
  text-decoration: none;
  :hover {
    transition: 0.5s;
    color: #3e94f4;
  }
`;
