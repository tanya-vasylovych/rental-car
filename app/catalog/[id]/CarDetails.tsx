"use client";
import { fetchCarById } from "@/lib/api";
import { useParams } from "next/navigation";
import css from "./CarDetails.module.css";
import { useState, useEffect } from "react";
import type { Car } from "@/types/cars";
import CarImage from "@/components/CarImage/CarImage";
import CarForm from "@/components/CarForm/CarForm";
import Details from "@/components/Details/Details";
import CarInfo from "@/components/CarInfo/CarInfo";
import CarLoader from "@/components/CarLoader/CarLoader";

const CarDetails = () => {
  const { id } = useParams<{ id: string }>();
  const [car, setCar] = useState<Car | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    fetchCarById(id)
      .then((data) => {
        setCar(data);
        setError(null);
      })
      .catch((err) => {
        setError(err.message || "Error fetching car details");
        setCar(null);
      })

      .finally(() => setIsLoading(false));
  }, [id]);
  return (
    <>
      {car && (
        <div className={css.container}>
          <div>
            <CarImage car={car} />
            <CarForm />
          </div>
          <div>
            <Details car={car} />
            <CarInfo car={car} />
          </div>
        </div>
      )}
      {isLoading && <CarLoader />}
      {error && !car && <p>Something went wrong.</p>}
    </>
  );
};

export default CarDetails;
