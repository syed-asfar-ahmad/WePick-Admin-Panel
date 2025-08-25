// Environment-based API URL
const isProduction = process.env.NODE_ENV === 'production';
const isVercel = process.env.VERCEL === '1';

// Use HTTPS for Vercel, HTTP for local development
export const BASE_URL = isProduction || isVercel 
  ? "https://35.183.208.209/api/v1/admin"  // Vercel HTTPS
  : "http://35.183.208.209/api/v1/admin";  // Local HTTP



