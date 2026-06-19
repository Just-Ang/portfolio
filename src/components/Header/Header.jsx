import {
  CloseButton,

  HeaderContainer,
  HeaderSection,
  InfoBlock,
  InfoItem,
  Logo,
  MenuButton,
  MenuContent,
  MobileMenu,
  Overlay,
  StyledLink,

} from './Header.styled';
import { Menu } from '../Menu/Menu';
import { useState } from 'react';
import { BriefcaseBusiness, Home, Mail, MessageCircleMore, TextAlignJustify, X } from 'lucide-react';


export default function Header()

{ const [menuOpen, setMenuOpen] = useState(false);
  return (
    <HeaderSection>
      <HeaderContainer>
  
        <Logo to="/">Danylo L.
</Logo>

          <Menu></Menu>
              <MenuButton onClick={() => setMenuOpen(!menuOpen)}>
               <TextAlignJustify size={22} />
              </MenuButton>

              <Overlay open={menuOpen} onClick={() => setMenuOpen(false)} />
              <MobileMenu open={menuOpen}>
                <CloseButton onClick={() => setMenuOpen(false)}>
                  <X size={28} strokeWidth={1.5} />
                </CloseButton>

                <MenuContent>
                  <StyledLink onClick={() => setMenuOpen(false)} to="/">
                    <Home  color="#663f88" size={22} strokeWidth={1.5} /> Головна
                  </StyledLink>

                  <StyledLink  onClick={() => setMenuOpen(false)} to="/portfolio">
                   <BriefcaseBusiness color="#663f88" size={22} strokeWidth={1.5} />Портфоліо</StyledLink>
                  <StyledLink onClick={() => setMenuOpen(false)} to="/tariffs">
                <MessageCircleMore color="#663f88" size={22} strokeWidth={1.5} />Тарифи</StyledLink>
                
                  <StyledLink onClick={() => setMenuOpen(false)} to="/contacts">
                    <Mail color="#663f88" size={22} strokeWidth={1.5} /> Контакти
                  </StyledLink>
                </MenuContent>
                 </MobileMenu>


        <InfoBlock>
          <InfoItem>м.Київ</InfoItem>
        
          <InfoItem>+380 93 000 00 00</InfoItem>
        </InfoBlock>
      </HeaderContainer>
    </HeaderSection>
  );
}