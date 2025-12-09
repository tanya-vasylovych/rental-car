"use client";

import React from "react";
import css from "./Cars.client.module.css";
import { fetchCars } from "@/lib/api";
import { useState, useEffect } from "react";
import { useFavorites } from "@/components/Favorites/Favorites";
import { Car } from "@/types/cars";
import { useRouter } from "next/navigation";

const FavoritesPage = () => {
  const { favorites } = useFavorites();
  const router = useRouter();
  const [allCars, setAllCars] = useState<Car[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchCars("", "", "", "", "100", "1")
      .then((res) => {
        setAllCars(res.cars);
        setIsLoading(false);
      })
      .catch(() => {
        setIsLoading(false);
      });
  }, []);

  const favoriteCars = allCars.filter((car) => favorites.has(car.id));

  return (
    <div>
      <h1>Обрані</h1>
      {isLoading ? (
        <p>Loading...</p>
      ) : favoriteCars.length === 0 ? (
        <p>Favorites list is empty</p>
      ) : (
        <ul className={css.list}>
          {favoriteCars.map((car) => (
            <li key={car.id} className={css.listItem}>
              <h2>
                {car.brand} {car.model}, {car.year}
              </h2>
              <p>{car.rentalPrice} $</p>
              <button onClick={() => router.push(`/catalog/${car.id}`)}>
                Read more
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default FavoritesPage;
