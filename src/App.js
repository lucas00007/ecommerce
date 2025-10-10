
import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import SearchBar from './components/SearchBar';
import CategoryFilter from './components/CategoryFilter';
import ProductGrid from './components/ProductGrid';
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
    <div className="App">
      <Header
        cartItemCount={getItemCount()}
        onCartClick={() => setIsCartOpen(true)}
      />
      <Hero />
      <div style={{ padding: '20px 0' }}>
        <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      </div>
      <CategoryFilter
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />
      <ProductGrid
        products={filteredProducts}
        onAddToCart={addToCart}
      />
      <CartSidebar
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cart={cart}
        onUpdateQuantity={updateQuantity}
        onRemove={removeFromCart}
        total={getTotal()}
        onCheckout={handleCheckout}
      />
      <CheckoutModal
        isOpen={isCheckoutOpen}
        onClose={handleCloseCheckout}
        total={getTotal()}
      />
    </div>
  );
}

export default App;
