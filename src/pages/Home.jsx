import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import RestaurantList from '../components/RestaurantList';
import { useRestaurants } from '../hooks/useRestaurants';
import { filterRestaurants } from "../utils/filterRestaurants";

export default function Home() {

    const [selectedRating, setSelectedRating] = useState("");
    const [selectedCity, setSelectedCity] = useState("");
    const [openNow, setOpenNow] = useState(false);
    const { restaurants, loading, error } = useRestaurants();
    const uniqueCities = Array.from(new Set(restaurants.map(restaurant => restaurant.city)));

    const filteredRestaurants = filterRestaurants(restaurants, selectedCity, selectedRating, openNow);

    const handleClearAll = () => {
        setSelectedRating("");
        setSelectedCity("");
        setOpenNow(false);
    };

    const handleRatingChange = (value) => {
        setSelectedRating(value);
    };

    const handleCityChange = (value) => {
        setSelectedCity(value);
    };

    return (
        <div className="p-10 w-screen h-screen">
            <h1 className="text-4xl font-normal text-gray-900 mb-2">Restaurants</h1>
            <p className="text-gray-500 mb-8">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua.
            </p>

            <div className="flex flex-wrap items-center gap-4 border-y border-gray-200 py-4">
                <span className="text-sm text-gray-600">Filter By:</span>

                <div className='relative'>
                    <label className="flex items-center gap-2 cursor-pointer border-b-2 border-gray-300">
                        <input
                            type="radio"
                            checked={openNow}
                            className="w-4 h-4 rounded-full border-gray-300 text-blue-900 focus:ring-blue-900"
                            onChange={(e) => setOpenNow(e.target.checked)}
                        />
                        <span className="text-sm p-2">Open Now</span>
                    </label>
                </div>

                <div className="relative">
                    <select
                        className="appearance-none w-[120px] pl-3 pr-8 py-2 text-sm border-b-2 border-gray-300 bg-white hover:border-gray-400 focus:outline-none focus:ring-1 focus:ring-blue-900 focus:border-blue-900"
                        value={selectedRating}
                        onChange={(e) => {
                            handleRatingChange(e.target.value);
                        }}
                        defaultValue=""
                    >
                        <option value="" disabled>Rating</option>
                        <option value=">4">≥ 4</option>
                        <option value="3-4">3 - 4</option>
                        <option value="2-2.9">2 - 2.9</option>
                        <option value="1-1.9">1 - 1.9</option>
                        <option value="<1">&lt;1</option>
                    </select>
                    <ChevronDown className="absolute right-2 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
                </div>

                <div className="relative">
                    <select
                        className="appearance-none w-[120px] pl-3 pr-8 py-2 text-sm border-b-2 border-gray-300 bg-white hover:border-gray-400 focus:outline-none focus:ring-1 focus:ring-blue-900 focus:border-blue-900"
                        value={selectedCity}
                        onChange={(e) => handleCityChange(e.target.value)}
                        defaultValue=""
                    >
                        <option value="" disabled>City</option>
                        {uniqueCities.map((city, index) => (
                            <option key={index} value={city}>{city}</option>
                        ))}
                    </select>
                    <ChevronDown className="absolute right-2 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
                </div>

                <button
                    onClick={handleClearAll}
                    className="ml-auto px-8 py-2 text-sm border border-gray-200 text-gray-300 hover:text-gray-500 hover:border-gray-500"
                >
                    CLEAR ALL
                </button>
            </div>

            <h2 className="text-2xl font-normal text-gray-900 my-8">All Restaurants</h2>
            <RestaurantList restaurants={filteredRestaurants} />
        </div>
    );
}