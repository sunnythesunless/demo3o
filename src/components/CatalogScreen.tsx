import React, { useState, useMemo } from 'react';
import { Product, FilterState } from '../types';
import { PRODUCTS } from '../data/products';

interface CatalogScreenProps {
  initialSector?: string;
  onSelectProduct: (product: Product) => void;
  onAddToCart: (product: Product, quantity?: number) => void;
  onOpenRFQ: (sector?: string) => void;
}

export const CatalogScreen: React.FC<CatalogScreenProps> = ({
  initialSector = 'all',
  onSelectProduct,
  onAddToCart,
  onOpenRFQ
}) => {
  const [filterDrawerOpen, setFilterDrawerOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeSector, setActiveSector] = useState(initialSector);
  const [selectedSizes, setSelectedSizes] = useState<string[]>([]);
  const [maxPrice, setMaxPrice] = useState(3000);
  const [sortBy, setSortBy] = useState<'popular' | 'newest' | 'price-asc' | 'price-desc'>('popular');

  const sectorList = [
    { id: 'all', label: 'All Sectors' },
    { id: 'security', label: 'Security' },
    { id: 'hospital', label: 'Hospital' },
    { id: 'hotel', label: 'Hotel & Suits' },
    { id: 'chef', label: 'Chef & Kitchen' },
    { id: 'industrial', label: 'Industrial' },
    { id: 'corporate', label: 'Corporate' }
  ];

  const sizeOptions = ['S', 'M', 'L', 'XL', 'XXL'];

  // Calculate active filter count
  const activeFilterCount = useMemo(() => {
    let count = 0;
    if (activeSector !== 'all') count++;
    if (selectedSizes.length > 0) count += selectedSizes.length;
    if (maxPrice < 3000) count++;
    if (searchQuery.trim().length > 0) count++;
    return count;
  }, [activeSector, selectedSizes, maxPrice, searchQuery]);

  // Reset all filters
  const resetFilters = () => {
    setActiveSector('all');
    setSelectedSizes([]);
    setMaxPrice(3000);
    setSearchQuery('');
    setSortBy('popular');
  };

  // Filtered & sorted products
  const filteredProducts = useMemo(() => {
    let result = [...PRODUCTS];

    // Sector filter
    if (activeSector !== 'all') {
      result = result.filter((p) => p.sector === activeSector);
    }

    // Search query
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      result = result.filter(
        (p) =>
          p.title.toLowerCase().includes(q) ||
          p.subtitle.toLowerCase().includes(q) ||
          p.sectorLabel.toLowerCase().includes(q) ||
          p.fabric.toLowerCase().includes(q)
      );
    }

    // Max price
    result = result.filter((p) => p.price <= maxPrice);

    // Size filter
    if (selectedSizes.length > 0) {
      result = result.filter((p) =>
        selectedSizes.some((sz) => p.sizes.some((s) => s.includes(sz)))
      );
    }

    // Sorting
    if (sortBy === 'price-asc') {
      result.sort((a, b) => a.price - b.price);
    } else if (sortBy === 'price-desc') {
      result.sort((a, b) => b.price - a.price);
    } else if (sortBy === 'popular') {
      result.sort((a, b) => b.reviewCount - a.reviewCount);
    } else if (sortBy === 'newest') {
      result.sort((a, b) => b.originalPrice - a.originalPrice);
    }

    return result;
  }, [activeSector, searchQuery, maxPrice, selectedSizes, sortBy]);

  const toggleSize = (sz: string) => {
    if (selectedSizes.includes(sz)) {
      setSelectedSizes(selectedSizes.filter((s) => s !== sz));
    } else {
      setSelectedSizes([...selectedSizes, sz]);
    }
  };

  return (
    <div className="flex flex-col w-full pb-20">
      {/* Search & Action Top Bar */}
      <div className="w-full px-4 pt-3 pb-2 flex flex-col gap-2.5">
        {/* Search Input */}
        <div className="relative w-full">
          <span className="material-symbols-outlined absolute left-3.5 top-1/2 -translate-y-1/2 text-[#44474c] text-[20px]">
            search
          </span>
          <input
            type="text"
            placeholder="Search uniforms, scrub suits, chef coats, coveralls..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full h-11 pl-10 pr-10 rounded-xl bg-white border border-[#eaedff] shadow-xs text-xs sm:text-sm text-[#131b2e] focus:outline-none focus:border-[#0050cc] focus:ring-1 focus:ring-[#0050cc]"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-[#44474c] hover:text-[#131b2e]"
            >
              <span className="material-symbols-outlined text-[18px]">cancel</span>
            </button>
          )}
        </div>

        {/* Filter Drawer Toggle & Sort Dropdown */}
        <div className="flex items-center justify-between gap-2">
          <button
            onClick={() => setFilterDrawerOpen(!filterDrawerOpen)}
            className={`flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-display font-bold border transition-all ${
              filterDrawerOpen || activeFilterCount > 0
                ? 'bg-[#0050cc] text-white border-[#0050cc] shadow-xs'
                : 'bg-white text-[#131b2e] border-[#eaedff] hover:bg-[#f2f3ff]'
            }`}
          >
            <span className="material-symbols-outlined text-[18px]">tune</span>
            <span>Filters</span>
            {activeFilterCount > 0 && (
              <span className="ml-1 w-4 h-4 rounded-full bg-white text-[#0050cc] text-[10px] flex items-center justify-center font-bold">
                {activeFilterCount}
              </span>
            )}
          </button>

          <div className="flex items-center gap-1.5 bg-white px-2.5 py-1.5 rounded-xl border border-[#eaedff] text-xs">
            <span className="text-[#44474c] text-[11px] font-medium hidden sm:inline">Sort:</span>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as any)}
              className="bg-transparent font-display font-bold text-xs text-[#131b2e] focus:outline-none cursor-pointer"
            >
              <option value="popular">Most Popular</option>
              <option value="newest">Newest Arrivals</option>
              <option value="price-asc">Price: Low to High</option>
              <option value="price-desc">Price: High to Low</option>
            </select>
          </div>
        </div>

        {/* Sector Filter Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-1 no-scrollbar">
          {sectorList.map((sec) => (
            <button
              key={sec.id}
              onClick={() => setActiveSector(sec.id)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-display font-bold whitespace-nowrap transition-all ${
                activeSector === sec.id
                  ? 'bg-[#0b192c] text-white shadow-xs'
                  : 'bg-white text-[#44474c] border border-[#eaedff] hover:bg-[#f2f3ff]'
              }`}
            >
              {sec.label}
            </button>
          ))}
        </div>
      </div>

      {/* Collapsible "Refine Uniform Specifications" Drawer */}
      {filterDrawerOpen && (
        <div className="w-full px-4 mb-3">
          <div className="bg-white rounded-2xl p-4 border border-[#eaedff] shadow-md flex flex-col gap-4">
            <div className="flex items-center justify-between pb-2 border-b border-[#eaedff]">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-[#0050cc]">tune</span>
                <h3 className="font-display font-bold text-sm text-[#131b2e]">
                  Refine Uniform Specifications
                </h3>
              </div>
              <button
                onClick={resetFilters}
                className="text-xs text-[#0050cc] hover:underline font-display font-semibold"
              >
                Reset All
              </button>
            </div>

            {/* Price Slider */}
            <div>
              <div className="flex items-center justify-between text-xs mb-1.5">
                <span className="text-[#131b2e] font-semibold">Max Unit Budget:</span>
                <span className="font-display font-bold text-[#0050cc]">
                  ₹{maxPrice.toLocaleString('en-IN')}
                </span>
              </div>
              <input
                type="range"
                min="400"
                max="3000"
                step="50"
                value={maxPrice}
                onChange={(e) => setMaxPrice(Number(e.target.value))}
                className="w-full accent-[#0050cc] cursor-pointer"
              />
              <div className="flex justify-between text-[10px] text-[#75777d] mt-1">
                <span>₹400</span>
                <span>₹1,500</span>
                <span>₹3,000+</span>
              </div>
            </div>

            {/* Sizes */}
            <div>
              <span className="block text-xs text-[#131b2e] font-semibold mb-1.5">
                Filter by Uniform Size:
              </span>
              <div className="flex flex-wrap gap-2">
                {sizeOptions.map((sz) => {
                  const isSelected = selectedSizes.includes(sz);
                  return (
                    <button
                      key={sz}
                      onClick={() => toggleSize(sz)}
                      className={`min-w-[38px] h-8 px-2 rounded-lg text-xs font-display font-bold transition-all border ${
                        isSelected
                          ? 'bg-[#0050cc] text-white border-[#0050cc]'
                          : 'bg-[#f2f3ff] text-[#131b2e] border-[#eaedff] hover:bg-[#e2e7ff]'
                      }`}
                    >
                      {sz}
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="flex gap-2 pt-1">
              <button
                onClick={() => setFilterDrawerOpen(false)}
                className="flex-1 h-9 bg-[#0b192c] hover:bg-[#131b2e] text-white rounded-lg font-display text-xs font-bold transition-all"
              >
                Apply Filters ({filteredProducts.length} Results)
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Active Filter Chips Summary */}
      {activeFilterCount > 0 && (
        <div className="w-full px-4 mb-2 flex items-center gap-1.5 flex-wrap">
          <span className="text-[11px] text-[#44474c] font-medium">Filtered by:</span>

          {activeSector !== 'all' && (
            <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-[#dae1ff] text-[#001849] font-display text-[11px] font-bold">
              <span>Sector: {activeSector}</span>
              <button onClick={() => setActiveSector('all')}>
                <span className="material-symbols-outlined text-[13px]">close</span>
              </button>
            </span>
          )}

          {selectedSizes.map((sz) => (
            <span
              key={sz}
              className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-[#f2f3ff] text-[#131b2e] border border-[#eaedff] font-display text-[11px] font-bold"
            >
              <span>Size: {sz}</span>
              <button onClick={() => toggleSize(sz)}>
                <span className="material-symbols-outlined text-[13px]">close</span>
              </button>
            </span>
          ))}

          {maxPrice < 3000 && (
            <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-[#f2f3ff] text-[#131b2e] border border-[#eaedff] font-display text-[11px] font-bold">
              <span>Max: ₹{maxPrice}</span>
              <button onClick={() => setMaxPrice(3000)}>
                <span className="material-symbols-outlined text-[13px]">close</span>
              </button>
            </span>
          )}

          <button
            onClick={resetFilters}
            className="text-[11px] text-[#0050cc] hover:underline font-display font-semibold ml-1"
          >
            Clear all
          </button>
        </div>
      )}

      {/* Results Header */}
      <div className="w-full px-4 py-1 flex items-center justify-between text-xs text-[#44474c]">
        <span>
          Showing <strong className="text-[#131b2e]">{filteredProducts.length}</strong> certified garments
        </span>
        <span className="text-[11px] text-emerald-700 font-semibold flex items-center gap-1">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          Warehouse Dispatch Active
        </span>
      </div>

      {/* Product Cards Grid (2 Columns) */}
      <div className="w-full px-4 py-2">
        {filteredProducts.length === 0 ? (
          <div className="flex flex-col items-center justify-center p-12 bg-white rounded-2xl border border-[#eaedff] text-center my-4">
            <span className="material-symbols-outlined text-[#75777d] text-[48px] mb-2">
              inventory_2
            </span>
            <h3 className="font-display font-bold text-base text-[#131b2e]">
              No uniforms match your filter criteria
            </h3>
            <p className="text-xs text-[#44474c] mt-1 max-w-xs">
              Try resetting your price limit or clearing the industry filter.
            </p>
            <button
              onClick={resetFilters}
              className="mt-4 px-4 py-2 bg-[#0050cc] text-white rounded-lg font-display text-xs font-bold"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
            {filteredProducts.map((prod) => (
              <div
                key={prod.id}
                className="flex flex-col bg-white rounded-xl overflow-hidden shadow-xs border border-[#eaedff] hover:shadow-md transition-all group"
              >
                {/* Thumbnail */}
                <div
                  onClick={() => onSelectProduct(prod)}
                  className="relative w-full aspect-square bg-[#eaedff] overflow-hidden cursor-pointer"
                >
                  <img
                    alt={prod.title}
                    src={prod.image}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  {prod.tag && (
                    <span className="absolute top-2 left-2 px-2 py-0.5 bg-[#0050cc] text-white rounded-full font-display text-[9px] font-bold tracking-wide shadow-xs">
                      {prod.tag}
                    </span>
                  )}
                  <span className="absolute bottom-2 right-2 px-1.5 py-0.5 bg-white/90 text-[#131b2e] rounded font-display text-[9px] font-bold backdrop-blur-xs">
                    MOQ: {prod.moq}
                  </span>
                </div>

                {/* Info */}
                <div className="p-3 flex flex-col flex-1 justify-between gap-2">
                  <div
                    onClick={() => onSelectProduct(prod)}
                    className="flex flex-col gap-0.5 cursor-pointer"
                  >
                    <div className="flex items-center gap-1 text-[#b87500] text-[10px]">
                      <span className="material-symbols-outlined text-[13px]">star</span>
                      <span className="font-bold">{prod.rating}</span>
                      <span className="text-[#75777d]">({prod.reviewCount})</span>
                    </div>

                    <h3 className="font-display text-xs text-[#131b2e] font-bold line-clamp-2 hover:text-[#0050cc] transition-colors leading-snug">
                      {prod.title}
                    </h3>
                    <span className="text-[11px] text-[#44474c] line-clamp-1">
                      {prod.subtitle}
                    </span>
                  </div>

                  <div className="flex flex-col gap-1.5 pt-1 border-t border-[#eaedff]">
                    <div className="flex items-baseline gap-1.5">
                      <span className="font-display text-sm font-bold text-[#0050cc]">
                        ₹{prod.price.toLocaleString('en-IN')}
                      </span>
                      <span className="text-[10px] text-[#75777d] line-through">
                        ₹{prod.originalPrice.toLocaleString('en-IN')}
                      </span>
                      <span className="font-display text-[9px] text-[#b87500] font-bold">
                        {prod.discountPct}% OFF
                      </span>
                    </div>

                    <button
                      onClick={() => onAddToCart(prod, 1)}
                      className="w-full h-8 flex items-center justify-center gap-1 bg-[#0b192c] hover:bg-[#0050cc] text-white rounded-lg font-display text-xs font-bold active:scale-95 transition-all shadow-xs"
                    >
                      <span className="material-symbols-outlined text-[15px]">add</span>
                      <span>Add to Cart</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Volume B2B RFQ Banner */}
      <div className="w-full px-4 py-4">
        <div className="p-4 sm:p-5 rounded-2xl bg-[#0e1c2f] text-white flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 shadow-lg">
          <div className="flex flex-col gap-1">
            <span className="text-[10px] text-[#ffddb8] font-bold uppercase tracking-wider font-display">
              Enterprise Volume Sourcing
            </span>
            <h3 className="font-display font-bold text-base text-white">
              Need 50+ Units with Custom Logo Embroidery?
            </h3>
            <p className="text-xs text-[#bac7e1]">
              Get customized wholesale unit pricing, Tajima embroidery proofs, and fabric sample swatches.
            </p>
          </div>
          <button
            onClick={() => onOpenRFQ(activeSector !== 'all' ? activeSector : undefined)}
            className="px-4 py-2.5 bg-[#0266ff] hover:bg-[#0050cc] text-white rounded-xl font-display text-xs font-bold whitespace-nowrap active:scale-95 transition-all shadow-md shrink-0"
          >
            Request Instant RFQ
          </button>
        </div>
      </div>
    </div>
  );
};
