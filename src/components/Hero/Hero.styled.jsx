
import styled from 'styled-components';

// 1. Описываем стилизованные компоненты
export const HeroSection = styled.section`


  background-image: url("/images/img5.JPG");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  background-color: #111111;
  
  color: #ffffff;
  min-height: 80vh;
  display: flex;
  align-items: center;

  justify-content: center;
  padding: 4rem 10%;
  position: relative;

    width: 100vw;
  margin-left: calc(50% - 50vw);
  margin-right: calc(50% - 50vw);
  @media screen and (min-width: 768px) {
      justify-content: space-between;
    background-image: 
    linear-gradient(
      to right,
      rgba(0, 0, 0, 0.6),   
      rgba(0, 0, 0, 0)      
    ),
    url("/images/img3.JPG");
 
  }
 @media screen and (min-width: 1200px) {
   
  }
`;

export const Content = styled.div`
  z-index: 2;
  @media screen and (min-width: 768px) {
   max-width: 50%
  }
 @media screen and (min-width: 1200px) {
   
  }
`;

export const Subtitle = styled.span`
  font-size: 0.75rem;
  text-transform: uppercase;
  letter-spacing: 3px;
  color: #aaaaaa;
  display: block;
  margin-bottom: 1rem;
`;

export const Title = styled.h1`

  font-size: 30px;
  @media screen and (min-width: 768px) {
   font-size: 60px;
 
  }
  font-family: var(--second-font);
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 2px;
  line-height: 1.1;
  margin-bottom: 1.5rem;
`;

export const Description = styled.p`
  font-size: 1rem;
  color: #cccccc;
  margin-bottom: 2.5rem;
  font-weight: 300;
`;

export const OutlineButton = styled.button`
  border: 1px solid #ffffff;
  color: #ffffff;
  padding: 0.8rem 2rem;
  font-size: 0.85rem;
  text-transform: uppercase;
  letter-spacing: 2px;
  transition: all 0.3s ease;

  &:hover {
    background-color: #ffffff;
    color: #111111;
  }
`;

export const ImageWrapper = styled.div`
  position: relative;
  width: 45%;
  height: 70vh;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    filter: grayscale(20%);
  }
`;

