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
  src={`${import.meta.env.BASE_URL}images/me3.webp`}
  alt="main-photo"
  loading="eager"
    decoding="async"
/>
          <DescriptionWrapper>
            <Title>Про мене</Title>
          <Wrapper>
              <Description>
              Я — фотограф, який бачить красу в щирих емоціях і справжніх моментах. Моя мета — не просто зробити фото, а зберегти історії, настрій та спогади, які залишаться з вами на все життя.

            </Description>

            <Description>
             У кожній зйомці для мене важливі довіра, комфорт і природність. Я прагну створювати кадри, в яких люди впізнають себе справжніми, а кожна фотографія викликає теплі емоції навіть через багато років.
            </Description>
          </Wrapper>
          </DescriptionWrapper>
        </LeftContent>

        <RightGallery>
          <TopImage  loading="lazy" src={`${import.meta.env.BASE_URL}images/me1.webp`} alt="top-image" />
          <BottomImage  loading="lazy" src={`${import.meta.env.BASE_URL}images/me2.webp`} alt="bottom-image" />
        </RightGallery>
      </AboutSection>
    </Container>
  );
};

export default About;
