"use client";
import css from "./Cars.client.module.css";
import { fetchCars } from "@/lib/api";
import { useState, useEffect } from "react";
import CarsList from "@/components/CarsList/CarsList";

import { Car } from "@/types/cars";

const CarsClient = () => {
  const [page, setPage] = useState(1);

  const [data, setData] = useState<{ cars: Car[]; totalPages: number } | null>(
    null
  );
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const brand = "";
  const rentalPrice = "";
  const minMileage = "";
  const maxMileage = "";
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
  }, [page]);

  const handlePageChange = (newPage: number) => {
    setPage(newPage);
  };

  return (
    <div>
      <header className={css.header}>
        <button className={css.button} onClick={() => {}}>
          Search
        </button>
      </header>

      {isLoading && !data && <div>Loading...</div>}

      {isSuccess && data!.cars.length > 0 ? (
        <CarsList cars={data!.cars} />
      ) : (
        isSuccess && <div>No cars found</div>
      )}
      <button
        className={css.button}
        onClick={() => {
          if (data && page < data.totalPages) {
            handlePageChange(page + 1);
          }
        }}
        disabled={isLoading || (data ? page >= data.totalPages : false)}
      >
        Load more
      </button>
    </div>
  );
};

export default CarsClient;
