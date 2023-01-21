
import { Routes, Route } from 'react-router-dom';

//css
import './assets/css/App.css';
import './assets/css/MainStyle.css';

//layouts
import Header from './layouts/Header';
import Footer from './layouts/Footer';

//pages 
import Home from './pages/Home/HomePage';
import Calories from './pages/Calories/CaloriesPage';
import Menu from './pages/Menu/MenuPage';
import Delivery from './pages/Delivery/DeliveryPage';
import About from './pages/About/AboutPage';
import FAQ from './pages/Faq/FAQPage';
import DietPage from './pages/Diet/DietPage';
import CartPage from './pages/Cart/CartPage';
import WishlistPage from './pages/Wishlist/WishListPage';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/CartPage" element={<CartPage />} />
        <Route path="/WishlistPage" element={<WishlistPage />} />
        <Route path="/MenuPage" element={<Menu />} />
        <Route path="/CaloriesPage" element={<Calories />} />
        <Route path="/DeliveryPage" element={<Delivery />} />
        <Route path="/AboutPage" element={<About />} />
        <Route path="/FAQPage" element={<FAQ />} />
        <Route path="/DietPage/:dietId" element={<DietPage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
