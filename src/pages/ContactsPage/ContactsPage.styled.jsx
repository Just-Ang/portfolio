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
  }
`;

export const FlexWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
    border-bottom: 1px solid rgb(61, 60, 60);;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    gap: 48px;
  }
  
  @media screen and (min-width: 1200px) {
    gap: 80px;
  }
`;

/* Ліва колонка — Форма */
export const FormColumn = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 768px) {
    max-width: 380px;
  }
  @media screen and (min-width: 1200px) {
    max-width: 450px;
  }
`;

export const Subtitle = styled.h3`
  font-size: 1.25rem;
  font-weight: 400;
  margin-bottom: 30px;
font-family: var(--main-font);
  letter-spacing: 0.5px;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 25px;
  height: 100%;
    justify-content: flex-start;
  padding-bottom:35px;
  

`;

export const Input = styled.input`
  width: 100%;
  padding: 12px 0;
  background-color: transparent;
  border: none;
  border-bottom: 1px solid #000000;
  color: #000000;
  font-size:18px;
  outline: none;
  box-sizing: border-box;

  &:focus {
    border-bottom: 2px solid #000000;
  }
`;

export const TextArea = styled.textarea`
  width: 100%;
  padding: 12px 0;
  background-color: transparent;
  border: none;
  border-bottom: 1px solid #000000;
  color: #000000;
  font-size: 0.95rem;
  outline: none;
  resize: none;
  box-sizing: border-box;
  font-family: inherit;

  &:focus {
    border-bottom: 2px solid #000000;
  }
`;

export const Button = styled.button`
  width: 100%;
  padding: 14px 24px;
  background-color: transparent;
  color: #000000;
  border: 1px solid #000000;
  font-size: 0.9rem;
  text-transform: uppercase;
  letter-spacing: 1px;
  cursor: pointer;
  margin-top: 15px;
  transition: all 0.2s ease-in-out;

  &:hover {
    background-color: #000000;
    color: #ffffff;
  }
`;

/* Права колонка — Візуальна частина та Інфо */
export const InfoColumn = styled.div`
  flex: 1.5;
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export const ImageWrapper = styled.div`
  width: 100%;
  overflow: hidden;
`;

export const ContactImage = styled.img`
  width: 100%;
  height: auto;
  aspect-ratio: 16 / 10;
  object-fit: cover;
  filter: grayscale(100%);
`;

export const MetaRow = styled.div`
  display: flex;
  flex-direction: column;

  padding-top: 10px;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
  }
`;

export const LocationBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
      padding-bottom: 35px;
`;

export const SocialBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-bottom: 20px;
  
  @media screen and (min-width: 768px) {
    align-items: flex-end;
     margin-bottom: 0px;
  }
`;

export const MetaLabel = styled.span`
  font-size: 0.8rem;
  text-transform: uppercase;
  color: #767676;
  letter-spacing: 1px;
`;

export const LocationText = styled.p`
  font-size: 1.1rem;
  font-weight: 500;
  margin: 0;
`;

export const IconGroup = styled.div`
  display: flex;
  gap: 20px;
`;

export const IconLink = styled.a`
  color: #000000;
  display: inline-block;
  transition: transform 0.2s ease, opacity 0.2s ease;

  svg {
    width: 24px;
    height: 24px;
  }

  &:hover {
    opacity: 0.6;
    transform: translateY(-2px);
  }
`;