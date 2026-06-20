
import {
  FooterContainer,
  FooterLogo,
  FooterNav,
  FooterLink,
  FooterContacts,
  Copyright
} from './Footer.styled';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <FooterContainer>
      <FooterLogo>Danylo L.</FooterLogo>
      
      <FooterNav>
        <FooterLink to="/">Головна</FooterLink>
        <FooterLink to="portfolio">Портфоліо</FooterLink>
        <FooterLink to="tariffs">Тарифи</FooterLink>
        <FooterLink to="contacts">Контакти</FooterLink>
      </FooterNav>
      
      <FooterContacts>
        <span>м. Київ</span>
        <a href="tel:+380930000000" style={{ color: 'inherit', textDecoration: 'none' }}>
          +38 093 000 00 00
        </a>
      </FooterContacts>

      <Copyright>
        &copy; {currentYear} Danylo L. Photography. All rights reserved.
      </Copyright>
    </FooterContainer>
  );
};

export default Footer;