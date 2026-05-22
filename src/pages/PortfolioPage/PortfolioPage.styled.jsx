import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  max-width: 750px;
  font-family: var(--main-font), sans-serif;

  padding-left: 10px;
  padding-right: 10px;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
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
  font-size: 24px;
  font-weight: 400;
  letter-spacing: 0.05em;
  text-align: left;
  margin-top: 40px;
  margin-bottom: 25px;
  color: #000000;
  text-transform: capitalize;
`;

export const TabList = styled.ul`
  display: flex;
  gap: 24px;
  list-style: none;
  padding: 0;
  margin: 0 0 35px 0;
  border-bottom: 1px solid #eaeaea;
  overflow-x: auto; 
  white-space: nowrap;
  
  &::-webkit-scrollbar {
    display: none; 
  }
`;

export const TabItem = styled.li`
  display: inline-block;
`;

export const TabButton = styled.button`
  background: none;
  border: none;
  font-size: 14px;
  padding-bottom: 12px;
  cursor: pointer;
  color: ${props => props.$isActive ? '#000000' : '#8e8e93'};
  font-weight: ${props => props.$isActive ? '400' : '300'};
  position: relative;
  transition: color 0.2s ease;

  &::after {
    content: '';
    position: absolute;
    bottom: -1px;
    left: 0;
    width: 100%;
    height: 1px;
    background-color: #000000;
    transform: ${props => props.$isActive ? 'scaleX(1)' : 'scaleX(0)'};
    transition: transform 0.2s ease;
  }

  &:hover {
    color: #000000;
  }
`;

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
    grid-template-columns: repeat(2, 1fr);
  }

  /* режим асиметрії */
  &.asymmetric {
    margin-bottom:20px;
    grid-template-columns: repeat(3, 1fr);
  }
`;

export const GridItem = styled.div`
  width: 100%;
  overflow: hidden;
  background-color: #f9f9f9;

  aspect-ratio: 4 / 3;

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
      aspect-ratio: 1 / 2;
    `}
  }
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: grayscale(100%); /* Робимо фото чорно-білими, як у тебе на скріншоті */
  transition: filter 0.4s ease, transform 0.4s ease;

  &:hover {
    filter: grayscale(0%); /* При наведенні фото стає кольоровим (можна прибрати, якщо хочеш суворий ч/б) */
    transform: scale(1.01);
  }
`;

export const ExpandButton = styled.button`
  background: none;
  border: none;
  font-size: 13px;
  color: #000000;
  text-decoration: underline;
  text-underline-offset: 4px;
  cursor: pointer;
  align-self: flex-start; 
  font-weight: 300;
  transition: opacity 0.2s ease;

  &:hover {
    opacity: 0.7;
  }
`;