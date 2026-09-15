import React from 'react';

interface HeaderProps {
  currentTab: string;
  cartCount: number;
  onNavigate: (tab: string) => void;
  onBack?: () => void;
  showBack?: boolean;
}

export const Header: React.FC<HeaderProps> = ({
  currentTab,
  cartCount,
  onNavigate,
  onBack,
  showBack = false
}) => {
  const getSubtitle = () => {
    switch (currentTab) {
      case 'catalog':
        return 'Catalog';
      case 'detail':
        return 'Product Details';
      case 'cart':
        return 'Cart';
      case 'quote':
        return 'Bulk RFQ';
      case 'account':
        return 'Client Portal';
      default:
        return 'Home';
    }
  };

  return (
    <header className="fixed top-0 w-full z-40 bg-white/95 backdrop-blur-xl border-b border-[#eaedff] shadow-[0_1px_8px_rgba(0,0,0,0.04)]">
      <div className="max-w-7xl mx-auto h-14 px-4 flex items-center justify-between">
        {/* Left branding or back */}
        <div className="flex items-center gap-2">
          {showBack ? (
            <button
              aria-label="Go back"
              onClick={onBack}
              className="w-10 h-10 -ml-1 flex items-center justify-center text-[#131b2e] hover:text-[#0050cc] rounded-lg transition-colors active:scale-95"
            >
              <span className="material-symbols-outlined text-[22px]">arrow_back</span>
            </button>
          ) : null}

          <div
            onClick={() => onNavigate('home')}
            className="flex items-center gap-2 cursor-pointer select-none group"
          >
            <img
              alt="Everbright Uniform Brand Logo"
              className="h-8 w-auto object-contain transition-transform group-hover:scale-105"
              src="https://lh3.googleusercontent.com/aida/AEtjO1ULoR-MjjLf8NQh5DTxCg_nJg-kEMsC_Fwh4cqJCf3YTKKe8bqRpKC7JPRfeO3qc8AHQ0c0uRfNQk_-T_ImMLzyM7Wu2-o7LHiNdglo-BgquYQoCzcj75NCk-fDhvRCvC4lQ-sFV_PA4o04ukXzGrAExr_8ytZkZ2fBgMhXGeXAHqnQIskw4CIm5LURMeIpXeYHKN7ZV1LdKO353_vahkBgd2AZczNw-mzNgJQWXOwMj4pCvDxEpzXZ73o"
            />
            <div className="flex flex-col">
              <span className="font-display font-bold text-xs text-[#131b2e] uppercase tracking-wider leading-tight">
                Everbright
              </span>
              <span className="font-display text-[11px] text-[#44474c] line-clamp-1 leading-tight">
                {getSubtitle()}
              </span>
            </div>
          </div>
        </div>

        {/* Right utility actions */}
        <div className="flex items-center gap-1">
          <button
            aria-label="Search products"
            onClick={() => onNavigate('catalog')}
            className={`w-10 h-10 flex items-center justify-center rounded-lg transition-colors ${
              currentTab === 'catalog'
                ? 'text-[#0050cc] bg-[#f2f3ff]'
                : 'text-[#131b2e] hover:text-[#0050cc] hover:bg-[#f2f3ff]'
            }`}
          >
            <span className="material-symbols-outlined text-[20px]">search</span>
          </button>

          <button
            aria-label={`Cart with ${cartCount} items`}
            onClick={() => onNavigate('cart')}
            className={`relative w-10 h-10 flex items-center justify-center rounded-lg transition-colors ${
              currentTab === 'cart'
                ? 'text-[#0050cc] bg-[#f2f3ff]'
                : 'text-[#131b2e] hover:text-[#0050cc] hover:bg-[#f2f3ff]'
            }`}
          >
            <span className="material-symbols-outlined text-[20px]">shopping_cart</span>
            {cartCount > 0 && (
              <span className="absolute top-1.5 right-1.5 min-w-[18px] h-[18px] px-1 bg-[#0050cc] text-white rounded-full font-display text-[10px] leading-none flex items-center justify-center font-bold shadow-sm animate-pulse">
                {cartCount}
              </span>
            )}
          </button>

          <button
            aria-label="User profile and login"
            onClick={() => onNavigate('account')}
            className="w-10 h-10 flex items-center justify-center ml-0.5 rounded-lg hover:bg-[#f2f3ff] transition-colors"
          >
            <div className="w-8 h-8 rounded-full bg-[#0b192c] text-white flex items-center justify-center shadow-xs">
              <span className="material-symbols-outlined text-[18px]">person</span>
            </div>
          </button>
        </div>
      </div>
    </header>
  );
};
