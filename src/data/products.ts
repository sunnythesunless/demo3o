import { Product, RelatedItem } from '../types';

export const PRODUCTS: Product[] = [
  {
    id: 'guard-pro-set',
    title: 'Guard Pro Heavy-Duty Security Uniform Set (Shirt + Trousers)',
    subtitle: 'Heavy poly-cotton drill with reinforced epaulets',
    sector: 'security',
    sectorLabel: 'Security & Guard',
    price: 1199,
    originalPrice: 1899,
    discountPct: 37,
    rating: 4.8,
    reviewCount: 184,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBGFiT4B_1bXrh_uXmPxZOL4REVwUfG_wffb4j3jMRh5c8xRVeVTnLNwlm7VretbcU50uUTIvSALRoF7ppL2VBJw7awNgDORdnOxoZXQkOao6rWOVvp3zvVjtBgpWS8Et2Bb-HKy4ZFi260P1SHN2Uh91xLVSSsQ9LTiO3CufTCPobadqISiQ5Agdn8ZimnH9IIPV4wjsGU6y078L1j51CmVLHMSl4J_NNTap6412pSZIzPt9ITQqV2',
    galleryImages: [
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBGFiT4B_1bXrh_uXmPxZOL4REVwUfG_wffb4j3jMRh5c8xRVeVTnLNwlm7VretbcU50uUTIvSALRoF7ppL2VBJw7awNgDORdnOxoZXQkOao6rWOVvp3zvVjtBgpWS8Et2Bb-HKy4ZFi260P1SHN2Uh91xLVSSsQ9LTiO3CufTCPobadqISiQ5Agdn8ZimnH9IIPV4wjsGU6y078L1j51CmVLHMSl4J_NNTap6412pSZIzPt9ITQqV2',
      'https://lh3.googleusercontent.com/aida-public/AB6AXuD6YG620Pv6f-S1GN8SBKGuzb2afMqlKgXhliYVaEIwAcnP24P18hvv1vlxMLcY-oLUkibNMIlUOX91pCBBNd_q7nPwqPWj4XwxDpsWOIW6yp-ZkPXUhAMDGql9iK6_ieP3szjDiwLbicwWfJzQziZz0vwbAMIxN6u2gr-S7T8viVvUhMdmTM7V3hIAZ_pPKgPtwTlIUCmdiYJXgnItwRI_onsrkDv5sythn21DiMZledCKKcaBjkbh',
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBpbfsrETAkzrToH_0QDqOccUkxFUt523OQcyIJ6pKuc6CDb2Bm2NLBWw87J4Yvzn5wSel1eluKotMxNJ2kD5tQ2LCJzs1VJc0a2-7V97MVtcW5E7A5CdW8Tcp_xQQ-feU1yhwLqpPkiTa34Plxr9rtjp3E0xrsuX_UoCMShy0sJBpIwLceiuXkXgMD5kkYa_tTha2hKtx4TGoGRvlrh-ddMrwyRdq6lTEcUO56dM6QQhA1UJ0FP1Wm',
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAgbTtLH4Pmog7nPiiyEo8JjruWXQbr7gSQVZuOJxefnfIVjxentBsYPcHOhZKVD7p9cFnPfbEkup2VXXkLLPr3YFgLGO_XAlxz4RLVkV5DETjLkpTdQ_B4PdH8FG4eunzZ3wDyFh_2R85Dh7_-aaj-5a8V0lnIDIkuT0lQqGoIKs3zpKdCvJ_jyfI-i40G-ZEaHiTCGXEl9eKSvLsRqR82rafWvQoEIvVS9DyHQcWwL6LgDxqlPCG3',
      'https://lh3.googleusercontent.com/aida-public/AB6AXuA0vyGyjLsqqwh5yApXnksK-Z7lw9gQ2v5l52KLaN6Qgmlnw4sNSb07r90pw9vL3LqL3xFPxeP58ygF_YZSceEgaq8ooMbKgyUJxjEOT-r26jW3yPXsbhkRuiWR5AM78oQQ2h9J6uCKpB61qJqPBlVOxXkybc2hyrTFn_9zlYUqFJuQXqKAHyokd_RmOC8CNlJG4DxGMrldVmPakDxaAVZ2lOtK0MDz7Rw__UQlHNqeiw_-XAwZY1G4'
    ],
    moq: 10,
    tag: 'Bestseller',
    tagType: 'bestseller',
    fabric: '65% Poly / 35% Viscose Heavy Drill',
    gsm: '240 GSM Tear-Resistant',
    stitching: 'Double needle topstitch on stress points',
    features: ['Shoulder epaulets for rank slides', 'Metal badge loop & grommet', 'Side slit baton holster pocket', 'Fade-resistant industrial dye'],
    stockQty: 420,
    colors: [
      { name: 'Khaki Navy Blue', hex: '#1b2b48' },
      { name: 'Police Khaki', hex: '#b89758' },
      { name: 'Steel Grey', hex: '#5b6470' },
      { name: 'Tactical Jet Black', hex: '#111112' }
    ],
    sizes: ['S (38)', 'M (40)', 'L (42)', 'XL (44)', 'XXL (46)'],
    wholesaleTiers: [
      { range: '1 - 9 Units', pricePerUnit: 1199, minQty: 1 },
      { range: '10 - 49 Units', pricePerUnit: 999, minQty: 10 },
      { range: '50+ Units (MOQ)', pricePerUnit: 799, minQty: 50 }
    ],
    description: 'Engineered for perimeter security officers, corporate facility watchmen, and commercial guard teams. Built from an ultra-tough 65/35 poly-viscose heavy drill fabric that resists tearing while providing breathable moisture management during demanding 12-hour shifts.',
    sku: 'EVR-SEC-402'
  },
  {
    id: 'medflex-scrubs',
    title: 'Medical Scrub Suit Unisex (SILVADUR™ Antimicrobial)',
    subtitle: 'SILVADUR™ Antimicrobial V-neck top + cargo pants',
    sector: 'hospital',
    sectorLabel: 'Hospital & Care',
    price: 1199,
    originalPrice: 1799,
    discountPct: 33,
    rating: 4.9,
    reviewCount: 310,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA3nyq2RbnWCAPLld6az-X4mBYM0bqQ2LUSpfQiilqWTsiH5Msak5ngZMSlh-xEL4n_6jzpJfYymnQ23W2TliafpVftoF90VjejGTmKuubG9QcjRnoE2p-aNlY2uX6NeWUHnbkyS4nazAQJ23viPirTJZS6Q8wRKaZRRP_dNC4PT1MyVYmNM2L4GCc9neSsGC82NZ8SmlltOZPGzZctEJQZg6-XraThg4wS1oDHvfhOhmJ4QGr_5FyX',
    galleryImages: [
      'https://lh3.googleusercontent.com/aida-public/AB6AXuA3nyq2RbnWCAPLld6az-X4mBYM0bqQ2LUSpfQiilqWTsiH5Msak5ngZMSlh-xEL4n_6jzpJfYymnQ23W2TliafpVftoF90VjejGTmKuubG9QcjRnoE2p-aNlY2uX6NeWUHnbkyS4nazAQJ23viPirTJZS6Q8wRKaZRRP_dNC4PT1MyVYmNM2L4GCc9neSsGC82NZ8SmlltOZPGzZctEJQZg6-XraThg4wS1oDHvfhOhmJ4QGr_5FyX',
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCOqwdrSQyKZNaUYvvdKhYEhde_NThl1UpGhY-W4f2jv0LgjMQwohosbjFEGsAyNJf5Xk-NyATlAKtV6H2kFh4aJ0IcMbEw1ILkDNOtVx1CBSXEYuaDZpJe1qW_x7cWThAt5jrDlXrr59PDxzTczhhx9eyPKeFkbUbGoI1XpzhmURPPDceZhfM6BBEJRvgxdRCQxNXrx86PznI1MScGbqcwHWIFjG0XJCIry-9c0d7ReQ4tONbLjslo',
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCXDNVE5Ylx6SNanA1wpW_GHVOBvnfYEWPf5PvV8OG6pWBRms2eDMCGNCjs8cj8npFlJZazjoXtzTfG3kggjIZRD7RNBA2Raf72RLwK7uNKR3xQWR8Tm6RpPyG7mcd19_OpiTP-khzzF0We6oJ3SiTiIFFZ_BRGKaO3QOHFDY1yTkLzp0nfI6ed4216X94C58hJJ8PePukXmPKEsuBLFTwLoq7qACXRAQaoZBmWW5PlNSw3T8VJwuMh'
    ],
    moq: 5,
    tag: 'Top Rated',
    tagType: 'top-rated',
    fabric: '72% Poly / 21% Rayon / 7% Spandex 4-Way Stretch',
    gsm: '180 GSM Lightweight Breathable',
    stitching: 'Reinforced flatlock active seams',
    features: ['SILVADUR™ 99.9% Antimicrobial protection', 'Autoclave safe up to 60°C wash', 'Fluid resistant barrier finish', 'Multi-pocket scrub pants with scissor pocket'],
    stockQty: 580,
    colors: [
      { name: 'Hospital Navy', hex: '#1e3a8a' },
      { name: 'Ceil Blue', hex: '#60a5fa' },
      { name: 'Teal Green', hex: '#0d9488' },
      { name: 'Wine Burgundy', hex: '#831843' }
    ],
    sizes: ['S (38)', 'M (40)', 'L (42)', 'XL (44)', 'XXL (46)'],
    wholesaleTiers: [
      { range: '1 - 9 Units', pricePerUnit: 1199, minQty: 1 },
      { range: '10 - 49 Units', pricePerUnit: 980, minQty: 10 },
      { range: '50+ Units (MOQ)', pricePerUnit: 780, minQty: 50 }
    ],
    description: 'Developed in partnership with leading healthcare institutions. Uses medical grade SILVADUR™ antimicrobial silver ion technology to inhibit odor and bacteria growth, keeping surgical and clinical teams comfortable and protected through long operations.',
    sku: 'EVR-MED-108'
  },
  {
    id: 'chef-coat-executive',
    title: 'Executive Chef Double Breasted Coat',
    subtitle: 'Cool-vent breathable poly-cotton with cloth knot buttons',
    sector: 'chef',
    sectorLabel: 'Chef & Kitchen',
    price: 949,
    originalPrice: 1450,
    discountPct: 35,
    rating: 4.7,
    reviewCount: 95,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB2DsHfgyiGGuK2xql0EOgWBHaygfBTpskSe7l3uvsbOMXNZ6xx5mBl21Rs7ehUcKTwjB-yE_dp5K1Xly9PL2cJcX9LBarmpue9prQecF9LnQ0uOaLbsRFzeRIJHiXQDmBwhcfwNGzVsTQxdWIjTpwkPewxKMFsKJqlmQaptPULXjwNDDTMIX3Ls0vZS849tHmuhIMD4Hf7OW19fSuJqq9-c-ckQNPyB35X_V_c5GjZMzrRvqkb-SRG',
    galleryImages: [
      'https://lh3.googleusercontent.com/aida-public/AB6AXuB2DsHfgyiGGuK2xql0EOgWBHaygfBTpskSe7l3uvsbOMXNZ6xx5mBl21Rs7ehUcKTwjB-yE_dp5K1Xly9PL2cJcX9LBarmpue9prQecF9LnQ0uOaLbsRFzeRIJHiXQDmBwhcfwNGzVsTQxdWIjTpwkPewxKMFsKJqlmQaptPULXjwNDDTMIX3Ls0vZS849tHmuhIMD4Hf7OW19fSuJqq9-c-ckQNPyB35X_V_c5GjZMzrRvqkb-SRG',
      'https://lh3.googleusercontent.com/aida-public/AB6AXuATOSonFDajAgb2nJr6c18Z39fgDoiPOdWDXLZmTdoDEgOGhhwP-ya3tfR7INLxTNldmP-kK1HDQV5s6421KHjfESz0VE2pXwtjuPCuF3CKWJjADbi52rWBzmLT5BZ_r1U5dHLT38eS4z08Mx8JoCfVvp8uEQnQOVM7rPAq-N3_dxmfwnJVmW6Jpzx5jhPLWzVl0hHu6q-oy2YLBywwBGElZMcKzp4o1Ph4CFHZ1j3wOkZcLoT74CBJ',
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBpf9lOd4qDnoqfpp-Ugpxds5gPurpVSlNObbZ91YbyHDQFvG40n54XmVOcOAKqUb4r8Wtza2ygN6LRhXc589mO_Fh6hCNx_6jr5pC7bgu6emKkMjQB1GcO8lXG1BpP-mbDsxuHquRnP1junJOoAfxWdyPpLTpvLrJtbfZdf1zCfMuwzJA1sdFENx7wnqi-nhLirGiXAk0ZIDh6M7TInGbj-G6HMQLbVl0u2qUxc4Xg2n2nStFtGouL'
    ],
    moq: 10,
    tag: 'Hospitality',
    tagType: 'duty',
    fabric: '65% Polyester / 35% Cotton Combed Twill',
    gsm: '210 GSM Stain-Resistant',
    stitching: 'Reinforced bar-tacking on stress points',
    features: ['Mesh back cooling ventilation panel', 'Cloth-covered handmade knot buttons', 'Dual thermometer sleeve pocket', 'Stain & oil repellent treatment'],
    stockQty: 320,
    colors: [
      { name: 'Executive White', hex: '#ffffff' },
      { name: 'Midnight Black', hex: '#111827' },
      { name: 'Charcoal Grey', hex: '#4b5563' }
    ],
    sizes: ['S (38)', 'M (40)', 'L (42)', 'XL (44)', 'XXL (46)'],
    wholesaleTiers: [
      { range: '1 - 9 Units', pricePerUnit: 949, minQty: 1 },
      { range: '10 - 49 Units', pricePerUnit: 799, minQty: 10 },
      { range: '50+ Units (MOQ)', pricePerUnit: 649, minQty: 50 }
    ],
    description: 'Designed specifically for professional commercial kitchens, fine dining resorts, and culinary institutes. Features breathable mesh air-vents along the spine and armpits that facilitate heat dissipation in busy kitchen environments.',
    sku: 'EVR-CK-304'
  },
  {
    id: 'industrial-coverall',
    title: 'High-Visibility Industrial Safety Coverall',
    subtitle: 'EN ISO 20471 Certified with 3M Scotchlite Reflective Tape',
    sector: 'industrial',
    sectorLabel: 'Industrial & Safety',
    price: 1499,
    originalPrice: 2299,
    discountPct: 35,
    rating: 4.8,
    reviewCount: 144,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCfX_zLzmHzRaVmmPs9kTE8D8usnyprd3L8HA1Hrwm40Al_Gu0cf6HW90iUGt7IxyQ_Lj2OM9SUsNwu8auZrsi1_kQqFTpK69iFMKdIzl2d7qfVNIX8DnUuaLfr68NHJKh7rtnDqcsIsbmeGsr3AJBLHnUugVkgKuAm3IHow-GZ6pH3uX-aK5Q6Ga_PYgycmTTTvZ5MZEhCC33oES-9LElu6i_ML3gDHZAod3L_i7hV3TWLxlKKP4wP',
    galleryImages: [
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCfX_zLzmHzRaVmmPs9kTE8D8usnyprd3L8HA1Hrwm40Al_Gu0cf6HW90iUGt7IxyQ_Lj2OM9SUsNwu8auZrsi1_kQqFTpK69iFMKdIzl2d7qfVNIX8DnUuaLfr68NHJKh7rtnDqcsIsbmeGsr3AJBLHnUugVkgKuAm3IHow-GZ6pH3uX-aK5Q6Ga_PYgycmTTTvZ5MZEhCC33oES-9LElu6i_ML3gDHZAod3L_i7hV3TWLxlKKP4wP',
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBYaPB0WBEFV91LZSSfpv5jkGYhWk6VMhPqQLBCYYOEpCsBmHoxHA-qUyB_SZHAsYFIaF60XSCyItDyBRYpUMvPB_SOHZj39UD-WPv-hg6JyxDUSG_eRDprCP7vr57VjeQxMag0lrp57545-wby-3npYofNFhxs_qw45wy4SLJR94uhIKgm648rxOqG977IW338FBBnDtH-v3VOcfMPQ1ZQRya09f-kMuMKU0VHMYWATDTGRkEGejyS',
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDAnxZcyA0H1PC9O9Kv7fIvdw2GhhAF_2DZLCEPJCjlFGCfeys8-NhsTqKz6g8g9FCHv-GZD4K_y0fgdynw6H4JO0Ic5rXfnvUTpufl4H8feohVnRaeXuyPik7mw8Fwg9CSUlJnHjbqM_xnYL6doGMDShGXbe6hN-EKftUkJ2slKTZL_XYyH6q-sKwy6sd28bMvfSB99hMqW6o1uWbaXSq9a7kMj9NLsJSUlPiN5THlnebo5iNjcui6'
    ],
    moq: 25,
    tag: 'Heavy Duty',
    tagType: 'duty',
    fabric: '100% Heavy Cotton Twill / Flame Retardant Blend',
    gsm: '280 GSM Industrial Heavy Duty',
    stitching: 'Triple needle safety locked seams',
    features: ['3M Scotchlite 50mm reflective bands', 'Heavy-duty 2-way brass zipper with storm flap', 'Reinforced knee pad insert pockets', 'Side access pockets to trousers underneath'],
    stockQty: 290,
    colors: [
      { name: 'Industrial Orange', hex: '#ea580c' },
      { name: 'Hi-Vis Yellow & Navy', hex: '#eab308' },
      { name: 'Royal Boiler Navy', hex: '#1e3a8a' }
    ],
    sizes: ['M (40)', 'L (42)', 'XL (44)', 'XXL (46)', '3XL (48)'],
    wholesaleTiers: [
      { range: '1 - 9 Units', pricePerUnit: 1499, minQty: 1 },
      { range: '10 - 49 Units', pricePerUnit: 1249, minQty: 10 },
      { range: '50+ Units (MOQ)', pricePerUnit: 1049, minQty: 50 }
    ],
    description: 'Meets European standard EN ISO 20471 Class 3 high-visibility norms. Engineered for heavy industrial plants, airport tarmac logistics, manufacturing assembly lines, and mining safety operations.',
    sku: 'EVR-IND-501'
  },
  {
    id: 'executive-oxford-shirt',
    title: 'Executive Oxford Corporate Formal Shirt',
    subtitle: 'Wrinkle-resistant 80/20 cotton blend with reinforced collar',
    sector: 'corporate',
    sectorLabel: 'Corporate Executive',
    price: 799,
    originalPrice: 1199,
    discountPct: 33,
    rating: 4.7,
    reviewCount: 178,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCyIfP76FEhuLW7TPFubHf4u-XAnx4LIxz1aV8foQ6koJm9tL-1wpjBQ98FOTY_ZxaTwvihXDMqDDZhy0acBCqk_yhhM5tGwdFsFSEbUBNyDi5K53NSSYFvo72MYK7x-TBemoOA8F0rxs89mIvYJJOufhVGr0UlKbRXgb8X13E6Kv6oEmcX9rLCTtxQZEPxd1aAsrrviVqbqMtHPVZPPc1LSkvnH2dSnF85t_W3RHhtBZduErcNrFXU',
    galleryImages: [
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCyIfP76FEhuLW7TPFubHf4u-XAnx4LIxz1aV8foQ6koJm9tL-1wpjBQ98FOTY_ZxaTwvihXDMqDDZhy0acBCqk_yhhM5tGwdFsFSEbUBNyDi5K53NSSYFvo72MYK7x-TBemoOA8F0rxs89mIvYJJOufhVGr0UlKbRXgb8X13E6Kv6oEmcX9rLCTtxQZEPxd1aAsrrviVqbqMtHPVZPPc1LSkvnH2dSnF85t_W3RHhtBZduErcNrFXU',
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAaCgonBoTySvcjo6bZFFhuwTw1-SBVVkE1tQsj1919h4jVMgRtDemihvNpSYzjU5GAm-oWvruY6OTSrZ8x-9LcqUAxoUC341iJLY5CFtyGpOk0oFtdHMs9J3Hobjtqee33jF_WK_xx4Dlx3aoOypOnekv0jnRallRPFsHJ8BSTgw_9TY-RwPWDl8vq7Ez0YQBTvX9r_q5r5DMOsQxk16oVfG0pOdgqAgnvYCCCYTiLC_aL6oFswBFl',
      'https://lh3.googleusercontent.com/aida-public/AB6AXuA07H4M60qFo-XRTRa1r0w0QtpD7F2oJCP_CPalXyWx23ul_bb7HJ1O11T3fNgJygoAVs9foYY7pwehA8jfEU5wDt7lstYBZ70Me0dN7W89R81ZvNE_CqjmIir7bl1UgzH0028TPerwSjtK5PJmVPB_F5g6D_qEILGB1J7TpR2nXQbku89em9hThvFwj9YUCMqWGSS0bkqa9c76agLoHZNCm8GlfB4JW-pAEn3T_ieOf0xjYzgXLwXh'
    ],
    moq: 15,
    tag: 'Corporate',
    tagType: 'corporate',
    fabric: '80% Combed Cotton / 20% Polyester Oxford Weave',
    gsm: '160 GSM All-Weather Breathable',
    stitching: 'High-density 18 stitches per inch',
    features: ['Liquid ammonia wrinkle-free finish', 'Fused formal collar stays', 'Logo embroidery ready chest zone', 'Single needle side tailoring'],
    stockQty: 640,
    colors: [
      { name: 'Sky Blue', hex: '#7dd3fc' },
      { name: 'Micro Check Blue/White', hex: '#93c5fd' },
      { name: 'Classic Crisp White', hex: '#ffffff' }
    ],
    sizes: ['S (38)', 'M (40)', 'L (42)', 'XL (44)', 'XXL (46)'],
    wholesaleTiers: [
      { range: '1 - 9 Units', pricePerUnit: 799, minQty: 1 },
      { range: '10 - 49 Units', pricePerUnit: 699, minQty: 10 },
      { range: '50+ Units (MOQ)', pricePerUnit: 549, minQty: 50 }
    ],
    description: 'Crisp corporate formal styling engineered for bank branches, IT tech parks, enterprise sales teams, and customer experience executives. Maintains a pristine wrinkle-free look across long working days.',
    sku: 'EVR-COR-201'
  },
  {
    id: 'industrial-cargo-pant',
    title: 'Industrial Heavy Duty Cargo Work Pant',
    subtitle: 'Triple-stitched 320 GSM ripstop with knee pad slots',
    sector: 'industrial',
    sectorLabel: 'Industrial & Safety',
    price: 1049,
    originalPrice: 1599,
    discountPct: 34,
    rating: 4.6,
    reviewCount: 112,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA5fboHeUmTBFLccIGZY6IAn23ziAPFMU2aIy0S1odqfjo4hczMtMrj-xG9e039ad5Yw7Cuwm2Pisi7qyKvJx-xyrefiUUY1SM3zc02ml_qS4WUynu1OSsVgJdeeddEMJfhVPTFjeteuGMLx8FGAzd8uCIEp82owBo3KdP_CTcJc0v4F6z7Q2dBELu1VKJ1ap8J5cr4-zxivjCcXQY1ulQiCtizB2BM0KVvY0FlxXABnK8YskEZ6RET',
    galleryImages: [
      'https://lh3.googleusercontent.com/aida-public/AB6AXuA5fboHeUmTBFLccIGZY6IAn23ziAPFMU2aIy0S1odqfjo4hczMtMrj-xG9e039ad5Yw7Cuwm2Pisi7qyKvJx-xyrefiUUY1SM3zc02ml_qS4WUynu1OSsVgJdeeddEMJfhVPTFjeteuGMLx8FGAzd8uCIEp82owBo3KdP_CTcJc0v4F6z7Q2dBELu1VKJ1ap8J5cr4-zxivjCcXQY1ulQiCtizB2BM0KVvY0FlxXABnK8YskEZ6RET',
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAbpZ-EN2ThzIauYs75-q6-L6pJcGyYkSQwSOpH4miMnlwK4tzXGNcKptpt8mjR352p18YvvL-99R1U8OfnkZ2Ce_AJaQfRL-MPToTOi239gi2fuReLZMo8jW8qOoqzrhLpaxSOwq5H7BofQ89VPd_Zb3pHiBMiLdJMsQLWRLDc1VIHDSe6jb21duTKa_SoXWzEVgpx60n5dSNJYHXV95s4J6qlXir4bZoCaH-DtP06DCw-9C_4Hr6P',
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDuOk0UiPvzAGSCRrZ9ktz0wMotn3B5uWlK2Iels765YCgM-onX3cwMqe73qPF3b2PzsEvcmAni00jYL1A0c3FNmVDPCHL-Rm5mJnnL2gSYjnyPaL1qyJhCr-H_m6OXRwAB4VBWbKTuvvaqPkrkjkB4EF_z4z5zeL1G44vTWo_VMbnM_L8TEvy2tZTXIViaDwS6LOIgi_6fVmo0K7Go-HHaQh8jt_DQu53hOlpSHHK802oxZJYIn7tN'
    ],
    moq: 20,
    tag: 'Work Trouser',
    tagType: 'duty',
    fabric: '65% Poly / 35% Cotton Ripstop High-Tensile',
    gsm: '320 GSM Heavyweight',
    stitching: 'Triple needle flat-felled reinforcement',
    features: ['6 functional cargo & utility ruler pockets', 'Reinforced knee pad slots for cushioned work', 'Heavy duty brass YKK zipper', 'Bar-tacked belt loops for 2" duty belts'],
    stockQty: 390,
    colors: [
      { name: 'Charcoal Grey', hex: '#374151' },
      { name: 'Khaki Tan', hex: '#b89758' },
      { name: 'Tactical Black', hex: '#111827' }
    ],
    sizes: ['30 (S)', '32 (M)', '34 (L)', '36 (XL)', '38 (XXL)'],
    wholesaleTiers: [
      { range: '1 - 9 Units', pricePerUnit: 1049, minQty: 1 },
      { range: '10 - 49 Units', pricePerUnit: 949, minQty: 10 },
      { range: '50+ Units (MOQ)', pricePerUnit: 799, minQty: 50 }
    ],
    description: 'Tough, tear-resistant industrial work trousers engineered to survive the most punishing workshop, factory, and logistics warehouse conditions.',
    sku: 'EVR-IND-409'
  },
  {
    id: 'doctor-lab-coat',
    title: 'Doctor & Lab Specialist Consultation Coat',
    subtitle: 'Bleach & fluid resistant 100% twill in starch white',
    sector: 'hospital',
    sectorLabel: 'Hospital & Care',
    price: 649,
    originalPrice: 999,
    discountPct: 35,
    rating: 4.8,
    reviewCount: 215,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDaT6g8MxnDjBfrjTt3yQt0r7AQQrzRcui8pKSJTZmJv9UCcVuopYZL6lKESMEAlun-7_vJD2oIVCC_4OeqSh9vinH1CY5ha5CnOydvbVP5r8zRiSjFA9AWCuKtmYk0Z3HcY1HFnxVv4fRn5R1dOXlBa2Q4tRI-4fh2zMiMhIDqMVHNkVs7pCzjE6MliAojpk_4empkFreR-NaNO4iv8zfnMlwAreVAxr1aVN128Zl2uRpmi7yuzjxQ',
    galleryImages: [
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDaT6g8MxnDjBfrjTt3yQt0r7AQQrzRcui8pKSJTZmJv9UCcVuopYZL6lKESMEAlun-7_vJD2oIVCC_4OeqSh9vinH1CY5ha5CnOydvbVP5r8zRiSjFA9AWCuKtmYk0Z3HcY1HFnxVv4fRn5R1dOXlBa2Q4tRI-4fh2zMiMhIDqMVHNkVs7pCzjE6MliAojpk_4empkFreR-NaNO4iv8zfnMlwAreVAxr1aVN128Zl2uRpmi7yuzjxQ',
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBdn-vqNTaXVL8ExU1E_oBdcvPCrPtHdNjcdPJtvmR_USmm1pTz_WXLloLsaiIOzeUefnei7A2w0UiiNHXbObb1Dfxn9WviHgXYlZqW25cDt2Rvz9G2HsO4qsM_pWeS87SCOqpe-6oXG2T5zY1JMauqqtodjLywxx5EkwSs_UR-FSi7aeDz6JLJ16Jp4KMU3lUitLMg3FboQA7eXT01ZG-TMUSkAABg3G2m-MeYpedhuP04nKt-D_iS',
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCfAhMA9g-8EihxviMj40o5LCfGo7qDlGBlYUdIa7ji40izGdB1SvDl8KbT_0UbtwEiqwa5hVN9eQLFXZ11MR3evFDaC6lE_cpYWfDjGOi6nyw_e5ZJS7JT5d24xDyXOYm1vILQVXhTiGJo-Uectk69AJcANzWE77JMGVR_ZBmfkAaz-Ky5hQb2EkZF3LtabD5Hcf7bSF-gE36RR7eCFR5Nc8O-sNNA3R-EC3GsD-K1DiqN6TwUwv_B'
    ],
    moq: 10,
    tag: 'Medical Lab',
    tagType: 'medical',
    fabric: '100% Mercerized Cotton Twill / Anti-Stain Treatment',
    gsm: '200 GSM Starch White',
    stitching: 'Clean finished inside french seams',
    features: ['Bleach resistant & autoclavable', '3 deep utility pockets + pen chest slot', 'Side slit access to pant pockets', 'Tailored notched lapel collar'],
    stockQty: 480,
    colors: [
      { name: 'Starch Clinical White', hex: '#ffffff' }
    ],
    sizes: ['S (38)', 'M (40)', 'L (42)', 'XL (44)', 'XXL (46)'],
    wholesaleTiers: [
      { range: '1 - 9 Units', pricePerUnit: 649, minQty: 1 },
      { range: '10 - 49 Units', pricePerUnit: 549, minQty: 10 },
      { range: '50+ Units (MOQ)', pricePerUnit: 449, minQty: 50 }
    ],
    description: 'Autoclavable laboratory and clinic aprons used across diagnostic centers, dental clinics, veterinary hospitals, and pharmacy research facilities.',
    sku: 'EVR-MED-203'
  },
  {
    id: 'heavy-duck-apron',
    title: 'Heavy Duck Canvas Hospitality Bib Apron',
    subtitle: 'Stain & water repellant with brass hardware adjusters',
    sector: 'chef',
    sectorLabel: 'Chef & Kitchen',
    price: 499,
    originalPrice: 799,
    discountPct: 38,
    rating: 4.8,
    reviewCount: 165,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA53OOEqc_Se30PdrqEwl3nFr1dzWq0ilF_qxZK8ASRmBjFfqc_5s8yJPrW16O_BecBgrt0dJEVKxQfG4A-rfXr-w77-T6ZhwS83Nd1qDnmfOmfaNoeYEEK2JAN7QRU32F3aE0vEgKacsYIQo3Q-yEwnUURemS52QhtUFwIQQasuwSxuZye8ixpH7JnBmhBQf6-qkWguNYNt1ux332XxYC9J418KJ3gHyroFPn23u27UYRjgEBA3mWE',
    galleryImages: [
      'https://lh3.googleusercontent.com/aida-public/AB6AXuA53OOEqc_Se30PdrqEwl3nFr1dzWq0ilF_qxZK8ASRmBjFfqc_5s8yJPrW16O_BecBgrt0dJEVKxQfG4A-rfXr-w77-T6ZhwS83Nd1qDnmfOmfaNoeYEEK2JAN7QRU32F3aE0vEgKacsYIQo3Q-yEwnUURemS52QhtUFwIQQasuwSxuZye8ixpH7JnBmhBQf6-qkWguNYNt1ux332XxYC9J418KJ3gHyroFPn23u27UYRjgEBA3mWE'
    ],
    moq: 20,
    tag: 'Hospitality',
    tagType: 'duty',
    fabric: '100% Heavy Cotton Duck Canvas',
    gsm: '340 GSM Rugged Canvas',
    stitching: 'Copper rivet reinforced corners',
    features: ['Solid brass metal adjusters', 'Kangaroo utility pockets with towel loop', 'Water and oil repellant coating', 'Cross-back strap design for neck comfort'],
    stockQty: 510,
    colors: [
      { name: 'Espresso Black', hex: '#1c1917' },
      { name: 'Raw Canvas Brown', hex: '#78350f' },
      { name: 'Olive Army Green', hex: '#3f6212' }
    ],
    sizes: ['Standard Adjustable (Free Size)'],
    wholesaleTiers: [
      { range: '1 - 9 Units', pricePerUnit: 499, minQty: 1 },
      { range: '10 - 49 Units', pricePerUnit: 399, minQty: 10 },
      { range: '50+ Units (MOQ)', pricePerUnit: 320, minQty: 50 }
    ],
    description: 'Heavy duty hospitality bib apron crafted for baristas, steakhouse chefs, bartenders, and luxury cafe staff. Brass buckle hardware allows rapid adjustability.',
    sku: 'EVR-HOS-401'
  },
  {
    id: 'front-desk-blazer',
    title: 'Executive Front Desk Hospitality Blazer (Black)',
    subtitle: 'Wrinkle-free poly-viscose luxury tailored fit',
    sector: 'hotel',
    sectorLabel: 'Hotel & Front Desk',
    price: 2199,
    originalPrice: 2799,
    discountPct: 22,
    rating: 4.9,
    reviewCount: 64,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD9ReUr5cKxmSd1bVEmOuvVVNiSHFMtKZoDy83BHzxaMZPGE4PcSYUWFQxep4iBJp5_nspHPLqv6Gdlm09UrLrtqI09afmLSB50jiNzRo5y8m7d06D29RJGNCli7_WmiWPboExMIAQBTVslHaaUext0rQHNidZciBDGvMKSimhf2AOm8QSbdImXZY8VD1OyYozlLBYUpJo5NMTjxN46sKQ07xh1vCh0uamzHIJtlW5OgAZzbV-NS47g',
    galleryImages: [
      'https://lh3.googleusercontent.com/aida-public/AB6AXuD9ReUr5cKxmSd1bVEmOuvVVNiSHFMtKZoDy83BHzxaMZPGE4PcSYUWFQxep4iBJp5_nspHPLqv6Gdlm09UrLrtqI09afmLSB50jiNzRo5y8m7d06D29RJGNCli7_WmiWPboExMIAQBTVslHaaUext0rQHNidZciBDGvMKSimhf2AOm8QSbdImXZY8VD1OyYozlLBYUpJo5NMTjxN46sKQ07xh1vCh0uamzHIJtlW5OgAZzbV-NS47g',
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCEakvfjwc610F0Rs49VMC_Ir2nZ4i1wP2qTuISVa5O1tHuc0nSJwEDf6t-kXyD7kZMrqJFWuieFnuUWiD0TUq54teFeno5uoitHzG_T1wZls3bj0kXriJFXfbLIJa8_fgOtGHbbIxB4NPcxbnJVsGGUMu1icXQtsdWRD79KfRVOg2Sq5Md7NH8Sxaol7B6owLLFySkpZCS-sY8VBv8GxaMLUam0lzA0YEa3hK9oGuHxt1f39Ko31tS',
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBrG5N7ICLLRAmTLMs7gc9GHu8mpvQNqt3CjXHUBNT39n9WtEUwDcJLTHGRftEpuybuXL3gMtlvqXkN17kF1Kp-_0fkTG1jX4EF_U2i9Jb2b_8BXrJc-W-7PXVrer_cwG59Kcuz5zm094K_hMJTT29xEblnvgCXB_D5zF9oPwaURxSBmkL3J8joZS4jWKUXz9a2HGfSR5zz47bcjRQrqOjT_yA2Cc0Xj_BPDcX_aL3iuaI4WD9Q_eTs'
    ],
    moq: 10,
    tag: 'Luxury Fit',
    tagType: 'luxury',
    fabric: '70% Poly / 30% Viscose Suiting Twill with Satin Lining',
    gsm: '260 GSM Premium Suiting',
    stitching: 'Tailored edge pick stitching with interior chest pockets',
    features: ['Satin notched lapel accents', 'Wrinkle recovery memory fabric', 'Custom gold/silver crest embroidery ready', 'Comfort shoulder pads'],
    stockQty: 180,
    colors: [
      { name: 'Jet Black', hex: '#111827' },
      { name: 'Midnight Navy', hex: '#0f172a' },
      { name: 'Charcoal Grey', hex: '#374151' }
    ],
    sizes: ['38 (S)', '40 (M)', '42 (L)', '44 (XL)', '46 (XXL)'],
    wholesaleTiers: [
      { range: '1 - 9 Units', pricePerUnit: 2199, minQty: 1 },
      { range: '10 - 49 Units', pricePerUnit: 1899, minQty: 10 },
      { range: '50+ Units (MOQ)', pricePerUnit: 1599, minQty: 50 }
    ],
    description: 'Luxuriously tailored blazers constructed specifically for 5-star hotel front desks, airline concierge teams, and luxury automotive showrooms. Engineered for maximum visual prestige.',
    sku: 'EVR-HOS-602'
  }
];

export const RELATED_ITEMS: RelatedItem[] = [
  {
    id: 'peaked-cap',
    title: 'Security Peaked Official Cap',
    subtitle: 'Navy with gold-braided cord & badge mount',
    price: 349,
    originalPrice: 499,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCzvZmsw1E-VqKbzu9S-lf8FPA08fmKudQYvd-aXGiEqD8pwt3uUQEf5MlhIZbf2ggsycVT1W1_Pkyuuy-KNevdGDNVQf6OxX-0xH_Jt1rhuW0CShG_Benebp76vk10CP_Dj2pIaphcOpDmkJeLB-1Gks9YejGDsARZK-TVRLZcRekFaCPZiGV98CQ3Ya2lHFa6q8SZhho7byMsjWW6insnKGMMeBzGvtpk_D7K_mhHFzulMCqrIbN2',
    categoryTag: 'Duty Headwear',
    moq: 10
  },
  {
    id: 'duty-belt',
    title: 'Leather Security Belt with Holster',
    subtitle: 'Heavy reinforced leather with baton holder',
    price: 549,
    originalPrice: 799,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAoIYQWaGr5Uds35sgK0YhrScdSfahc0XkaKx_Qpo9AhKqWyEFY0uO8JywFExfySyNVP7z-wD9SafOBKRjPomL1qjvI34nU2lZyQ6gghQzzqTo0TCK7njWfOzjqItHvkKYHmB6Lg5SH0pXoswqbMQBdo3leo0V9kj-NSNG5DemrUiq87Tm43AC84MfWpQAp4ymOplwIJ81ngeVqFIp16SJ280Q85PQXLXt6hZTeb83GqIg68GLntO71',
    categoryTag: 'Tactical Rig',
    moq: 15
  },
  {
    id: 'winter-jacket',
    title: 'Security Winter Windproof Jacket',
    subtitle: 'High-vis reflective bands & thermal fleece',
    price: 1850,
    originalPrice: 2499,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDhhUR1fXoke7LX6TS0rIF8CPkFDSTKG-xM3PiED9o3VyhspdOxX2yexAqHXznongtc_QzkEhk8aIWsx0eGZii5Jptj95NH-A9v77NP77VgUW3sdwg8KSsM13iJCoHWX3BvslbLmZ3hbIvCfe1eCPOghKlOLQKkv5-8-P1pI9gLbsOva9sGC3x5wzdaETffPTIVTp9fc4-h-D7EnvW697H7YzHc5ha8-QxR4v8dxOK6xjBI-JlH0re2',
    categoryTag: 'All-Weather',
    moq: 5
  },
  {
    id: 'lanyard-whistle',
    title: 'Security Lanyard & Metal Whistle Set',
    subtitle: 'Braided tactical lanyard with chrome pea whistle',
    price: 149,
    originalPrice: 220,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBatt8jKA0V109jlBGDGXCUce9nfNaHohhAwItGRPSuFAoUkx4Y2yY2H1JkEgmEKijJVw_-0dA6PpR3GP8618QjLKNnr7xrBpeTqirtsfpobfeVzE3SLckQpshLw3DA1MhyQrMLffzEyqJeVfE70R1wc1Zlft73Ie15yjXffNtM1r4IIlBr0m3VY3wzqT_-0Pey6G0Q_pbakYk32nwM9wRytDIRxy0AjfjTy1JhsS4n6kYdGj6-dZDG',
    categoryTag: 'Accessory',
    moq: 25
  }
];

export const INITIAL_CART_ITEMS = [
  {
    id: 'cart-1',
    productId: 'guard-pro-set',
    product: PRODUCTS[0],
    selectedSize: 'L (42)',
    selectedColor: 'Deep Navy Blue',
    quantity: 1
  },
  {
    id: 'cart-2',
    productId: 'medflex-scrubs',
    product: PRODUCTS[1],
    selectedSize: 'M (40)',
    selectedColor: 'Royal Blue',
    quantity: 1
  },
  {
    id: 'cart-3',
    productId: 'chef-coat-executive',
    product: PRODUCTS[2],
    selectedSize: 'L (42)',
    selectedColor: 'Executive White',
    quantity: 1
  }
];
