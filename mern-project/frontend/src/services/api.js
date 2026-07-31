// Small fetch wrapper for talking to the backend API
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || "http://localhost:5000/api";

const request = async (path, options = {}) => {
  const response = await fetch(`${API_BASE_URL}${path}`, {
    headers: { "Content-Type": "application/json" },
    ...options,
  });

  const result = await response.json();

  if (!response.ok) {
    throw new Error(result.message || "Request failed");
  }

  return result;
};

export const fetchAboutMe = async () => {
  const result = await request("/about");
  return result.data;
};

export const updateAboutMe = async (updatedData) => {
  const result = await request("/about", {
    method: "PUT",
    body: JSON.stringify(updatedData),
  });
  return result.data;
};

export const createAboutMe = async (newData) => {
  const result = await request("/about", {
    method: "POST",
    body: JSON.stringify(newData),
  });
  return result.data;
};

export const deleteAboutMe = async () => {
  return request("/about", { method: "DELETE" });
};
