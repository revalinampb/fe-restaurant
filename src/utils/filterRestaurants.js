export const filterRestaurants = (restaurants, selectedCity, selectedRating, openNow) => {
    const ratingRanges = {
        ">4": (rating) => rating >= 4,
        "3-4": (rating) => rating >= 3 && rating < 4,
        "2-2.9": (rating) => rating >= 2 && rating < 3,
        "1-1.9": (rating) => rating >= 1 && rating < 2,
        "<1": (rating) => rating < 1,
    };

    return restaurants.filter(restaurant => {
        const matchesCity = selectedCity === "" || restaurant.city === selectedCity;
        const matchesRating = selectedRating === "" || ratingRanges[selectedRating](restaurant.rating);
        const matchesOpenNow = !openNow || restaurant.rating > 4;

        return matchesCity && matchesRating && matchesOpenNow;
    });
};