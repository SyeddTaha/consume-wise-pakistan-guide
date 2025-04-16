
// DOM Elements
const scanButton = document.getElementById('scan-button');
const productResult = document.getElementById('product-result');
const productPlaceholder = document.getElementById('product-placeholder');
const scannerPlaceholder = document.getElementById('scanner-placeholder');
const scanningAnimation = document.getElementById('scanning-animation');

// Handle scan button click
if (scanButton) {
  scanButton.addEventListener('click', () => {
    startScan();
  });
}

// Start the scanning process
function startScan() {
  // Show scanning animation
  scannerPlaceholder.classList.add('hidden');
  scanningAnimation.classList.remove('hidden');
  
  // Disable scan button during scan
  scanButton.disabled = true;
  
  // Simulate scan taking 3 seconds
  setTimeout(() => {
    // Hide scanning animation
    scannerPlaceholder.classList.remove('hidden');
    scanningAnimation.classList.add('hidden');
    
    // Re-enable scan button
    scanButton.disabled = false;
    
    // Get random product
    const randomIndex = Math.floor(Math.random() * sampleProducts.length);
    const randomProduct = sampleProducts[randomIndex];
    
    // Show product result and hide placeholder
    productResult.classList.remove('hidden');
    productPlaceholder.classList.add('hidden');
    
    // Render product details
    renderProductCard(randomProduct, productResult);
    
    // Show notification
    showNotification(`Product identified: ${randomProduct.name}`);
  }, 3000);
}

// Render product card with detailed view for scan page
function renderProductCard(product, container) {
  // Create product card HTML with more details for scan page
  const healthScoreColor = getHealthScoreColor(product.healthScore);
  
  let warningsHtml = '';
  if (product.warnings && product.warnings.length > 0) {
    warningsHtml = product.warnings.map(warning => `
      <div class="warning-card">
        <i class="fas fa-exclamation-triangle"></i>
        <span>${warning}</span>
      </div>
    `).join('');
    
    if (product.alternatives) {
      warningsHtml += `
        <div class="alternatives-section">
          <p class="alternatives-label">Try these alternatives:</p>
          <ul class="alternatives-list">
            ${product.alternatives.map(alt => `<li>${alt}</li>`).join('')}
          </ul>
        </div>
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
          
          <div class="nutrition-badge">
            <span>${product.nutrition.calories}</span> Calories per serving
          </div>
          
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
          
          <div class="nutrition-details">
            <div class="nutrition-detail">
              <span class="label">Protein:</span>
              <span class="value">${product.nutrition.protein}g</span>
            </div>
            <div class="nutrition-detail">
              <span class="label">Carbs:</span>
              <span class="value">${product.nutrition.carbs}g</span>
            </div>
          </div>
        </div>
        
        <div class="tab-pane" id="ingredients-${product.id}">
          <ul class="ingredients-list">
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
        showNotification('Product added to favorites');
      } else {
        icon.classList.remove('fas');
        icon.classList.add('far');
        icon.style.color = '';
        showNotification('Product removed from favorites');
      }
    });
  }
}

// Function to show a notification
function showNotification(message, type = 'success') {
  // Create notification element if it doesn't exist
  if (!document.querySelector('.notification-container')) {
    const container = document.createElement('div');
    container.className = 'notification-container';
    document.body.appendChild(container);
  }
  
  const container = document.querySelector('.notification-container');
  
  const notification = document.createElement('div');
  notification.className = `notification ${type}`;
  notification.innerHTML = `
    <div class="notification-content">
      <i class="fas ${type === 'success' ? 'fa-check-circle' : 'fa-exclamation-circle'}"></i>
      <span>${message}</span>
    </div>
  `;
  
  container.appendChild(notification);
  
  // Show notification
  setTimeout(() => {
    notification.classList.add('show');
  }, 10);
  
  // Hide and remove notification
  setTimeout(() => {
    notification.classList.remove('show');
    setTimeout(() => {
      container.removeChild(notification);
    }, 300);
  }, 3000);
}

// Add notification container styles
const notificationStyles = `
  .notification-container {
    position: fixed;
    top: 1rem;
    right: 1rem;
    z-index: 1000;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }
  
  .notification {
    background-color: white;
    border-radius: 0.375rem;
    box-shadow: var(--shadow-md);
    padding: 1rem;
    transform: translateX(100%);
    opacity: 0;
    transition: all 0.3s ease;
    max-width: 24rem;
  }
  
  .notification.show {
    transform: translateX(0);
    opacity: 1;
  }
  
  .notification-content {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }
  
  .notification.success i {
    color: var(--green-color);
  }
  
  .notification.error i {
    color: var(--red-color);
  }
`;

// Add notification styles to document
const styleElement = document.createElement('style');
styleElement.textContent = notificationStyles;
document.head.appendChild(styleElement);
