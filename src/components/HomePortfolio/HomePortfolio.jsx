import { Container, GridGallery, GridItem, Image, MoreBtn, MoreBtnDesctop, Section, TitlePortfolio, WrapperTop } from "./HomePortfolio.styled";

export const HomePortfolio = () => {

const initialPhotos = [
  { id: 1, category: 'events', src: `${import.meta.env.BASE_URL}images/img5.webp`, type: 'small', alt: 'Весілля пара' },
  { id: 2, category: 'events', src: `${import.meta.env.BASE_URL}images/img5.webp`, type: 'small', alt: 'Наречена біля вікна' },
  { id: 3, category: 'portrait', src:`${import.meta.env.BASE_URL}images/img5.webp`, type: 'wide', alt: 'Портрет дівчини в кашкеті' },
  { id: 4, category: 'portrait', src: `${import.meta.env.BASE_URL}images/img5.webp`, type: 'tall', alt: 'Обійми на пероні' },
];


    return(
        <Section>
   <Container>
   <WrapperTop>
     <TitlePortfolio>Портфоліо</TitlePortfolio>
     <MoreBtn to='/portfolio'>
Переглянути портфоліо
    </MoreBtn>
   </WrapperTop>
    <GridGallery className="asymmetric">
      {initialPhotos.map((photo) => (
        <GridItem key={photo.id} $type={photo.type} $layout="asymmetric">
          <Image src={photo.src} alt={photo.alt} />
        </GridItem>
      ))}
    </GridGallery>
     <MoreBtnDesctop to='/portfolio'>
Переглянути портфоліо
    </MoreBtnDesctop>
   

   </Container>
   </Section>
    );
}
