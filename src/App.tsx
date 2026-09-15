import React, { useState } from 'react';
import { Product, CartItem } from './types';
import { PRODUCTS, INITIAL_CART_ITEMS } from './data/products';
import { Header } from './components/Header';
import { BottomNav } from './components/BottomNav';
import { HomeScreen } from './components/HomeScreen';
import { CatalogScreen } from './components/CatalogScreen';
import { ProductDetailScreen } from './components/ProductDetailScreen';
import { CartScreen } from './components/CartScreen';
import { AccountScreen } from './components/AccountScreen';
import { BulkQuoteModal } from './components/BulkQuoteModal';
import { CheckoutModal } from './components/CheckoutModal';
import { Toast } from './components/Toast';

export const App: React.FC = () => {
  const [currentTab, setCurrentTab] = useState<'home' | 'catalog' | 'detail' | 'cart' | 'quote' | 'account'>('home');
  const [previousTab, setPreviousTab] = useState<'home' | 'catalog'>('home');
  const [selectedProduct, setSelectedProduct] = useState<Product>(PRODUCTS[0]);
  const [catalogSector, setCatalogSector] = useState<string>('all');
  
  // Cart state initialized with the 3 items shown in design specs
  const [cartItems, setCartItems] = useState<CartItem[]>(INITIAL_CART_ITEMS);

  // Modals state
  const [rfqModalOpen, setRfqModalOpen] = useState(false);
  const [rfqPrefillSector, setRfqPrefillSector] = useState<string>('security');
  const [rfqPrefillProduct, setRfqPrefillProduct] = useState<string>('');
  const [checkoutModalOpen, setCheckoutModalOpen] = useState(false);

  // Toast feedback state
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [toastVisible, setToastVisible] = useState(false);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setToastVisible(true);
    setTimeout(() => {
      setToastVisible(false);
    }, 2800);
  };

  const totalCartCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  // Total payable for checkout calculation
  const totalAmount = cartItems.reduce((sum, item) => {
    let unitPrice = item.product.price;
    if (item.quantity >= 50 && item.product.wholesaleTiers[2]) {
      unitPrice = item.product.wholesaleTiers[2].pricePerUnit;
    } else if (item.quantity >= 10 && item.product.wholesaleTiers[1]) {
      unitPrice = item.product.wholesaleTiers[1].pricePerUnit;
    }
    return sum + unitPrice * item.quantity;
  }, 0);

  // Navigation handler
  const handleNavigate = (tab: string, filterSector?: string) => {
    if (filterSector) {
      setCatalogSector(filterSector);
    }
    if (tab === 'quote') {
      setRfqPrefillSector('security');
      setRfqPrefillProduct('');
      setRfqModalOpen(true);
      return;
    }
    if (tab !== 'detail') {
      if (tab === 'home' || tab === 'catalog') {
        setPreviousTab(tab as any);
      }
    }
    setCurrentTab(tab as any);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Select a product to view details
  const handleSelectProduct = (product: Product) => {
    setSelectedProduct(product);
    setCurrentTab('detail');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Add to cart handler
  const handleAddToCart = (
    product: Product,
    quantity: number = 1,
    size?: string,
    color?: string
  ) => {
    const chosenSize = size || product.sizes[0] || 'Standard';
    const chosenColor = color || product.colors[0]?.name || 'Standard';

    setCartItems((prevItems) => {
      // Check if same product, size, and color already in cart
      const existingIndex = prevItems.findIndex(
        (i) =>
          i.productId === product.id &&
          i.selectedSize === chosenSize &&
          i.selectedColor === chosenColor
      );

      if (existingIndex > -1) {
        const updated = [...prevItems];
        updated[existingIndex].quantity += quantity;
        return updated;
      } else {
        const newItem: CartItem = {
          id: `cart-${Date.now()}-${Math.random()}`,
          productId: product.id,
          product,
          selectedSize: chosenSize,
          selectedColor: chosenColor,
          quantity
        };
        return [...prevItems, newItem];
      }
    });

    showToast(`Added ${quantity} × ${product.title} to cart!`);
  };

  // Buy Now handler
  const handleBuyNow = (
    product: Product,
    quantity: number = 1,
    size?: string,
    color?: string
  ) => {
    handleAddToCart(product, quantity, size, color);
    setCheckoutModalOpen(true);
  };

  // Cart quantity update
  const handleUpdateQuantity = (itemId: string, newQuantity: number) => {
    if (newQuantity <= 0) {
      handleRemoveItem(itemId);
      return;
    }
    setCartItems((prev) =>
      prev.map((item) => (item.id === itemId ? { ...item, quantity: newQuantity } : item))
    );
  };

  // Remove item
  const handleRemoveItem = (itemId: string) => {
    setCartItems((prev) => prev.filter((i) => i.id !== itemId));
    showToast('Item removed from cart.');
  };

  // Clear cart
  const handleClearCart = () => {
    setCartItems([]);
    showToast('Shopping cart cleared.');
  };

  // Open RFQ modal with optional prefill
  const handleOpenRFQ = (sector?: string, productTitle?: string) => {
    setRfqPrefillSector(sector || 'security');
    setRfqPrefillProduct(productTitle || '');
    setRfqModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#faf8ff] text-[#131b2e] flex flex-col font-sans selection:bg-[#d6e3fe] selection:text-[#0050cc]">
      {/* Toast Notification */}
      <Toast message={toastMessage} visible={toastVisible} />

      {/* Top Header */}
      <Header
        currentTab={currentTab}
        cartCount={totalCartCount}
        onNavigate={handleNavigate}
        showBack={currentTab === 'detail' || currentTab === 'cart'}
        onBack={() => {
          if (currentTab === 'detail') {
            setCurrentTab(previousTab);
          } else if (currentTab === 'cart') {
            setCurrentTab('home');
          }
        }}
      />

      {/* Main Content Area */}
      <main className="flex-1 pt-14 flex flex-col">
        {currentTab === 'home' && (
          <HomeScreen
            onNavigate={handleNavigate}
            onSelectProduct={handleSelectProduct}
            onAddToCart={(prod, qty) => handleAddToCart(prod, qty)}
            onOpenRFQ={handleOpenRFQ}
          />
        )}

        {currentTab === 'catalog' && (
          <CatalogScreen
            initialSector={catalogSector}
            onSelectProduct={handleSelectProduct}
            onAddToCart={(prod, qty) => handleAddToCart(prod, qty)}
            onOpenRFQ={handleOpenRFQ}
          />
        )}

        {currentTab === 'detail' && (
          <ProductDetailScreen
            product={selectedProduct}
            onBack={() => setCurrentTab(previousTab)}
            onAddToCart={handleAddToCart}
            onBuyNow={handleBuyNow}
            onOpenRFQ={handleOpenRFQ}
          />
        )}

        {currentTab === 'cart' && (
          <CartScreen
            cartItems={cartItems}
            onUpdateQuantity={handleUpdateQuantity}
            onRemoveItem={handleRemoveItem}
            onClearCart={handleClearCart}
            onContinueShopping={() => handleNavigate('catalog')}
            onProceedCheckout={() => setCheckoutModalOpen(true)}
          />
        )}

        {currentTab === 'account' && (
          <AccountScreen
            onOpenRFQ={() => handleOpenRFQ()}
            onNavigate={handleNavigate}
          />
        )}
      </main>

      {/* Fixed Bottom Navigation */}
      <BottomNav
        currentTab={currentTab}
        cartCount={totalCartCount}
        onSelectTab={handleNavigate}
      />

      {/* Enterprise Bulk RFQ Modal */}
      <BulkQuoteModal
        isOpen={rfqModalOpen}
        onClose={() => setRfqModalOpen(false)}
        onSuccess={(msg) => showToast(msg)}
        prefillSector={rfqPrefillSector}
        prefillProduct={rfqPrefillProduct}
      />

      {/* Commercial Checkout Modal */}
      <CheckoutModal
        isOpen={checkoutModalOpen}
        onClose={() => setCheckoutModalOpen(false)}
        totalAmount={totalAmount}
        onOrderComplete={(orderId) => {
          setCartItems([]);
          showToast(`Order #${orderId} confirmed! B2B Invoice generated.`);
          setCurrentTab('account');
        }}
      />
    </div>
  );
};

export default App;
