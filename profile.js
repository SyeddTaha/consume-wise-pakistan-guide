
// DOM Elements
const dietaryPreferencesContainer = document.getElementById('dietary-preferences');
const allergiesContainer = document.getElementById('allergies');
const healthGoalsContainer = document.getElementById('health-goals');
const saveProfileButton = document.getElementById('save-profile');
const tabButtons = document.querySelectorAll('.tab-btn');
const tabPanes = document.querySelectorAll('.tab-pane');

// Initialize profile page
let userProfile = getUserProfile();
initProfilePage();

function initProfilePage() {
  // Create checkboxes for dietary preferences
  createCheckboxes(dietaryPreferencesContainer, 'diet', dietaryOptions, userProfile.dietaryPreferences);
  
  // Create checkboxes for allergies
  createCheckboxes(allergiesContainer, 'allergy', allergyOptions, userProfile.allergies);
  
  // Create checkboxes for health goals
  createCheckboxes(healthGoalsContainer, 'goal', healthGoalOptions, userProfile.healthGoals);
  
  // Add event listener for save button
  if (saveProfileButton) {
    saveProfileButton.addEventListener('click', saveProfile);
  }
  
  // Initialize tabs
  initTabs();
}

// Create checkboxes for a category
function createCheckboxes(container, prefix, options, selectedOptions) {
  if (!container) return;
  
  container.innerHTML = '';
  
  options.forEach(option => {
    const isChecked = selectedOptions.includes(option);
    
    const checkboxItem = document.createElement('div');
    checkboxItem.className = 'checkbox-item';
    
    checkboxItem.innerHTML = `
      <input type="checkbox" id="${prefix}-${option}" ${isChecked ? 'checked' : ''}>
      <label for="${prefix}-${option}">${option}</label>
    `;
    
    container.appendChild(checkboxItem);
  });
}

// Save profile data
function saveProfile() {
  const newProfile = {
    dietaryPreferences: [],
    allergies: [],
    healthGoals: []
  };
  
  // Collect dietary preferences
  collectCheckboxValues(dietaryPreferencesContainer, 'diet-', dietaryOptions, newProfile.dietaryPreferences);
  
  // Collect allergies
  collectCheckboxValues(allergiesContainer, 'allergy-', allergyOptions, newProfile.allergies);
  
  // Collect health goals
  collectCheckboxValues(healthGoalsContainer, 'goal-', healthGoalOptions, newProfile.healthGoals);
  
  // Update user profile
  userProfile = newProfile;
  saveUserProfile(userProfile);
  
  // Show success notification
  showNotification('Profile updated successfully');
}

// Collect checkbox values
function collectCheckboxValues(container, prefix, options, target) {
  if (!container) return;
  
  options.forEach(option => {
    const checkbox = document.getElementById(`${prefix}${option}`);
    if (checkbox && checkbox.checked) {
      target.push(option);
    }
  });
}

// Initialize tabs functionality
function initTabs() {
  if (!tabButtons.length || !tabPanes.length) return;
  
  tabButtons.forEach(button => {
    button.addEventListener('click', () => {
      // Remove active class from all buttons
      tabButtons.forEach(btn => btn.classList.remove('active'));
      
      // Add active class to clicked button
      button.classList.add('active');
      
      // Hide all tab panes
      tabPanes.forEach(pane => pane.classList.remove('active'));
      
      // Show selected tab pane
      const tabId = button.getAttribute('data-tab');
      document.getElementById(`${tabId}-tab`).classList.add('active');
    });
  });
}

// Function to show a notification
function showNotification(message, type = 'success') {
  // Create notification container if it doesn't exist
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
