import React, { useEffect, useState } from 'react'
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home/Home'
import Cart from './pages/Cart/Cart'
import PlaceOrder from './pages/PlaceOrder/PlaceOrder'
import { Route, Routes } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import Loginpopup from './components/Loginpopup/Loginpopup';
import Verify from './pages/Verify/Verify';
import MyOrders from './pages/MyOrders/MyOrders';


const App = () => {
  const [showLogin, setShowLogin] = useState(false);


  useEffect(() => {
    const handleBodyClass = () => {
      if (showLogin) {
        document.body.classList.add('overflow-hidden');
        window.scrollTo(0, 0); // Scroll to the top of the page
      } else {
        document.body.classList.remove('overflow-hidden');
      }
    };

    handleBodyClass();

    return () => {
      handleBodyClass();
    };
  }, [showLogin]);



  return (
    <>
      {showLogin ? <Loginpopup setShowLogin={setShowLogin} /> : <></>}
      <div className='app'>
        <Navbar setShowLogin={setShowLogin} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart setShowLogin={setShowLogin} />} />
          <Route path="/order" element={<PlaceOrder />} />
          <Route path="/verify" element={<Verify />} />
          <Route path="/myorders" element={<MyOrders />} />
        </Routes>
      </div>
      <Footer />
    </>
  )
}

export default App;     