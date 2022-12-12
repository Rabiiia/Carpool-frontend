// Frontend
export const FRONTEND_URL = "" // "/CA3"; 

// Backend
export const BACKEND_URL = "http://localhost:8080" //"https://acmverden.dk/tomcat/CA3"; 

// Endpoints
export const LOGIN_ENDPOINT = BACKEND_URL + "/api/login";
export const VERIFICATION_ENDPOINT = BACKEND_URL + "/api/verify";

export const SCHOOL_ENDPOINT = BACKEND_URL + "/api/schools";
export const USER_ENDPOINT = BACKEND_URL + "/api/users";
export const RIDE_ENDPOINT = BACKEND_URL + "/api/rides";

export const REGISTRATION_ENDPOINT = BACKEND_URL + "/api/users";
export const GET_USER_ENDPOINT = {method: "GET", url: BACKEND_URL + "/api/users"};
export const CREATE_RIDE_ENDPOINT = {method: "POST", url: BACKEND_URL +"/api/rides/"};
export const GET_RIDE_ENDPOINT = {method: "GET", url: BACKEND_URL +"/api/rides/"};
export const UPDATE_RIDE_ENDPOINT = {method: "PATCH", url: BACKEND_URL +"/api/rides/"};
export const DELETE_RIDE_ENDPOINT = {method: "DELETE", url: BACKEND_URL +"/api/rides/"};

// API keys
export const GOOGLE_MAPS_API_KEY = "AIzaSyAzIC_UFa79-eKGiktCKPHoKDGGe6XH-G4";
