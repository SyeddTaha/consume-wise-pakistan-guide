
// DOM Elements
const menuToggle = document.querySelector('.menu-toggle');
const navMenu = document.querySelector('.nav-menu');
const scanButton = document.getElementById('scan-button');
const productResult = document.getElementById('product-result');

// Initialize Mobile Menu Toggle
if (menuToggle) {
  menuToggle.addEventListener('click', () => {
    const mobileMenu = document.querySelector('.mobile-menu');
    
    // Create mobile menu if it doesn't exist
    if (!mobileMenu) {
      const menu = document.createElement('div');
      menu.className = 'mobile-menu';
      
      // Clone navigation links
      const links = navMenu.querySelectorAll('a');
      links.forEach(link => {
        const navLink = document.createElement('a');
        navLink.href = link.href;
        navLink.innerHTML = link.innerHTML;
        if (link.classList.contains('active')) {
          navLink.classList.add('active');
        }
        menu.appendChild(navLink);
      });
      
      // Insert after header
      const header = document.querySelector('header');
      header.parentNode.insertBefore(menu, header.nextSibling);
      menu.classList.add('active');
    } else {
      mobileMenu.classList.toggle('active');
    }
  });
}

// Initialize Popular Products on Home Page
const popularProductsGrid = document.getElementById('popular-products-grid');
if (popularProductsGrid) {
  // Display first 3 products
  displayProducts(sampleProducts.slice(0, 3), popularProductsGrid);
}

// Handle product scanning on homepage
if (scanButton && productResult) {
  scanButton.addEventListener('click', () => {
    simulateScan();
  });
}

// Simulate product scanning process
function simulateScan() {
  const scannerPlaceholder = document.querySelector('.scanner-placeholder');
  
  if (scannerPlaceholder) {
    scannerPlaceholder.innerHTML = '<div class="scanning-animation"><div class="scanner-line"></div><p>Scanning product...</p></div>';
  }
  
  setTimeout(() => {
    const randomIndex = Math.floor(Math.random() * sampleProducts.length);
    const randomProduct = sampleProducts[randomIndex];
    
    if (productResult) {
      productResult.classList.remove('hidden');
      renderProductCard(randomProduct, productResult);
      
      // Reset scanner placeholder
      if (scannerPlaceholder) {
        scannerPlaceholder.innerHTML = '<i class="fas fa-camera"></i><p>Click to scan a product</p>';
      }
    }
  }, 2000);
}

// Render product card
function renderProductCard(product, container) {
  // Create product card HTML
  const healthScoreColor = getHealthScoreColor(product.healthScore);
  
  let warningsHtml = '';
  if (product.warnings && product.warnings.length > 0) {
    warningsHtml = `
      <div class="warning-card">
        <i class="fas fa-exclamation-triangle"></i>
        <span>${product.warnings[0]}</span>
      </div>
    `;
    
    if (product.alternatives) {
      warningsHtml += `
        <p class="alternatives-label">Try these alternatives:</p>
        <ul class="alternatives-list">
          ${product.alternatives.map(alt => `<li>${alt}</li>`).join('')}
        </ul>
      `;
    }
  } else {
    warningsHtml = `
      <div class="info-card">
        <i class="fas fa-info-circle"></i>
        <span>No warnings for this product</span>
      </div>
    `;
  }
  
  const html = `
    <div class="product-card-image">
      <img src="${product.image}" alt="${product.name}">
      <div class="product-card-badge">${product.healthScore}/100</div>
    </div>
    
    <div class="product-card-content">
      <div class="product-card-header">
        <div>
          <h3 class="product-card-title">${product.name}</h3>
          <p class="product-card-brand">${product.brand}</p>
        </div>
        <div class="product-card-actions">
          <button class="product-card-action" id="favorite-btn-${product.id}">
            <i class="far fa-heart"></i>
          </button>
          <button class="product-card-action">
            <i class="fas fa-share"></i>
          </button>
        </div>
      </div>
      
      <div class="product-tabs">
        <button class="product-tab active" data-tab="summary-${product.id}">Summary</button>
        <button class="product-tab" data-tab="ingredients-${product.id}">Ingredients</button>
        <button class="product-tab" data-tab="warnings-${product.id}">Warnings</button>
      </div>
      
      <div class="tab-content">
        <div class="tab-pane active" id="summary-${product.id}">
          <p>${product.description}</p>
          
          <div class="nutrition-summary">
            <div class="nutrition-label ${getNutritionSeverity('fat', product.nutrition.fat)}">
              <div class="nutrition-name">
                <i class="fas fa-circle nutrition-icon"></i>
                <span>Fat</span>
              </div>
              <div class="nutrition-value">
                <span>${product.nutrition.fat}</span>
                <span>g</span>
              </div>
            </div>
            
            <div class="nutrition-label ${getNutritionSeverity('sugar', product.nutrition.sugar)}">
              <div class="nutrition-name">
                <i class="fas fa-circle nutrition-icon"></i>
                <span>Sugar</span>
              </div>
              <div class="nutrition-value">
                <span>${product.nutrition.sugar}</span>
                <span>g</span>
              </div>
            </div>
            
            <div class="nutrition-label ${getNutritionSeverity('sodium', product.nutrition.sodium)}">
              <div class="nutrition-name">
                <i class="fas fa-circle nutrition-icon"></i>
                <span>Sodium</span>
              </div>
              <div class="nutrition-value">
                <span>${product.nutrition.sodium}</span>
                <span>mg</span>
              </div>
            </div>
          </div>
        </div>
        
        <div class="tab-pane" id="ingredients-${product.id}">
          <ul>
            ${product.ingredients.map(ingredient => `<li>${ingredient}</li>`).join('')}
          </ul>
        </div>
        
        <div class="tab-pane" id="warnings-${product.id}">
          ${warningsHtml}
        </div>
      </div>
    </div>
    
    <div class="product-card-footer">
      <span class="product-card-score-label">Health Score</span>
      <div class="score-bar">
        <div class="score-progress">
          <div class="score-value" style="width: ${product.healthScore}%; background-color: var(--${healthScoreColor}-color);"></div>
        </div>
        <span class="score-text">${product.healthScore}</span>
      </div>
    </div>
  `;
  
  container.innerHTML = html;
  
  // Add event listeners for tabs
  const tabs = container.querySelectorAll('.product-tab');
  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      // Deactivate all tabs
      tabs.forEach(t => t.classList.remove('active'));
      // Activate clicked tab
      tab.classList.add('active');
      
      // Hide all tab panes
      const panes = container.querySelectorAll('.tab-pane');
      panes.forEach(pane => pane.classList.remove('active'));
      
      // Show selected tab pane
      const tabId = tab.getAttribute('data-tab');
      document.getElementById(tabId).classList.add('active');
    });
  });
  
  // Add favorite functionality
  const favoriteBtn = container.querySelector(`#favorite-btn-${product.id}`);
  if (favoriteBtn) {
    favoriteBtn.addEventListener('click', () => {
      const icon = favoriteBtn.querySelector('i');
      if (icon.classList.contains('far')) {
        icon.classList.remove('far');
        icon.classList.add('fas');
        icon.style.color = '#ef4444';
      } else {
        icon.classList.remove('fas');
        icon.classList.add('far');
        icon.style.color = '';
      }
    });
  }
}

// Display products in a grid
function displayProducts(products, container) {
  container.innerHTML = '';
  
  products.forEach(product => {
    const productCard = document.createElement('div');
    productCard.className = 'product-card';
    
    renderProductCard(product, productCard);
    container.appendChild(productCard);
  });
}

// Function to show a notification
function showNotification(message, type = 'success') {
  const notification = document.createElement('div');
  notification.className = `notification ${type}`;
  notification.innerHTML = `
    <div class="notification-content">
      <i class="fas ${type === 'success' ? 'fa-check-circle' : 'fa-exclamation-circle'}"></i>
      <span>${message}</span>
    </div>
  `;
  
  document.body.appendChild(notification);
  
  // Show notification
  setTimeout(() => {
    notification.classList.add('show');
  }, 10);
  
  // Hide and remove notification
  setTimeout(() => {
    notification.classList.remove('show');
    setTimeout(() => {
      document.body.removeChild(notification);
    }, 300);
  }, 3000);
}
