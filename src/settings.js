// Frontend
export const FRONTEND_URL = "http://localhost:8080"; // "http://acmverden.dk/CA3";

// Backend
export const BACKEND_URL = "http://localhost:8080"; // "http://acmverden.dk/tomcat/CA3";

// Endpoints
export const LOGIN_ENDPOINT = BACKEND_URL + "/api/login";
export const VERIFICATION_ENDPOINT = BACKEND_URL + "/api/verify";
export const REGISTRATION_ENDPOINT = BACKEND_URL + "/api/user";
export const CREATE_RIDE_ENDPOINT = {method: "POST", url: BACKEND_URL +"/api/rides/"};
export const GET_RIDE_ENDPOINT = {method: "GET", url: BACKEND_URL +"/api/rides/"};
export const UPDATE_RIDE_ENDPOINT = {method: "PUT", url: BACKEND_URL +"/api/rides/"};
export const DELETE_RIDE_ENDPOINT = {method: "DELETE", url: BACKEND_URL +"/api/rides/"};

// API keys
export const GOOGLE_MAPS_API_KEY = "AIzaSyAzIC_UFa79-eKGiktCKPHoKDGGe6XH-G4";
