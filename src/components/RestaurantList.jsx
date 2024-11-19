import React, { useState } from "react";
import RestaurantCard from "./RestaurantCard";
import { useRestaurants } from "../hooks/useRestaurants";

export default function RestaurantList({ restaurants }) {
    const [visibleCount, setVisibleCount] = useState(8);


    const handleLoadMore = () => {
        setVisibleCount((prevCount) => prevCount + 8);
    };

    return (
        <div className="pb-20">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
                {restaurants.slice(0, visibleCount).map((restaurant) => (
                    <RestaurantCard key={restaurant.id} restaurant={restaurant} />
                ))}
            </div>
            {visibleCount < restaurants.length && (
                <div className="flex justify-center mt-20">
                    <button
                        onClick={handleLoadMore}
                        className="bg-white hover:text-white hover:border-white hover:bg-blue-800 border-blue-950 text-blue py-2 px-20 text-bold font-medium rounded transition-colors"
                    >
                        LOAD MORE
                    </button>
                </div>
            )}
        </div>
    );
}
