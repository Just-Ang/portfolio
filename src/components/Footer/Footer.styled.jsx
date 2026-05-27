import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const FooterContainer = styled.footer`
  width: 100%;
  max-width: 750px;
  padding: 30px 10px 20px 10px;
  margin-left: auto;
  margin-right: auto;
  border-top: 1px solid #e0e0e0; 
  
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 25px;


  @media screen and (min-width: 768px) {
    max-width: 994px;
    padding: 40px 30px 25px 30px;
    
    /* Перемикаємося на Grid сітку */
    display: grid;
    grid-template-columns: 1fr auto 1fr; 
    align-items: center;
    gap: 30px;
  }

  @media screen and (min-width: 1200px) {
    max-width: 1448px;
  }
`;

export const FooterLogo = styled.div`
  font-family:var(--logo-font);
  font-size: 22px;

  color: #333;
  text-align: center;

  @media screen and (min-width: 768px) {
    text-align: left; 
  }
`;

export const FooterNav = styled.nav`
  display: flex;
  flex-direction: column; 
  align-items: center;
  gap: 15px;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    justify-content: center;
    gap: 20px;
  }
  
  @media screen and (min-width: 1200px) {
    gap: 35px; 
  }
`;

export const FooterLink = styled(Link)`
  font-family: var(--main-font), sans-serif;
  font-size: 13px;
  text-transform: uppercase;
  letter-spacing: 1.5px;
  color: #333;
  text-decoration: none;
  transition: color 0.3s ease;

  &:hover {
    color:var(--lavanda-color);
  }
`;

export const FooterContacts = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
  font-family: 'Montserrat', sans-serif;
  font-size: 13px;
  color: #333;

  @media screen and (min-width: 768px) {
    align-items: flex-end; 
  }
`;

export const Copyright = styled.p`
  width: 100%;
  text-align: center;
 font-family: var(--main-font), sans-serif;
  font-size: 11px;
  color: #888;
  margin: 0;
  
  @media screen and (min-width: 768px) {

    grid-column: 1 / -1; 
    margin-top: 20px;
  }
`;