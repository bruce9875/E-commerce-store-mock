const image = (id, width = 1000) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${width}&q=85`;

const products = [
  { id: 'luna-lamp', slug: 'luna-table-lamp', name: 'Luna Table Lamp', category: 'Lighting', price: 129, colors: ['Ivory', 'Black', 'Oak'], color: 'Ivory', image: image('photo-1507473885765-e6ed057f782c'), images: [image('photo-1507473885765-e6ed057f782c'), image('photo-1505693416388-ac5ce068fe85'), image('photo-1507473885765-e6ed057f782c')], description: 'A quiet glow for slow evenings. Luna pairs a softly curved shade with a sculptural base, bringing a warm, considered light to bedside tables and reading corners.', details: 'Powder-coated steel shade · Solid ash base · 28 cm × 42 cm · E26 bulb, max 9W (not included)' },
  { id: 'canvas-tote', slug: 'canvas-tote-bag', name: 'Canvas Tote Bag', category: 'Bags', price: 89, colors: ['Natural', 'Black'], color: 'Natural', image: image('photo-1544816155-12df9643f363'), images: [image('photo-1544816155-12df9643f363'), image('photo-1590874103328-eac38a683ce7')], description: 'An everyday carryall cut from sturdy cotton canvas, with generous room for the small things that make a day.', details: '100% cotton canvas · 38 cm × 42 cm · Interior slip pocket · Made in Taiwan' },
  { id: 'pen-holder', slug: 'ceramic-pen-holder', name: 'Ceramic Pen Holder', category: 'Desk Accessories', price: 45, colors: ['Chalk', 'Umber'], color: 'Chalk', image: image('photo-1494438639946-1ebd1d20bf85'), images: [image('photo-1494438639946-1ebd1d20bf85'), image('photo-1494437650401-7f0e5dce7f8f')], description: 'A hand-finished ceramic vessel that keeps your desk essentials close and your workspace calm.', details: 'Glazed stoneware · 8 cm diameter × 10 cm · Each piece is individually finished' },
  { id: 'oak-organizer', slug: 'oak-desk-organizer', name: 'Oak Desk Organizer', category: 'Desk Accessories', price: 79, colors: ['Natural Oak', 'Walnut'], color: 'Natural Oak', image: image('photo-1497366754035-f200968a6e72'), images: [image('photo-1497366754035-f200968a6e72'), image('photo-1497366811353-6870744d04b2')], description: 'A solid oak organizer for the everyday tools that deserve a place of their own.', details: 'Solid oak · 24 cm × 12 cm × 4 cm · Finished with natural oil' },
  { id: 'wall-clock', slug: 'minimal-wall-clock', name: 'Minimal Wall Clock', category: 'Home Essentials', price: 99, colors: ['Black', 'Natural'], color: 'Black', image: image('photo-1563861826100-9cb868fdbe1c'), images: [image('photo-1563861826100-9cb868fdbe1c'), image('photo-1503602642458-232111445657')], description: 'A pared-back wall clock with quiet details and a movement designed to keep time without keeping you awake.', details: 'Powder-coated aluminum · 25 cm diameter · Silent quartz movement · AA battery (not included)' },
  { id: 'stone-vase', slug: 'stoneware-vase', name: 'Stoneware Vase', category: 'Home Essentials', price: 64, colors: ['Sand', 'Moss'], color: 'Sand', image: image('photo-1578500494198-246f612d3b3d'), images: [image('photo-1578500494198-246f612d3b3d'), image('photo-1612196808214-b7e1d6145a8c')], description: 'A softly textured vessel that looks just as at home holding a single stem as it does on its own.', details: 'Hand-thrown stoneware · 14 cm × 20 cm · Watertight glazed interior' },
  { id: 'linen-cushion', slug: 'linen-cushion-cover', name: 'Linen Cushion Cover', category: 'Home Essentials', price: 58, colors: ['Oat', 'Olive'], color: 'Oat', image: image('photo-1584100936595-c0654b55a2e2'), images: [image('photo-1584100936595-c0654b55a2e2'), image('photo-1616486338812-3dadae4b4ace')], description: 'Relaxed European linen with a naturally soft hand and a concealed zip closure.', details: '100% European flax linen · 45 cm × 45 cm · Cover only' },
  { id: 'desk-tray', slug: 'wooden-catchall-tray', name: 'Wooden Catchall Tray', category: 'Desk Accessories', price: 39, colors: ['Oak', 'Walnut'], color: 'Oak', image: image('photo-1490312278390-ab64016e0aa9'), images: [image('photo-1490312278390-ab64016e0aa9'), image('photo-1494438639946-1ebd1d20bf85')], description: 'A small landing place for keys, notes, and the things you reach for every day.', details: 'Solid beechwood · 20 cm × 12 cm · Finished with food-safe oil' }
];

const collections = [
  { name: 'Lighting', slug: 'lighting', image: image('photo-1507473885765-e6ed057f782c', 800), benefit: 'Shape the feeling of a room with a softer, warmer glow.', features: ['Gentler evening light', 'Sculptural silhouettes', 'Made for quiet corners'], productId: 'luna-lamp' },
  { name: 'Desk Accessories', slug: 'desk-accessories', image: image('photo-1497366754035-f200968a6e72', 800), benefit: 'Make space to focus by giving daily tools a considered place.', features: ['Less desk clutter', 'Natural, tactile materials', 'Small-space friendly'], productId: 'oak-organizer' },
  { name: 'Bags', slug: 'bags', image: image('photo-1544816155-12df9643f363', 800), benefit: 'Carry the everyday essentials in one useful, easygoing companion.', features: ['Room for daily carry', 'Durable cotton canvas', 'Simple, versatile form'], productId: 'canvas-tote' },
  { name: 'Home Essentials', slug: 'home-essentials', image: image('photo-1616486338812-3dadae4b4ace', 800), benefit: 'Bring softness, order, and a little more personality into the spaces you live in.', features: ['Comfort through natural texture', 'Useful details, quietly resolved', 'Easy to live with every day'], productId: 'stone-vase' }
];

const stores = [
  { id: 'taipei', number: '01', name: 'FORME Zhongshan', city: 'Taipei', district: '中山區', address: '台北市中山區中山北路二段 48 巷 7 號', hours: '11:00–20:00 daily', phone: '+886 2 2500 0188', coordinates: '25.0521,121.5222' },
  { id: 'taichung', number: '02', name: 'FORME Park Lane', city: 'Taichung', district: '西區', address: '台中市西區公益路 68 號', hours: '11:00–20:00 daily', phone: '+886 4 2300 0188', coordinates: '24.1517,120.6638' },
  { id: 'kaohsiung', number: '03', name: 'FORME Central Park', city: 'Kaohsiung', district: '前金區', address: '高雄市前金區中山一路 268 號', hours: '11:00–20:00 daily', phone: '+886 7 211 0188', coordinates: '22.6285,120.3014' }
];

const helpQuestions = [
  { category: 'orders', question: 'Can I change or cancel an order?', answer: 'This storefront is a prototype and does not process real orders. In a live shop, contact the studio as soon as possible and include your order number.' },
  { category: 'orders', question: 'Where can I find my order status?', answer: 'No real orders or tracking emails are generated in this demo. A live order confirmation would include tracking details once your parcel ships.' },
  { category: 'shipping', question: 'How much does shipping cost?', answer: 'Standard shipping is $12, and is complimentary on orders of $75 or more. These prices are sample storefront content.' },
  { category: 'shipping', question: 'When will my order arrive?', answer: 'Sample delivery estimates are 2–4 business days for Taiwan. Actual timing depends on the delivery address and carrier.' },
  { category: 'returns', question: 'What is your return policy?', answer: 'Unused items may be returned within 14 days of delivery in their original packaging. Contact the studio before sending anything back.' },
  { category: 'returns', question: 'How do I start a return?', answer: 'Email hello@forme.example with your order number and the item you would like to return. This is a fictional contact for the prototype.' },
  { category: 'products', question: 'How should I care for my FORME objects?', answer: 'Care guidance varies by material. Check the Details section on each product page for specific instructions.' },
  { category: 'products', question: 'Are the product colors exact?', answer: 'Product photography and display settings can affect how colors appear. If you need help choosing a finish, contact the studio before ordering.' }
];

const categories = ['Lighting', 'Desk Accessories', 'Bags', 'Home Essentials'];
const chatSuggestions = ['Shipping', 'Returns', 'Product care', 'Store locations'];
const storageKey = 'forme-cart-v1';
const app = document.getElementById('app');
let cart = readCart();
let mobileMenuOpen = false;
let filtersOpen = false;
let searchOpen = false;
let searchQuery = '';
let checkoutStep = 1;
let checkoutForm = {};
let selectedColor = 'Ivory';
let selectedImage = 0;
let quantity = 1;
let newsletterMessage = '';
let storeQuery = '';
let selectedStoreId = 'taipei';
let helpQuery = '';
let helpCategory = 'all';
let currentUser = null;
let chatbotOpen = false;
let customerAssistantMessages = [
  { type: 'bot', text: 'Hi! Ask me about shipping, returns, product care, or which object fits your home.' }
];

async function apiRequest(endpoint, options = {}) {
  const response = await fetch(endpoint, {
    credentials: 'same-origin',
    headers: {
      'Content-Type': 'application/json',
      ...(options.headers || {})
    },
    ...options
  });
  const payload = await response.json().catch(() => ({}));
  if (!response.ok) {
    throw new Error(payload.message || 'Request failed');
  }
  return payload;
}

function readCart() {
  try {
    const saved = JSON.parse(localStorage.getItem(storageKey) || '[]');
    return Array.isArray(saved) ? saved.filter((item) => products.some((product) => product.id === item.id) && Number(item.qty) > 0) : [];
  } catch {
    return [];
  }
}

function readStoredUsers() {
  return [];
}

function saveStoredUsers(users) {
  return users;
}

async function fetchCurrentUser() {
  try {
    const data = await apiRequest('/api/auth/me');
    currentUser = data.user || null;
    return currentUser;
  } catch {
    currentUser = null;
    return null;
  }
}

function readCurrentUser() {
  return currentUser;
}

function saveCurrentUser(user) {
  currentUser = user || null;
}

function clearCurrentUser() {
  currentUser = null;
}

function saveCart() {
  localStorage.setItem(storageKey, JSON.stringify(cart));
}

function userFirstName() {
  return currentUser?.name ? currentUser.name.trim().split(' ')[0] : 'Sign In';
}

function money(value) {
  return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(value);
}

function cartCount() {
  return cart.reduce((sum, item) => sum + item.qty, 0);
}

function totals() {
  const subtotal = cart.reduce((sum, item) => sum + products.find((product) => product.id === item.id).price * item.qty, 0);
  const shipping = subtotal === 0 || subtotal >= 75 ? 0 : 12;
  return { subtotal, shipping, total: subtotal + shipping };
}

function productById(id) {
  return products.find((product) => product.id === id);
}

function navigate(path) {
  history.pushState({}, '', path);
  mobileMenuOpen = false;
  searchOpen = false;
  searchQuery = '';
  window.scrollTo(0, 0);
  render();
}

function header() {
  return `<header class="site-header"><div class="utility-bar"><nav class="utility-nav" aria-label="Utility navigation"><a href="/find-a-store" data-route="/find-a-store">Find a Store</a><a href="/help" data-route="/help">Help</a><a href="/join-us" data-route="/join-us">Join Us</a><a href="/sign-in" data-route="/sign-in">Sign In</a></nav></div><div class="header-inner">
    <button class="menu-toggle icon-button" data-action="menu" aria-label="${mobileMenuOpen ? 'Close menu' : 'Open menu'}" aria-expanded="${mobileMenuOpen}">${mobileMenuOpen ? '×' : '☰'}</button>
    <a class="wordmark" href="/" data-route="/">FORME<span>®</span></a>
    <nav class="main-nav ${mobileMenuOpen ? 'is-open' : ''}" aria-label="Main navigation">
      <a href="/products" data-route="/products">Shop</a>
      <a href="/collections" data-route="/collections">Collections</a>
      <a href="/about" data-route="/about">About</a>
    </nav>
    <div class="header-actions"><button class="icon-button search-trigger" data-action="search" aria-label="Search products"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="10.5" cy="10.5" r="6.5"/><path d="m15.5 15.5 5 5"/></svg></button><a class="icon-button bag-link" href="/cart" data-route="/cart" aria-label="Shopping bag, ${cartCount()} items"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M6 7h12l1 14H5L6 7Z"/><path d="M9 7a3 3 0 0 1 6 0"/></svg><span class="bag-count">${cartCount()}</span></a></div>
  </div></header>`;
}

function searchSuggestions() {
  const query = searchQuery.trim().toLowerCase();
  const matches = query
    ? products.filter((product) => `${product.name} ${product.category} ${product.color} ${product.description}`.toLowerCase().includes(query)).slice(0, 5)
    : [];
  const suggestions = query
    ? matches.length
      ? matches.map((product) => `<a class="search-result" href="/products/${product.slug}" data-route="/products/${product.slug}">
          <span class="search-result-image" style="--product-image:url('${product.image}')"></span>
          <span class="search-result-copy"><strong>${product.name}</strong><small>${product.category}</small></span>
          <span class="search-result-price">${money(product.price)}</span>
        </a>`).join('')
      : '<p class="search-empty">No matching objects. Try a category or browse everything.</p>'
    : `<div class="search-suggestions"><p class="eyebrow">Browse by collection</p>${collections.map((item) => `<a href="/collections/${item.slug}" data-route="/collections/${item.slug}">${item.name}<span>↗</span></a>`).join('')}</div>`;
  return suggestions;
}

function searchOverlay() {
  return `<div class="search-layer">
    <button class="search-backdrop" data-action="close-search" aria-label="Close search"></button>
    <section class="search-panel" role="dialog" aria-modal="true" aria-labelledby="searchTitle">
      <div class="search-panel-heading"><div><p class="eyebrow">Find your next everyday object</p><h2 id="searchTitle">What are you looking for?</h2></div><button class="search-close" data-action="close-search" aria-label="Close search">×</button></div>
      <form id="quickSearchForm" class="quick-search-form"><label class="sr-only" for="quickSearch">Search products</label><input id="quickSearch" name="q" type="search" value="${escapeHTML(searchQuery)}" placeholder="Try ‘lamp’ or ‘desk’" autocomplete="off"><button type="submit">Search <span>↗</span></button></form>
      <div class="search-results" aria-live="polite">${searchSuggestions()}</div>
      <a class="search-browse" href="/products" data-route="/products">Not sure yet? <strong>Browse all products</strong> <span>→</span></a>
    </section>
  </div>`;
}

function footer() {
  return `<footer class="footer"><div class="footer-top"><a href="/" data-route="/" class="wordmark">FORME<span>®</span></a><p>Thoughtful objects for everyday living.</p><form class="newsletter-form" id="newsletterForm"><label class="sr-only" for="newsletterEmail">Email address</label><input id="newsletterEmail" name="email" type="email" placeholder="Your email address" required><button type="submit" aria-label="Subscribe">Join ↗</button></form></div><div class="footer-bottom"><span>© 2026 FORME Studio</span><div><a href="/products" data-route="/products">Shop</a><a href="/about" data-route="/about">About</a><a href="mailto:hello@forme.example">Contact</a></div><span>Designed for daily rituals.</span></div></footer>`;
}

function answerCustomerQuestion(question) {
  const normalized = String(question).trim().toLowerCase();
  if (!normalized) return 'Please ask a simple question about shipping, returns, or product care.';
  if (/hi|hello|hey|thanks/.test(normalized)) return 'Hi! I can help with shipping, returns, product care, and store questions.';
  if (/shipping|delivery|arrive|ship|cost/.test(normalized)) return 'Standard shipping is $12, and orders over $75 ship free. Most deliveries arrive in 2–4 business days.';
  if (/return|refund|exchange/.test(normalized)) return 'Unused items can be returned within 14 days in original packaging. Email hello@forme.example with your order number and the item you want to return.';
  if (/order|cancel|status/.test(normalized)) return 'This storefront demo does not process real orders. In a live shop, the team can confirm an order and update its status.';
  if (/care|material|clean|quality|durable/.test(normalized)) return 'Our objects are chosen for everyday durability and honest materials like linen, oak, ceramic, and stoneware. Check each product detail page for the specific care guidance.';
  if (/lamp|lighting|desk|organizer|bag|vase|clock|tote/.test(normalized)) return 'Popular picks include the Luna Table Lamp, Oak Desk Organizer, and Canvas Tote Bag. We can help match a product to your room, routine, or gift idea.';
  if (/store|location|visit|taipei|taichung|kaohsiung/.test(normalized)) return 'You can visit FORME in Taipei, Taichung, or Kaohsiung. The store page includes each location, hours, and directions.';
  if (/price|cost|expensive|cheap|budget|how much/.test(normalized)) return 'Our collection ranges from around $39 for small desk pieces to $129 for statement lighting. You can browse the full catalog for current pricing.';
  if (/theme|gift|home|room/.test(normalized)) return 'The best gifts and room additions usually depend on style and purpose. For gifting, the Luna Lamp and Canvas Tote are especially popular.';
  return 'I can help with shipping, returns, product care, store locations, and item recommendations. Try asking a specific question like “What is your return policy?”';
}

function customerAssistantMarkup() {
  return `<aside class="assistant-chat-widget ${chatbotOpen ? 'is-open' : ''}">
    <button class="assistant-toggle" type="button" data-action="toggle-chat" aria-expanded="${chatbotOpen}" aria-controls="formeAssistantPanel" aria-label="${chatbotOpen ? 'Close customer assistant' : 'Open customer assistant'}">
      <span aria-hidden="true">${chatbotOpen ? '×' : '✦'}</span>
    </button>
    <div id="formeAssistantPanel" class="assistant-panel" role="dialog" aria-label="FORME customer help assistant">
      <div class="assistant-header">
        <div>
          <p class="eyebrow">FORME AI</p>
          <h3>Help desk</h3>
        </div>
        <button class="assistant-close" type="button" data-action="toggle-chat" aria-label="Close chat">×</button>
      </div>
      <div class="assistant-messages" aria-live="polite">
        ${customerAssistantMessages.map((message) => `<div class="assistant-message ${message.type}">${escapeHTML(message.text)}</div>`).join('')}
      </div>
      <div class="assistant-suggestions">
        ${chatSuggestions.map((item) => `<button type="button" class="assistant-suggestion" data-action="chat-suggestion" data-value="${escapeHTML(item)}">${item}</button>`).join('')}
      </div>
      <form id="customerAssistantForm" class="assistant-form">
        <label class="sr-only" for="customerAssistantInput">Ask a question</label>
        <input id="customerAssistantInput" name="question" type="text" placeholder="Ask a question…" autocomplete="off" />
        <button type="submit">Send</button>
      </form>
    </div>
  </aside>`;
}

function productCard(product) {
  return `<article class="product-card"><div class="product-card-media"><a class="product-card-image" href="/products/${product.slug}" data-route="/products/${product.slug}" style="--product-image:url('${product.image}')" aria-label="View ${product.name}"><span class="card-category">${product.category}</span></a><button class="favorite-button" data-action="favorite" aria-label="Add ${product.name} to wishlist" aria-pressed="false">♡</button></div><div class="product-card-meta"><a href="/products/${product.slug}" data-route="/products/${product.slug}">${product.name}</a><span>${money(product.price)}</span></div></article>`;
}

function collectionCard(item) {
  return `<a class="collection-card" href="/collections/${item.slug}" data-route="/collections/${item.slug}" style="--collection-image:url('${item.image}')"><span>${item.name}<span class="arrow">↗</span></span></a>`;
}

function homePage() {
  return `<main>
    <section class="hero"><div class="hero-copy"><p class="eyebrow">Objects for a slower everyday</p><h1>Thoughtful objects<br>for everyday living.</h1><p class="hero-description">Considered essentials for home and desk, made to bring a little more intention to the everyday.</p><a class="button button-dark" href="/products" data-route="/products">Shop the collection <span>↗</span></a><p class="hero-note">Small rituals. Lasting objects.</p></div><a class="hero-image" href="/products/luna-table-lamp" data-route="/products/luna-table-lamp" aria-label="Discover the Luna Table Lamp"><span class="image-caption">The Luna Table Lamp <span>Explore ↗</span></span></a></section>
    <section class="section collection-section"><div class="section-heading"><div><p class="eyebrow">Find your corner</p><h2>Shop by collection</h2></div><a class="quiet-link" href="/products" data-route="/products">View everything ↗</a></div><div class="collection-grid">${collections.map(collectionCard).join('')}</div></section>
    <section class="story-section"><div class="story-image" role="img" aria-label="A calm, tactile living space"></div><div class="story-copy"><p class="eyebrow">Our point of view</p><h2>Good design makes room for living.</h2><p>FORME brings together useful objects with honest materials and thoughtful details. Pieces to use every day, keep for a long time, and make your own.</p><a class="quiet-link" href="/about" data-route="/about">A little about us ↗</a></div></section>
    <section class="newsletter-band"><p class="eyebrow">A note from FORME</p><h2>Thoughtful things, occasionally.</h2><p>New objects, studio notes, and small ideas for home.</p><form class="newsletter-form" id="newsletterForm"><label class="sr-only" for="newsletterEmail">Email address</label><input id="newsletterEmail" name="email" type="email" placeholder="Your email address" required><button type="submit" aria-label="Subscribe">Join ↗</button></form>${newsletterMessage ? `<p class="form-message">${newsletterMessage}</p>` : ''}</section>
  </main>`;
}

function collectionsPage() {
  const collectionSections = collections.map((item, index) => {
    const product = productById(item.productId);
    return `<section class="collection-feature ${index % 2 ? 'collection-feature-reverse' : ''}">
      <div class="collection-feature-image" style="--collection-image:url('${item.image}')" role="img" aria-label="${item.name} collection"></div>
      <div class="collection-feature-copy">
        <p class="eyebrow">0${index + 1} / ${item.name}</p>
        <h2>${item.name}</h2>
        <p class="collection-benefit">${item.benefit}</p>
        <h3>Made to bring</h3>
        <ul>${item.features.map((feature) => `<li>${feature}</li>`).join('')}</ul>
        <div class="collection-feature-links">
          <a class="button button-dark" href="/collections/${item.slug}" data-route="/collections/${item.slug}">Explore ${item.name} <span>↗</span></a>
          <a class="collection-product-link" href="/products/${product.slug}" data-route="/products/${product.slug}">
            <span class="collection-product-image" style="--product-image:url('${product.image}')"></span>
            <span><small>A place to start</small><strong>${product.name}</strong><small>${money(product.price)}</small></span>
          </a>
        </div>
      </div>
    </section>`;
  }).join('');

  return `<main class="collections-page">
    <header class="collections-intro"><p class="eyebrow">Choose what your space needs</p><h1>Collections with a purpose.</h1><p>Useful objects, thoughtfully grouped around the small ways you live, work, and unwind.</p></header>
    ${collectionSections}
    <section class="collections-end"><p class="eyebrow">Looking for one particular thing?</p><h2>Browse every object.</h2><a class="quiet-link" href="/products" data-route="/products">Shop the full collection ↗</a></section>
  </main>`;
}

function productListing(category = '', search = '') {
  const currentUrl = new URL(window.location.href);
  const query = search || currentUrl.searchParams.get('q') || '';
  const sort = currentUrl.searchParams.get('sort') || 'featured';
  const selectedCategories = currentUrl.searchParams.getAll('category');
  const selectedPrices = currentUrl.searchParams.getAll('price');
  const selectedColors = currentUrl.searchParams.getAll('color');
  let visible = products.filter((product) => {
    const matchesCategory = (!category || product.category.toLowerCase() === category.toLowerCase()) && (!selectedCategories.length || selectedCategories.includes(product.category));
    const matchesQuery = `${product.name} ${product.category} ${product.color}`.toLowerCase().includes(query.trim().toLowerCase());
    const colorAliases = { ivory: 'Beige', natural: 'Beige', 'natural oak': 'Brown', oak: 'Brown', chalk: 'White', umber: 'Brown', walnut: 'Brown', sand: 'Beige', moss: 'Brown', oat: 'Beige', olive: 'Brown' };
    const matchesColor = !selectedColors.length || product.colors.some((color) => selectedColors.includes(color) || selectedColors.includes(colorAliases[color.toLowerCase()]));
    const matchesPrice = !selectedPrices.length || selectedPrices.some((price) => {
      if (price === 'under-50') return product.price < 50;
      if (price === '50-100') return product.price >= 50 && product.price <= 100;
      if (price === '100-200') return product.price > 100 && product.price <= 200;
      return product.price > 200;
    });
    return matchesCategory && matchesQuery && matchesColor && matchesPrice;
  });
  if (sort === 'price-asc') visible.sort((a, b) => a.price - b.price);
  if (sort === 'price-desc') visible.sort((a, b) => b.price - a.price);
  if (sort === 'newest') visible.reverse();
  const heading = category || 'All Products';
  const checkbox = (group, value, label, checked) => `<label class="filter-option"><input type="checkbox" data-filter-group="${group}" value="${value}" ${checked ? 'checked' : ''}><span>${label}</span></label>`;
  return `<main class="catalog-page"><div class="page-intro"><p class="eyebrow">A more considered everyday</p><h1>${heading}</h1><p>Timeless pieces for your home and everyday life.</p></div><div class="catalog-toolbar"><label class="catalog-search"><span>⌕</span><input id="productSearch" type="search" value="${escapeHTML(query)}" placeholder="Search objects" aria-label="Search products"></label><label class="sort-control"><span>Sort</span><select id="sortProducts" aria-label="Sort products"><option value="featured" ${sort === 'featured' ? 'selected' : ''}>Featured</option><option value="price-asc" ${sort === 'price-asc' ? 'selected' : ''}>Price: low to high</option><option value="price-desc" ${sort === 'price-desc' ? 'selected' : ''}>Price: high to low</option><option value="newest" ${sort === 'newest' ? 'selected' : ''}>Newest</option></select></label><button class="filter-toggle" data-action="filters">Filters <span>＋</span></button></div><div class="catalog-layout"><aside class="filters ${filtersOpen ? 'filters-open' : ''}" aria-label="Product filters"><div class="filter-heading"><h2>Filters</h2><button class="clear-filters" data-action="clear-filters">Clear all</button></div><fieldset><legend>Category</legend>${checkbox('category', '', 'All objects', !selectedCategories.length && !category)}${categories.map((item) => checkbox('category', item, item, selectedCategories.includes(item) || item.toLowerCase() === category.toLowerCase())).join('')}</fieldset><fieldset><legend>Price</legend>${checkbox('price', 'under-50', 'Under $50', selectedPrices.includes('under-50'))}${checkbox('price', '50-100', '$50–$100', selectedPrices.includes('50-100'))}${checkbox('price', '100-200', '$100–$200', selectedPrices.includes('100-200'))}${checkbox('price', 'over-200', '$200+', selectedPrices.includes('over-200'))}</fieldset><fieldset><legend>Color</legend>${['Beige', 'Black', 'Brown', 'White'].map((color) => checkbox('color', color, color, selectedColors.includes(color))).join('')}</fieldset></aside><section class="catalog-results"><p class="result-count">${visible.length} ${visible.length === 1 ? 'object' : 'objects'}</p>${visible.length ? `<div class="product-grid">${visible.map(productCard).join('')}</div>` : `<div class="no-results"><h2>No objects found</h2><p>Try a different search or clear your filters.</p><button class="button button-outline" data-action="clear-filters">Clear filters</button></div>`}</section></div></main>`;
}

function productDetail(product) {
  selectedColor = product.colors.includes(selectedColor) ? selectedColor : product.color;
  const related = products.filter((item) => item.category === product.category && item.id !== product.id).slice(0, 3);
  return `<main class="detail-page"><nav class="breadcrumbs" aria-label="Breadcrumb"><a href="/" data-route="/">Home</a><span>/</span><a href="/collections/${slugify(product.category)}" data-route="/collections/${slugify(product.category)}">${product.category}</a><span>/</span><span>${product.name}</span></nav><section class="detail-layout"><div class="gallery"><div class="gallery-thumbnails">${product.images.map((src, index) => `<button class="gallery-thumb ${selectedImage === index ? 'is-active' : ''}" data-action="gallery-image" data-index="${index}" style="--thumb-image:url('${src}')" aria-label="View product image ${index + 1}"></button>`).join('')}</div><div class="gallery-main" style="--detail-image:url('${product.images[selectedImage] || product.image}')"></div></div><div class="product-info"><p class="eyebrow">${product.category}</p><h1>${product.name}</h1><p class="detail-price">${money(product.price)}</p><p class="detail-description">${product.description}</p><div class="variant-block"><div class="variant-label"><span>Finish</span><span>${selectedColor}</span></div><div class="variant-options">${product.colors.map((color) => `<button class="variant-option ${selectedColor === color ? 'is-selected' : ''}" data-action="variant" data-color="${color}" aria-label="${color} finish" aria-pressed="${selectedColor === color}"><span class="color-dot ${colorClass(color)}"></span>${color}</button>`).join('')}</div></div><div class="detail-actions"><div class="quantity-control"><button data-action="detail-qty" data-change="-1" aria-label="Decrease quantity">−</button><span>${quantity}</span><button data-action="detail-qty" data-change="1" aria-label="Increase quantity">＋</button></div><button class="button button-dark add-button" data-action="add-to-cart" data-product="${product.id}">Add to bag <span>${money(product.price * quantity)}</span></button></div><p class="shipping-note">Complimentary shipping on orders over $75.</p><div class="detail-accordions"><details open><summary>Details</summary><p>${product.details}</p></details><details><summary>Shipping & returns</summary><p>Orders ship in 2–4 business days. Complimentary shipping over $75 and easy returns within 30 days.</p></details></div></div></section>${related.length ? `<section class="section related-section"><div class="section-heading"><div><p class="eyebrow">Made to go together</p><h2>You may also like</h2></div></div><div class="product-grid">${related.map(productCard).join('')}</div></section>` : ''}</main>`;
}

function cartPage() {
  if (!cart.length) return `<main class="empty-cart"><p class="eyebrow">A little room for something lovely</p><h1>Your bag is empty.</h1><p>Find something useful, beautiful, and made to live with.</p><a class="button button-dark" href="/products" data-route="/products">Continue shopping <span>↗</span></a></main>`;
  const { subtotal, shipping, total } = totals();
  return `<main class="cart-page"><div class="page-intro"><p class="eyebrow">Almost yours</p><h1>Your bag <span>(${cartCount()})</span></h1></div><div class="cart-layout"><section class="cart-items" aria-label="Items in your bag">${cart.map((item) => { const product = productById(item.id); return `<article class="cart-item"><a href="/products/${product.slug}" data-route="/products/${product.slug}" class="cart-image" style="--cart-image:url('${product.image}')" aria-label="View ${product.name}"></a><div class="cart-item-info"><a href="/products/${product.slug}" data-route="/products/${product.slug}" class="cart-item-name">${product.name}</a><span class="cart-item-variant">${item.color} finish</span><div class="quantity-control"><button data-action="cart-qty" data-id="${item.id}" data-change="-1" aria-label="Decrease ${product.name} quantity">−</button><span>${item.qty}</span><button data-action="cart-qty" data-id="${item.id}" data-change="1" aria-label="Increase ${product.name} quantity">＋</button></div><button class="remove-link" data-action="remove" data-id="${item.id}">Remove</button></div><span class="cart-item-price">${money(product.price * item.qty)}</span></article>`; }).join('')}</section><aside class="order-summary"><p class="eyebrow">Order summary</p><div class="summary-line"><span>Subtotal</span><span>${money(subtotal)}</span></div><div class="summary-line"><span>Shipping</span><span>${shipping ? money(shipping) : 'Complimentary'}</span></div>${subtotal < 75 ? `<p class="shipping-progress">Add ${money(75 - subtotal)} for complimentary shipping.</p>` : ''}<div class="summary-line summary-total"><span>Total</span><span>${money(total)}</span></div><a class="button button-dark full-width" href="/checkout" data-route="/checkout">Continue to checkout <span>→</span></a><p class="secure-note">Taxes calculated at checkout.</p></aside></div></main>`;
}

function checkoutPage() {
  if (!cart.length) return `<main class="empty-cart"><p class="eyebrow">Checkout</p><h1>Your bag is empty.</h1><a class="button button-dark" href="/products" data-route="/products">Continue shopping <span>↗</span></a></main>`;
  const { subtotal, shipping: standardShipping } = totals();
  const shipping = checkoutForm.delivery === 'express' ? 18 : standardShipping;
  const total = subtotal + shipping;
  const steps = ['Information', 'Delivery', 'Payment'];
  return `<main class="checkout-page"><div class="checkout-top"><div><p class="eyebrow">FORME checkout</p><h1>Almost home.</h1></div><a class="quiet-link" href="/cart" data-route="/cart">← Back to bag</a></div><ol class="checkout-steps">${steps.map((step, index) => `<li class="${checkoutStep === index + 1 ? 'is-current' : checkoutStep > index + 1 ? 'is-done' : ''}"><span>${checkoutStep > index + 1 ? '✓' : index + 1}</span>${step}</li>`).join('')}</ol><div class="checkout-layout"><form class="checkout-form" id="checkoutForm" novalidate>${checkoutStep === 1 ? `<section class="checkout-section"><p class="eyebrow">Step 01</p><h2>Where should we reach you?</h2><label>Email address<input name="email" type="email" autocomplete="email" value="${escapeHTML(checkoutForm.email || '')}" required></label><label>Full name<input name="name" autocomplete="name" value="${escapeHTML(checkoutForm.name || '')}" required></label><label>Street address<input name="address" autocomplete="street-address" value="${escapeHTML(checkoutForm.address || '')}" required></label><div class="input-pair"><label>City<input name="city" autocomplete="address-level2" value="${escapeHTML(checkoutForm.city || '')}" required></label><label>Postal code<input name="postal" autocomplete="postal-code" value="${escapeHTML(checkoutForm.postal || '')}" required></label></div></section>` : checkoutStep === 2 ? `<section class="checkout-section"><p class="eyebrow">Step 02</p><h2>Choose your delivery.</h2><label class="radio-choice"><input type="radio" name="delivery" value="standard" checked><span><strong>Standard delivery</strong><small>2–4 business days · ${shipping ? money(shipping) : 'Complimentary'}</small></span></label><label class="radio-choice"><input type="radio" name="delivery" value="express"><span><strong>Express delivery</strong><small>1–2 business days · $18</small></span></label><p class="shipping-address">Delivering to ${escapeHTML(checkoutForm.address || '')}, ${escapeHTML(checkoutForm.city || '')} ${escapeHTML(checkoutForm.postal || '')}</p></section>` : `<section class="checkout-section"><p class="eyebrow">Step 03</p><h2>Review your order.</h2><p class="payment-note">This is a portfolio demo. No payment details are collected and no real payment is processed.</p><label class="radio-choice"><input type="radio" checked disabled><span><strong>Demo payment</strong><small>Complete a simulated order</small></span></label></section>`}<p class="checkout-error" id="checkoutError" role="alert"></p><div class="checkout-buttons">${checkoutStep > 1 ? '<button type="button" class="button button-outline" data-action="checkout-back">Back</button>' : ''}<button type="submit" class="button button-dark">${checkoutStep === 3 ? 'Place demo order' : 'Continue'} <span>→</span></button></div></form><aside class="order-summary checkout-summary"><p class="eyebrow">In your bag</p>${cart.map((item) => { const product = productById(item.id); return `<div class="checkout-item"><span class="checkout-item-image" style="--cart-image:url('${product.image}')"><small>${item.qty}</small></span><span>${product.name}<small>${item.color} · Qty ${item.qty}</small></span><strong>${money(product.price * item.qty)}</strong></div>`; }).join('')}<div class="summary-line"><span>Subtotal</span><span>${money(subtotal)}</span></div><div class="summary-line"><span>Shipping</span><span>${shipping ? money(shipping) : 'Complimentary'}</span></div><div class="summary-line summary-total"><span>Total</span><span>${money(total)}</span></div></aside></div></main>`;
}

function successPage() {
  const order = JSON.parse(sessionStorage.getItem('forme-last-order') || 'null');
  return `<main class="success-page"><p class="success-mark">✓</p><p class="eyebrow">Order confirmed</p><h1>Thank you.<br>Your order is on its way.</h1><p>Order ${order?.number || '#FM-24018'} · ${money(order?.total || 0)}</p><p class="success-copy">We’ve received your demo order. This prototype does not process payments or send real orders.</p><a class="button button-dark" href="/products" data-route="/products">Back to the collection <span>↗</span></a></main>`;
}

function aboutPage() {
  return `<main class="about-page"><p class="eyebrow">A quieter kind of useful</p><h1>Objects that make<br>room for living.</h1><div class="about-image" role="img" aria-label="A warm, considered home interior"></div><div class="about-copy"><p>FORME is a collection of useful, enduring objects for the places we live and work. We believe good design doesn't ask for attention; it earns a place in your everyday.</p><p>We look for honest materials, lasting construction, and details that feel right in the hand. Each piece is chosen to work hard, age gracefully, and bring a little calm to daily rituals.</p></div><a class="button button-dark" href="/products" data-route="/products">Explore the collection <span>↗</span></a></main>`;
}

function escapeHTML(value) {
  return String(value).replace(/[&<>"']/g, (character) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[character]);
}

async function initializeApp() {
  await fetchCurrentUser();
  render();
}

function slugify(value) {
  return value.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
}

function colorClass(color) {
  return `color-${slugify(color)}`;
}

function render() {
  const path = decodeURI(window.location.pathname).replace(/\/$/, '') || '/';
  let page;
  if (path === '/') page = homePage();
  else if (path === '/find-a-store') page = storeLocatorPage();
  else if (path === '/help') page = helpPage();
  else if (path === '/join-us') page = joinPage();
  else if (path === '/sign-in') page = signInPage();
  else if (path === '/products') page = productListing();
  else if (path === '/collections') page = collectionsPage();
  else if (path.startsWith('/collections/')) {
    const collectionSlug = path.split('/').pop();
    const collection = collections.find((item) => item.slug === collectionSlug);
    page = collection ? productListing(collection.name) : notFoundPage();
  } else if (path.startsWith('/products/')) {
    const product = products.find((item) => item.slug === path.split('/').pop());
    page = product ? productDetail(product) : notFoundPage();
  } else if (path === '/cart') page = cartPage();
  else if (path === '/checkout') page = checkoutPage();
  else if (path === '/checkout/success') page = successPage();
  else if (path === '/about') page = aboutPage();
  else page = notFoundPage();
  app.innerHTML = `${header()}${searchOpen ? searchOverlay() : ''}${page}${footer()}${customerAssistantMarkup()}`;
  document.title = `${path === '/' ? 'Thoughtful objects for everyday living' : path.split('/').pop().replaceAll('-', ' ').replace(/\b\w/g, (letter) => letter.toUpperCase())} — FORME`;
}

function askCustomerAssistant(question) {
  const trimmed = String(question).trim();
  if (!trimmed) return;
  customerAssistantMessages.push({ type: 'user', text: trimmed });
  customerAssistantMessages.push({ type: 'bot', text: answerCustomerQuestion(trimmed) });
  chatbotOpen = true;
  render();
  requestAnimationFrame(() => {
    const messageList = document.querySelector('.assistant-messages');
    const input = document.getElementById('customerAssistantInput');
    if (messageList) messageList.scrollTop = messageList.scrollHeight;
    if (input) input.focus();
  });
}

function matchingStores() {
  const query = storeQuery.trim().toLowerCase();
  return stores.filter((store) => `${store.name} ${store.city} ${store.district} ${store.address}`.toLowerCase().includes(query));
}

function storeResultsMarkup() {
  const results = matchingStores();
  if (!results.length) return '<p class="store-no-results">No stores found. Try Taipei, Taichung, or Kaohsiung.</p>';
  return results.map((store) => `<button class="store-result-card ${selectedStoreId === store.id ? 'is-selected' : ''}" data-action="select-store" data-store-id="${store.id}" aria-pressed="${selectedStoreId === store.id}">
    <span class="store-result-number">${store.number}</span><span class="store-result-copy"><span class="store-result-location">${store.city} <span>· ${store.district}</span></span><strong>${store.name}</strong><span class="store-result-address">${store.address}</span></span><span class="store-result-arrow" aria-hidden="true">↗</span>
  </button>`).join('');
}

function selectedStoreMarkup() {
  const store = stores.find((item) => item.id === selectedStoreId);
  if (!store) return '<p class="store-detail-empty">Select a store to see its details.</p>';
  const directions = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${store.address} ${store.city} Taiwan`)}`;
  return `<div class="store-detail-heading"><div><p class="eyebrow">${store.city} · ${store.district}</p><h2>${store.name}</h2></div><span>${store.number}</span></div>
    <p class="store-detail-address">${store.address}</p><div class="store-detail-meta"><span>Hours</span><strong>${store.hours}</strong><span>Phone</span><a href="tel:${store.phone.replaceAll(' ', '')}">${store.phone}</a></div>
    <a class="store-directions" href="${directions}" target="_blank" rel="noreferrer">Get directions <span aria-hidden="true">↗</span></a>`;
}

function storeLocatorPage() {
  const mapStore = stores.find((store) => store.id === selectedStoreId) || stores[0];
  const mapQuery = encodeURIComponent(mapStore.coordinates);
  return `<main class="store-locator-page">
    <div class="store-locator-heading"><div><p class="eyebrow">Come by sometime</p><h1>Find a Store</h1><p>Visit us in person. Three small spaces, across Taiwan.</p></div><span class="store-total">03 LOCATIONS</span></div>
    <div class="store-locator-layout">
      <section class="store-list-panel" aria-label="Store locations">
        <label class="store-search-label" for="storeSearch">Search by city or neighborhood</label>
        <div class="store-search-field"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" aria-hidden="true"><circle cx="10.5" cy="10.5" r="6.5"/><path d="m15.5 15.5 5 5"/></svg><input id="storeSearch" type="search" value="${escapeHTML(storeQuery)}" placeholder="Try Taipei or Zhongshan" autocomplete="off"></div>
        <div class="store-list-heading"><span class="store-result-count" aria-live="polite">${matchingStores().length} ${matchingStores().length === 1 ? 'store' : 'stores'}</span><span>TAIWAN</span></div>
        <div class="store-results">${storeResultsMarkup()}</div>
      </section>
      <section class="store-map-panel" aria-label="Map and selected store details">
        <div class="store-map-toolbar"><span>FORME IN TAIWAN</span><span>3 LOCATIONS</span></div>
        <div class="store-map-frame"><iframe title="Google Map showing ${mapStore.name}" src="https://maps.google.com/maps?q=${mapQuery}&z=14&output=embed" loading="lazy"></iframe></div>
        <div class="store-selected-detail">${selectedStoreMarkup()}</div>
      </section>
    </div>
    <p class="store-prototype-note">Store locations and contact details are fictional and shown for this prototype.</p>
  </main>`;
}

function matchingHelpQuestions() {
  const query = helpQuery.trim().toLowerCase();
  return helpQuestions.filter((item) => (helpCategory === 'all' || item.category === helpCategory)
    && `${item.question} ${item.answer}`.toLowerCase().includes(query));
}

function helpFaqMarkup() {
  const questions = matchingHelpQuestions();
  if (!questions.length) return '<p class="help-no-results">No matching answers. Try another search or email our team.</p>';
  return questions.map((item) => `<details class="help-question"><summary>${item.question}<span aria-hidden="true">＋</span></summary><p>${item.answer}</p></details>`).join('');
}

function helpPage() {
  const topics = [['all', 'All topics'], ['orders', 'Orders'], ['shipping', 'Shipping'], ['returns', 'Returns'], ['products', 'Products']];
  const count = matchingHelpQuestions().length;
  return `<main class="help-page">
    <section class="help-hero"><p class="eyebrow">FORME CARE</p><h1>How can we help?</h1><p>Find answers about orders, delivery, returns, and the things you bring home.</p>
      <label class="help-search"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" aria-hidden="true"><circle cx="10.5" cy="10.5" r="6.5"/><path d="m15.5 15.5 5 5"/></svg><span class="sr-only">Search help topics</span><input id="helpSearch" type="search" value="${escapeHTML(helpQuery)}" placeholder="Search for an answer" autocomplete="off"></label>
    </section>
    <section class="help-content" aria-label="Help topics and answers">
      <nav class="help-topics" aria-label="Filter help topics">${topics.map(([id, label]) => `<button type="button" data-action="help-category" data-category="${id}" class="${helpCategory === id ? 'is-selected' : ''}" aria-pressed="${helpCategory === id}">${label}</button>`).join('')}</nav>
      <div class="help-faq-heading"><h2>Frequently asked</h2><span class="help-faq-count" aria-live="polite">${count} ${count === 1 ? 'answer' : 'answers'}</span></div>
      <div class="help-faq-list">${helpFaqMarkup()}</div>
      <section class="help-contact"><div><p class="eyebrow">Still need a hand?</p><h2>We’re here for you.</h2><p>Send a note to the studio and we’ll point you in the right direction.</p></div><a href="mailto:hello@forme.example">Email our team <span aria-hidden="true">↗</span></a></section>
      <p class="help-prototype-note">FORME is a storefront demo. No real orders, payments, or support requests are processed.</p>
    </section>
  </main>`;
}

function signInPage() {
  if (currentUser) {
    return `<main class="sign-in-page">
      <section class="sign-in-panel" aria-labelledby="accountTitle">
        <a class="sign-in-wordmark" href="/" data-route="/">FORME<span>®</span></a>
        <p class="eyebrow">FORME ACCOUNT</p>
        <h1 id="accountTitle">Welcome back, ${escapeHTML(currentUser.name.split(' ')[0])}.</h1>
        <p class="sign-in-intro">You are signed in as ${escapeHTML(currentUser.email)}.</p>
        <button class="sign-in-submit" type="button" data-action="sign-out">Sign out <span aria-hidden="true">→</span></button>
        <p class="sign-in-join"><a href="/" data-route="/">Return to shopping</a></p>
      </section>
    </main>`;
  }

  return `<main class="sign-in-page">
    <section class="sign-in-panel" aria-labelledby="signInTitle">
      <a class="sign-in-wordmark" href="/" data-route="/">FORME<span>®</span></a>
      <p class="eyebrow">FORME ACCOUNT</p>
      <h1 id="signInTitle">Welcome back.</h1>
      <p class="sign-in-intro">Sign in to return to the things you love.</p>
      <form id="signInForm" class="sign-in-form">
        <label for="signInEmail">Email address</label>
        <input id="signInEmail" name="email" type="email" placeholder="Email address" autocomplete="email" required>
        <label for="signInPassword">Password</label>
        <div class="sign-in-password"><input id="signInPassword" name="password" type="password" placeholder="Password" autocomplete="current-password" required><button type="button" data-action="toggle-password" aria-label="Show password">Show</button></div>
        <div class="sign-in-options"><label><input type="checkbox" name="remember"> Keep me signed in</label><a href="/help" data-route="/help">Forgot password?</a></div>
        <p id="signInMessage" class="sign-in-message" role="status" aria-live="polite"></p>
        <button class="sign-in-submit" type="submit">Sign in <span aria-hidden="true">→</span></button>
      </form>
      <p class="sign-in-join">New to FORME? <a href="/join-us" data-route="/join-us">Join us</a></p>
      <p class="sign-in-note">Your account is saved on the local server for this demo.</p>
    </section>
  </main>`;
}

function joinPage() {
  return `<main class="sign-in-page">
    <section class="sign-in-panel join-panel" aria-labelledby="joinTitle">
      <a class="sign-in-wordmark" href="/" data-route="/">FORME<span>®</span></a>
      <p class="eyebrow">A PLACE FOR THE THOUGHTFUL</p>
      <h1 id="joinTitle">Join FORME</h1>
      <p class="sign-in-intro">Create an account for studio notes, new arrivals, and the objects you love.</p>
      <form id="joinUsForm" class="sign-in-form">
        <label for="joinName">Full name</label>
        <input id="joinName" name="name" type="text" placeholder="Your name" autocomplete="name" required>
        <label for="joinEmail">Email address</label>
        <input id="joinEmail" name="email" type="email" placeholder="Email address" autocomplete="email" required>
        <label for="joinPassword">Create a password</label>
        <input id="joinPassword" name="password" type="password" placeholder="At least 8 characters" autocomplete="new-password" minlength="8" required>
        <p id="joinUsMessage" class="sign-in-message" role="status" aria-live="polite"></p>
        <button class="sign-in-submit" type="submit">Create account <span aria-hidden="true">→</span></button>
      </form>
      <p class="sign-in-join">Already a member? <a href="/sign-in" data-route="/sign-in">Sign in</a></p>
      <p class="sign-in-note">Your account is saved on the local server for this demo.</p>
    </section>
  </main>`;
}

function notFoundPage() {
  return `<main class="empty-cart"><p class="eyebrow">404</p><h1>This page wandered off.</h1><a class="button button-dark" href="/" data-route="/">Return home <span>↗</span></a></main>`;
}

function showToast(message) {
  const toast = document.getElementById('toast');
  toast.textContent = message;
  toast.classList.add('is-visible');
  clearTimeout(showToast.timeout);
  showToast.timeout = setTimeout(() => toast.classList.remove('is-visible'), 2400);
}

function setFilter(group, value, checked) {
  const url = new URL(window.location.href);
  const existing = url.searchParams.getAll(group);
  url.searchParams.delete(group);
  const next = value === '' ? [] : checked ? [...new Set([...existing, value])] : existing.filter((item) => item !== value);
  next.forEach((item) => url.searchParams.append(group, item));
  history.replaceState({}, '', `${url.pathname}${url.search}`);
  render();
}

document.addEventListener('click', (event) => {
  const routeLink = event.target.closest('[data-route]');
  if (routeLink) {
    event.preventDefault();
    navigate(routeLink.dataset.route);
    return;
  }
  const actionElement = event.target.closest('[data-action]');
  if (!actionElement) return;
  const { action } = actionElement.dataset;
  if (action === 'select-store') {
    selectedStoreId = actionElement.dataset.storeId;
    render();
  } else if (action === 'help-category') {
    helpCategory = actionElement.dataset.category;
    render();
  } else if (action === 'toggle-chat') {
    chatbotOpen = !chatbotOpen;
    render();
    if (chatbotOpen) requestAnimationFrame(() => document.getElementById('customerAssistantInput')?.focus());
  } else if (action === 'chat-suggestion') {
    askCustomerAssistant(actionElement.dataset.value);
  } else if (action === 'toggle-password') {
    const password = document.getElementById('signInPassword');
    if (password) {
      const shouldShow = password.type === 'password';
      password.type = shouldShow ? 'text' : 'password';
      actionElement.textContent = shouldShow ? 'Hide' : 'Show';
      actionElement.setAttribute('aria-label', `${shouldShow ? 'Hide' : 'Show'} password`);
    }
  } else if (action === 'sign-out') {
    apiRequest('/api/auth/signout', { method: 'POST' }).catch(() => {});
    clearCurrentUser();
    showToast('You have been signed out.');
    navigate('/');
  } else if (action === 'menu') {
    mobileMenuOpen = !mobileMenuOpen;
    render();
  } else if (action === 'search') {
    searchOpen = true;
    searchQuery = '';
    render();
    requestAnimationFrame(() => document.getElementById('quickSearch')?.focus());
  } else if (action === 'close-search') {
    searchOpen = false;
    render();
  } else if (action === 'filters') {
    filtersOpen = !filtersOpen;
    render();
  } else if (action === 'clear-filters') {
    const url = new URL(window.location.href);
    if (url.pathname.startsWith('/collections/')) url.pathname = '/products';
    ['category', 'price', 'color'].forEach((key) => url.searchParams.delete(key));
    history.replaceState({}, '', `${url.pathname}${url.search}`);
    filtersOpen = false;
    render();
  } else if (action === 'favorite') {
    actionElement.classList.toggle('is-favorite');
    const isFavorite = actionElement.classList.contains('is-favorite');
    actionElement.textContent = isFavorite ? '♥' : '♡';
    actionElement.setAttribute('aria-pressed', String(isFavorite));
    actionElement.setAttribute('aria-label', isFavorite ? 'Remove from wishlist' : 'Add to wishlist');
  } else if (action === 'gallery-image') {
    selectedImage = Number(actionElement.dataset.index);
    render();
  } else if (action === 'variant') {
    selectedColor = actionElement.dataset.color;
    render();
  } else if (action === 'detail-qty') {
    quantity = Math.max(1, Math.min(10, quantity + Number(actionElement.dataset.change)));
    render();
  } else if (action === 'add-to-cart') {
    const id = actionElement.dataset.product;
    const selected = cart.find((item) => item.id === id && item.color === selectedColor);
    if (selected) selected.qty = Math.min(10, selected.qty + quantity);
    else cart.push({ id, color: selectedColor, qty: Math.min(10, quantity) });
    saveCart();
    quantity = 1;
    showToast(`${productById(id).name} added to your bag`);
    render();
  } else if (action === 'cart-qty') {
    const item = cart.find((cartItem) => cartItem.id === actionElement.dataset.id);
    if (item) item.qty = Math.max(1, Math.min(10, item.qty + Number(actionElement.dataset.change)));
    saveCart();
    render();
  } else if (action === 'remove') {
    cart = cart.filter((item) => item.id !== actionElement.dataset.id);
    saveCart();
    render();
  } else if (action === 'checkout-back') {
    checkoutStep = Math.max(1, checkoutStep - 1);
    render();
  }
});

document.addEventListener('change', (event) => {
  const input = event.target;
  if (input.matches('[data-filter-group]')) {
    setFilter(input.dataset.filterGroup, input.value, input.checked);
  } else if (input.id === 'sortProducts') {
    const url = new URL(window.location.href);
    url.searchParams.set('sort', input.value);
    history.replaceState({}, '', `${url.pathname}${url.search}`);
    render();
  }
});

document.addEventListener('input', (event) => {
  if (event.target.id === 'quickSearch') {
    searchQuery = event.target.value;
    const results = document.querySelector('.search-results');
    if (results) results.innerHTML = searchSuggestions();
  } else if (event.target.id === 'productSearch') {
    const url = new URL(window.location.href);
    if (event.target.value.trim()) url.searchParams.set('q', event.target.value.trim());
    else url.searchParams.delete('q');
    history.replaceState({}, '', `${url.pathname}${url.search}`);
    const cursor = event.target.selectionStart;
    render();
    const replacement = document.getElementById('productSearch');
    replacement?.focus();
    replacement?.setSelectionRange(cursor, cursor);
  } else if (event.target.id === 'storeSearch') {
    storeQuery = event.target.value;
    const results = matchingStores();
    if (!results.some((store) => store.id === selectedStoreId)) selectedStoreId = results[0]?.id || '';
    const cursor = event.target.selectionStart;
    render();
    const replacement = document.getElementById('storeSearch');
    replacement?.focus();
    replacement?.setSelectionRange(cursor, cursor);
  } else if (event.target.id === 'helpSearch') {
    helpQuery = event.target.value;
    const questions = matchingHelpQuestions();
    const list = document.querySelector('.help-faq-list');
    if (list) list.innerHTML = helpFaqMarkup();
    const count = document.querySelector('.help-faq-count');
    if (count) count.textContent = `${questions.length} ${questions.length === 1 ? 'answer' : 'answers'}`;
  }
});

document.addEventListener('submit', async (event) => {
  if (event.target.id === 'quickSearchForm') {
    event.preventDefault();
    const query = new FormData(event.target).get('q').trim();
    if (query) navigate(`/products?q=${encodeURIComponent(query)}`);
    else document.getElementById('quickSearch')?.focus();
  } else if (event.target.id === 'newsletterForm') {
    event.preventDefault();
    const email = new FormData(event.target).get('email');
    if (!event.target.reportValidity()) return;
    newsletterMessage = `Thanks. Updates will be sent to ${email}.`;
    showToast('You’re on the list. Thank you.');
    render();
  } else if (event.target.id === 'customerAssistantForm') {
    event.preventDefault();
    const formData = new FormData(event.target);
    const question = String(formData.get('question') || '').trim();
    if (!question) return;
    askCustomerAssistant(question);
    event.target.reset();
  } else if (event.target.id === 'signInForm') {
    event.preventDefault();
    const formData = new FormData(event.target);
    const email = String(formData.get('email') || '').trim().toLowerCase();
    const password = String(formData.get('password') || '').trim();
    const message = document.getElementById('signInMessage');
    if (!email || !password) {
      message.textContent = 'Please enter both your email and password.';
      return;
    }
    try {
      const data = await apiRequest('/api/auth/signin', {
        method: 'POST',
        body: JSON.stringify({ email, password })
      });
      saveCurrentUser(data.user);
      showToast(`Welcome back, ${data.user.name.split(' ')[0]}.`);
      navigate('/');
    } catch (error) {
      message.textContent = error.message || 'No matching account was found. Please create an account or check your details.';
    }
  } else if (event.target.id === 'joinUsForm') {
    event.preventDefault();
    const formData = new FormData(event.target);
    const name = String(formData.get('name') || '').trim();
    const email = String(formData.get('email') || '').trim().toLowerCase();
    const password = String(formData.get('password') || '').trim();
    const message = document.getElementById('joinUsMessage');
    if (!name || !email || !password) {
      message.textContent = 'Please complete every field.';
      return;
    }
    if (password.length < 8) {
      message.textContent = 'Choose a password with at least 8 characters.';
      return;
    }
    try {
      const data = await apiRequest('/api/auth/signup', {
        method: 'POST',
        body: JSON.stringify({ name, email, password })
      });
      saveCurrentUser(data.user);
      showToast(`Welcome, ${data.user.name.split(' ')[0]}.`);
      navigate('/');
    } catch (error) {
      message.textContent = error.message || 'Unable to create an account right now.';
    }
  } else if (event.target.id === 'checkoutForm') {
    event.preventDefault();
    const error = document.getElementById('checkoutError');
    if (checkoutStep === 1) {
      const formData = new FormData(event.target);
      checkoutForm = Object.fromEntries(formData.entries());
      const emailIsValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(checkoutForm.email || '');
      const requiredFields = ['name', 'address', 'city', 'postal'];
      if (!emailIsValid || requiredFields.some((field) => !checkoutForm[field]?.trim())) {
        error.textContent = 'Enter a valid email and complete each delivery field.';
        if (!emailIsValid) event.target.elements.email.focus();
        return;
      }
      checkoutStep = 2;
      render();
    } else if (checkoutStep === 2) {
      checkoutForm.delivery = new FormData(event.target).get('delivery') || 'standard';
      checkoutStep = 3;
      render();
    } else {
      const { subtotal, shipping: standardShipping } = totals();
      const shipping = checkoutForm.delivery === 'express' ? 18 : standardShipping;
      const total = subtotal + shipping;
      const order = { number: `#FM-${Math.floor(10000 + Math.random() * 90000)}`, total };
      sessionStorage.setItem('forme-last-order', JSON.stringify(order));
      cart = [];
      saveCart();
      checkoutStep = 1;
      navigate('/checkout/success');
    }
  }
});

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') {
    if (searchOpen) {
      searchOpen = false;
      render();
      document.querySelector('.search-trigger')?.focus();
      return;
    }
    if (chatbotOpen) {
      chatbotOpen = false;
      render();
    }
  }
});

window.addEventListener('popstate', render);
initializeApp();