
import { Nav, NavLink } from "./Menu.styled";


export const Menu = () => {
  return (
    <Nav>
         <NavLink to="/">Головна</NavLink>
             <NavLink to="/about">Про мене</NavLink>
             <NavLink to="/portfolio">Портфоліо</NavLink>
             <NavLink to="/tariffs">Тарифи</NavLink>
             <NavLink to="/contacts">Контакти</NavLink>
           </Nav>
  );
};