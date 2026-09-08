/**
 * FLIPKART 20 WATCHES SHOWCASE - SCRIPT
 * Manages 20 Curated Watches, Filtering, Search, Cart Drawer, Modal, & Wishlist
 */

// Fallback watch SVG in case image fails to load
const FALLBACK_WATCH_IMAGE = 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600&auto=format&fit=crop&q=80';

// 20 Curated Premium Watches
const WATCHES_DATA = [
  {
    id: 1,
    brand: "Apple",
    title: "Apple Watch Ultra 2 (GPS + Cellular, 49mm) Titanium Case",
    category: "smartwatch",
    price: 84999,
    mrp: 89900,
    rating: 4.8,
    ratingCount: "3,820",
    tag: "Bestseller",
    tagType: "bestseller",
    fAssured: true,
    image: "https://images.unsplash.com/photo-1579586337278-3befd40fd17a?w=600&auto=format&fit=crop&q=80",
    features: [
      "Precision dual-frequency GPS & 100m water resistance",
      "Up to 36 hours of battery life with normal use",
      "Customizable Action button & 3000-nit display",
      "ECG & Blood Oxygen monitoring sensors"
    ]
  },
  {
    id: 2,
    brand: "Casio",
    title: "Casio G-Shock GA-2100-1A1 Carbon Core Guard All-Black",
    category: "sports",
    price: 8995,
    mrp: 11995,
    rating: 4.7,
    ratingCount: "14,210",
    tag: "Trending",
    tagType: "trending",
    fAssured: true,
    image: "https://images.unsplash.com/photo-1524805444758-089113d48a6d?w=600&auto=format&fit=crop&q=80",
    features: [
      "200M Water Resistant & Shock Resistant octagonal bezel",
      "Carbon Core Guard structure with double LED light",
      "Slim 11.8mm profile with analog-digital dial",
      "World time for 31 time zones & 5 daily alarms"
    ]
  },
  {
    id: 3,
    brand: "Titan",
    title: "Titan Regalia Sovereign Analog Quartz Watch For Men",
    category: "luxury",
    price: 7495,
    mrp: 14995,
    rating: 4.6,
    ratingCount: "8,950",
    tag: "Hot Pick",
    tagType: "special",
    fAssured: true,
    image: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=600&auto=format&fit=crop&q=80",
    features: [
      "Classic two-tone gold & stainless steel strap",
      "Sunray champagne dial with Roman index numerals",
      "Mineral glass crystal with 50m water resistance",
      "2 Years Titan India Domestic Warranty"
    ]
  },
  {
    id: 4,
    brand: "Fossil",
    title: "Fossil Grant Chronograph Black Dial Brown Leather Watch",
    category: "luxury",
    price: 9495,
    mrp: 14995,
    rating: 4.5,
    ratingCount: "11,380",
    tag: "Bestseller",
    tagType: "bestseller",
    fAssured: true,
    image: "https://images.unsplash.com/photo-1533139502658-0198f920d8e8?w=600&auto=format&fit=crop&q=80",
    features: [
      "44mm stainless steel case with classic roman numerals",
      "Chronograph stopwatch movement with 3 sub-dials",
      "Genuine supple brown leather interchangeable band",
      "5 ATM Water resistant against splashes and rain"
    ]
  },
  {
    id: 5,
    brand: "Samsung",
    title: "Samsung Galaxy Watch 6 Classic (LTE, 47mm) Rotating Bezel",
    category: "smartwatch",
    price: 32999,
    mrp: 43999,
    rating: 4.6,
    ratingCount: "4,630",
    tag: "Trending",
    tagType: "trending",
    fAssured: true,
    image: "https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?w=600&auto=format&fit=crop&q=80",
    features: [
      "Physical rotating bezel with Sapphire Crystal display",
      "Advanced Sleep Coaching & ECG / Body Composition",
      "Standalone LTE calling & Samsung Wallet NFC support",
      "IP68 and 5ATM water & dust resistance"
    ]
  },
  {
    id: 6,
    brand: "Seiko",
    title: "Seiko 5 Sports Automatic Stainless Steel Blue Dial",
    category: "luxury",
    price: 24500,
    mrp: 29500,
    rating: 4.8,
    ratingCount: "2,150",
    tag: "Hot Pick",
    tagType: "special",
    fAssured: true,
    image: "https://images.unsplash.com/photo-1614164185128-e4ec99c436d7?w=600&auto=format&fit=crop&q=80",
    features: [
      "Calibre 4R36 automatic movement with 41-hour power reserve",
      "LumiBrite luminous hands & markers on deep navy dial",
      "See-through exhibition case back with Hardlex crystal",
      "Day/Date display with 100-meter water resistance"
    ]
  },
  {
    id: 7,
    brand: "Noise",
    title: "Noise ColorFit Pro 5 Max 1.96\" AMOLED Bluetooth Calling",
    category: "smartwatch",
    price: 2999,
    mrp: 7999,
    rating: 4.3,
    ratingCount: "42,900",
    tag: "Bestseller",
    tagType: "bestseller",
    fAssured: true,
    image: "https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=600&auto=format&fit=crop&q=80",
    features: [
      "1.96-inch HD AMOLED Display with Always-On feature",
      "TruSync Bluetooth Calling with quick dial pad",
      "Noise Health Suite: 24/7 Heart Rate, SpO2 & Stress",
      "Up to 7 days battery standby & 100+ sports modes"
    ]
  },
  {
    id: 8,
    brand: "Tissot",
    title: "Tissot PRX Powermatic 80 Swiss Automatic 40mm Watch",
    category: "luxury",
    price: 68500,
    mrp: 75000,
    rating: 4.9,
    ratingCount: "1,240",
    tag: "Trending",
    tagType: "trending",
    fAssured: true,
    image: "https://images.unsplash.com/photo-1526045612212-70caf35c14df?w=600&auto=format&fit=crop&q=80",
    features: [
      "Swiss Made Powermatic 80 calibre with 80-hour reserve",
      "Waffle textured dial with scratch-resistant Sapphire crystal",
      "Nivachron balance spring immune to magnetic fields",
      "Integrated brushed stainless steel bracelet"
    ]
  },
  {
    id: 9,
    brand: "Fastrack",
    title: "Fastrack Limitless FS1 1.95\" UltraVU Display Smartwatch",
    category: "smartwatch",
    price: 1699,
    mrp: 4995,
    rating: 4.2,
    ratingCount: "28,600",
    tag: "Special Deal",
    tagType: "special",
    fAssured: true,
    image: "https://images.unsplash.com/photo-1510017803434-a899398421b3?w=600&auto=format&fit=crop&q=80",
    features: [
      "1.95\" UltraVU Curved Display with vivid colours",
      "SingleSync BT calling with AI Voice Assistant",
      "100+ Cloud Watch Faces & 100+ Sports Trackers",
      "Fast charging: 10 mins charge lasts all day"
    ]
  },
  {
    id: 10,
    brand: "Casio",
    title: "Casio Vintage Digital Unisex Silver Stainless Steel A168WA",
    category: "analog",
    price: 2695,
    mrp: 3295,
    rating: 4.6,
    ratingCount: "35,100",
    tag: "Bestseller",
    tagType: "bestseller",
    fAssured: true,
    image: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=600&auto=format&fit=crop&q=80",
    features: [
      "Iconic retro 80s design with stainless steel adjustable strap",
      "ElectroLuminescent blue backlight for crisp night viewing",
      "1/100-second digital stopwatch and daily alarm",
      "7-year battery life & water resistant daily use"
    ]
  },
  {
    id: 11,
    brand: "boAt",
    title: "boAt Wave Call 2 with 1.83\" HD Display & Bluetooth Calling",
    category: "smartwatch",
    price: 1399,
    mrp: 6990,
    rating: 4.2,
    ratingCount: "58,200",
    tag: "Special Deal",
    tagType: "special",
    fAssured: true,
    image: "https://images.unsplash.com/photo-1434493789847-2f02dc6ca35d?w=600&auto=format&fit=crop&q=80",
    features: [
      "1.83\" HD screen with 550 nits peak brightness",
      "Advanced BT calling with built-in mic and speaker",
      "Live Cricket score alerts on your wrist",
      "700+ Active fitness modes with boAt Crest App"
    ]
  },
  {
    id: 12,
    brand: "Tommy Hilfiger",
    title: "Tommy Hilfiger Men Hudson Analog Blue Dial Watch",
    category: "luxury",
    price: 11200,
    mrp: 16000,
    rating: 4.5,
    ratingCount: "3,410",
    tag: "Trending",
    tagType: "trending",
    fAssured: true,
    image: "https://images.unsplash.com/photo-1542496658-e33a6d0d50f6?w=600&auto=format&fit=crop&q=80",
    features: [
      "Multifunction dial with day, date and 24-hour indicators",
      "Signature Tommy Hilfiger red-white-blue subdial accent",
      "Premium stainless steel link bracelet with push clasp",
      "5 ATM Water resistance with mineral glass crystal"
    ]
  },
  {
    id: 13,
    brand: "Timex",
    title: "Timex Waterbury Classic Chronograph Black Leather Strap",
    category: "analog",
    price: 6495,
    mrp: 9995,
    rating: 4.4,
    ratingCount: "4,820",
    tag: "Hot Pick",
    tagType: "special",
    fAssured: true,
    image: "https://images.unsplash.com/photo-1547996160-71dfa6358264?w=600&auto=format&fit=crop&q=80",
    features: [
      "Heritage Waterbury styling commemorating Timex origins",
      "INDIGLO night-light dial illuminating the entire face",
      "Quick-release genuine natural leather strap",
      "Solid stainless steel case with 50m water safety"
    ]
  },
  {
    id: 14,
    brand: "Citizen",
    title: "Citizen Eco-Drive Promaster Diver Solar Powered Watch",
    category: "sports",
    price: 28900,
    mrp: 36000,
    rating: 4.8,
    ratingCount: "1,890",
    tag: "Trending",
    tagType: "trending",
    fAssured: true,
    image: "https://images.unsplash.com/photo-1508057198894-247b23fe5ade?w=600&auto=format&fit=crop&q=80",
    features: [
      "Eco-Drive technology powered by any natural or indoor light",
      "ISO Compliant 200M diving watch with screw-down crown",
      "Anti-reflective mineral crystal with one-way rotating bezel",
      "Polyurethane heavy duty diver strap"
    ]
  },
  {
    id: 15,
    brand: "Fire-Boltt",
    title: "Fire-Boltt Invincible Plus 1.43\" AMOLED 4GB Storage BT Calling",
    category: "smartwatch",
    price: 3999,
    mrp: 14999,
    rating: 4.3,
    ratingCount: "19,800",
    tag: "Bestseller",
    tagType: "bestseller",
    fAssured: true,
    image: "https://images.unsplash.com/photo-1517502884422-41eaead166d4?w=600&auto=format&fit=crop&q=80",
    features: [
      "1.43\" AMOLED Round Display (460x460) with 600 Nits",
      "4GB internal storage to save songs & connect TWS earbuds",
      "300+ Sports tracking modes & Bluetooth phone call",
      "Rotating crown controller with metallic alloy bezel"
    ]
  },
  {
    id: 16,
    brand: "Daniel Wellington",
    title: "Daniel Wellington Classic Sheffield 40mm Rose Gold Watch",
    category: "analog",
    price: 13999,
    mrp: 19999,
    rating: 4.5,
    ratingCount: "5,300",
    tag: "Trending",
    tagType: "trending",
    fAssured: true,
    image: "https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=600&auto=format&fit=crop&q=80",
    features: [
      "Ultra-thin 6mm casing in radiant rose gold plating",
      "Eggshell white minimalist dial with Japanese quartz movement",
      "Genuine Italian black leather strap with stitched trim",
      "Water resistant to 3 ATM (rain / wash resistant)"
    ]
  },
  {
    id: 17,
    brand: "Armani Exchange",
    title: "Armani Exchange Chronograph Gunmetal Stainless Steel AX2164",
    category: "luxury",
    price: 14995,
    mrp: 21995,
    rating: 4.6,
    ratingCount: "3,750",
    tag: "Hot Pick",
    tagType: "special",
    fAssured: true,
    image: "https://images.unsplash.com/photo-1539185441755-769473a23570?w=600&auto=format&fit=crop&q=80",
    features: [
      "46mm oversized gunmetal ion-plated stainless steel case",
      "Textured dial with date window and Armani Exchange logo",
      "Precision quartz chronograph three-dial configuration",
      "Deployant folding clasp with double push button release"
    ]
  },
  {
    id: 18,
    brand: "Garmin",
    title: "Garmin Forerunner 265 GPS Running Smartwatch AMOLED",
    category: "sports",
    price: 46990,
    mrp: 52990,
    rating: 4.9,
    ratingCount: "820",
    tag: "Trending",
    tagType: "trending",
    fAssured: true,
    image: "https://images.unsplash.com/photo-1511370235399-1802cae1d32f?w=600&auto=format&fit=crop&q=80",
    features: [
      "Vibrant 1.3\" AMOLED touchscreen with traditional buttons",
      "Training Readiness score & Morning Report overview",
      "Multi-band GNSS with SatIQ technology for pinpoint routes",
      "Up to 13 days of battery life in smartwatch mode"
    ]
  },
  {
    id: 19,
    brand: "Fastrack",
    title: "Fastrack Casual Analog Black Dial Silicone Strap Watch",
    category: "analog",
    price: 1295,
    mrp: 2495,
    rating: 4.3,
    ratingCount: "44,120",
    tag: "Bestseller",
    tagType: "bestseller",
    fAssured: true,
    image: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=600&auto=format&fit=crop&q=80",
    features: [
      "Youthful sporty design with durable flexible silicone strap",
      "High precision quartz movement with high contrast hands",
      "Sturdy mineral glass lens with shock-resistant case",
      "30m Water resistance for daily splash resistance"
    ]
  },
  {
    id: 20,
    brand: "Michael Kors",
    title: "Michael Kors Lexington Chronograph Gold-Tone Steel Watch",
    category: "luxury",
    price: 18495,
    mrp: 25995,
    rating: 4.7,
    ratingCount: "2,980",
    tag: "Special Deal",
    tagType: "special",
    fAssured: true,
    image: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=600&auto=format&fit=crop&q=80",
    features: [
      "Beveled coin-edge gold-tone top ring bezel",
      "Sunray gold dial with date aperture and Roman numerals",
      "Solid link bracelet with polished & brushed finishes",
      "10 ATM / 100 meters water resistance depth rating"
    ]
  }
];

// App State
let cart = JSON.parse(localStorage.getItem('fk_cart_items') || '[]');
let wishlist = new Set(JSON.parse(localStorage.getItem('fk_wishlist_items') || '[]'));
let activeCategory = 'all';
let currentSearch = '';
let currentSort = 'popular';

// DOM Elements
const productsGrid = document.getElementById('productsGrid');
const displayedCount = document.getElementById('displayedCount');
const emptyState = document.getElementById('emptyState');
const resetFiltersBtn = document.getElementById('resetFiltersBtn');
const categoryPills = document.getElementById('categoryPills');
const searchInput = document.getElementById('searchInput');
const clearSearchBtn = document.getElementById('clearSearchBtn');
const sortSelect = document.getElementById('sortSelect');

// Cart Drawer Elements
const cartBtn = document.getElementById('cartBtn');
const cartDrawer = document.getElementById('cartDrawer');
const cartBackdrop = document.getElementById('cartBackdrop');
const closeCartBtn = document.getElementById('closeCartBtn');
const cartItemsList = document.getElementById('cartItemsList');
const cartCountBadge = document.getElementById('cartCount');
const cartDrawerCount = document.getElementById('cartDrawerCount');
const cartTotalMRP = document.getElementById('cartTotalMRP');
const cartTotalDiscount = document.getElementById('cartTotalDiscount');
const cartFinalTotal = document.getElementById('cartFinalTotal');
const checkoutBtn = document.getElementById('checkoutBtn');

// Wishlist Elements
const wishlistBtn = document.getElementById('wishlistBtn');
const wishlistCountBadge = document.getElementById('wishlistCount');

// Modal Elements
const quickViewModal = document.getElementById('quickViewModal');
const closeModalBtn = document.getElementById('closeModalBtn');
const modalBody = document.getElementById('modalBody');

// Toast Container
const toastContainer = document.getElementById('toastContainer');

/* ==========================================================================
   HELPER UTILITIES
   ========================================================================== */
function formatCurrency(num) {
  return '₹' + num.toLocaleString('en-IN');
}

function calcDiscountPercent(price, mrp) {
  return Math.round(((mrp - price) / mrp) * 100);
}

function showToast(message, type = 'success') {
  const toast = document.createElement('div');
  toast.className = `toast toast-${type}`;
  toast.innerHTML = `
    <i class="fa-solid ${type === 'success' ? 'fa-circle-check' : 'fa-circle-info'}"></i>
    <span>${message}</span>
  `;
  toastContainer.appendChild(toast);
  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateY(10px)';
    toast.style.transition = 'all 0.3s ease';
    setTimeout(() => toast.remove(), 300);
  }, 2800);
}

/* ==========================================================================
   RENDER WATCH PRODUCTS GRID
   ========================================================================== */
function getFilteredAndSortedWatches() {
  let list = WATCHES_DATA.filter(watch => {
    // Category Filter
    const matchesCategory = (activeCategory === 'all' || watch.category === activeCategory);
    
    // Search Query Filter
    const query = currentSearch.toLowerCase().trim();
    const matchesSearch = !query || 
      watch.title.toLowerCase().includes(query) || 
      watch.brand.toLowerCase().includes(query) ||
      watch.category.toLowerCase().includes(query);

    return matchesCategory && matchesSearch;
  });

  // Sorting
  switch (currentSort) {
    case 'price-low':
      list.sort((a, b) => a.price - b.price);
      break;
    case 'price-high':
      list.sort((a, b) => b.price - a.price);
      break;
    case 'rating':
      list.sort((a, b) => b.rating - a.rating);
      break;
    case 'discount':
      list.sort((a, b) => {
        const discA = calcDiscountPercent(a.price, a.mrp);
        const discB = calcDiscountPercent(b.price, b.mrp);
        return discB - discA;
      });
      break;
    case 'popular':
    default:
      list.sort((a, b) => a.id - b.id);
      break;
  }

  return list;
}

function renderProducts() {
  const watches = getFilteredAndSortedWatches();
  displayedCount.textContent = watches.length;

  if (watches.length === 0) {
    productsGrid.innerHTML = '';
    emptyState.classList.remove('hidden');
    return;
  }

  emptyState.classList.add('hidden');
  productsGrid.innerHTML = watches.map(watch => {
    const discount = calcDiscountPercent(watch.price, watch.mrp);
    const isWishlisted = wishlist.has(watch.id);
    const isInCart = cart.some(item => item.id === watch.id);

    return `
      <div class="watch-card" data-id="${watch.id}">
        <!-- Top Badge -->
        <span class="card-tag tag-${watch.tagType}">${watch.tag}</span>

        <!-- Wishlist Button -->
        <button class="btn-wishlist-toggle ${isWishlisted ? 'active' : ''}" data-id="${watch.id}" title="Wishlist">
          <i class="${isWishlisted ? 'fa-solid' : 'fa-regular'} fa-heart"></i>
        </button>

        <!-- Product Image Area -->
        <div class="card-img-wrap" onclick="openQuickView(${watch.id})">
          <img 
            src="${watch.image}" 
            alt="${watch.title}" 
            class="watch-thumb"
            loading="lazy"
            onerror="this.onerror=null; this.src='${FALLBACK_WATCH_IMAGE}'"
          />
          <div class="quick-view-overlay">
            <i class="fa-regular fa-eye"></i> Quick View
          </div>
        </div>

        <!-- Product Information -->
        <div class="card-content">
          <div class="brand-row">
            <span class="brand-name">${watch.brand}</span>
            ${watch.fAssured ? `
              <span class="fk-assured-pill" title="ChronoKart Assured Quality">
                <i class="fa-solid fa-certificate"></i> Chrono Assured
              </span>
            ` : ''}
          </div>

          <h3 class="product-title" onclick="openQuickView(${watch.id})" title="${watch.title}">
            ${watch.title}
          </h3>

          <!-- Rating -->
          <div class="rating-row">
            <div class="fk-rating-badge">
              <span>${watch.rating}</span>
              <i class="fa-solid fa-star"></i>
            </div>
            <span class="rating-count">(${watch.ratingCount})</span>
          </div>

          <!-- Price & Discounts -->
          <div class="price-block">
            <span class="current-price">${formatCurrency(watch.price)}</span>
            <span class="mrp-price">${formatCurrency(watch.mrp)}</span>
            <span class="discount-percentage">${discount}% off</span>
          </div>

          <div class="deal-perk">
            <i class="fa-solid fa-tag"></i> Bank Offer: Extra 10% off with Axis/HDFC
          </div>

          <!-- Buttons -->
          <div class="card-actions">
            <button class="btn-card-cart ${isInCart ? 'in-cart' : ''}" data-id="${watch.id}">
              <i class="fa-solid ${isInCart ? 'fa-check' : 'fa-cart-shopping'}"></i>
              <span>${isInCart ? 'In Bag' : 'Add to Cart'}</span>
            </button>
            <button class="btn-card-buy" onclick="handleBuyNow(${watch.id})">
              Buy Now
            </button>
          </div>
        </div>
      </div>
    `;
  }).join('');

  // Attach event listeners to Card buttons
  attachCardEvents();
}

function attachCardEvents() {
  // Add to Cart buttons
  document.querySelectorAll('.btn-card-cart').forEach(btn => {
    btn.onclick = (e) => {
      e.stopPropagation();
      const id = parseInt(btn.dataset.id, 10);
      addToCart(id);
    };
  });

  // Wishlist heart buttons
  document.querySelectorAll('.btn-wishlist-toggle').forEach(btn => {
    btn.onclick = (e) => {
      e.stopPropagation();
      const id = parseInt(btn.dataset.id, 10);
      toggleWishlist(id);
    };
  });
}

/* ==========================================================================
   CART FUNCTIONALITY
   ========================================================================== */
function addToCart(id) {
  const watch = WATCHES_DATA.find(w => w.id === id);
  if (!watch) return;

  const existing = cart.find(item => item.id === id);
  if (existing) {
    existing.qty += 1;
    showToast(`Increased quantity for ${watch.brand} Watch`, 'info');
  } else {
    cart.push({ ...watch, qty: 1 });
    showToast(`Added ${watch.brand} Watch to your Bag!`, 'success');
  }

  saveCart();
  updateCartUI();
  renderProducts();
}

function updateCartItemQty(id, delta) {
  const itemIndex = cart.findIndex(item => item.id === id);
  if (itemIndex > -1) {
    cart[itemIndex].qty += delta;
    if (cart[itemIndex].qty <= 0) {
      cart.splice(itemIndex, 1);
      showToast('Item removed from your shopping bag', 'info');
    }
    saveCart();
    updateCartUI();
    renderProducts();
  }
}

function removeFromCart(id) {
  cart = cart.filter(item => item.id !== id);
  saveCart();
  updateCartUI();
  renderProducts();
  showToast('Item removed from shopping bag', 'info');
}

function saveCart() {
  localStorage.setItem('fk_cart_items', JSON.stringify(cart));
}

function updateCartUI() {
  const totalItemsCount = cart.reduce((sum, item) => sum + item.qty, 0);
  cartCountBadge.textContent = totalItemsCount;
  cartDrawerCount.textContent = totalItemsCount;

  if (cart.length === 0) {
    cartItemsList.innerHTML = `
      <div class="cart-empty-message">
        <i class="fa-solid fa-bag-shopping"></i>
        <h4>Your Shopping Bag is empty</h4>
        <p>Explore our 20 premium watches and grab exclusive Big Billion deals!</p>
      </div>
    `;
    cartTotalMRP.textContent = '₹0';
    cartTotalDiscount.textContent = '-₹0';
    cartFinalTotal.textContent = '₹0';
    checkoutBtn.disabled = true;
    checkoutBtn.style.opacity = '0.6';
    return;
  }

  checkoutBtn.disabled = false;
  checkoutBtn.style.opacity = '1';

  let totalMRP = 0;
  let finalPrice = 0;

  cartItemsList.innerHTML = cart.map(item => {
    totalMRP += item.mrp * item.qty;
    finalPrice += item.price * item.qty;

    return `
      <div class="cart-item-row">
        <img src="${item.image}" alt="${item.title}" onerror="this.onerror=null; this.src='${FALLBACK_WATCH_IMAGE}'" />
        <div class="cart-item-info">
          <h4 class="cart-item-title">${item.title}</h4>
          <div class="cart-item-price-row">
            <span class="cart-item-price">${formatCurrency(item.price)}</span>
            <span class="cart-item-mrp">${formatCurrency(item.mrp)}</span>
          </div>
          <div class="cart-qty-ctrls">
            <button class="qty-btn" onclick="updateCartItemQty(${item.id}, -1)">-</button>
            <span class="qty-num">${item.qty}</span>
            <button class="qty-btn" onclick="updateCartItemQty(${item.id}, 1)">+</button>
            <button class="btn-remove-item" onclick="removeFromCart(${item.id})">
              <i class="fa-regular fa-trash-can"></i> Remove
            </button>
          </div>
        </div>
      </div>
    `;
  }).join('');

  const totalSavings = totalMRP - finalPrice;
  cartTotalMRP.textContent = formatCurrency(totalMRP);
  cartTotalDiscount.textContent = '-' + formatCurrency(totalSavings);
  cartFinalTotal.textContent = formatCurrency(finalPrice);
}

function openCartDrawer() {
  cartDrawer.classList.add('open');
  cartBackdrop.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeCartDrawer() {
  cartDrawer.classList.remove('open');
  cartBackdrop.classList.remove('open');
  document.body.style.overflow = '';
}

/* ==========================================================================
   WISHLIST FUNCTIONALITY
   ========================================================================== */
function toggleWishlist(id) {
  const watch = WATCHES_DATA.find(w => w.id === id);
  if (!watch) return;

  if (wishlist.has(id)) {
    wishlist.delete(id);
    showToast(`Removed from Wishlist`, 'info');
  } else {
    wishlist.add(id);
    showToast(`Saved ${watch.brand} to your Wishlist!`, 'success');
  }

  localStorage.setItem('fk_wishlist_items', JSON.stringify([...wishlist]));
  wishlistCountBadge.textContent = wishlist.size;
  renderProducts();
}

/* ==========================================================================
   QUICK VIEW MODAL
   ========================================================================== */
function openQuickView(id) {
  const watch = WATCHES_DATA.find(w => w.id === id);
  if (!watch) return;

  const discount = calcDiscountPercent(watch.price, watch.mrp);

  modalBody.innerHTML = `
    <div class="modal-body-layout">
      <div class="modal-img-col">
        <img 
          src="${watch.image}" 
          alt="${watch.title}" 
          class="modal-main-img" 
          onerror="this.onerror=null; this.src='${FALLBACK_WATCH_IMAGE}'"
        />
      </div>
      <div class="modal-info-col">
        <span class="modal-brand">${watch.brand} • ${watch.category.toUpperCase()}</span>
        <h2 class="modal-title">${watch.title}</h2>
        
        <div class="modal-rating-row">
          <div class="fk-rating-badge">
            <span>${watch.rating}</span>
            <i class="fa-solid fa-star"></i>
          </div>
          <span class="rating-count">(${watch.ratingCount} Customer Ratings & Reviews)</span>
        </div>

        <div class="modal-price-wrap">
          <div class="modal-price-head">
            <span class="modal-cur-price">${formatCurrency(watch.price)}</span>
            <span class="modal-mrp">${formatCurrency(watch.mrp)}</span>
            <span class="modal-discount">${discount}% OFF</span>
          </div>
          <div class="modal-offer-text">
            <i class="fa-solid fa-shield-check"></i> Includes ChronoKart Assured 1-Year Brand Warranty & Free Express Delivery
          </div>
        </div>

        <h4 style="font-size: 14px; margin-bottom: 8px; color: #1e293b;">Key Features & Specifications:</h4>
        <ul class="modal-specs-list">
          ${watch.features.map(f => `
            <li><i class="fa-solid fa-check"></i> ${f}</li>
          `).join('')}
        </ul>

        <div class="modal-cta-buttons">
          <button class="modal-btn-cart" onclick="addToCartAndOpen(${watch.id})">
            <i class="fa-solid fa-cart-shopping"></i> Add to Bag
          </button>
          <button class="modal-btn-buy" onclick="handleBuyNow(${watch.id})">
            <i class="fa-solid fa-bolt"></i> Buy Now
          </button>
        </div>
      </div>
    </div>
  `;

  quickViewModal.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  quickViewModal.classList.remove('open');
  document.body.style.overflow = '';
}

function addToCartAndOpen(id) {
  addToCart(id);
  closeModal();
  openCartDrawer();
}

function handleBuyNow(id) {
  addToCart(id);
  closeModal();
  closeCartDrawer();
  openPaymentGateway();
}

/* ==========================================================================
   REALISTIC PAYMENT GATEWAY CONTROLLER
   ========================================================================== */
let qrCountdownInterval = null;
let currentPayAmount = 0;
let selectedBank = "State Bank of India";
let currentCaptcha = "749";

// Payment Modal Elements
const paymentModal = document.getElementById('paymentModal');
const closePaymentModalBtn = document.getElementById('closePaymentModalBtn');
const payModalAmount = document.getElementById('payModalAmount');
const payMethodsList = document.getElementById('payMethodsList');

// Panels
const panelPhonepe = document.getElementById('panelPhonepe');
const panelCard = document.getElementById('panelCard');
const panelNetbanking = document.getElementById('panelNetbanking');
const panelCod = document.getElementById('panelCod');

// PhonePe Elements
const qrTimer = document.getElementById('qrTimer');
const upiIdInput = document.getElementById('upiIdInput');
const btnVerifyUpi = document.getElementById('btnVerifyUpi');
const btnPayPhonepe = document.getElementById('btnPayPhonepe');
const upiPills = document.getElementById('upiPills');

// Card Elements
const cardNumberInput = document.getElementById('cardNumberInput');
const cardHolderInput = document.getElementById('cardHolderInput');
const cardExpiryInput = document.getElementById('cardExpiryInput');
const cardCvvInput = document.getElementById('cardCvvInput');
const cardNetworkBadge = document.getElementById('cardNetworkBadge');
const vcardTypeIcon = document.getElementById('vcardTypeIcon');
const vcardNumberDisplay = document.getElementById('vcardNumberDisplay');
const vcardNameDisplay = document.getElementById('vcardNameDisplay');
const vcardExpDisplay = document.getElementById('vcardExpDisplay');
const btnPayCard = document.getElementById('btnPayCard');

// Net Banking Elements
const banksGrid = document.getElementById('banksGrid');
const otherBanksSelect = document.getElementById('otherBanksSelect');
const selectedBankLabel = document.getElementById('selectedBankLabel');
const btnPayNetbanking = document.getElementById('btnPayNetbanking');

// COD Elements
const captchaCode = document.getElementById('captchaCode');
const captchaInput = document.getElementById('captchaInput');
const reloadCaptchaBtn = document.getElementById('reloadCaptchaBtn');
const btnPayCod = document.getElementById('btnPayCod');

// Overlays & Modals
const procOverlay = document.getElementById('procOverlay');
const procTitle = document.getElementById('procTitle');
const procSub = document.getElementById('procSub');
const otpModal = document.getElementById('otpModal');
const closeOtpBtn = document.getElementById('closeOtpBtn');
const btnConfirmOtp = document.getElementById('btnConfirmOtp');
const otpBankName = document.getElementById('otpBankName');
const otpResendTimer = document.getElementById('otpResendTimer');

// Success Elements
const successModal = document.getElementById('successModal');
const receiptOrderId = document.getElementById('receiptOrderId');
const receiptPayMode = document.getElementById('receiptPayMode');
const receiptTxnId = document.getElementById('receiptTxnId');
const receiptAmount = document.getElementById('receiptAmount');
const receiptDate = document.getElementById('receiptDate');
const btnContinueShop = document.getElementById('btnContinueShop');
const btnPrintReceipt = document.getElementById('btnPrintReceipt');

function openPaymentGateway() {
  if (cart.length === 0) {
    showToast('Your shopping cart is empty!', 'info');
    return;
  }

  // Calculate current total
  currentPayAmount = cart.reduce((sum, item) => sum + (item.price * item.qty), 0);
  const formattedAmt = formatCurrency(currentPayAmount);

  // Update amounts on all pay buttons
  payModalAmount.textContent = formattedAmt;
  document.querySelectorAll('.pay-btn-amt').forEach(el => el.textContent = formattedAmt);

  // Close cart drawer if open
  closeCartDrawer();

  // Reset to PhonePe tab by default
  switchPaymentTab('phonepe');
  startPhonePeTimer();
  generateCaptcha();

  paymentModal.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closePaymentGateway() {
  paymentModal.classList.remove('open');
  document.body.style.overflow = '';
  if (qrCountdownInterval) clearInterval(qrCountdownInterval);
}

function switchPaymentTab(method) {
  // Update active tab styling
  document.querySelectorAll('.pay-tab').forEach(tab => {
    tab.classList.toggle('active', tab.dataset.method === method);
  });

  // Hide all panels
  panelPhonepe.classList.remove('active');
  panelCard.classList.remove('active');
  panelNetbanking.classList.remove('active');
  panelCod.classList.remove('active');

  // Show selected
  if (method === 'phonepe') panelPhonepe.classList.add('active');
  else if (method === 'card') panelCard.classList.add('active');
  else if (method === 'netbanking') panelNetbanking.classList.add('active');
  else if (method === 'cod') panelCod.classList.add('active');
}

/* --- PhonePe Timer --- */
function startPhonePeTimer() {
  if (qrCountdownInterval) clearInterval(qrCountdownInterval);
  let totalSec = 299; // 4 mins 59 secs

  qrCountdownInterval = setInterval(() => {
    const mins = Math.floor(totalSec / 60);
    const secs = totalSec % 60;
    qrTimer.textContent = `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
    if (totalSec <= 0) {
      clearInterval(qrCountdownInterval);
      qrTimer.textContent = "Expired. Refresh QR";
    }
    totalSec--;
  }, 1000);
}

/* --- Interactive Card Formatting --- */
function setupCardListeners() {
  cardNumberInput.addEventListener('input', (e) => {
    // Only digits
    let val = e.target.value.replace(/\D/g, '');
    val = val.substring(0, 16);
    
    // Auto spacing every 4 digits
    let formatted = val.match(/.{1,4}/g)?.join(' ') || val;
    e.target.value = formatted;

    // Update Virtual Card Display
    if (formatted.length > 0) {
      vcardNumberDisplay.textContent = formatted.padEnd(19, '•');
    } else {
      vcardNumberDisplay.textContent = "•••• •••• •••• ••••";
    }

    // Detect Network
    if (val.startsWith('4')) {
      cardNetworkBadge.textContent = "VISA";
      vcardTypeIcon.innerHTML = `<i class="fa-brands fa-cc-visa"></i>`;
    } else if (/^(5[1-5]|2[2-7])/.test(val)) {
      cardNetworkBadge.textContent = "MASTERCARD";
      vcardTypeIcon.innerHTML = `<i class="fa-brands fa-cc-mastercard"></i>`;
    } else if (/^(60|65|81|82)/.test(val)) {
      cardNetworkBadge.textContent = "RUPAY";
      vcardTypeIcon.innerHTML = `<span style="font-weight:900;font-size:16px;">RuPay</span>`;
    } else {
      cardNetworkBadge.textContent = "CARD";
      vcardTypeIcon.innerHTML = `<i class="fa-regular fa-credit-card"></i>`;
    }
  });

  cardHolderInput.addEventListener('input', (e) => {
    const name = e.target.value.toUpperCase();
    vcardNameDisplay.textContent = name.trim() || "DEEPAK KUMAR";
  });

  cardExpiryInput.addEventListener('input', (e) => {
    let val = e.target.value.replace(/\D/g, '').substring(0, 4);
    if (val.length >= 2) {
      val = val.substring(0, 2) + '/' + val.substring(2, 4);
    }
    e.target.value = val;
    vcardExpDisplay.textContent = val || "MM/YY";
  });

  cardCvvInput.addEventListener('input', (e) => {
    e.target.value = e.target.value.replace(/\D/g, '').substring(0, 3);
  });
}

/* --- Captcha Generator --- */
function generateCaptcha() {
  const digits = Math.floor(100 + Math.random() * 900).toString();
  currentCaptcha = digits;
  captchaCode.textContent = digits.split('').join(' ');
  captchaInput.value = '';
}

/* --- Transaction Pipeline --- */
function processPayment(paymentMode, bankTitle = "Bank 3D Secure") {
  // Show processing overlay
  procTitle.textContent = `Connecting to ${paymentMode}...`;
  procSub.textContent = `Verifying 256-bit SSL encrypted connection with ${bankTitle}. Please do not refresh.`;
  procOverlay.classList.add('open');

  setTimeout(() => {
    procOverlay.classList.remove('open');
    closePaymentGateway();

    if (paymentMode === "Cash on Delivery") {
      // Instant confirm for COD
      showOrderSuccess(paymentMode, currentPayAmount);
    } else {
      // Open OTP Modal simulation
      openOtpModal(bankTitle, paymentMode);
    }
  }, 1300);
}

let otpTimerInterval = null;
function openOtpModal(bankTitle, paymentMode) {
  otpBankName.textContent = `${bankTitle} OTP Verification`;
  otpModal.classList.add('open');
  document.body.style.overflow = 'hidden';

  // 45s countdown
  let sec = 45;
  if (otpTimerInterval) clearInterval(otpTimerInterval);
  otpTimerInterval = setInterval(() => {
    otpResendTimer.textContent = `00:${sec.toString().padStart(2, '0')}`;
    if (sec <= 0) clearInterval(otpTimerInterval);
    sec--;
  }, 1000);

  // Wire confirm OTP
  btnConfirmOtp.onclick = () => {
    btnConfirmOtp.innerHTML = `<i class="fa-solid fa-spinner fa-spin"></i> Authenticating OTP...`;
    btnConfirmOtp.disabled = true;

    setTimeout(() => {
      otpModal.classList.remove('open');
      btnConfirmOtp.innerHTML = `<i class="fa-solid fa-circle-check"></i> VERIFY & COMPLETE PAYMENT`;
      btnConfirmOtp.disabled = false;
      if (otpTimerInterval) clearInterval(otpTimerInterval);
      showOrderSuccess(paymentMode, currentPayAmount);
    }, 1100);
  };
}

/* --- Audio & Visual Celebration --- */
function playPaymentChime() {
  try {
    const AudioCtx = window.AudioContext || window.webkitAudioContext;
    if (!AudioCtx) return;
    const ctx = new AudioCtx();
    const now = ctx.currentTime;
    
    // First high bell
    const osc1 = ctx.createOscillator();
    const gain1 = ctx.createGain();
    osc1.type = 'sine';
    osc1.frequency.setValueAtTime(587.33, now); // D5
    gain1.gain.setValueAtTime(0.25, now);
    gain1.gain.exponentialRampToValueAtTime(0.001, now + 0.45);
    osc1.connect(gain1);
    gain1.connect(ctx.destination);
    osc1.start(now);
    osc1.stop(now + 0.45);

    // Second resolving chime (PhonePe / GPay style)
    const osc2 = ctx.createOscillator();
    const gain2 = ctx.createGain();
    osc2.type = 'sine';
    osc2.frequency.setValueAtTime(880.00, now + 0.16); // A5
    gain2.gain.setValueAtTime(0.3, now + 0.16);
    gain2.gain.exponentialRampToValueAtTime(0.001, now + 0.95);
    osc2.connect(gain2);
    gain2.connect(ctx.destination);
    osc2.start(now + 0.16);
    osc2.stop(now + 0.95);
  } catch (e) {
    // Graceful fallback if WebAudio blocked
  }
}

function launchConfetti() {
  const canvas = document.getElementById('confettiCanvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  const pieces = [];
  const colors = ['#10b981', '#3b82f6', '#f59e0b', '#ec4899', '#8b5cf6', '#06b6d4', '#fcd34d'];

  for (let i = 0; i < 90; i++) {
    pieces.push({
      x: Math.random() * canvas.width,
      y: Math.random() * -canvas.height * 0.6,
      size: Math.random() * 8 + 5,
      color: colors[Math.floor(Math.random() * colors.length)],
      speedY: Math.random() * 4 + 2.5,
      speedX: Math.random() * 3 - 1.5,
      rotation: Math.random() * 360,
      rotSpeed: Math.random() * 6 - 3
    });
  }

  let animationFrame;
  const startTime = Date.now();

  function render() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    pieces.forEach(p => {
      p.y += p.speedY;
      p.x += p.speedX;
      p.rotation += p.rotSpeed;

      ctx.save();
      ctx.translate(p.x, p.y);
      ctx.rotate((p.rotation * Math.PI) / 180);
      ctx.fillStyle = p.color;
      ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size * 0.7);
      ctx.restore();
    });

    if (Date.now() - startTime < 4000) {
      animationFrame = requestAnimationFrame(render);
    } else {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      cancelAnimationFrame(animationFrame);
    }
  }
  render();
}

function showBankSmsNotification(amount, utr, mode) {
  const toast = document.getElementById('bankSmsToast');
  const body = document.getElementById('smsBodyText');
  if (!toast || !body) return;

  const amtClean = formatCurrency(amount).replace('₹', '');
  const now = new Date();
  const dateStr = now.toLocaleDateString('en-GB', { day: '2-digit', month: 'short' });

  if (mode === "Cash on Delivery") {
    body.textContent = `ChronoKart Order Confirmed for Rs. ${amtClean}.00. Pay cash or UPI at delivery. Ref: ${utr}. Delivery by Tomorrow.`;
  } else {
    body.textContent = `Dear Customer, your A/c ending in 4092 is debited for INR ${amtClean}.00 on ${dateStr} to ChronoKart. Ref: ${utr}. Avl Bal: INR 48,250.00`;
  }

  toast.classList.add('show');
  setTimeout(() => {
    toast.classList.remove('show');
  }, 7000);
}

function showOrderSuccess(paymentMode, amount) {
  const orderId = 'CK-' + Math.floor(1000000 + Math.random() * 9000000);
  const txnId = Math.floor(400000000000 + Math.random() * 599999999999).toString(); // 12-digit UTR

  // Update Large Amount & Header Details
  const paidLargeAmount = document.getElementById('paidLargeAmount');
  if (paidLargeAmount) {
    paidLargeAmount.textContent = `${formatCurrency(amount)}.00`;
  }

  const debitedFromText = document.getElementById('debitedFromText');
  if (debitedFromText) {
    if (paymentMode.includes("PhonePe")) {
      debitedFromText.textContent = "State Bank of India •••• 4092 via PhonePe UPI";
    } else if (paymentMode.includes("Card")) {
      debitedFromText.textContent = "Visa Platinum Card •••• 5678";
    } else if (paymentMode.includes("Net Banking")) {
      debitedFromText.textContent = `${selectedBank} A/c •••• 8912`;
    } else {
      debitedFromText.textContent = "Cash on Delivery (Pay at Doorstep)";
    }
  }

  const paidTimestamp = document.getElementById('paidTimestamp');
  if (paidTimestamp) {
    const now = new Date();
    const timeStr = now.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: true });
    const dateStr = now.toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' });
    paidTimestamp.textContent = `${dateStr}, ${timeStr}`;
  }

  // Update IDs
  if (receiptOrderId) receiptOrderId.textContent = orderId;
  if (receiptPayMode) receiptPayMode.textContent = paymentMode;
  if (receiptTxnId) receiptTxnId.textContent = txnId;

  // Delivery date tomorrow
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  const dateOptions = { weekday: 'short', month: 'short', day: 'numeric' };
  if (receiptDate) receiptDate.textContent = `${tomorrow.toLocaleDateString('en-IN', dateOptions)} by 2:00 PM`;

  // Clear Cart
  cart = [];
  saveCart();
  updateCartUI();
  renderProducts();

  // Play audio chime and trigger confetti
  playPaymentChime();
  launchConfetti();

  // Show Simulated Phone Bank SMS Toast
  showBankSmsNotification(amount, txnId, paymentMode);

  // Show Success Modal
  successModal.classList.add('open');
  document.body.style.overflow = 'hidden';
  showToast(`Payment of ${formatCurrency(amount)} Successful! Order Confirmed!`, 'success');
}

/* ==========================================================================
   EVENT HANDLERS & INITIALIZATION
   ========================================================================== */
function initEvents() {
  // Category Filtering
  categoryPills.addEventListener('click', (e) => {
    const btn = e.target.closest('.cat-pill');
    if (!btn) return;
    document.querySelectorAll('.cat-pill').forEach(p => p.classList.remove('active'));
    btn.classList.add('active');
    activeCategory = btn.dataset.category;
    renderProducts();
  });

  // Search Input
  searchInput.addEventListener('input', (e) => {
    currentSearch = e.target.value;
    clearSearchBtn.classList.toggle('hidden', currentSearch.length === 0);
    renderProducts();
  });

  // Clear Search
  clearSearchBtn.addEventListener('click', () => {
    searchInput.value = '';
    currentSearch = '';
    clearSearchBtn.classList.add('hidden');
    renderProducts();
  });

  // Sort Selection
  sortSelect.addEventListener('change', (e) => {
    currentSort = e.target.value;
    renderProducts();
  });

  // Reset Filters Button
  resetFiltersBtn.addEventListener('click', () => {
    searchInput.value = '';
    currentSearch = '';
    clearSearchBtn.classList.add('hidden');
    activeCategory = 'all';
    document.querySelectorAll('.cat-pill').forEach(p => p.classList.remove('active'));
    document.querySelector('.cat-pill[data-category="all"]').classList.add('active');
    renderProducts();
  });

  // Cart Drawer Triggers
  cartBtn.addEventListener('click', openCartDrawer);
  closeCartBtn.addEventListener('click', closeCartDrawer);
  cartBackdrop.addEventListener('click', closeCartDrawer);

  // Modal Triggers
  closeModalBtn.addEventListener('click', closeModal);
  quickViewModal.addEventListener('click', (e) => {
    if (e.target === quickViewModal) closeModal();
  });

  // Checkout Action -> Launches Payment Gateway!
  checkoutBtn.addEventListener('click', () => {
    openPaymentGateway();
  });

  // Close Payment Modal
  closePaymentModalBtn.addEventListener('click', closePaymentGateway);

  // Payment Sidebar Tab Click
  payMethodsList.addEventListener('click', (e) => {
    const tab = e.target.closest('.pay-tab');
    if (!tab) return;
    switchPaymentTab(tab.dataset.method);
  });

  // PhonePe UPI Suggestions Pills
  upiPills.addEventListener('click', (e) => {
    const pill = e.target.closest('.upi-pill');
    if (!pill) return;
    const suffix = pill.dataset.suffix;
    let val = upiIdInput.value.split('@')[0] || 'deepak';
    upiIdInput.value = val + suffix;
    showToast(`Applied ${suffix}`, 'info');
  });

  // PhonePe Verify UPI Button
  btnVerifyUpi.addEventListener('click', () => {
    const val = upiIdInput.value.trim();
    if (!val || !val.includes('@')) {
      showToast('Please enter a valid UPI ID (e.g. name@ybl)', 'info');
      upiIdInput.focus();
      return;
    }
    showToast(`✓ UPI Verified: DEEPAK (${val})`, 'success');
  });

  // PhonePe Pay Button
  btnPayPhonepe.addEventListener('click', () => {
    processPayment('PhonePe UPI', 'PhonePe PG');
  });

  // Setup Live Card Formatting
  setupCardListeners();

  // Card Pay Button
  btnPayCard.addEventListener('click', () => {
    const num = cardNumberInput.value.replace(/\s/g, '');
    if (num.length < 16) {
      showToast('Please enter a valid 16-digit card number', 'info');
      cardNumberInput.focus();
      return;
    }
    const exp = cardExpiryInput.value.trim();
    if (exp.length < 5) {
      showToast('Please enter valid MM/YY expiry', 'info');
      cardExpiryInput.focus();
      return;
    }
    const cvv = cardCvvInput.value.trim();
    if (cvv.length < 3) {
      showToast('Please enter 3-digit CVV', 'info');
      cardCvvInput.focus();
      return;
    }

    const network = cardNetworkBadge.textContent || "Visa";
    processPayment(`${network} Card ending in ${num.slice(-4)}`, `${network} 3D Secure`);
  });

  // Net Banking selection
  banksGrid.addEventListener('click', (e) => {
    const card = e.target.closest('.bank-card');
    if (!card) return;
    document.querySelectorAll('.bank-card').forEach(b => b.classList.remove('active'));
    card.classList.add('active');
    selectedBank = card.dataset.bank;
    selectedBankLabel.textContent = selectedBank;
    otherBanksSelect.value = "";
  });

  otherBanksSelect.addEventListener('change', (e) => {
    if (e.target.value) {
      document.querySelectorAll('.bank-card').forEach(b => b.classList.remove('active'));
      selectedBank = e.target.options[e.target.selectedIndex].text;
      selectedBankLabel.textContent = selectedBank;
    }
  });

  btnPayNetbanking.addEventListener('click', () => {
    processPayment(`Net Banking (${selectedBank})`, selectedBank);
  });

  // COD Captcha Reload & Confirmation
  reloadCaptchaBtn.addEventListener('click', generateCaptcha);

  btnPayCod.addEventListener('click', () => {
    const typed = captchaInput.value.trim();
    if (typed !== currentCaptcha) {
      showToast('Invalid Captcha code! Please check and re-enter.', 'info');
      generateCaptcha();
      captchaInput.focus();
      return;
    }
    processPayment("Cash on Delivery", "Cash Verification");
  });

  // Close OTP
  closeOtpBtn.addEventListener('click', () => {
    otpModal.classList.remove('open');
    document.body.style.overflow = '';
  });

  // Success Modal Actions
  btnContinueShop.addEventListener('click', () => {
    successModal.classList.remove('open');
    document.body.style.overflow = '';
  });

  btnPrintReceipt.addEventListener('click', () => {
    window.print();
  });

  // Login Button (Mock)
  document.getElementById('loginBtn').addEventListener('click', () => {
    showToast('ChronoKart Login: Welcome back, Deepak!', 'info');
  });

  // Wishlist Header Button Action
  wishlistBtn.addEventListener('click', () => {
    if (wishlist.size === 0) {
      showToast('Your Wishlist is empty! Click the heart on any watch to save it.', 'info');
    } else {
      showToast(`You have ${wishlist.size} saved watch(es) in your Wishlist!`, 'info');
    }
  });

  // Close on Escape Key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeModal();
      closeCartDrawer();
      closePaymentGateway();
      otpModal.classList.remove('open');
      successModal.classList.remove('open');
    }
  });
}

// Initial Boot
document.addEventListener('DOMContentLoaded', () => {
  wishlistCountBadge.textContent = wishlist.size;
  updateCartUI();
  initEvents();
  renderProducts();
});
