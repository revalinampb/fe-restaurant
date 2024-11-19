import React from "react";
import { useParams } from "react-router-dom";
import { useRestaurantDetail } from "../hooks/useRestaurantDetail";
import { getImageUrl } from "../utils/imageUtils";
import { Star } from "lucide-react";

export default function DetailView() {
    const { id } = useParams();
    const { restaurant, loading, error } = useRestaurantDetail(id);
    const imageUrl = getImageUrl(restaurant?.pictureId);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>{error}</div>;

    return (
        <div className="w-screen h-screen p-8">
            <div className="mb-4">
                <img
                    src={imageUrl}
                    alt={restaurant.name}
                    className="w-full h-64 object-cover rounded-lg"
                />
            </div>
            <div className="flex items-center justify-between mb-4">
                <h1 className="text-3xl font-bold">{restaurant.name}</h1>
                <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                        <Star
                            key={i}
                            className={`w-4 h-4 ${i < restaurant.rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}`}
                        />
                    ))}
                    <p className="text-lg font-medium">{restaurant.rating}</p>
                </div>
            </div>

            <div className="mb-4">
                <h2 className="text-xl font-semibold">Details</h2>
                <p className="text-gray-600">{restaurant.description}</p>
            </div>
            <div className="mb-4">
                <h2 className="text-xl font-semibold">Location</h2>
                <p className="text-gray-600">{restaurant.address}, {restaurant.city}</p>
            </div>

            <div className="mb-4">
                <h2 className="text-xl font-semibold">Categories</h2>
                <ul>
                    {restaurant?.categories?.map((category, index) => (
                        <li key={index} className="text-gray-600">{category.name}</li>
                    ))}
                </ul>
            </div>
            <div className="mb-4">
                <h2 className="text-xl font-semibold">Menu</h2>
                <div className="mb-2">
                    <h3 className="font-medium">Foods</h3>
                    <ul className="list-disc pl-5">
                        {restaurant.menus.foods.length > 0 ? (
                            restaurant.menus.foods.map((food, index) => (
                                <li key={index} className="text-gray-600">{food.name}</li>
                            ))
                        ) : (
                            <li className="text-gray-500">No food items available.</li>
                        )}
                    </ul>
                </div>
                <div>
                    <h3 className="font-medium">Drinks</h3>
                    <ul className="list-disc pl-5">
                        {restaurant.menus.drinks.length > 0 ? (
                            restaurant.menus.drinks.map((drink, index) => (
                                <li key={index} className="text-gray-600">{drink.name}</li>
                            ))
                        ) : (
                            <li className="text-gray-500">No drinks available.</li>
                        )}
                    </ul>
                </div>
            </div>

            <div className="mb-4">
                <h2 className="text-xl font-semibold">Reviews</h2>
                {restaurant?.customerReviews?.map((review, index) => (
                    <div key={index} className="border-b py-2">
                        <div className="flex items-center gap-4">
                            <img
                                src="/profil.png"
                                alt="Profile"
                                className="w-12 h-12 rounded-full object-cover"
                            />
                            <div className="flex-1">
                                <div className="flex items-center justify-between">
                                    <h3 className="font-medium">{review.name}</h3>
                                    <p className="text-gray-600">{review.date}</p>
                                </div>
                                <p className="text-gray-600">{review.review}</p>
                                <p>{review.text}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

        </div>
    );
};