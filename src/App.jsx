import { Route, Routes } from 'react-router-dom';
import SharedLayout from 'components/SharedLayout/SharedLayout';

import ErrorPage from 'pages/ErrorPage/ErrorPage';
import { AppWrapper } from './App.styled';
import { GlobalStyles } from './styles/GlobalStyles';
import HomePage from './pages/HomePage/HomePage';
import { PortfolioPage } from './pages/PortfolioPage/PortfolioPage';
import { TariffsPage } from './pages/TariffsPage/TariffsPage';
import { ContactsPage } from './pages/ContactsPage/ContactsPage';
import { ScrollToTop } from './components/ScrollToTop';



function App() {
  console.log("test");
  return (
    <AppWrapper>
      <GlobalStyles />
        <ScrollToTop />
      <Routes>
        <Route path="/" element={<SharedLayout />}>
    <Route index element={<HomePage />} />

          <Route path="/portfolio" element={<PortfolioPage />} />
          <Route path="/tariffs" element={<TariffsPage/>} />
          <Route path="/contacts" element={<ContactsPage/>} />
          
         
          <Route path="*" element={<ErrorPage />} />
        </Route>
      </Routes>
    </AppWrapper>
  );
}
export default App;
