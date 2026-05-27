import About from '../../components/About/About';
import Hero from '../../components/Hero/Hero';
import { HomePortfolio } from '../../components/HomePortfolio/HomePortfolio';
import { Container, } from './HomePage.styled';
import { motion } from "framer-motion";

const HomePage = () => {
  return (
    <Container>
       <motion.div
  initial={{ opacity: 0, y: 80 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, amount: 0.3 }}
  transition={{
    duration: 1,
    ease: "easeOut"
  }}
> <Hero></Hero></motion.div>
    <motion.div
  initial={{ opacity: 0, y: 80 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, amount: 0.3 }}
  transition={{
    duration: 1,
    ease: "easeOut"
  }}
><About></About></motion.div> 
       <motion.div
  initial={{ opacity: 0, y: 80 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, amount: 0.3 }}
  transition={{
    duration: 1,
    ease: "easeOut"
  }}
><HomePortfolio></HomePortfolio></motion.div>
      
  
    </Container>
  );
};

export default HomePage;
