
import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Blog from './components/Blog';
import Contact from './components/Contact';
import SearchBar from './components/SearchBar';
import CategoryFilter from './components/CategoryFilter';
import ProductGrid from './components/ProductGrid';
import ProductSection from './components/ProductSection';
import CartSidebar from './components/CartSidebar';
import CheckoutModal from './components/CheckoutModal';
import ProductDetailsModal from './components/ProductDetailsModal';
import { products } from './data/products';
import { useCart } from './hooks/useCart';
import { useSearch } from './hooks/useSearch';
import { useResponsive } from './hooks/useResponsive';
import { useAuth } from './hooks/useAuth';
import AuthModal from './components/AuthModal';
import { seedProducts } from './seedProducts';

function App() {
  const { isMobile } = useResponsive();
  const { user, login, logout } = useAuth();
  const {
    cart,
    isCartOpen,
    setIsCartOpen,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart,
    getTotal,
    getItemCount
  } = useCart();

  const {
    searchTerm,
    setSearchTerm,
    selectedCategory,
    setSelectedCategory,
    filteredProducts
  } = useSearch(products);

  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isDetailsOpen, setIsDetailsOpen] = useState(false);
  const [isAuthOpen, setIsAuthOpen] = useState(false);

  const handleViewDetails = (product) => {
    setSelectedProduct(product);
    setIsDetailsOpen(true);
  };

  const handleCheckout = () => {
    if (!user) {
      setIsAuthOpen(true);
      setIsCartOpen(false);
    } else {
      setIsCheckoutOpen(true);
      setIsCartOpen(false);
    }
  };

  const handleLogin = (userData) => {
    login(userData);
    if (cart.length > 0) {
      setIsCheckoutOpen(true);
    }
  };

  const handleSeedProducts = async () => {
    if (window.confirm('Add all products to database? (Do this only once!)')) {
      await seedProducts();
      alert('Products added! Check console.');
    }
  };

  const handleCloseCheckout = () => {
    setIsCheckoutOpen(false);
    clearCart();
  };

  return (
    <div className="App" style={{ 
      scrollBehavior: 'smooth',
      backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5)), url(/assets/CountrySideBck2.jpg)',
      backgroundSize: 'cover',
      backgroundAttachment: 'fixed',
      backgroundPosition: 'center'
    }}>
      <div id="home">
      <Header
        cartItemCount={getItemCount()}
        onCartClick={() => setIsCartOpen(true)}
        user={user}
        onAuthClick={() => setIsAuthOpen(true)}
        onLogout={logout}
      />
      </div>
      <Hero />
      <div id="shop">
      <div style={{ padding: isMobile ? '15px 0' : '20px 0' }}>
        <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      </div>
      <CategoryFilter
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />
      {selectedCategory === 'All' ? (
        <div style={{ padding: isMobile ? '20px 0' : '40px 0' }}>
          <ProductSection
            title="Men's Andean Alpaca Sweaters"
            products={filteredProducts.filter(p => p.category === 'Men')}
            onAddToCart={addToCart}
            onViewDetails={handleViewDetails}
          />
          <ProductSection
            title="Women's Andean Alpaca Sweaters"
            products={filteredProducts.filter(p => p.category === 'Women' && p.size)}
            onAddToCart={addToCart}
            onViewDetails={handleViewDetails}
          />
          <ProductSection
            title="Women's Alpaca Ponchos"
            products={filteredProducts.filter(p => p.category === 'Women' && p.color)}
            onAddToCart={addToCart}
            onViewDetails={handleViewDetails}
          />
        </div>
      ) : (
        <ProductGrid
          products={filteredProducts}
          onAddToCart={addToCart}
          onViewDetails={handleViewDetails}
        />
      )}
      <CartSidebar
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cart={cart}
        onUpdateQuantity={updateQuantity}
        onRemove={removeFromCart}
        total={getTotal()}
        onCheckout={handleCheckout}
      />
      </div>
      <About />
      <Blog />
      <Contact />
      <CheckoutModal
        isOpen={isCheckoutOpen}
        onClose={handleCloseCheckout}
        total={getTotal()}
        user={user}
        cart={cart}
      />
      <AuthModal
        isOpen={isAuthOpen}
        onClose={() => setIsAuthOpen(false)}
        onLogin={handleLogin}
      />
      <ProductDetailsModal
        product={selectedProduct}
        isOpen={isDetailsOpen}
        onClose={() => setIsDetailsOpen(false)}
        onAddToCart={addToCart}
        user={user}
      />
    </div>
  );
}

export default App;
