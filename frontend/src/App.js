import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home'
import Signup from './pages/Signup';
import Login from './pages/Login';
import About from './pages/About';
import ProductCategory from './pages/ProductCategory';
import ProductDetails from './pages/ProductDetails';
import DrinkSetMain from './pages/DrinkSetMain';
import NotFoundPage from './pages/NotFoundPage';
import MyAccount from './pages/MyAccount';
import MyCart from './pages/MyCart';
import TermsConditions from './pages/TermsConditions';
import Faq from './pages/Faq';
import ContactUs from './pages/ContactUs';
import OrderConfirmation from './pages/OrderConfirmation'; 
import DrinkSetDetails from './pages/DrinkSetDetails';
import { ShopContextProvider } from "./context/shop-context";
import ReviewDashboard from './CRUD/Reviews/ReviewDashboard';
import Admin from './pages/Admin';
function App() {
  return (
    <>
   
     <BrowserRouter>
     <ShopContextProvider>
      <Routes>
        <Route path="/signup" element={<Signup/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/" element={<Home/>} />

        <Route path="/tableware" element={<ProductCategory/>} />
        <Route path="/about" element={<About />} />
        <Route path="/ProductDetails/:id" element={<ProductDetails />} />
        <Route path="/*" element={<NotFoundPage />} />

        <Route path="/drinkset" element={<DrinkSetMain/>}/>
        <Route path="/DrinkSetDetails/:id" element={<DrinkSetDetails />} />

        <Route path="/myaccount" element={<MyAccount/>} />
        <Route path="/mycart" element={<MyCart/>} />

        <Route path="/termsconditions" element={<TermsConditions/>} />
        <Route path="/faq" element={<Faq/>} />
        <Route path="/contact" element={<ContactUs/>} />
        <Route path="/orderconfirmation" element={<OrderConfirmation/>} />

        <Route path="/CURD/reviews" element={<ReviewDashboard  />} />
        
        <Route path="/adminportal" element={<Admin />} />
      </Routes>
      </ShopContextProvider>
     </BrowserRouter>
    
    </>
  );
}

export default App;
