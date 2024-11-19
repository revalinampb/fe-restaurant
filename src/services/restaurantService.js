// src/services/restaurantService.js
import axios from "axios";

// Membuat instance axios dengan URL API Dicoding
const axiosInstance = axios.create({
    baseURL: "https://restaurant-api.dicoding.dev/",
});

// Fungsi untuk mengambil daftar restoran
export const getRestaurants = () => {
    return axiosInstance.get("/list");
};

// Fungsi untuk mengambil detail restoran berdasarkan ID
export const getRestaurantDetail = (id) => {
    return axiosInstance.get(`/detail/${id}`);
};
