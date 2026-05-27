import { Outlet } from 'react-router-dom';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import { LayoutWrapper, MainContent } from './SharedLayout.styled';

// import { Footer } from '../Footer/Footer';

const SharedLayout = () => {
  return (
    <>
    <LayoutWrapper>
      <Header />
    <MainContent>
        <Outlet />
    </MainContent>
 
      <Footer /> 
      </LayoutWrapper>
    </> 
  );
};

export default SharedLayout;