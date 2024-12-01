import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CartProvider } from './contexts/CartContext';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { CartModal } from './components/cart/CartModal';
import { Home } from './pages/Home';
import { Women } from './pages/Women';
import { Men } from './pages/Men';
import { Kids } from './pages/Kids';
import { Sale } from './pages/Sale';

function App() {
  return (
    <CartProvider>
      <Router>
        <div className="min-h-screen flex flex-col">
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/women" element={<Women />} />
            <Route path="/men" element={<Men />} />
            <Route path="/kids" element={<Kids />} />
            <Route path="/sale" element={<Sale />} />
          </Routes>
          <Footer />
          <CartModal />
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;