import { Content, Description, HeroSection, OutlineButton, Subtitle, Title } from "./Hero.styled";

export default function Hero() {
  return (
    <HeroSection>
      <Content>
        <Subtitle>Фотограф</Subtitle>
        <Title>Данило Левицький</Title>
        <Description>
          Сучасні та креативні зйомки
        </Description>
        <OutlineButton>запис</OutlineButton>
      </Content>
      
    </HeroSection>
  );
}