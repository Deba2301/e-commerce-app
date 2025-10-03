import axios from 'axios';

const API_BASE = 'https://fakestoreapi.com';

// Get all products
export const fetchProducts = async () => {
    try {
        const response = await axios.get(`${API_BASE}/products`);
        return response.data;
    } catch (error) {
        console.error("Error fetching products:", error);
        throw error;
    }
};

// Export as default for convenience
export default fetchProducts;