import React from "react";
import { Star } from "lucide-react";
import { Link } from "react-router-dom";
import { getImageUrl } from "../utils/imageUtils";

export default function RestaurantCard({ restaurant }) {

    const imageUrl = getImageUrl(restaurant.pictureId);

    return (
        <div className="flex flex-col w-full ">
            <div className="aspect-square mb-4">
                <img
                    src={imageUrl}
                    alt={restaurant.name}
                    className="w-full h-full object-cover rounded-md"
                />
            </div>
            <h3 className="font-medium text-gray-900 mb-2 line-clamp-2">{restaurant.name}</h3>
            <div className="flex items-center gap-1 mb-2">
                {[...Array(5)].map((_, i) => (
                    <Star
                        key={i}
                        className={`w-4 h-4 ${i < restaurant.rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"
                            }`}
                    />
                ))}
            </div>
            <div className="flex items-center justify-between text-sm text-gray-600 mb-4">
                <span>
                    {restaurant.city} • {restaurant.rating}
                </span>
                <span className={restaurant.rating > 4 ? "text-green-500" : "text-red-500"}>
                    {restaurant.rating > 4 ? "OPEN NOW" : "CLOSED"}
                </span>
            </div>
            <Link to={`/restaurant/${restaurant.id}`}>
                <button className="w-full bg-blue-900 hover:bg-blue-800 text-white py-2 px-4 text-sm font-medium transition-colors">
                    LEARN MORE
                </button>
            </Link>
        </div>
    );
}
