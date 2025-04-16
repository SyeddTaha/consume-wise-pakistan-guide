
// DOM Elements
const contactForm = document.getElementById('contact-form');

// Initialize contact page
initContactPage();

function initContactPage() {
  // Add form submission handler
  if (contactForm) {
    contactForm.addEventListener('submit', handleFormSubmit);
  }
}

// Handle form submission
function handleFormSubmit(event) {
  event.preventDefault();
  
  // Get form data
  const formData = new FormData(contactForm);
  const formValues = {};
  
  for (const [key, value] of formData.entries()) {
    formValues[key] = value;
  }
  
  // Validate form (simple validation)
  if (!formValues.name || !formValues.email || !formValues.subject || !formValues.message) {
    showNotification('Please fill in all fields', 'error');
    return;
  }
  
  // Simulate form submission
  simulateFormSubmission(formValues);
}

// Simulate form submission with loading state
function simulateFormSubmission(formData) {
  // Disable form
  const submitButton = contactForm.querySelector('button[type="submit"]');
  const originalButtonText = submitButton.textContent;
  
  submitButton.disabled = true;
  submitButton.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
  
  // Simulate API call
  setTimeout(() => {
    // Reset form
    contactForm.reset();
    
    // Re-enable submit button
    submitButton.disabled = false;
    submitButton.textContent = originalButtonText;
    
    // Show success message
    showNotification('Your message has been sent successfully. We\'ll get back to you soon!');
    
    console.log('Form data submitted:', formData);
  }, 2000);
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
