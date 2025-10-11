
import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Contact from './components/Contact';
import SearchBar from './components/SearchBar';
import CategoryFilter from './components/CategoryFilter';
import ProductGrid from './components/ProductGrid';
import ProductSection from './components/ProductSection';
import CartSidebar from './components/CartSidebar';
import CheckoutModal from './components/CheckoutModal';
import { products } from './data/products';
import { useCart } from './hooks/useCart';
import { useSearch } from './hooks/useSearch';

function App() {
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

  const handleCheckout = () => {
    setIsCheckoutOpen(true);
    setIsCartOpen(false);
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
      />
      </div>
      <Hero />
      <div id="shop">
      <div style={{ padding: '20px 0' }}>
        <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      </div>
      <CategoryFilter
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />
      {selectedCategory === 'All' ? (
        <div style={{ padding: '40px 0' }}>
          <ProductSection
            title="Men's Andean Alpaca Sweaters"
            products={filteredProducts.filter(p => p.category === 'Men')}
            onAddToCart={addToCart}
          />
          <ProductSection
            title="Women's Andean Alpaca Sweaters"
            products={filteredProducts.filter(p => p.category === 'Women' && p.size)}
            onAddToCart={addToCart}
          />
          <ProductSection
            title="Women's Alpaca Ponchos"
            products={filteredProducts.filter(p => p.category === 'Women' && p.color)}
            onAddToCart={addToCart}
          />
        </div>
      ) : (
        <ProductGrid
          products={filteredProducts}
          onAddToCart={addToCart}
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
      <Contact />
      <CheckoutModal
        isOpen={isCheckoutOpen}
        onClose={handleCloseCheckout}
        total={getTotal()}
      />
    </div>
  );
}

export default App;
