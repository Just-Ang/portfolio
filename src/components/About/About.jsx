import {
  AboutSection,
  BottomImage,
  Container,
  Description,
  DescriptionWrapper,
  LeftContent,
  MainPhoto,
  RightGallery,
  Title,
  TopImage,
  Wrapper,
} from './About.styled';

const About = () => {
  return (
    <Container>
      <AboutSection>
        <LeftContent>
<MainPhoto
  src={`${import.meta.env.BASE_URL}images/img9.webp`}
  alt="main-photo"
  loading="eager"
    decoding="async"
/>
          <DescriptionWrapper>
            <Title>Про мене</Title>
          <Wrapper>
              <Description>
               Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat
              consequatur adipisci nobis atque quibusdam ipsam dolor quasi qui
              doloribus totam.{' '}
            </Description>

            <Description>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat
              consequatur adipisci nobis atque quibusdam ipsam dolor quasi qui
              doloribus totam.{' '}
            </Description>
          </Wrapper>
          </DescriptionWrapper>
        </LeftContent>

        <RightGallery>
          <TopImage  loading="lazy" src={`${import.meta.env.BASE_URL}images/img8.webp`} alt="top-image" />
          <BottomImage  loading="lazy" src={`${import.meta.env.BASE_URL}images/img10.webp`} alt="bottom-image" />
        </RightGallery>
      </AboutSection>
    </Container>
  );
};

export default About;
