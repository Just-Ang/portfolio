import styled from 'styled-components';

export const SectionContainer = styled.section`
 width: 100%;
  max-width: 750px;
  font-family: var(--main-font), sans-serif;

  padding-left: 10px;
  padding-right: 10px;
  margin-left: auto;
  margin-right: auto;

  display: flex;
  flex-direction: column;
  background-color: #ffffff; 
  
  @media screen and (min-width: 768px) {
    max-width: 994px;
    padding-left: 30px;
    padding-right: 30px;
  }
  @media screen and (min-width: 1200px) {
    max-width: 1448px;
  }
`;

export const Title = styled.h2`
font-family: var(--main-font);
    font-size: 24px;
    font-family: var(--second-font);
    font-weight: 800;
    letter-spacing: 0.05em;
    text-align: left;
    margin-top: 20px;
    margin-bottom: 25px;
    color: #000000;
    text-transform: capitalize;

  @media screen and (max-width: 767px) {
    font-size: 2rem;
    text-align: center;
    margin-bottom: 30px;
  }
`;

export const GridContainer = styled.div`
  display: flex;
  flex-direction: column;
   
  border-top: 1px solid rgba(134, 134, 134, 0.411);;
  border-bottom: 1px solid rgba(134, 134, 134, 0.411);;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    border-bottom: none; 
  }
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 30px 0;
  border-bottom: 1px solid #e0e0e0;

  &:last-child {
    border-bottom: none;
  }

  @media screen and (min-width: 768px) {
    flex: 1;
    padding: 40px 20px;
    border-bottom: 1px solid rgba(134, 134, 134, 0.411);;
    border-right: 1px solid rgba(134, 134, 134, 0.411);;
    

    &:first-child {
      padding-left: 0;
    }

    &:last-child {
      border-right: none;
      padding-right: 0;
      border-bottom: 1px solid rgba(134, 134, 134, 0.411);
    }
  }

  @media screen and (min-width: 1200px) {
    padding: 40px 40px;
    
    &:first-child {
      padding-left: 0;
    }
    &:last-child {
      padding-right: 0;
    }
  }
`;

export const CardContent = styled.div`
height: 280px;
  display: flex;
  flex-direction: column;
  margin-bottom: 24px;
`;

export const CardTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 20px;
`;

export const FeatureList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0 0 30px 0;
`;

export const FeatureItem = styled.li`
  font-size: 0.95rem;
  line-height: 1.6;
  margin-bottom: 8px;
  position: relative;
  padding-left: 15px;

  &::before {
    content: "-";
    position: absolute;
    left: 0;
  }
`;

export const Price = styled.div`
  font-size: 1.15rem;
  font-weight: 600;
  align-self: flex-end;
  margin-top: auto;
  
  @media screen and (max-width: 767px) {
    margin-top: 15px;
  }
`;

export const CardFooter = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  width: 100%;
`;

export const CardImage = styled.img`
  width: 100%;
  height: auto;
  aspect-ratio: 16 / 10;
  object-fit: cover;
  border-radius: 4px;
  filter: grayscale(100%); 
  transition: filter 0.3s ease;

  &:hover {
    filter: grayscale(0%); 
  }
`;

export const Button = styled.a`
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

  &:hover {
    background-color: #000000;
    color: #ffffff;
  }

  &:active {
    transform: scale(0.98);
  }
`;