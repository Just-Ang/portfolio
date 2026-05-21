import { Outlet } from 'react-router-dom';
import Header from '../Header/Header';

// import { Footer } from '../Footer/Footer';

const SharedLayout = () => {
  return (
    <>
      <Header />
       <main style={{ flex: 1 }}>
        <Outlet />
      </main>
{/* 
      <Footer /> */}
    </>
  );
};

export default SharedLayout;