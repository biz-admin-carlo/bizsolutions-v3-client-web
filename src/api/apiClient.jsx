import axios from "axios";

const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;

const apiClient = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export const loginUser = async (email, password) => {
  try {
    const response = await apiClient.post("/agents/login", { 
      email: email.trim(), 
      password 
    });
    return response.data.data.accessToken;
  } catch (error) {
    if (error.response) {
      throw new Error("Invalid email or password. Please try again.");
    } else {
      throw new Error("Something went wrong. Please try again later.");
    }
  }
};

export const logoutUser = () => {
  localStorage.removeItem("token");
};

/**
 * Create a new Biz
 * @param {Object} bizData - Payload containing all necessary fields
 * @returns {Object} - Response data from the API
 */
export const createBiz = async (bizData) => {
  try {
    const token = localStorage.getItem("token"); // or wherever you store the auth token
    const response = await apiClient.post("/agents/create-biz", bizData, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data; // The API's response, e.g. { httpCode: 200, ... }
  } catch (error) {
    // Provide a more descriptive error message or re-throw
    // console.error("Create Biz Error:", error.response?.data || error.message);
    throw new Error(error.response?.data?.message || "Failed to create business");
  }
};

export const fetchBusinesses = async () => {
  try {
    const token = localStorage.getItem("token");
    const response = await apiClient.get("/agents/view-biz", {
      headers: { Authorization: `Bearer ${token}` },
    });
    return response.data.data.vendorBiz;
  } catch (error) {
    throw new Error("Failed to fetch businesses. Please try again.");
  }
};

export const fetchBusinessesByMonth = async (year, month) => {
  try {
    const token = localStorage.getItem("token");
    const response = await apiClient.get(`/agents/view-biz/${year}/${month}`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    // Return only vendorBiz
    return response.data.data.vendorBiz;
  } catch (error) {
    throw new Error("Failed to fetch businesses for the selected month. Please try again.");
  }
};

export default apiClient;
