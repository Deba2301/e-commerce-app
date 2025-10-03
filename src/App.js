import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ProductDetailPage from './pages/ProductDetailPage';
import CartPage from './pages/CartPage';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div className="App" style={{ fontFamily: 'Arial, sans-serif' }}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/product/:id/details" element={<ProductDetailPage />} />
          <Route path="/cart" element={<CartPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;