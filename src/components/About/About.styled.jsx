import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  max-width: 750px;
  margin-top: 20px;
padding-bottom:70px;
  box-sizing: border-box;
  border-bottom: 1px solid #8e8e8e;
  font-family: var(--main-font);
  

  @media screen and (min-width: 768px) {
    max-width: 994px;
    margin-top: 30px;
    padding: 0;
    padding-bottom:40px;
  }

  @media screen and (min-width: 1200px) {
    max-width: 1448px;
  }
`;

export const AboutSection = styled.section`
  display: flex;
  flex-direction: column;
  gap: 40px;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    align-items: stretch; 
    justify-content: center; 
    gap: 50px; 
  }
`;

export const LeftContent = styled.div`
  display: flex;

  flex-direction: column; 
  width: 100%;
  gap: 20px;

  @media screen and (min-width: 768px) {
    gap: 0px;
    max-width: 350px;
  }
  @media screen and (min-width: 900px) {
    max-width: 420px;
  }
  @media screen and (min-width: 1200px) {
    max-width: 600px;
  }
`;

export const Title = styled.h2`
  font-size: 28px; 
  font-family: var(--second-font);
  font-weight: 600;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  margin-bottom: 5px;
 
  order: -1; 

  @media screen and (min-width: 768px) {
    font-size: 40px;
    margin-bottom: 15px;
    order: 0;
  }
`;

export const MainPhoto = styled.img`
  width: 100%; 
  aspect-ratio: 1 / 1;
  object-fit: cover;
  display: block;
  border-radius: 4px; 

  @media screen and (min-width: 768px) {
    max-width: 500px;
    margin-bottom: 15px;
  }
  @media screen and (min-width: 1200px) {
    max-width: 600px;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;

  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
`;

export const DescriptionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  /* gap: 12px; */

  @media screen and (min-width: 768px) {
   
  }
`;

export const Description = styled.p`
  font-size: 14px;
  line-height: 1.5; 
  color: var(--black-color);
  text-align: justify; 

  @media screen and (min-width: 768px) {
    text-align: start;
  }

  @media screen and (min-width: 1200px) {
    font-size: 16px;
  }
`;

export const RightGallery = styled.div`
  position: relative;
  width: 100%;
  max-width: 650px; 
  aspect-ratio: 1 / 1; 
  margin: 0 auto 0 auto;
  overflow: hidden;

  


  @media screen and (min-width: 768px) {
    flex: 1; 
    max-width: none; 
    aspect-ratio: auto; 
    margin: 0;
  }

  @media screen and (min-width: 1200px) {
    margin-left: 20px;
  }
`;

export const TopImage = styled.img`
  position: absolute;
  top: 0;
  right: 0;
  width: 65%;
  aspect-ratio: 1 / 1;
  object-fit: cover;
  z-index: 1;
   border-radius: 4px; 

  @media screen and (min-width: 768px) {
    width: 72%;
    height: 78%;
    aspect-ratio: auto;
  }
`;

export const BottomImage = styled.img`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 65%;
  aspect-ratio: 1 / 1;
  object-fit: cover;
  z-index: 2;
   border-radius: 4px; 
  transform: translate(-5%, 5%); 

  @media screen and (min-width: 768px) {
    transform: translate(-10%, 10%);
  }
`;