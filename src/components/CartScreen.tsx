import React, { useState } from 'react';
import { CartItem } from '../types';

interface CartScreenProps {
  cartItems: CartItem[];
  onUpdateQuantity: (itemId: string, newQuantity: number) => void;
  onRemoveItem: (itemId: string) => void;
  onClearCart: () => void;
  onContinueShopping: () => void;
  onProceedCheckout: () => void;
}

export const CartScreen: React.FC<CartScreenProps> = ({
  cartItems,
  onUpdateQuantity,
  onRemoveItem,
  onClearCart,
  onContinueShopping,
  onProceedCheckout
}) => {
  const [couponCode, setCouponCode] = useState('');
  const [appliedCoupon, setAppliedCoupon] = useState<{ code: string; discount: number } | null>({
    code: 'WELCOME100',
    discount: 100
  });
  const [couponError, setCouponError] = useState('');

  // Calculations
  const subtotal = cartItems.reduce((sum, item) => {
    // Check wholesale tier pricing if bulk quantity
    let unitPrice = item.product.price;
    if (item.quantity >= 50 && item.product.wholesaleTiers[2]) {
      unitPrice = item.product.wholesaleTiers[2].pricePerUnit;
    } else if (item.quantity >= 10 && item.product.wholesaleTiers[1]) {
      unitPrice = item.product.wholesaleTiers[1].pricePerUnit;
    }
    return sum + unitPrice * item.quantity;
  }, 0);

  const freeShippingThreshold = 2000;
  const shippingFee = subtotal >= freeShippingThreshold || subtotal === 0 ? 0 : 150;
  const discountAmount = appliedCoupon ? appliedCoupon.discount : 0;
  const totalPayable = Math.max(0, subtotal - discountAmount + shippingFee);
  const remainingForFreeShipping = Math.max(0, freeShippingThreshold - subtotal);
  const freeShippingProgress = Math.min(100, Math.round((subtotal / freeShippingThreshold) * 100));

  const handleApplyCoupon = (e: React.FormEvent) => {
    e.preventDefault();
    setCouponError('');
    const code = couponCode.trim().toUpperCase();
    if (!code) return;

    if (code === 'WELCOME100') {
      setAppliedCoupon({ code: 'WELCOME100', discount: 100 });
      setCouponCode('');
    } else if (code === 'FIRST10' || code === 'BULK10') {
      const disc = Math.round(subtotal * 0.1);
      setAppliedCoupon({ code: code, discount: disc });
      setCouponCode('');
    } else {
      setCouponError('Invalid coupon code. Try "WELCOME100" or "BULK10"');
    }
  };

  const handleRemoveCoupon = () => {
    setAppliedCoupon(null);
  };

  if (cartItems.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center p-6 text-center max-w-md mx-auto my-12">
        <div className="w-20 h-20 rounded-full bg-[#f2f3ff] text-[#0050cc] flex items-center justify-center mb-4 shadow-xs">
          <span className="material-symbols-outlined text-[36px]">shopping_cart_off</span>
        </div>
        <h2 className="font-display font-bold text-xl text-[#131b2e] mb-1">
          Your Cart is Empty
        </h2>
        <p className="text-xs text-[#44474c] mb-6 leading-relaxed">
          Looks like you haven't added any workwear uniforms yet. Explore our catalog of security, hospital, hospitality, and industrial gear.
        </p>
        <button
          onClick={onContinueShopping}
          className="px-6 py-3 bg-[#0b192c] hover:bg-[#0050cc] text-white rounded-xl font-display text-xs font-bold active:scale-95 transition-all shadow-md flex items-center gap-2"
        >
          <span className="material-symbols-outlined text-[18px]">storefront</span>
          <span>Discover Uniform Collections</span>
        </button>
      </div>
    );
  }

  return (
    <div className="flex flex-col w-full pb-28 max-w-3xl mx-auto px-4 pt-3">
      {/* 1. Header with item count & Clear all */}
      <div className="flex items-center justify-between pb-2 border-b border-[#eaedff]">
        <div className="flex items-center gap-2">
          <h1 className="font-display font-bold text-lg text-[#131b2e]">
            Shopping Cart
          </h1>
          <span className="px-2 py-0.5 rounded-full bg-[#dae2fd] text-[#001849] font-display text-xs font-bold">
            {cartItems.length} {cartItems.length > 1 ? 'items' : 'item'}
          </span>
        </div>
        <button
          onClick={onClearCart}
          className="text-xs text-red-600 hover:text-red-700 font-display font-semibold hover:underline"
        >
          Clear all
        </button>
      </div>

      {/* 2. Free Shipping Meter */}
      <div className="my-3 p-3 bg-white rounded-xl border border-[#eaedff] shadow-xs flex flex-col gap-2">
        <div className="flex items-center justify-between text-xs">
          {remainingForFreeShipping > 0 ? (
            <span className="text-[#131b2e] font-semibold">
              Add <strong className="text-[#0050cc]">₹{remainingForFreeShipping.toLocaleString('en-IN')}</strong> more for <strong className="text-emerald-700">FREE Express Logistics</strong>
            </span>
          ) : (
            <span className="text-emerald-700 font-bold flex items-center gap-1">
              <span className="material-symbols-outlined text-[16px]">local_shipping</span>
              You have qualified for FREE Express Logistics across India!
            </span>
          )}
          <span className="font-mono text-[11px] text-[#75777d]">{freeShippingProgress}%</span>
        </div>
        <div className="w-full h-2 bg-[#f2f3ff] rounded-full overflow-hidden">
          <div
            className="h-full bg-linear-to-r from-[#0050cc] to-emerald-500 rounded-full transition-all duration-500"
            style={{ width: `${freeShippingProgress}%` }}
          />
        </div>
      </div>

      {/* 3. Cart Items List */}
      <div className="space-y-3 my-2">
        {cartItems.map((item) => {
          let unitPrice = item.product.price;
          if (item.quantity >= 50 && item.product.wholesaleTiers[2]) {
            unitPrice = item.product.wholesaleTiers[2].pricePerUnit;
          } else if (item.quantity >= 10 && item.product.wholesaleTiers[1]) {
            unitPrice = item.product.wholesaleTiers[1].pricePerUnit;
          }
          const itemTotal = unitPrice * item.quantity;

          return (
            <div
              key={item.id}
              className="flex gap-3 p-3.5 bg-white rounded-2xl border border-[#eaedff] shadow-xs hover:shadow-md transition-all"
            >
              {/* Product Image */}
              <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-xl overflow-hidden bg-[#f2f3ff] shrink-0 border border-[#eaedff]">
                <img
                  alt={item.product.title}
                  src={item.product.image}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Product Info & Controls */}
              <div className="flex-1 flex flex-col justify-between min-w-0">
                <div className="flex items-start justify-between gap-1">
                  <div className="flex flex-col">
                    <span className="font-display font-bold text-xs text-[#131b2e] line-clamp-1">
                      {item.product.title}
                    </span>
                    <div className="flex items-center gap-2 mt-0.5 text-[11px] text-[#44474c]">
                      <span>Size: <strong className="text-[#131b2e]">{item.selectedSize}</strong></span>
                      <span>•</span>
                      <span>Color: <strong className="text-[#131b2e]">{item.selectedColor}</strong></span>
                    </div>
                  </div>

                  <button
                    aria-label="Remove item"
                    onClick={() => onRemoveItem(item.id)}
                    className="text-[#75777d] hover:text-red-600 p-1 transition-colors"
                  >
                    <span className="material-symbols-outlined text-[18px]">delete</span>
                  </button>
                </div>

                {/* Price and Quantity Stepper */}
                <div className="flex items-center justify-between pt-2 border-t border-[#eaedff] mt-2">
                  <div className="flex flex-col">
                    <span className="font-display font-bold text-sm text-[#0050cc]">
                      ₹{itemTotal.toLocaleString('en-IN')}
                    </span>
                    {item.quantity > 1 && (
                      <span className="text-[10px] text-[#75777d]">
                        ₹{unitPrice.toLocaleString('en-IN')} each
                      </span>
                    )}
                  </div>

                  <div className="flex items-center bg-[#f2f3ff] rounded-lg border border-[#eaedff] overflow-hidden">
                    <button
                      onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
                      className="w-8 h-8 flex items-center justify-center text-[#131b2e] hover:bg-[#e2e7ff] transition-colors"
                    >
                      <span className="material-symbols-outlined text-[16px]">remove</span>
                    </button>
                    <span className="w-8 text-center font-display font-bold text-xs text-[#131b2e]">
                      {item.quantity}
                    </span>
                    <button
                      onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                      className="w-8 h-8 flex items-center justify-center text-[#131b2e] hover:bg-[#e2e7ff] transition-colors"
                    >
                      <span className="material-symbols-outlined text-[16px]">add</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* 4. Coupons & Offers Card */}
      <div className="my-3 p-4 bg-white rounded-2xl border border-[#eaedff] shadow-xs flex flex-col gap-2">
        <div className="flex items-center gap-1.5 text-xs text-[#131b2e] font-display font-bold">
          <span className="material-symbols-outlined text-[#0050cc] text-[18px]">local_offer</span>
          <span>Coupons & Corporate Discounts</span>
        </div>

        {appliedCoupon ? (
          <div className="flex items-center justify-between p-2.5 bg-[#f2f3ff] border border-[#0050cc]/20 rounded-xl">
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-emerald-600 text-[18px]">verified</span>
              <div className="text-xs">
                <span className="font-mono font-bold text-[#0050cc]">{appliedCoupon.code}</span>
                <span className="text-[#44474c] block text-[11px]">
                  ₹{appliedCoupon.discount} discount applied successfully
                </span>
              </div>
            </div>
            <button
              onClick={handleRemoveCoupon}
              className="text-xs text-red-600 font-bold hover:underline"
            >
              Remove
            </button>
          </div>
        ) : (
          <form onSubmit={handleApplyCoupon} className="flex gap-2">
            <input
              type="text"
              placeholder="Enter coupon (e.g. WELCOME100, BULK10)"
              value={couponCode}
              onChange={(e) => setCouponCode(e.target.value)}
              className="flex-1 h-9 px-3 uppercase text-xs font-mono rounded-lg border border-[#c5c6cd] focus:outline-none focus:border-[#0050cc]"
            />
            <button
              type="submit"
              className="px-4 h-9 bg-[#0b192c] hover:bg-[#0050cc] text-white rounded-lg font-display text-xs font-bold transition-colors"
            >
              Apply
            </button>
          </form>
        )}

        {couponError && <span className="text-[11px] text-red-600 font-semibold">{couponError}</span>}
      </div>

      {/* 5. Corporate GST Tax Credit Callout */}
      <div className="p-3 bg-[#f2f3ff] rounded-xl border border-[#eaedff] flex items-start gap-2.5 my-1">
        <span className="material-symbols-outlined text-[#0050cc] text-[20px] shrink-0 mt-0.5">
          receipt_long
        </span>
        <div className="text-xs text-[#131b2e]">
          <strong className="block font-semibold">Corporate Tax Invoicing (GST ITC 100% Eligible)</strong>
          <span className="text-[#44474c] leading-relaxed">
            Provide your 15-digit GSTIN at checkout to receive an automatic B2B tax invoice credited to your GSTR-2B.
          </span>
        </div>
      </div>

      {/* 6. Order Summary Card */}
      <div className="my-3 p-4 bg-white rounded-2xl border border-[#eaedff] shadow-xs flex flex-col gap-2.5 text-xs">
        <h3 className="font-display font-bold text-sm text-[#131b2e] pb-1 border-b border-[#eaedff]">
          Order Commercial Summary
        </h3>

        <div className="flex justify-between text-[#44474c]">
          <span>Cart Subtotal ({cartItems.reduce((acc, c) => acc + c.quantity, 0)} units)</span>
          <span className="text-[#131b2e] font-semibold">₹{subtotal.toLocaleString('en-IN')}</span>
        </div>

        {appliedCoupon && (
          <div className="flex justify-between text-emerald-700 font-semibold">
            <span>Coupon Discount ({appliedCoupon.code})</span>
            <span>-₹{appliedCoupon.discount.toLocaleString('en-IN')}</span>
          </div>
        )}

        <div className="flex justify-between text-[#44474c]">
          <span>Standard Industrial Logistics</span>
          {shippingFee === 0 ? (
            <span className="text-emerald-700 font-bold uppercase text-[10px]">FREE</span>
          ) : (
            <span className="text-[#131b2e] font-semibold">₹{shippingFee}</span>
          )}
        </div>

        <div className="flex justify-between text-[#44474c]">
          <span>Included GST (12% / 18% HSN)</span>
          <span className="text-[#131b2e] font-semibold">
            ₹{Math.round(totalPayable * 0.12).toLocaleString('en-IN')}
          </span>
        </div>

        <div className="flex justify-between text-base font-display font-bold text-[#131b2e] pt-2 border-t border-[#eaedff]">
          <span>Total Commercial Payable</span>
          <span className="text-[#0050cc]">₹{totalPayable.toLocaleString('en-IN')}</span>
        </div>
      </div>

      {/* 7. Trust Badges */}
      <div className="grid grid-cols-3 gap-2 my-2 text-center text-[10px] text-[#44474c]">
        <div className="p-2 bg-white rounded-xl border border-[#eaedff] flex flex-col items-center gap-1">
          <span className="material-symbols-outlined text-[#0050cc] text-[18px]">verified</span>
          <span className="font-bold text-[#131b2e]">100% Secure</span>
          <span>SSL 256-bit</span>
        </div>
        <div className="p-2 bg-white rounded-xl border border-[#eaedff] flex flex-col items-center gap-1">
          <span className="material-symbols-outlined text-[#0050cc] text-[18px]">swap_horiz</span>
          <span className="font-bold text-[#131b2e]">7 Days Exchange</span>
          <span>Fit & size check</span>
        </div>
        <div className="p-2 bg-white rounded-xl border border-[#eaedff] flex flex-col items-center gap-1">
          <span className="material-symbols-outlined text-[#0050cc] text-[18px]">receipt</span>
          <span className="font-bold text-[#131b2e]">GST Invoiced</span>
          <span>ITC tax credit</span>
        </div>
      </div>

      {/* 8. Sticky Action Bottom Bar */}
      <div className="fixed bottom-16 sm:bottom-0 left-0 right-0 z-30 bg-white/95 backdrop-blur-xl border-t border-[#eaedff] p-3 shadow-[0_-4px_12px_rgba(0,0,0,0.06)]">
        <div className="max-w-3xl mx-auto flex items-center justify-between gap-3">
          <div className="flex flex-col">
            <span className="text-[10px] uppercase font-bold text-[#75777d] tracking-wider font-display">
              Total Payable
            </span>
            <span className="font-display font-extrabold text-xl text-[#0050cc]">
              ₹{totalPayable.toLocaleString('en-IN')}
            </span>
          </div>

          <div className="flex items-center gap-2 flex-1 max-w-sm">
            <button
              onClick={onContinueShopping}
              className="h-11 px-3 bg-white hover:bg-[#f2f3ff] text-[#131b2e] border border-[#c5c6cd] rounded-xl font-display text-xs font-bold active:scale-95 transition-all"
            >
              Shop More
            </button>

            <button
              onClick={onProceedCheckout}
              className="flex-1 h-11 bg-[#0b192c] hover:bg-[#0050cc] text-white rounded-xl font-display text-xs font-bold active:scale-95 transition-all shadow-md flex items-center justify-center gap-1.5"
            >
              <span className="material-symbols-outlined text-[16px]">lock</span>
              <span>Proceed to Checkout</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
