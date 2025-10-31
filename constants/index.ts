
export const API_BASE_URL = 'https://api.alx-listing-app.com/v1';

export const API_ROUTES = {
  LISTINGS: `${API_BASE_URL}/listings`,
  AUTH_LOGIN: `${API_BASE_URL}/auth/login`,
};


export const PAGE_ROUTES = {
  HOME: '/',
  LISTINGS_DETAIL: (id: string | number) => `/listings/${id}`,
  SAVED: '/saved',
  PROFILE: '/profile',
};

// --- UI Text and Strings ---
export const UI_TEXT = {
  APP_TITLE: 'ALX Listing App',
  HEADER_SUBTITLE: 'Find your next stay.',
  BUTTON_BOOK_NOW: 'Reserve Now',
  BUTTON_VIEW_DETAILS: 'Show all amenities',
};


export const APP_CONFIG = {
  DEFAULT_CURRENCY: 'USD',
  
  INITIAL_LOAD_COUNT: 12, 
  
  API_TIMEOUT_MS: 8000,
};