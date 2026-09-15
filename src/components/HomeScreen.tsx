import React from 'react';
import { Product } from '../types';
import { PRODUCTS } from '../data/products';

interface HomeScreenProps {
  onNavigate: (tab: string, filterSector?: string) => void;
  onSelectProduct: (product: Product) => void;
  onAddToCart: (product: Product, quantity?: number) => void;
  onOpenRFQ: (sector?: string) => void;
}

export const HomeScreen: React.FC<HomeScreenProps> = ({
  onNavigate,
  onSelectProduct,
  onAddToCart,
  onOpenRFQ
}) => {
  const categories = [
    {
      id: 'security',
      title: 'Security Guards',
      subtitle: 'Badges & Heavy Drill',
      tag: 'Heavy Drill',
      icon: 'shield',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCmY3kRyrda_xhJ7qmg9VjGDq9IE0PcSg69X9TSewbOXbuo87xXl2KeqG8OXrj8ag3Uxsuxe_fCs5eS6eU3foTsXIfoUb3pZsnk4SLwnYb8mMbk3v0NcnoADtsJwFPW4wjTKIW64OeovOuoSK4DUXCh2JUrI16yhGvgLuWeUsAaaGrWVX2jgeWjHohf_OhDcjRWJEHN3-qFt5iTmbmw8hXym8R3sfJxxZbJR5lhw0iiSYChZrqS302W'
    },
    {
      id: 'hospital',
      title: 'Hospital & Scrubs',
      subtitle: 'Antimicrobial Fabrics',
      tag: 'Antimicrobial',
      icon: 'medical_services',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC-FrLy5ScP7fTrAg2UUMuz2tvlpwu1eG6cPDDOu_i_0DOelIIEvF0mdR4NNrN52P3IbwcZDk_X62BUPloTqftcRoiehTXkyWsyMh7QK6pWUIsIs1-zXYSF_DCaJAdR4j77EyIwG8BNd6SXNFVxvMYXNmsiMFYmTdbxMGuSAuuOYkV1fSVEfy1o8GvhiH0grC4OOoLQHK9_zygQ8-IMbu-dWb0Zgc6kqsOZYlDWSCbKLhLEkwVgQSq8'
    },
    {
      id: 'hotel',
      title: 'Hotel & Front Office',
      subtitle: 'Suits & Blazers',
      tag: 'Luxury Fit',
      icon: 'hotel',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCEakvfjwc610F0Rs49VMC_Ir2nZ4i1wP2qTuISVa5O1tHuc0nSJwEDf6t-kXyD7kZMrqJFWuieFnuUWiD0TUq54teFeno5uoitHzG_T1wZls3bj0kXriJFXfbLIJa8_fgOtGHbbIxB4NPcxbnJVsGGUMu1icXQtsdWRD79KfRVOg2Sq5Md7NH8Sxaol7B6owLLFySkpZCS-sY8VBv8GxaMLUam0lzA0YEa3hK9oGuHxt1f39Ko31tS'
    },
    {
      id: 'chef',
      title: 'Chef & Kitchen',
      subtitle: 'Breathable Coats & Aprons',
      tag: 'Breathable',
      icon: 'skillet',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuClVUbQjsBvNyytWmU_IcnWrbIWKpMNwjL_984nFqoZN_orM0tqC6V7F5xVoFcyxWCHqnDon6dncox-XlKKrcEZT2wgFB04T2y7fwedwDYfhpKKQDRafPqNP-oSNtAvCobVfg8kclUrHQtUb7rtXc4hhCKmEAc58xsJOVhMk2D2_W86y9R29IHStleftNiCmBdYG_ClOxfsmNh_JWqJzLx1RlHSNcPOKFdrvzIITiKY1qqUoJqel2QZ'
    },
    {
      id: 'industrial',
      title: 'Industrial & Factory',
      subtitle: 'Reflective Safety Suits',
      tag: 'High-Vis 3M',
      icon: 'construction',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCK03CTOSlTIPx6wjI325ZuNKvGrvfFadgGTRkaRMKMm62eP7H_6ZO2IgsX8OfreN0rKIhcxse5Negx4b9kewYmfqH9-eRkXWJMtYIq9Ju3T7HAUvRUSy1_FxKkDCEOTO32iKiMTQt4Jd07fLypjoHd3i-kxiDRdrKguNo4DSG7G4BEPOquijv42oix9kWvoClleCmUalxBVSVyjXnLdiZ8hoSMH9CRkoBdL_luvwTHTRlJeQQAUNuc'
    },
    {
      id: 'corporate',
      title: 'Corporate Executive',
      subtitle: 'Formal Shirts & Trousers',
      tag: 'Wrinkle-Free',
      icon: 'business_center',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA07H4M60qFo-XRTRa1r0w0QtpD7F2oJCP_CPalXyWx23ul_bb7HJ1O11T3fNgJygoAVs9foYY7pwehA8jfEU5wDt7lstYBZ70Me0dN7W89R81ZvNE_CqjmIir7bl1UgzH0028TPerwSjtK5PJmVPB_F5g6D_qEILGB1J7TpR2nXQbku89em9hThvFwj9YUCMqWGSS0bkqa9c76agLoHZNCm8GlfB4JW-pAEn3T_ieOf0xjYzgXLwXh'
    }
  ];

  return (
    <div className="flex flex-col w-full pb-20">
      {/* 1. Hero Section */}
      <section className="w-full px-4 pt-3 pb-5">
        <div className="relative w-full rounded-2xl overflow-hidden bg-[#0e1c2f] text-white shadow-xl border border-white/5">
          {/* Subtle background texture pattern */}
          <div
            className="absolute inset-0 opacity-20 bg-cover bg-center pointer-events-none"
            style={{
              backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuA-1InpDaI4qKBPkhSoXmVxL_wluw6SZU8hz9b8X4yqf6IQw-_MS_G_NZacVXGYCMgYfGpmEqbX0M-z985OB4ecpKMjZ0w45R1KpqYE-VyzaNsFLM4bOSk-CGZKlLE63eotGRMb1FX5x9bphXRPCAR4WZhYbGrrtzuOj568ioZUiZo9jw0ZWKBSGUDIj4JZDaj5jkH_2BCHnhbxnssalY66VQ50hSGYpYCMsJcAjhoD_4gx-6eUfRwD')`
            }}
          />

          <div className="relative z-10 flex flex-col gap-3 p-5 sm:p-6">
            <div className="inline-flex items-center gap-1.5 self-start px-2.5 py-1 bg-[#2a1700] border border-[#ffb95f]/30 rounded-full text-[#ffb95f]">
              <span className="material-symbols-outlined text-[15px]">verified</span>
              <span className="font-display font-bold text-[10px] sm:text-[11px] tracking-wider uppercase">
                B2B & Retail Direct
              </span>
            </div>

            <div className="flex flex-col gap-1.5">
              <h1 className="font-display font-extrabold text-2xl sm:text-3xl text-white leading-tight">
                India’s Trusted Workwear & Corporate Uniform Specialist
              </h1>
              <p className="text-sm text-[#bac7e1] leading-relaxed">
                Durable, ISO-certified fabrics engineered for security, healthcare, hospitality, and heavy industry.
              </p>
            </div>

            {/* Metric Micro-stats */}
            <div className="grid grid-cols-3 gap-2 py-1">
              <div className="flex flex-col bg-white/10 rounded-xl p-2 text-center backdrop-blur-sm border border-white/5">
                <span className="font-display text-lg sm:text-xl text-[#ffddb8] font-bold">120k+</span>
                <span className="font-display text-[9px] sm:text-[10px] text-[#bac7e1] uppercase tracking-wider">
                  Uniforms Shipped
                </span>
              </div>
              <div className="flex flex-col bg-white/10 rounded-xl p-2 text-center backdrop-blur-sm border border-white/5">
                <span className="font-display text-lg sm:text-xl text-[#ffddb8] font-bold">4.9★</span>
                <span className="font-display text-[9px] sm:text-[10px] text-[#bac7e1] uppercase tracking-wider">
                  Client Rating
                </span>
              </div>
              <div className="flex flex-col bg-white/10 rounded-xl p-2 text-center backdrop-blur-sm border border-white/5">
                <span className="font-display text-lg sm:text-xl text-[#ffddb8] font-bold">14+</span>
                <span className="font-display text-[9px] sm:text-[10px] text-[#bac7e1] uppercase tracking-wider">
                  Day Turnaround
                </span>
              </div>
            </div>

            {/* Dual CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-2 pt-1">
              <button
                onClick={() => onNavigate('catalog')}
                className="w-full sm:flex-1 h-12 flex items-center justify-center gap-2 bg-[#0266ff] hover:bg-[#0050cc] text-white rounded-xl font-display text-sm font-bold shadow-md active:scale-95 transition-all"
              >
                <span>Shop Now</span>
                <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
              </button>
              <button
                onClick={() => onOpenRFQ()}
                className="w-full sm:flex-1 h-12 flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white rounded-xl font-display text-sm font-bold active:scale-95 transition-all backdrop-blur-md border border-white/15"
              >
                <span className="material-symbols-outlined text-[18px] text-[#ffddb8]">calculate</span>
                <span>Get Bulk Quote</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Trust Strip */}
      <section className="w-full px-4 py-1">
        <div className="flex items-center gap-2.5 overflow-x-auto pb-1 no-scrollbar">
          <div className="flex items-center gap-2 bg-white px-3.5 py-2.5 rounded-xl shadow-xs border border-[#eaedff] whitespace-nowrap shrink-0">
            <div className="w-8 h-8 rounded-full bg-[#dae1ff] flex items-center justify-center text-[#001849]">
              <span className="material-symbols-outlined text-[18px]">verified_user</span>
            </div>
            <div className="flex flex-col">
              <span className="font-display text-xs text-[#131b2e] font-bold leading-tight">ISO 9001 Certified</span>
              <span className="text-[11px] text-[#44474c]">Quality standards</span>
            </div>
          </div>

          <div className="flex items-center gap-2 bg-white px-3.5 py-2.5 rounded-xl shadow-xs border border-[#eaedff] whitespace-nowrap shrink-0">
            <div className="w-8 h-8 rounded-full bg-[#ffddb8] flex items-center justify-center text-[#2a1700]">
              <span className="material-symbols-outlined text-[18px]">precision_manufacturing</span>
            </div>
            <div className="flex flex-col">
              <span className="font-display text-xs text-[#131b2e] font-bold leading-tight">Premium Stitch Quality</span>
              <span className="text-[11px] text-[#44474c]">Reinforced seams</span>
            </div>
          </div>

          <div className="flex items-center gap-2 bg-white px-3.5 py-2.5 rounded-xl shadow-xs border border-[#eaedff] whitespace-nowrap shrink-0">
            <div className="w-8 h-8 rounded-full bg-[#dae1ff] flex items-center justify-center text-[#001849]">
              <span className="material-symbols-outlined text-[18px]">cached</span>
            </div>
            <div className="flex flex-col">
              <span className="font-display text-xs text-[#131b2e] font-bold leading-tight">7-Day Easy Returns</span>
              <span className="text-[11px] text-[#44474c]">Hassle-free exchange</span>
            </div>
          </div>

          <div className="flex items-center gap-2 bg-white px-3.5 py-2.5 rounded-xl shadow-xs border border-[#eaedff] whitespace-nowrap shrink-0">
            <div className="w-8 h-8 rounded-full bg-[#ffddb8] flex items-center justify-center text-[#2a1700]">
              <span className="material-symbols-outlined text-[18px]">support_agent</span>
            </div>
            <div className="flex flex-col">
              <span className="font-display text-xs text-[#131b2e] font-bold leading-tight">24/7 Bulk Support</span>
              <span className="text-[11px] text-[#44474c]">Dedicated RFQ desk</span>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Sectors & Industries - 6 Category Cards Grid */}
      <section className="w-full px-4 py-4">
        <div className="flex items-center justify-between mb-3">
          <div className="flex flex-col">
            <span className="font-display text-[11px] text-[#0050cc] uppercase tracking-wider font-bold">
              Sectors & Industries
            </span>
            <h2 className="font-display text-lg sm:text-xl text-[#131b2e] font-bold">
              Explore Categories
            </h2>
          </div>
          <button
            onClick={() => onNavigate('catalog')}
            className="flex items-center gap-0.5 font-display text-xs text-[#0050cc] hover:underline font-bold"
          >
            <span>View All</span>
            <span className="material-symbols-outlined text-[16px]">chevron_right</span>
          </button>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
          {categories.map((cat) => (
            <div
              key={cat.id}
              onClick={() => onNavigate('catalog', cat.id)}
              className="group flex flex-col bg-white rounded-xl overflow-hidden shadow-xs border border-[#eaedff] hover:shadow-md transition-all cursor-pointer"
            >
              <div className="relative w-full h-28 bg-[#f2f3ff] overflow-hidden">
                <img
                  alt={cat.title}
                  src={cat.image}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <span className="absolute top-2 left-2 px-2 py-0.5 bg-[#0b192c] text-white rounded font-display text-[10px] uppercase font-bold tracking-wider">
                  {cat.tag}
                </span>
              </div>
              <div className="p-3 flex flex-col gap-0.5">
                <div className="flex items-center justify-between">
                  <span className="font-display text-xs text-[#131b2e] font-bold group-hover:text-[#0050cc] transition-colors line-clamp-1">
                    {cat.title}
                  </span>
                  <span className="material-symbols-outlined text-[16px] text-[#44474c] shrink-0">
                    {cat.icon}
                  </span>
                </div>
                <span className="text-[11px] text-[#44474c] line-clamp-1">
                  {cat.subtitle}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. Fast-Moving Featured Uniforms (8 Items) */}
      <section className="w-full px-4 py-5 bg-[#f2f3ff]">
        <div className="flex items-center justify-between mb-3">
          <div className="flex flex-col">
            <span className="font-display text-[11px] text-[#0050cc] uppercase tracking-wider font-bold">
              Fast-Moving Inventory
            </span>
            <h2 className="font-display text-lg sm:text-xl text-[#131b2e] font-bold">
              Featured Uniforms
            </h2>
          </div>
          <span className="font-display text-[11px] text-[#44474c] bg-[#dae2fd] px-2.5 py-0.5 rounded-full font-semibold">
            Pan-India Stock
          </span>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {PRODUCTS.map((prod) => (
            <div
              key={prod.id}
              className="flex flex-col bg-white rounded-xl overflow-hidden shadow-xs border border-[#eaedff] hover:shadow-md transition-all"
            >
              {/* Product Thumbnail */}
              <div
                onClick={() => onSelectProduct(prod)}
                className="relative w-full aspect-square bg-[#eaedff] overflow-hidden cursor-pointer group"
              >
                <img
                  alt={prod.title}
                  src={prod.image}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                {prod.tag && (
                  <span className="absolute top-2 left-2 px-2 py-0.5 bg-[#0050cc] text-white rounded-full font-display text-[10px] font-bold tracking-wide shadow-xs">
                    {prod.tag}
                  </span>
                )}
                <span className="absolute bottom-2 right-2 px-1.5 py-0.5 bg-white/90 text-[#131b2e] rounded font-display text-[9px] font-bold backdrop-blur-xs">
                  MOQ: {prod.moq}
                </span>
              </div>

              {/* Product Details */}
              <div className="p-3 flex flex-col flex-1 justify-between gap-2">
                <div
                  onClick={() => onSelectProduct(prod)}
                  className="flex flex-col gap-0.5 cursor-pointer"
                >
                  <h3 className="font-display text-xs text-[#131b2e] font-bold line-clamp-2 hover:text-[#0050cc] transition-colors">
                    {prod.title}
                  </h3>
                  <span className="text-[11px] text-[#44474c] line-clamp-1">
                    {prod.subtitle}
                  </span>
                </div>

                <div className="flex flex-col gap-1.5 pt-1 border-t border-[#eaedff]">
                  <div className="flex items-baseline gap-1.5">
                    <span className="font-display text-base text-[#0050cc] font-bold">
                      ₹{prod.price.toLocaleString('en-IN')}
                    </span>
                    <span className="text-[11px] text-[#75777d] line-through">
                      ₹{prod.originalPrice.toLocaleString('en-IN')}
                    </span>
                    <span className="font-display text-[10px] text-[#b87500] font-bold">
                      {prod.discountPct}% OFF
                    </span>
                  </div>

                  <button
                    onClick={() => onAddToCart(prod, 1)}
                    className="w-full h-9 flex items-center justify-center gap-1 bg-[#0b192c] hover:bg-[#0050cc] text-white rounded-lg font-display text-xs font-bold active:scale-95 transition-all shadow-xs"
                  >
                    <span className="material-symbols-outlined text-[16px]">shopping_cart</span>
                    <span>Add to Cart</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. Why Enterprise Chooses Everbright (4 Value Props) */}
      <section className="w-full px-4 py-6 bg-white">
        <div className="flex flex-col gap-1 text-center mb-5">
          <span className="font-display text-[11px] text-[#0050cc] uppercase tracking-wider font-bold">
            Why Enterprise Chooses Everbright
          </span>
          <h2 className="font-display text-lg sm:text-xl text-[#131b2e] font-bold">
            Built for Scale & Reliability
          </h2>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          <div className="flex flex-col p-4 bg-[#faf8ff] rounded-xl border border-[#eaedff] shadow-xs gap-1.5">
            <div className="w-10 h-10 rounded-lg bg-[#ffddb8] flex items-center justify-center text-[#2a1700] mb-1">
              <span className="material-symbols-outlined text-[22px]">price_change</span>
            </div>
            <h3 className="font-display text-xs text-[#131b2e] font-bold">Bulk Discounts</h3>
            <p className="text-[11px] text-[#44474c] leading-relaxed">
              Up to 45% off on tiered bulk purchases of 500+ units.
            </p>
          </div>

          <div className="flex flex-col p-4 bg-[#faf8ff] rounded-xl border border-[#eaedff] shadow-xs gap-1.5">
            <div className="w-10 h-10 rounded-lg bg-[#dae1ff] flex items-center justify-center text-[#001849] mb-1">
              <span className="material-symbols-outlined text-[22px]">draw</span>
            </div>
            <h3 className="font-display text-xs text-[#131b2e] font-bold">Custom Logo Branding</h3>
            <p className="text-[11px] text-[#44474c] leading-relaxed">
              Precision Tajima embroidery, DTF printing & badge integration.
            </p>
          </div>

          <div className="flex flex-col p-4 bg-[#faf8ff] rounded-xl border border-[#eaedff] shadow-xs gap-1.5">
            <div className="w-10 h-10 rounded-lg bg-[#dae1ff] flex items-center justify-center text-[#001849] mb-1">
              <span className="material-symbols-outlined text-[22px]">local_shipping</span>
            </div>
            <h3 className="font-display text-xs text-[#131b2e] font-bold">Pan-India Express</h3>
            <p className="text-[11px] text-[#44474c] leading-relaxed">
              Fast dispatch across 19,000+ pin codes with live consignment tracking.
            </p>
          </div>

          <div className="flex flex-col p-4 bg-[#faf8ff] rounded-xl border border-[#eaedff] shadow-xs gap-1.5">
            <div className="w-10 h-10 rounded-lg bg-[#ffddb8] flex items-center justify-center text-[#2a1700] mb-1">
              <span className="material-symbols-outlined text-[22px]">payments</span>
            </div>
            <h3 className="font-display text-xs text-[#131b2e] font-bold">COD & Net Credit</h3>
            <p className="text-[11px] text-[#44474c] leading-relaxed">
              Cash on Delivery + 30-day corporate credit for verified buyers.
            </p>
          </div>
        </div>
      </section>

      {/* 6. Client Testimonials */}
      <section className="w-full px-4 py-5 bg-[#f2f3ff]">
        <div className="flex flex-col gap-1 mb-4">
          <span className="font-display text-[11px] text-[#0050cc] uppercase tracking-wider font-bold">
            Client Success
          </span>
          <h2 className="font-display text-lg sm:text-xl text-[#131b2e] font-bold">
            Trusted by Industry Leaders
          </h2>
        </div>

        <div className="flex flex-col sm:flex-row gap-3">
          <div className="flex flex-col gap-2 p-4 bg-white rounded-xl shadow-xs border border-[#eaedff] flex-1">
            <div className="flex items-center justify-between">
              <div className="flex text-[#b87500] gap-0.5">
                {[1, 2, 3, 4, 5].map((s) => (
                  <span key={s} className="material-symbols-outlined text-[16px]">star</span>
                ))}
              </div>
              <span className="font-display text-[10px] text-[#44474c] uppercase font-bold">
                Hospitality
              </span>
            </div>
            <p className="text-xs text-[#131b2e] italic leading-relaxed">
              "Everbright supplied 800+ scrub sets for our hospital expansion in Pune. The antimicrobial fabric holds up remarkably well across 60°C autoclaves without shrinkage."
            </p>
            <div className="flex items-center gap-2.5 pt-1">
              <div className="w-8 h-8 rounded-full bg-[#dae1ff] text-[#001849] flex items-center justify-center font-bold font-display text-xs">
                RK
              </div>
              <div className="flex flex-col">
                <span className="font-display text-xs text-[#131b2e] font-bold">Dr. Rajesh K. Nair</span>
                <span className="text-[10px] text-[#44474c]">Apollo Healthcare Facility Manager</span>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-2 p-4 bg-white rounded-xl shadow-xs border border-[#eaedff] flex-1">
            <div className="flex items-center justify-between">
              <div className="flex text-[#b87500] gap-0.5">
                {[1, 2, 3, 4, 5].map((s) => (
                  <span key={s} className="material-symbols-outlined text-[16px]">star</span>
                ))}
              </div>
              <span className="font-display text-[10px] text-[#44474c] uppercase font-bold">
                Security Logistics
              </span>
            </div>
            <p className="text-xs text-[#131b2e] italic leading-relaxed">
              "Managing security guards across 40 bank branches requires uniforms that survive harsh shifts. Everbright's heavy drill pants and badge integration are unmatched."
            </p>
            <div className="flex items-center gap-2.5 pt-1">
              <div className="w-8 h-8 rounded-full bg-[#0b192c] text-white flex items-center justify-center font-bold font-display text-xs">
                MS
              </div>
              <div className="flex flex-col">
                <span className="font-display text-xs text-[#131b2e] font-bold">Manpreet Singh</span>
                <span className="text-[10px] text-[#44474c]">G4S Security Logistics Lead</span>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-2 p-4 bg-white rounded-xl shadow-xs border border-[#eaedff] flex-1">
            <div className="flex items-center justify-between">
              <div className="flex text-[#b87500] gap-0.5">
                {[1, 2, 3, 4, 5].map((s) => (
                  <span key={s} className="material-symbols-outlined text-[16px]">star</span>
                ))}
              </div>
              <span className="font-display text-[10px] text-[#44474c] uppercase font-bold">
                Luxury Hospitality
              </span>
            </div>
            <p className="text-xs text-[#131b2e] italic leading-relaxed">
              "Front desk blazers require impeccability and swift sizing alterations. Everbright's team delivered personalized fittings for our 120 staff in under 10 business days."
            </p>
            <div className="flex items-center gap-2.5 pt-1">
              <div className="w-8 h-8 rounded-full bg-[#ffddb8] text-[#2a1700] flex items-center justify-center font-bold font-display text-xs">
                SB
              </div>
              <div className="flex flex-col">
                <span className="font-display text-xs text-[#131b2e] font-bold">Shreya Banerjee</span>
                <span className="text-[10px] text-[#44474c]">Taj Gateway Hospitality Director</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Enterprise Quotations CTA Banner */}
      <section className="w-full px-4 py-5">
        <div className="relative w-full rounded-2xl p-5 sm:p-6 bg-[#0e1c2f] text-white overflow-hidden shadow-xl">
          <div className="absolute -right-8 -bottom-8 w-44 h-44 rounded-full bg-[#0266ff]/20 blur-2xl pointer-events-none" />
          <div className="relative z-10 flex flex-col gap-3">
            <div className="flex items-center gap-1.5">
              <span className="material-symbols-outlined text-[#ffddb8] text-[22px]">corporate_fare</span>
              <span className="font-display text-[10px] sm:text-[11px] text-[#ffddb8] font-bold uppercase tracking-wider">
                Enterprise Quotations
              </span>
            </div>
            <div className="flex flex-col gap-1">
              <h2 className="font-display text-xl sm:text-2xl text-white font-bold leading-tight">
                Need 50+ Uniforms with Custom Branding?
              </h2>
              <p className="text-xs text-[#bac7e1] leading-relaxed">
                Receive tiered wholesale rate cards, complimentary sample swatch packs, and computerized embroidery proofs within 4 working hours.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-2 pt-1">
              <button
                onClick={() => onOpenRFQ()}
                className="w-full sm:flex-1 h-11 flex items-center justify-center gap-2 bg-[#0266ff] hover:bg-[#0050cc] text-white rounded-xl font-display text-xs font-bold active:scale-95 transition-all shadow-md"
              >
                <span className="material-symbols-outlined text-[18px]">assignment</span>
                <span>Bulk Quote</span>
              </button>
              <a
                href="https://wa.me/919876543210?text=Hi%20Everbright%20Uniform,%20I%20need%20a%20bulk%20quote%20for%20our%20uniform%20requisition."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:flex-1 h-11 flex items-center justify-center gap-2 bg-white text-[#131b2e] hover:bg-[#faf8ff] rounded-xl font-display text-xs font-bold active:scale-95 transition-all shadow-xs"
              >
                <span className="material-symbols-outlined text-emerald-600 text-[18px]">chat</span>
                <span>WhatsApp: +91 98765 43210</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 8. Comprehensive Footer */}
      <footer className="w-full bg-[#f2f3ff] px-4 pt-8 pb-6 mt-4 flex flex-col gap-5 border-t border-[#eaedff]">
        <div className="flex flex-col gap-1">
          <div className="flex items-center gap-1.5">
            <span className="material-symbols-outlined text-[#0050cc] text-[20px]">verified</span>
            <span className="font-display text-sm text-[#131b2e] font-extrabold uppercase tracking-wider">
              Everbright Uniform
            </span>
          </div>
          <p className="text-xs text-[#44474c] leading-relaxed">
            Everbright Uniform — Premium workwear, medical, hospitality & industrial uniforms since 2014. Trusted wholesale & direct procurement pan-India.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-5 text-xs">
          <div className="flex flex-col gap-1.5">
            <span className="font-display font-bold text-[#131b2e] uppercase tracking-wider text-[11px]">
              Shop Categories
            </span>
            <button
              onClick={() => onNavigate('catalog')}
              className="text-left text-[#44474c] hover:text-[#0050cc] py-0.5"
            >
              All Products
            </button>
            <button
              onClick={() => onNavigate('catalog', 'security')}
              className="text-left text-[#44474c] hover:text-[#0050cc] py-0.5"
            >
              Security Workwear
            </button>
            <button
              onClick={() => onNavigate('catalog', 'hospital')}
              className="text-left text-[#44474c] hover:text-[#0050cc] py-0.5"
            >
              Hospital & Medical
            </button>
            <button
              onClick={() => onNavigate('catalog', 'hotel')}
              className="text-left text-[#44474c] hover:text-[#0050cc] py-0.5"
            >
              Hotel & Corporate
            </button>
            <button
              onClick={() => onNavigate('catalog', 'chef')}
              className="text-left text-[#44474c] hover:text-[#0050cc] py-0.5"
            >
              Chef & Kitchen
            </button>
          </div>

          <div className="flex flex-col gap-1.5">
            <span className="font-display font-bold text-[#131b2e] uppercase tracking-wider text-[11px]">
              Company
            </span>
            <button
              onClick={() => onNavigate('account')}
              className="text-left text-[#44474c] hover:text-[#0050cc] py-0.5"
            >
              About Us
            </button>
            <button
              onClick={() => onOpenRFQ()}
              className="text-left text-[#44474c] hover:text-[#0050cc] py-0.5"
            >
              Bulk Orders (RFQ)
            </button>
            <button
              onClick={() => onNavigate('account')}
              className="text-left text-[#44474c] hover:text-[#0050cc] py-0.5"
            >
              Client Portal Login
            </button>
            <a
              href="mailto:support@everbrightuniform.com"
              className="text-left text-[#44474c] hover:text-[#0050cc] py-0.5"
            >
              Support & Contact
            </a>
          </div>
        </div>

        {/* Contact Strip */}
        <div className="flex flex-col gap-1.5 p-3.5 bg-white rounded-xl shadow-xs border border-[#eaedff]">
          <div className="flex items-center gap-2 text-[#131b2e]">
            <span className="material-symbols-outlined text-[#0050cc] text-[18px]">call</span>
            <span className="font-display text-xs font-bold">+91 98765 43210</span>
          </div>
          <div className="flex items-center gap-2 text-[#44474c]">
            <span className="material-symbols-outlined text-[#0050cc] text-[18px]">mail</span>
            <span className="text-xs">support@everbrightuniform.com</span>
          </div>
          <div className="flex items-center gap-2 text-[#44474c]">
            <span className="material-symbols-outlined text-[#0050cc] text-[18px]">local_shipping</span>
            <span className="text-xs">Pan-India Industrial Logistics & GST Invoicing</span>
          </div>
        </div>

        <div className="flex items-center justify-between pt-1 text-[#44474c] text-[11px]">
          <div className="flex items-center gap-3">
            <span className="material-symbols-outlined text-[18px]">share</span>
            <span className="material-symbols-outlined text-[18px]">public</span>
            <span className="material-symbols-outlined text-[18px]">chat</span>
            <span className="material-symbols-outlined text-[18px]">work</span>
          </div>
          <span>© 2026 Everbright Uniform. All rights reserved.</span>
        </div>
      </footer>
    </div>
  );
};
