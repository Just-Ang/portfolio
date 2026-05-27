
import { Link } from 'react-router-dom';
import styled from 'styled-components';


export const HeaderSection = styled.header`
  position: sticky;
  top: 0;
  z-index: 1000;
  border-bottom: 1px solid rgba(134, 134, 134, 0.411);
  background-color: rgb(255, 255, 255)
`;

export const HeaderContainer = styled.div`
  width: 100%;
  max-width: 750px;
  padding: 15px 10px;
  margin-left: auto;
  margin-right: auto;
  display: flex;
 flex-direction: row;
  align-items: center;
  gap: 15px;
  justify-content: space-between;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    gap: 20px;
    max-width: 994px;
    padding: 20px 30px;
  }
  @media screen and (min-width: 1200px) {
    max-width: 1448px;
  }
`;


export const Logo = styled(Link)`
    font-family:var(--logo-font);
      /* font-family: 'Playfair Display', Georgia, serif;  */

 font-size:30px;
  
  /* font-style: italic;
  font-weight:200; */
  color: var(--black-color);
  text-decoration: none;
  letter-spacing: 1px;
  white-space: nowrap;
`;


export const InfoBlock = styled.div`

  display:none;
  align-items: center;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  padding-top: 10px;
  width: 100%;
  justify-content: center;

  @media screen and (min-width: 769px) {
      display: flex;
    border-top: none;
    border-left: 1px solid rgba(255, 255, 255, 0.2);
    padding-top: 0;

    width: auto;
    justify-content: flex-end;
  }
`;

export const InfoItem = styled.span`
  color: var(--black-color);
  font-size: 14px;
  white-space: nowrap; 


   position: relative;
  padding: 0 10px;



  &:first-child {
    border-left: 1px solid rgba(0, 0, 0, 0.2);
        border-right: 1px solid rgba(0, 0, 0, 0.2);

  }

  &:last-child {
    border-right: 1px solid rgba(0, 0, 0, 0.2);
  }


`;



export const MenuButton = styled.button`
  display: flex;
  align-items: center;
  gap: 8px;

  background: transparent;
  color: var(--white-color);
  border: none;
  border-radius: 30px;
  font-size: 15px;
  font-weight: 600;
 
  cursor: pointer;
   @media screen and (min-width: 769px) {
      display: none;
  
  }
  


  cursor: pointer;
  transition: background 0.2s ease;

  &:hover {
  }
`;

export const MobileMenu = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  width: 80%; 
  max-width: 350px;
  height: 100%;
  background: #ffffff;
  z-index: 1000;
  display: flex;
  flex-direction: column;
  padding: 80px 30px 40px;
  box-shadow: -5px 0 15px rgba(0, 0, 0, 0.1);
  transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(100%)')};
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;
  background: none;
  border: none;
  color: #333;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.2s;

  &:active {
    transform: scale(0.9);
  }
`;

export const MenuContent = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 25px;
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  font-size: 20px;
  font-weight: 500;
  color: #2c2c2c;
  display: flex;
  align-items: center;
  gap: 15px;
  transition: color 0.3s;

  svg {
    color: #d35400; 
    font-size: 24px;
  }

  &:hover, &:active {
    color: #d35400;
  }
`;
export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(4px);
  z-index: 999;
  display: ${({ open }) => (open ? 'block' : 'none')};
  transition: opacity 0.3s;
`;