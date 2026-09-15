import React, { useState } from 'react';
import { Product, RelatedItem } from '../types';
import { RELATED_ITEMS } from '../data/products';
import { SizeGuideModal } from './SizeGuideModal';

interface ProductDetailScreenProps {
  product: Product;
  onBack: () => void;
  onAddToCart: (product: Product, quantity: number, size: string, color: string) => void;
  onBuyNow: (product: Product, quantity: number, size: string, color: string) => void;
  onOpenRFQ: (sector?: string, productTitle?: string) => void;
}

export const ProductDetailScreen: React.FC<ProductDetailScreenProps> = ({
  product,
  onBack,
  onAddToCart,
  onBuyNow,
  onOpenRFQ
}) => {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [selectedColor, setSelectedColor] = useState(product.colors[0]?.name || 'Standard');
  const [selectedSize, setSelectedSize] = useState(product.sizes[2] || product.sizes[0] || 'L (42)');
  const [quantity, setQuantity] = useState(1);
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [activeTab, setActiveTab] = useState<'specs' | 'size' | 'reviews'>('specs');
  const [sizeGuideOpen, setSizeGuideOpen] = useState(false);

  const images = product.galleryImages && product.galleryImages.length > 0
    ? product.galleryImages
    : [product.image];

  // Dynamic tier price calculation based on quantity
  const getEffectiveUnitPrice = () => {
    if (quantity >= 50 && product.wholesaleTiers[2]) {
      return product.wholesaleTiers[2].pricePerUnit;
    }
    if (quantity >= 10 && product.wholesaleTiers[1]) {
      return product.wholesaleTiers[1].pricePerUnit;
    }
    return product.price;
  };

  const unitPrice = getEffectiveUnitPrice();
  const totalPrice = unitPrice * quantity;

  return (
    <div className="flex flex-col w-full pb-24 bg-white">
      {/* 1. Gallery Section */}
      <div className="relative w-full max-w-2xl mx-auto px-4 pt-3 pb-2">
        {/* Main Image Viewport */}
        <div className="relative w-full aspect-square sm:aspect-4/3 bg-[#f2f3ff] rounded-2xl overflow-hidden shadow-xs border border-[#eaedff]">
          <img
            alt={product.title}
            src={images[selectedImageIndex] || product.image}
            className="w-full h-full object-cover transition-all duration-300"
          />

          {/* Top badges */}
          <div className="absolute top-3 left-3 flex flex-col gap-1.5">
            <span className="px-2.5 py-1 bg-[#0b192c] text-white rounded-lg font-display text-[10px] uppercase font-bold tracking-wider shadow-md">
              {product.sectorLabel}
            </span>
            {product.tag && (
              <span className="px-2.5 py-0.5 bg-[#0050cc] text-white rounded-lg font-display text-[10px] uppercase font-bold tracking-wider shadow-xs">
                {product.tag}
              </span>
            )}
          </div>

          {/* Wishlist toggle */}
          <button
            aria-label="Add to wishlist"
            onClick={() => setIsWishlisted(!isWishlisted)}
            className="absolute top-3 right-3 w-10 h-10 rounded-full bg-white/90 backdrop-blur-xs flex items-center justify-center text-[#131b2e] shadow-md hover:bg-white transition-all active:scale-90"
          >
            <span
              className={`material-symbols-outlined text-[20px] ${
                isWishlisted ? 'text-red-500 fill-red-500' : 'text-[#44474c]'
              }`}
            >
              favorite
            </span>
          </button>

          {/* Image index counter */}
          <span className="absolute bottom-3 right-3 px-2 py-0.5 rounded-full bg-black/60 text-white text-[10px] font-mono backdrop-blur-xs">
            {selectedImageIndex + 1} / {images.length}
          </span>
        </div>

        {/* Thumbnails Row */}
        {images.length > 1 && (
          <div className="flex items-center gap-2 mt-2.5 overflow-x-auto pb-1 no-scrollbar">
            {images.map((img, idx) => (
              <button
                key={idx}
                onClick={() => setSelectedImageIndex(idx)}
                className={`relative w-16 h-16 rounded-xl overflow-hidden border-2 shrink-0 transition-all ${
                  selectedImageIndex === idx
                    ? 'border-[#0050cc] ring-2 ring-[#0050cc]/20 scale-105'
                    : 'border-[#eaedff] opacity-70 hover:opacity-100'
                }`}
              >
                <img alt={`Thumbnail ${idx + 1}`} src={img} className="w-full h-full object-cover" />
              </button>
            ))}
          </div>
        )}
      </div>

      {/* 2. Core Details Block */}
      <div className="w-full max-w-2xl mx-auto px-4 pt-2 flex flex-col gap-4">
        {/* Rating & Commercial Seal */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1.5 text-xs text-[#b87500]">
            <span className="material-symbols-outlined text-[16px]">star</span>
            <span className="font-display font-bold">{product.rating}</span>
            <span className="text-[#44474c]">({product.reviewCount} reviews)</span>
          </div>
          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-[#f2f3ff] text-[#0050cc] text-[11px] font-bold border border-[#dae1ff]">
            <span className="material-symbols-outlined text-[14px]">verified</span>
            Verified Commercial Quality
          </span>
        </div>

        {/* Title & Subtitle */}
        <div className="flex flex-col gap-1">
          <h1 className="font-display font-bold text-lg sm:text-2xl text-[#131b2e] leading-snug">
            {product.title}
          </h1>
          <p className="text-xs sm:text-sm text-[#44474c] leading-relaxed">
            {product.subtitle}
          </p>
        </div>

        {/* Pricing Block */}
        <div className="bg-[#faf8ff] p-4 rounded-2xl border border-[#eaedff] flex flex-col gap-3">
          <div className="flex items-baseline gap-2">
            <span className="font-display text-2xl sm:text-3xl font-bold text-[#0050cc]">
              ₹{unitPrice.toLocaleString('en-IN')}
            </span>
            <span className="text-sm text-[#75777d] line-through">
              ₹{product.originalPrice.toLocaleString('en-IN')}
            </span>
            <span className="px-2 py-0.5 rounded-full bg-[#ffddb8] text-[#2a1700] font-display text-xs font-bold">
              Save {product.discountPct}%
            </span>
          </div>

          <div className="flex items-center justify-between text-[11px] text-[#44474c] border-t border-[#eaedff] pt-2">
            <span className="flex items-center gap-1">
              <span className="material-symbols-outlined text-emerald-600 text-[16px]">check_circle</span>
              Inclusive of all GST (12% / 18%) & Input Tax Credit
            </span>
            <span className="text-[#75777d]">SKU: {product.sku}</span>
          </div>

          {/* Wholesale Tier Callout Matrix */}
          <div className="bg-white p-3 rounded-xl border border-[#eaedff] space-y-1.5">
            <span className="font-display font-bold text-xs text-[#131b2e] uppercase tracking-wider block">
              Tiered Wholesale Rate Card (B2B Volume)
            </span>
            <div className="grid grid-cols-3 gap-1.5 text-center text-xs">
              {product.wholesaleTiers.map((tier, i) => {
                const isActive =
                  (i === 0 && quantity < 10) ||
                  (i === 1 && quantity >= 10 && quantity < 50) ||
                  (i === 2 && quantity >= 50);
                return (
                  <div
                    key={tier.range}
                    className={`p-2 rounded-lg border transition-all ${
                      isActive
                        ? 'bg-[#d6e3fe] border-[#0050cc] text-[#0e1c2f] font-bold shadow-xs'
                        : 'bg-[#faf8ff] border-[#eaedff] text-[#44474c]'
                    }`}
                  >
                    <span className="block text-[10px] uppercase font-semibold">{tier.range}</span>
                    <strong className="text-xs text-[#0050cc] block">
                      ₹{tier.pricePerUnit.toLocaleString('en-IN')}
                    </strong>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Color Selection */}
        <div className="flex flex-col gap-2">
          <div className="flex items-center justify-between text-xs">
            <span className="font-display font-semibold text-[#131b2e]">
              Uniform Color: <strong className="text-[#0050cc]">{selectedColor}</strong>
            </span>
            <span className="text-[#44474c] text-[11px]">{product.colors.length} shades available</span>
          </div>
          <div className="flex items-center gap-2.5 flex-wrap">
            {product.colors.map((c) => (
              <button
                key={c.name}
                onClick={() => setSelectedColor(c.name)}
                className={`flex items-center gap-2 px-3 py-1.5 rounded-xl border text-xs font-display font-medium transition-all ${
                  selectedColor === c.name
                    ? 'border-[#0050cc] bg-[#f2f3ff] text-[#0050cc] font-bold shadow-xs'
                    : 'border-[#eaedff] bg-white text-[#131b2e] hover:bg-[#faf8ff]'
                }`}
              >
                <span
                  className="w-3.5 h-3.5 rounded-full border border-black/10 shrink-0"
                  style={{ backgroundColor: c.hex }}
                />
                <span>{c.name}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Size Selection */}
        <div className="flex flex-col gap-2">
          <div className="flex items-center justify-between text-xs">
            <span className="font-display font-semibold text-[#131b2e]">
              Selected Fit Size: <strong className="text-[#0050cc]">{selectedSize}</strong>
            </span>
            <button
              onClick={() => setSizeGuideOpen(true)}
              className="text-[#0050cc] hover:underline font-display font-bold flex items-center gap-1 text-xs"
            >
              <span className="material-symbols-outlined text-[16px]">straighten</span>
              <span>View Size Guide</span>
            </button>
          </div>
          <div className="flex items-center gap-2 flex-wrap">
            {product.sizes.map((sz) => (
              <button
                key={sz}
                onClick={() => setSelectedSize(sz)}
                className={`min-w-[54px] h-10 px-3 rounded-xl font-display text-xs font-bold transition-all border ${
                  selectedSize === sz
                    ? 'bg-[#0b192c] text-white border-[#0b192c] shadow-xs'
                    : 'bg-white text-[#131b2e] border-[#eaedff] hover:bg-[#f2f3ff]'
                }`}
              >
                {sz}
              </button>
            ))}
          </div>
        </div>

        {/* Quantity Stepper & Stock status */}
        <div className="flex items-center justify-between bg-[#f2f3ff] p-3 rounded-xl border border-[#eaedff]">
          <div className="flex flex-col">
            <span className="font-display font-bold text-xs text-[#131b2e]">Order Quantity</span>
            <span className="text-[11px] text-emerald-700 font-semibold flex items-center gap-1">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              {product.stockQty} units ready in central warehouse
            </span>
          </div>

          <div className="flex items-center bg-white rounded-lg border border-[#c5c6cd] overflow-hidden">
            <button
              onClick={() => setQuantity(Math.max(1, quantity - 1))}
              className="w-9 h-9 flex items-center justify-center text-[#131b2e] hover:bg-[#f2f3ff] transition-colors"
            >
              <span className="material-symbols-outlined text-[18px]">remove</span>
            </button>
            <span className="w-10 text-center font-display font-bold text-xs text-[#131b2e]">
              {quantity}
            </span>
            <button
              onClick={() => setQuantity(quantity + 1)}
              className="w-9 h-9 flex items-center justify-center text-[#131b2e] hover:bg-[#f2f3ff] transition-colors"
            >
              <span className="material-symbols-outlined text-[18px]">add</span>
            </button>
          </div>
        </div>

        {/* Direct WhatsApp / Custom Branding Strip */}
        <div className="bg-[#ffddb8]/30 rounded-xl p-3 border border-[#ffb95f]/40 flex items-start justify-between gap-2">
          <div className="flex items-start gap-2">
            <span className="material-symbols-outlined text-[#b87500] text-[20px] shrink-0 mt-0.5">
              corporate_fare
            </span>
            <div className="flex flex-col text-xs text-[#2a1700]">
              <strong className="font-bold">Ordering for your security force or team? (10+ Units)</strong>
              <span>Get customized Tajima company logo embroidery, name tapes, and Net-30 credit terms.</span>
            </div>
          </div>
          <button
            onClick={() => onOpenRFQ(product.sector, product.title)}
            className="px-3 py-1.5 bg-[#b87500] hover:bg-[#965f00] text-white rounded-lg font-display text-[11px] font-bold whitespace-nowrap active:scale-95 transition-all shadow-xs shrink-0"
          >
            Bulk RFQ
          </button>
        </div>

        {/* 3. Product Insights Tabs */}
        <div className="pt-2">
          <div className="flex border-b border-[#eaedff]">
            <button
              onClick={() => setActiveTab('specs')}
              className={`flex-1 py-2.5 font-display text-xs font-bold border-b-2 transition-all ${
                activeTab === 'specs'
                  ? 'text-[#0050cc] border-[#0050cc]'
                  : 'text-[#44474c] border-transparent hover:text-[#131b2e]'
              }`}
            >
              Fabric & Specs
            </button>
            <button
              onClick={() => setActiveTab('size')}
              className={`flex-1 py-2.5 font-display text-xs font-bold border-b-2 transition-all ${
                activeTab === 'size'
                  ? 'text-[#0050cc] border-[#0050cc]'
                  : 'text-[#44474c] border-transparent hover:text-[#131b2e]'
              }`}
            >
              Size & Fit
            </button>
            <button
              onClick={() => setActiveTab('reviews')}
              className={`flex-1 py-2.5 font-display text-xs font-bold border-b-2 transition-all ${
                activeTab === 'reviews'
                  ? 'text-[#0050cc] border-[#0050cc]'
                  : 'text-[#44474c] border-transparent hover:text-[#131b2e]'
              }`}
            >
              Reviews ({product.reviewCount})
            </button>
          </div>

          <div className="py-4">
            {activeTab === 'specs' && (
              <div className="flex flex-col gap-3 text-xs">
                <p className="text-[#131b2e] leading-relaxed">{product.description}</p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 bg-[#f2f3ff] p-3 rounded-xl border border-[#eaedff]">
                  <div>
                    <span className="text-[#44474c] text-[11px] block">Fabric Composition:</span>
                    <strong className="text-[#131b2e] font-semibold">{product.fabric}</strong>
                  </div>
                  <div>
                    <span className="text-[#44474c] text-[11px] block">Fabric Density (GSM):</span>
                    <strong className="text-[#131b2e] font-semibold">{product.gsm}</strong>
                  </div>
                  <div>
                    <span className="text-[#44474c] text-[11px] block">Stitching Construction:</span>
                    <strong className="text-[#131b2e] font-semibold">{product.stitching}</strong>
                  </div>
                  <div>
                    <span className="text-[#44474c] text-[11px] block">Care & Laundry:</span>
                    <strong className="text-[#131b2e] font-semibold">Machine Wash 40°C, Industrial Wash Safe</strong>
                  </div>
                </div>

                <div>
                  <h4 className="font-display font-bold text-xs text-[#131b2e] mb-1.5 uppercase tracking-wider">
                    Key Duty Features
                  </h4>
                  <ul className="space-y-1">
                    {product.features.map((feat, i) => (
                      <li key={i} className="flex items-center gap-2 text-[#44474c]">
                        <span className="material-symbols-outlined text-emerald-600 text-[16px]">check</span>
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}

            {activeTab === 'size' && (
              <div className="flex flex-col gap-3 text-xs">
                <p className="text-[#44474c]">
                  All dimensions are in inches. Designed with active ergonomic allowances for ease of motion during standing, patrol, and tactical maneuvers.
                </p>
                <div className="overflow-x-auto border border-[#eaedff] rounded-xl">
                  <table className="w-full text-left text-xs">
                    <thead className="bg-[#f2f3ff] text-[#131b2e] font-display font-bold text-[11px]">
                      <tr>
                        <th className="p-2.5">Size</th>
                        <th className="p-2.5">Chest (Inches)</th>
                        <th className="p-2.5">Waist (Inches)</th>
                        <th className="p-2.5">Shirt Length</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-[#eaedff] text-[#44474c]">
                      <tr>
                        <td className="p-2.5 font-bold text-[#131b2e]">Small (38)</td>
                        <td className="p-2.5">38 - 40"</td>
                        <td className="p-2.5">30 - 32"</td>
                        <td className="p-2.5">29"</td>
                      </tr>
                      <tr>
                        <td className="p-2.5 font-bold text-[#131b2e]">Medium (40)</td>
                        <td className="p-2.5">40 - 42"</td>
                        <td className="p-2.5">32 - 34"</td>
                        <td className="p-2.5">30"</td>
                      </tr>
                      <tr className="bg-[#d6e3fe]/40">
                        <td className="p-2.5 font-bold text-[#0050cc]">Large (42)</td>
                        <td className="p-2.5 font-bold text-[#0050cc]">42 - 44"</td>
                        <td className="p-2.5 font-bold text-[#0050cc]">34 - 36"</td>
                        <td className="p-2.5 font-bold text-[#0050cc]">31"</td>
                      </tr>
                      <tr>
                        <td className="p-2.5 font-bold text-[#131b2e]">XL (44)</td>
                        <td className="p-2.5">44 - 46"</td>
                        <td className="p-2.5">36 - 38"</td>
                        <td className="p-2.5">31.5"</td>
                      </tr>
                      <tr>
                        <td className="p-2.5 font-bold text-[#131b2e]">XXL (46)</td>
                        <td className="p-2.5">46 - 48"</td>
                        <td className="p-2.5">38 - 40"</td>
                        <td className="p-2.5">32"</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {activeTab === 'reviews' && (
              <div className="flex flex-col gap-3 text-xs">
                <div className="flex items-center gap-4 bg-[#f2f3ff] p-3 rounded-xl border border-[#eaedff]">
                  <div className="text-center">
                    <span className="font-display font-extrabold text-3xl text-[#131b2e] block leading-none">
                      {product.rating}
                    </span>
                    <div className="flex text-[#b87500] justify-center mt-1">
                      {[1, 2, 3, 4, 5].map((s) => (
                        <span key={s} className="material-symbols-outlined text-[14px]">star</span>
                      ))}
                    </div>
                    <span className="text-[10px] text-[#75777d] mt-0.5 block">{product.reviewCount} reviews</span>
                  </div>
                  <div className="flex-1 space-y-1 text-[11px] text-[#44474c]">
                    <div className="flex items-center gap-2">
                      <span>5★</span>
                      <div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
                        <div className="h-full bg-[#0050cc] w-[85%]" />
                      </div>
                      <span>85%</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span>4★</span>
                      <div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
                        <div className="h-full bg-[#0050cc] w-[12%]" />
                      </div>
                      <span>12%</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span>3★</span>
                      <div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
                        <div className="h-full bg-[#0050cc] w-[3%]" />
                      </div>
                      <span>3%</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-3 pt-2">
                  <div className="border-b border-[#eaedff] pb-2.5">
                    <div className="flex items-center justify-between">
                      <strong className="font-bold text-[#131b2e]">Suresh P. — Facility Security Officer</strong>
                      <span className="text-[10px] text-[#75777d]">Verified Buyer</span>
                    </div>
                    <p className="text-[#44474c] mt-1">
                      "Stitching around the shoulder loops and epaulets is rock solid. Our guards have worn these through monsoon and heat without fading or tearing."
                    </p>
                  </div>
                  <div className="border-b border-[#eaedff] pb-2.5">
                    <div className="flex items-center justify-between">
                      <strong className="font-bold text-[#131b2e]">Anand V. — Apex Logistics Lead</strong>
                      <span className="text-[10px] text-[#75777d]">Bulk Buyer (80 sets)</span>
                    </div>
                    <p className="text-[#44474c] mt-1">
                      "Ordered 80 sets with our company emblem embroidered on the chest. Turnaround was under 10 days and the size distribution was spot on."
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* 4. Complete The Uniform / Related Accessories */}
        <div className="pt-2 border-t border-[#eaedff]">
          <div className="flex items-center justify-between mb-3">
            <div>
              <span className="font-display text-[10px] text-[#0050cc] font-bold uppercase tracking-wider">
                Complementary Duty Gear
              </span>
              <h3 className="font-display font-bold text-base text-[#131b2e]">
                Complete The Uniform
              </h3>
            </div>
            <span className="text-xs text-[#44474c]">Frequently bundled</span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
            {RELATED_ITEMS.map((item) => (
              <div
                key={item.id}
                className="bg-[#faf8ff] p-2.5 rounded-xl border border-[#eaedff] flex flex-col justify-between gap-2 shadow-2xs"
              >
                <div className="relative w-full aspect-square rounded-lg overflow-hidden bg-white">
                  <img alt={item.title} src={item.image} className="w-full h-full object-cover" />
                  <span className="absolute top-1 left-1 px-1.5 py-0.2 bg-[#0b192c] text-white rounded text-[9px] font-bold font-display">
                    {item.categoryTag}
                  </span>
                </div>

                <div className="flex flex-col gap-0.5">
                  <h4 className="font-display font-bold text-xs text-[#131b2e] line-clamp-1">
                    {item.title}
                  </h4>
                  <span className="text-[10px] text-[#44474c] line-clamp-1">{item.subtitle}</span>
                  <div className="flex items-baseline gap-1 mt-1">
                    <span className="font-display font-bold text-xs text-[#0050cc]">
                      ₹{item.price.toLocaleString('en-IN')}
                    </span>
                    <span className="text-[10px] text-[#75777d] line-through">
                      ₹{item.originalPrice.toLocaleString('en-IN')}
                    </span>
                  </div>
                </div>

                <button
                  onClick={() => {
                    // Add related accessory as a product in cart
                    const relatedProduct: Product = {
                      id: item.id,
                      title: item.title,
                      subtitle: item.subtitle,
                      sector: 'security',
                      sectorLabel: 'Duty Gear',
                      price: item.price,
                      originalPrice: item.originalPrice,
                      discountPct: Math.round(((item.originalPrice - item.price) / item.originalPrice) * 100),
                      rating: 4.8,
                      reviewCount: 42,
                      image: item.image,
                      galleryImages: [item.image],
                      moq: item.moq,
                      fabric: 'High tensile industrial',
                      gsm: '250 GSM',
                      stitching: 'Reinforced',
                      features: ['Duty grade', 'Fade resistant'],
                      stockQty: 250,
                      colors: [{ name: 'Standard Black', hex: '#000000' }],
                      sizes: ['Standard Free Size'],
                      wholesaleTiers: [{ range: '1+ Units', pricePerUnit: item.price, minQty: 1 }],
                      description: item.subtitle,
                      sku: `ACC-${item.id.toUpperCase()}`
                    };
                    onAddToCart(relatedProduct, 1, 'Standard Free Size', 'Standard');
                  }}
                  className="w-full h-7 bg-white hover:bg-[#0050cc] hover:text-white text-[#131b2e] border border-[#c5c6cd] rounded-lg font-display text-[11px] font-bold transition-colors flex items-center justify-center gap-1 active:scale-95"
                >
                  <span className="material-symbols-outlined text-[14px]">add</span>
                  <span>Add</span>
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 5. Sticky Bottom Action Bar */}
      <div className="fixed bottom-16 sm:bottom-0 left-0 right-0 z-30 bg-white/95 backdrop-blur-xl border-t border-[#eaedff] p-3 shadow-[0_-4px_12px_rgba(0,0,0,0.06)]">
        <div className="max-w-2xl mx-auto flex items-center justify-between gap-3">
          <div className="flex flex-col">
            <span className="text-[10px] uppercase font-bold text-[#75777d] tracking-wider font-display">
              Subtotal ({quantity} {quantity > 1 ? 'Units' : 'Unit'})
            </span>
            <div className="flex items-baseline gap-1">
              <span className="font-display font-extrabold text-lg text-[#0050cc]">
                ₹{totalPrice.toLocaleString('en-IN')}
              </span>
              <span className="text-[10px] text-emerald-700 font-semibold">GST Inc.</span>
            </div>
          </div>

          <div className="flex items-center gap-2 flex-1 max-w-xs">
            <button
              onClick={() => onAddToCart(product, quantity, selectedSize, selectedColor)}
              className="flex-1 h-11 bg-[#0b192c] hover:bg-[#131b2e] text-white rounded-xl font-display text-xs font-bold active:scale-95 transition-all shadow-sm flex items-center justify-center gap-1.5"
            >
              <span className="material-symbols-outlined text-[16px]">shopping_bag</span>
              <span>Add to Cart</span>
            </button>

            <button
              onClick={() => onBuyNow(product, quantity, selectedSize, selectedColor)}
              className="flex-1 h-11 bg-[#0266ff] hover:bg-[#0050cc] text-white rounded-xl font-display text-xs font-bold active:scale-95 transition-all shadow-md flex items-center justify-center gap-1.5"
            >
              <span className="material-symbols-outlined text-[16px]">bolt</span>
              <span>Buy Now</span>
            </button>
          </div>
        </div>
      </div>

      {/* Size Guide Modal */}
      <SizeGuideModal isOpen={sizeGuideOpen} onClose={() => setSizeGuideOpen(false)} />
    </div>
  );
};
