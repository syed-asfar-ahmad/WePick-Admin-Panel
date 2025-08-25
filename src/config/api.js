// Environment-based API URL
const isProduction = process.env.NODE_ENV === 'production';
const isVercel = process.env.VERCEL === '1';

// Use different URLs based on environment
export const BASE_URL = isProduction || isVercel 
  ? "https://api.wepickapp.com/api"  // Production HTTPS
  : "http://35.183.208.209/api/v1/admin";  // Development HTTP



