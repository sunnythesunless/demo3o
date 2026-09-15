import React from 'react';

interface BottomNavProps {
  currentTab: string;
  cartCount: number;
  onSelectTab: (tab: string) => void;
}

export const BottomNav: React.FC<BottomNavProps> = ({
  currentTab,
  cartCount,
  onSelectTab
}) => {
  return (
    <nav className="fixed bottom-0 w-full z-40 bg-white/95 backdrop-blur-xl border-t border-[#eaedff] shadow-[0_-2px_10px_rgba(15,23,42,0.06)]">
      <div className="max-w-md mx-auto flex items-center justify-around h-16 px-2">
        {/* 1. Home */}
        <button
          onClick={() => onSelectTab('home')}
          className={`flex flex-col items-center justify-center gap-0.5 min-w-[56px] h-14 transition-colors ${
            currentTab === 'home'
              ? 'text-[#0050cc] font-bold'
              : 'text-[#44474c] hover:text-[#131b2e]'
          }`}
        >
          <span className="material-symbols-outlined text-[22px]">home</span>
          <span className="font-display text-[11px] leading-tight">Home</span>
        </button>

        {/* 2. Products / Catalog */}
        <button
          onClick={() => onSelectTab('catalog')}
          className={`flex flex-col items-center justify-center gap-0.5 min-w-[56px] h-14 transition-colors ${
            currentTab === 'catalog'
              ? 'text-[#0050cc] font-bold'
              : 'text-[#44474c] hover:text-[#131b2e]'
          }`}
        >
          <span className="material-symbols-outlined text-[22px]">category</span>
          <span className="font-display text-[11px] leading-tight">Products</span>
        </button>

        {/* 3. Quote / Bulk RFQ */}
        <button
          onClick={() => onSelectTab('quote')}
          className={`flex flex-col items-center justify-center gap-0.5 min-w-[56px] h-14 relative transition-colors ${
            currentTab === 'quote'
              ? 'text-[#0050cc] font-bold'
              : 'text-[#44474c] hover:text-[#131b2e]'
          }`}
        >
          <span className="material-symbols-outlined text-[22px]">assignment</span>
          <span className="font-display text-[11px] leading-tight">Quote</span>
          <span className="absolute top-1.5 right-1.5 px-1.5 py-0.2 bg-[#ffb95f] text-[#2a1700] rounded-full font-display text-[9px] font-extrabold uppercase tracking-wider leading-none">
            RFQ
          </span>
        </button>

        {/* 4. Cart */}
        <button
          onClick={() => onSelectTab('cart')}
          className={`flex flex-col items-center justify-center gap-0.5 min-w-[56px] h-14 relative transition-colors ${
            currentTab === 'cart'
              ? 'text-[#0050cc] font-bold'
              : 'text-[#44474c] hover:text-[#131b2e]'
          }`}
        >
          <span className="material-symbols-outlined text-[22px]">shopping_bag</span>
          <span className="font-display text-[11px] leading-tight">Cart</span>
          {cartCount > 0 && (
            <span className="absolute top-1.5 right-2 min-w-[16px] h-[16px] px-1 bg-[#0050cc] text-white rounded-full font-display text-[10px] leading-none flex items-center justify-center font-bold">
              {cartCount}
            </span>
          )}
        </button>

        {/* 5. Account / Client Portal */}
        <button
          onClick={() => onSelectTab('account')}
          className={`flex flex-col items-center justify-center gap-0.5 min-w-[56px] h-14 transition-colors ${
            currentTab === 'account'
              ? 'text-[#0050cc] font-bold'
              : 'text-[#44474c] hover:text-[#131b2e]'
          }`}
        >
          <span className="material-symbols-outlined text-[22px]">account_circle</span>
          <span className="font-display text-[11px] leading-tight">Account</span>
        </button>
      </div>
    </nav>
  );
};
