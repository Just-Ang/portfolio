import About from '../../components/About/About';
import Hero from '../../components/Hero/Hero';
import { HomePortfolio } from '../../components/HomePortfolio/HomePortfolio';
import { Container, } from './HomePage.styled';

const HomePage = () => {
  return (
    <Container>
      <Hero></Hero>
      <About></About>
      <HomePortfolio></HomePortfolio>
      
  
    </Container>
  );
};

export default HomePage;
