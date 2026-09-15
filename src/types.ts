export interface WholesaleTier {
  range: string;
  pricePerUnit: number;
  minQty: number;
}

export interface Product {
  id: string;
  title: string;
  subtitle: string;
  sector: 'security' | 'hospital' | 'hotel' | 'chef' | 'industrial' | 'corporate';
  sectorLabel: string;
  price: number;
  originalPrice: number;
  discountPct: number;
  rating: number;
  reviewCount: number;
  image: string;
  galleryImages: string[];
  moq: number;
  tag?: string;
  tagType?: 'bestseller' | 'top-rated' | 'luxury' | 'duty' | 'corporate' | 'medical';
  fabric: string;
  gsm: string;
  stitching: string;
  features: string[];
  stockQty: number;
  colors: { name: string; hex: string }[];
  sizes: string[];
  wholesaleTiers: WholesaleTier[];
  description: string;
  sku: string;
}

export interface CartItem {
  id: string; // unique item entry id
  productId: string;
  product: Product;
  selectedSize: string;
  selectedColor: string;
  quantity: number;
}

export interface RelatedItem {
  id: string;
  title: string;
  subtitle: string;
  price: number;
  originalPrice: number;
  image: string;
  categoryTag: string;
  moq: number;
}

export interface FilterState {
  searchQuery: string;
  sector: string; // 'all' or specific
  size: string; // 'all' or S, M, L, XL, etc.
  maxPrice: number;
  sortBy: 'popular' | 'newest' | 'price-asc' | 'price-desc';
  inStockOnly: boolean;
  selectedSectors: string[];
}
