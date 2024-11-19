import { useState, useEffect } from "react";
import { getRestaurantDetail } from "../services/restaurantService";

export const useRestaurantDetail = (id) => {
    const [restaurant, setRestaurant] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchRestaurantDetail = async () => {
            try {
                const response = await getRestaurantDetail(id);
                setRestaurant(response.data.restaurant);
            } catch (err) {
                setError("Failed to fetch restaurant details");
            } finally {
                setLoading(false);
            }
        };

        if (id) {
            fetchRestaurantDetail();
        }
    }, [id]);

    return { restaurant, loading, error };
};
