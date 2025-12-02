"use client";
import css from "./Cars.client.module.css";
import { fetchCars } from "@/lib/api";
import { useState, useEffect } from "react";
import CarsList from "@/components/CarsList/CarsList";
import { Car } from "@/types/cars";
import Filter from "@/components/Filter/Filter";

const CarsClient = () => {
  const [page, setPage] = useState(1);
  const [data, setData] = useState<{ cars: Car[]; totalPages: number } | null>(
    null
  );
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const [brand, setBrand] = useState("");
  const [rentalPrice, setRentalPrice] = useState("");
  const [minMileage, setMinMileage] = useState("");
  const [maxMileage, setMaxMileage] = useState("");
  const limit = "12";

  useEffect(() => {
    let isCancelled = false;
    setIsLoading(true);
    setIsSuccess(false);

    fetchCars(
      brand,
      rentalPrice,
      minMileage,
      maxMileage,
      limit,
      page.toString()
    )
      .then((res) => {
        if (!isCancelled) {
          setData(res);
          setIsSuccess(true);
        }
      })
      .catch(() => {
        if (!isCancelled) {
          setData(null);
          setIsSuccess(false);
        }
      })
      .finally(() => {
        if (!isCancelled) {
          setIsLoading(false);
        }
      });

    return () => {
      isCancelled = true;
    };
  }, [page, brand, rentalPrice, minMileage, maxMileage]);

  const handlePageChange = (newPage: number) => {
    setPage(newPage);
  };

  const handleFilterChange = (filters: {
    brand: string;
    rentalPrice: string;
    minMileage: string;
    maxMileage: string;
  }) => {
    setBrand(filters.brand);
    setRentalPrice(filters.rentalPrice);
    setMinMileage(filters.minMileage);
    setMaxMileage(filters.maxMileage);
    setPage(1);
  };

  return (
    <div>
      <Filter onFilterChange={handleFilterChange} />
      {isLoading && !data && <div>Loading...</div>}
      {isSuccess && data?.cars && data.cars.length > 0 ? (
        <>
          <CarsList cars={data.cars} />
          {page < data.totalPages && (
            <button
              className={css.button}
              onClick={() => handlePageChange(page + 1)}
              disabled={isLoading}
            >
              Load more
            </button>
          )}
        </>
      ) : (
        isSuccess && <div>No cars found</div>
      )}
    </div>
  );
};

export default CarsClient;
