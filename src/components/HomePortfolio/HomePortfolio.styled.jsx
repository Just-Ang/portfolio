import { Link } from "react-router-dom";
import styled from "styled-components";
export const Section = styled.section`
    /* background-color:#ede4f566; */
    width: 100vw;
    margin-left: calc(50% - 50vw);
    margin-right: calc(50% - 50vw);`

export const Container = styled.div`
  width: 100%;
  max-width: 750px;
  font-family: var(--main-font), sans-serif;
  padding-top:40px;

 
  margin-left: auto;
  margin-right: auto;
  text-align: center;
  display: flex;
  flex-direction: column;

  padding-left: 10px;
  padding-right: 10px;

  @media screen and (min-width: 768px) {
    max-width: 994px;
    padding-left: 30px;
    padding-right: 30px;
  }
 @media screen and (min-width: 1200px) {
    max-width: 1448px;
  
  }
  
`;

export const WrapperTop = styled.div`
       display: flex;
    justify-content: space-between;
    align-content: center;
    align-items: center;


`
export const TitlePortfolio =styled.h2`
font-size:40px;
font-family: var(--second-font);
    font-weight: 600;
    letter-spacing: 0.04em;
    text-transform: uppercase;
    margin-bottom: 20px;

     @media screen and (min-width: 768px) {
   text-align: left;  margin-bottom: 30px;
  }
    
`

export const GridGallery = styled.div`
  display: grid;
  gap: 16px;
grid-template-columns: 1fr;


  @media screen and (min-width: 768px) {
    grid-auto-flow: dense;
    gap: 20px;
  }

  /* режим 2x2 */
  &.simple {
  
     margin-bottom:30px;
    @media screen and (min-width: 768px) {
          grid-template-columns: repeat(2, 1fr);
         margin-bottom:50px; 
    }
  }

  /* режим асиметрії */
  &.asymmetric {
    margin-bottom:20px;
   
     @media screen and (min-width: 768px) {
         grid-template-columns: repeat(3, 1fr);
         margin-bottom:20px; 
    }
  }
`;

export const GridItem = styled.div`
  width: 100%;
  overflow: hidden;
  background-color: #f9f9f9;

  aspect-ratio: 4 / 3;
   aspect-ratio: 4 / 3;
 ${props => props.$layout === 'asymmetric' && props.$type === 'tall' && `
   aspect-ratio: 1 / 2;
  `}
  @media screen and (min-width: 768px) {

    ${props => props.$layout === 'asymmetric' && props.$type === 'small' && `
      grid-column: span 1;
    `}

    ${props => props.$layout === 'asymmetric' && props.$type === 'wide' && `
      grid-column: span 2;
      aspect-ratio: 16 / 10;
    `}

    ${props => props.$layout === 'asymmetric' && props.$type === 'tall' && `
      grid-column: span 1;
      grid-row: span 2;
      height:100%;
    //   aspect-ratio: 1 / 2;
    `}
  }
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  /* filter: grayscale(100%);  */
  transition: filter 0.4s ease, transform 0.4s ease;

  &:hover {
    /* filter: grayscale(0%); */
    transform: scale(1.02);
  }
`;
export const MoreBtn = styled(Link)`
display: none;
     width: 100%;
  max-width: 280px;
    

  padding: 12px 24px;
      text-align: center;
  background-color: transparent;
  color: #000000;
  border: 1px solid #000000;
  font-size: 0.9rem;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
          margin-bottom: 30px;

  &:hover {
    background-color: #000000;
    color: #ffffff;
  }

  &:active {
    transform: scale(0.98);
  }
  @media screen and (min-width: 768px) {
 display: block;
 
  }
`
export const MoreBtnDesctop = styled(Link)`
display: block;
     width: 100%;
  max-width: 280px;
  padding: 12px 24px;
      text-align: center;
        margin-right: auto;
    margin-left: auto;
  background-color: transparent;
  color: #000000;
  border: 1px solid #000000;
  font-size: 0.9rem;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
          margin-bottom: 30px;

  &:hover {
    background-color: #000000;
    color: #ffffff;
  }

  &:active {
    transform: scale(0.98);
  }
  @media screen and (min-width: 768px) {
 display: none;
 
  }
`