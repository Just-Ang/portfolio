
import * as S from './TariffsPage.styled';

const individualImg =`${import.meta.env.BASE_URL}images/portrait2.webp`;
const familyImg = `${import.meta.env.BASE_URL}images/family4.webp`;
const eventsImg = `${import.meta.env.BASE_URL}images/event1.webp`;
import { motion } from "framer-motion";
export const TariffsPage = () => {
  return (
    <S.SectionContainer>
       <motion.div
                initial={{ opacity: 0, y: 80 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{
                  duration: 1,
                  ease: "easeOut"
                }}
              >
      <S.Title>Тарифи</S.Title>
      
      <S.GridContainer>
        {/* Картка 1: Індивідуальна зйомка */}
        <S.Card>
          <S.CardContent>
            <S.CardTitle>Індивідуальна зйомка</S.CardTitle>
            <S.FeatureList>
              <S.FeatureItem>Допомога в підборі образу та локації</S.FeatureItem>
              <S.FeatureItem>Допомога в позуванні</S.FeatureItem>
              <S.FeatureItem>До 1-х годин зйомки</S.FeatureItem>
              <S.FeatureItem>До 30 фотографій у ретуші</S.FeatureItem>
             
              <S.FeatureItem>Термін здачі до 2-х тижнів</S.FeatureItem>
            </S.FeatureList>
            <S.Price>5.000₴</S.Price>
          </S.CardContent>
          <S.CardFooter>
            <S.CardImage loading="lazy" src={individualImg} alt="Індивідуальна зйомка" />
            <S.Button href="https://t.me/username">
              Записатися на зйомку
            </S.Button>
          </S.CardFooter>
        </S.Card>

        {/* Картка 2: Сімейна / love-story */}
        <S.Card>
          <S.CardContent>
            <S.CardTitle>Сімейна / love-story</S.CardTitle>
            <S.FeatureList>
              <S.FeatureItem>Допомога в підборі образу та локації</S.FeatureItem>
              <S.FeatureItem>Допомога в позуванні</S.FeatureItem>
              <S.FeatureItem>До 2,5 годин зйомки</S.FeatureItem>
              <S.FeatureItem>До 40 фотографій у ретуші</S.FeatureItem>
             
              <S.FeatureItem>Термін здачі до 2-х тижнів</S.FeatureItem>
            </S.FeatureList>
            <S.Price>7.000₴</S.Price>
          </S.CardContent>
          <S.CardFooter>
            <S.CardImage loading="lazy" src={familyImg} alt="Сімейна або love-story зйомка" />
            <S.Button href="https://t.me/username">
              Записатися на зйомку
            </S.Button>
          </S.CardFooter>
        </S.Card>

        {/* Картка 3: Заходи */}
        <S.Card>
          <S.CardContent>
            <S.CardTitle>Заходи</S.CardTitle>
            <S.FeatureList>
              <S.FeatureItem>Виїзд на місце проведення</S.FeatureItem>
              <S.FeatureItem>Групові та індивідуальні фото в межах заходу</S.FeatureItem>
              <S.FeatureItem>До 80 фотографій у ретуші</S.FeatureItem>
              <S.FeatureItem>Усі вдалі вихідні матеріали</S.FeatureItem>
              <S.FeatureItem>Термін здачі до 3-x тижнів</S.FeatureItem>
            </S.FeatureList>
            <S.Price>15.000₴</S.Price>
          </S.CardContent>
          <S.CardFooter>
            <S.CardImage loading="lazy" src={eventsImg} alt="Зйомка заходів" />
            <S.Button href="https://t.me/username">
              Записатися на зйомку
            </S.Button>
          </S.CardFooter>
        </S.Card>
      </S.GridContainer>
      </motion.div>
    </S.SectionContainer>
  );
};