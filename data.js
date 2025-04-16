
// Sample products data
const sampleProducts = [
  {
    id: "p1",
    name: "Everyday Milk",
    brand: "Nestle",
    category: "Dairy",
    image: "https://images.unsplash.com/photo-1563636619-e9143da7973b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400&q=80",
    description: "Ultra-high temperature (UHT) treated milk with added vitamins and minerals.",
    ingredients: ["Milk", "Vitamins (A, D)", "Minerals (Calcium)"],
    nutrition: {
      calories: 65,
      protein: 3.3,
      carbs: 4.9,
      sugar: 4.9,
      fat: 3.5,
      sodium: 50,
    },
    warnings: [],
    healthScore: 75,
  },
  {
    id: "p2",
    name: "Energy Biscuits",
    brand: "LU",
    category: "Snacks",
    image: "https://images.unsplash.com/photo-1597733336794-12d05021d510?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400&q=80",
    description: "Wheat biscuits with glucose and vitamins for quick energy.",
    ingredients: [
      "Wheat Flour", 
      "Sugar", 
      "Vegetable Oil", 
      "Glucose Syrup", 
      "Salt", 
      "Raising Agents (E500, E503)", 
      "Emulsifiers (E322)",
      "Artificial Flavors"
    ],
    nutrition: {
      calories: 140,
      protein: 2,
      carbs: 21,
      sugar: 12,
      fat: 6,
      sodium: 200,
    },
    warnings: ["High in sugar", "Contains emulsifiers"],
    alternatives: ["Whole Wheat Digestive Biscuits", "Oat Cookies"],
    healthScore: 35,
  },
  {
    id: "p3",
    name: "Fruit Juice",
    brand: "Shezan",
    category: "Beverages",
    image: "https://images.unsplash.com/photo-1600271886742-f049cd451bba?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400&q=80",
    description: "Mixed fruit juice with no added preservatives.",
    ingredients: [
      "Water", 
      "Fruit Juice Concentrate (Apple, Orange, Mango)", 
      "Sugar", 
      "Citric Acid", 
      "Vitamin C"
    ],
    nutrition: {
      calories: 110,
      protein: 0,
      carbs: 27,
      sugar: 25,
      fat: 0,
      sodium: 5,
    },
    warnings: ["High in sugar"],
    alternatives: ["Fresh Fruit", "Sugar-Free Juice"],
    healthScore: 45,
  },
  {
    id: "p4",
    name: "Whole Wheat Atta",
    brand: "Sooper",
    category: "Grains",
    image: "https://images.unsplash.com/photo-1586444248879-400728nfdd3b4?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400&q=80",
    description: "Stone-ground whole wheat flour for chapati and roti.",
    ingredients: ["100% Whole Wheat"],
    nutrition: {
      calories: 340,
      protein: 13,
      carbs: 72,
      sugar: 0,
      fat: 2,
      sodium: 0,
    },
    warnings: [],
    healthScore: 90,
  },
  {
    id: "p5",
    name: "Honey Cornflakes",
    brand: "Kellogg's",
    category: "Breakfast",
    image: "https://images.unsplash.com/photo-1521483451396-8a73a8af0vulma9?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400&q=80",
    description: "Crispy corn flakes coated with honey.",
    ingredients: [
      "Corn", 
      "Sugar", 
      "Honey (5%)", 
      "Salt", 
      "Barley Malt Extract", 
      "Vitamins (B1, B2, B3, B6, B12, C, D, Folic Acid)", 
      "Minerals (Iron, Zinc)"
    ],
    nutrition: {
      calories: 170,
      protein: 3,
      carbs: 38,
      sugar: 12,
      fat: 0.5,
      sodium: 250,
    },
    warnings: ["Contains gluten", "High in sugar"],
    alternatives: ["Plain Cornflakes", "Oatmeal"],
    healthScore: 55,
  }
];

// User profile options
const dietaryOptions = [
  "Vegetarian",
  "Vegan",
  "Halal",
  "Gluten-Free",
  "Low-Carb",
  "Keto",
  "Low-Sugar",
  "Low-Sodium"
];

const allergyOptions = [
  "Dairy",
  "Nuts",
  "Eggs",
  "Soy",
  "Wheat",
  "Fish",
  "Shellfish"
];

const healthGoalOptions = [
  "Weight Loss",
  "Weight Gain",
  "Maintain Weight",
  "Build Muscle",
  "Improve Heart Health",
  "Manage Diabetes",
  "Increase Energy"
];

// Default user profile
const defaultUserProfile = {
  dietaryPreferences: [],
  allergies: [],
  healthGoals: []
};

// Get or initialize user profile from localStorage
function getUserProfile() {
  const storedProfile = localStorage.getItem('userProfile');
  if (storedProfile) {
    try {
      return JSON.parse(storedProfile);
    } catch (error) {
      console.error('Error parsing user profile:', error);
      return { ...defaultUserProfile };
    }
  }
  return { ...defaultUserProfile };
}

// Save user profile to localStorage
function saveUserProfile(profile) {
  localStorage.setItem('userProfile', JSON.stringify(profile));
}

// Helper functions for product analysis
function getNutritionSeverity(type, value) {
  switch (type) {
    case 'fat':
      return value > 10 ? 'high' : value > 5 ? 'medium' : 'low';
    case 'sugar':
      return value > 15 ? 'high' : value > 8 ? 'medium' : 'low';
    case 'sodium':
      return value > 400 ? 'high' : value > 200 ? 'medium' : 'low';
    default:
      return 'low';
  }
}

function getHealthScoreColor(score) {
  if (score >= 70) return 'green';
  if (score >= 40) return 'orange';
  return 'red';
}

// Format currency
function formatCurrency(value) {
  return `Rs.${value.toFixed(2)}`;
}
