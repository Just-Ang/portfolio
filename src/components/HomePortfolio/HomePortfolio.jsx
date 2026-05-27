import { Container, GridGallery, GridItem, Image, MoreBtn, MoreBtnDesctop, Section, TitlePortfolio, WrapperTop } from "./HomePortfolio.styled";

export const HomePortfolio = () => {

const initialPhotos = [
  { id: 1, category: 'events', src: 'https://images.unsplash.com/photo-1519741497674-611481863552', type: 'small', alt: 'Весілля пара' },
  { id: 2, category: 'events', src: 'https://images.unsplash.com/photo-1595152772835-219674b2a8a6', type: 'small', alt: 'Наречена біля вікна' },
  { id: 3, category: 'portrait', src: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb', type: 'wide', alt: 'Портрет дівчини в кашкеті' },
  { id: 4, category: 'portrait', src: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d', type: 'tall', alt: 'Обійми на пероні' },
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
