import { Link } from "react-router-dom";
import styled from "styled-components";

export const Nav = styled.nav`
  display: none;
  flex-wrap: wrap;
  justify-content: center;
  gap: 15px;

  @media screen and (min-width: 769px) {
      display: flex;
      flex:1;
              justify-content: space-around;
    gap: 20px;
  }
    @media screen and (max-width: 860px) {
      
    gap: 3px;
  }
    /* @media (max-width: 1023px) {
    display: none;
  } */
`;

export const NavLink = styled(Link)`
  color: var(--black-color);
  text-decoration: none;
  font-family: var(--second-font);
  font-weight:800;
  font-size: 14px;
  text-transform: uppercase;
  letter-spacing: 1px;
  transition: all 0.3s ease;

  &:hover {
    color:var(--lavanda-color);
    scale: 1.05;
  }
`;