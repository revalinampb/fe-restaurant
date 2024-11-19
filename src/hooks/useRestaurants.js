import { useState, useEffect } from "react";
import { getRestaurants } from "../services/restaurantService";

export const useRestaurants = () => {
    const [restaurants, setRestaurants] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchRestaurants = async () => {
            try {
                const response = await getRestaurants();
                setRestaurants(response.data.restaurants);
            } catch (err) {
                setError("Failed to fetch restaurants");
            } finally {
                setLoading(false);
            }
        };

        fetchRestaurants();
    }, []);

    return { restaurants, loading, error };
};
