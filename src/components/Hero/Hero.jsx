import { Content, Description, HeroSection, OutlineButton, Subtitle, Title } from "./Hero.styled";

export default function Hero() {
  return (
    <HeroSection>
      <Content>
        <Subtitle>Фотограф</Subtitle>
        <Title>Діана Прізвище</Title>
        <Description>
          Сучасні та креативні зйомки бла бла бла бла 
        </Description>
        <OutlineButton>запис</OutlineButton>
      </Content>
      
    </HeroSection>
  );
}