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
  src={`${import.meta.env.BASE_URL}images/img9.JPG`}
  alt="main-photo"
/>
          <DescriptionWrapper>
            <Title>Про мене</Title>
          <Wrapper>
              <Description>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Blanditiis maiores a quod! Voluptatem repudiandae veniam
              perferendis impedit vel sequi atque.{' '}
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
          <TopImage   src={`${import.meta.env.BASE_URL}images/img8.JPG`} alt="top-image" />
          <BottomImage   src={`${import.meta.env.BASE_URL}images/img10.JPG`} alt="bottom-image" />
        </RightGallery>
      </AboutSection>
    </Container>
  );
};

export default About;
