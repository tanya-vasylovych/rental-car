import { Car } from "@/types/cars";
import axios from "axios";

export const instance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_RENTAL_CAR_API,
});

interface FetchCarsResponse {
  cars: Car[];
  totalPages: number;
}

export async function fetchCars(
  brand: string,
  rentalPrice: string,
  minMileage: string,
  maxMileage: string,
  limit: string,
  page: string
): Promise<FetchCarsResponse> {
  const params = {
    page,
    brand,
    perPage: limit,
    rentalPrice,
    minMileage,
    maxMileage,
  };

  console.log("Fetching cars with params:", params);

  const { data } = await instance.get<FetchCarsResponse>("/cars", {
    params,
  });
  return data;
}

export async function fetchCarById(id: string): Promise<Car> {
  const { data } = await instance.get<Car>(`/cars/${id}`);
  return data;
}
export async function fetchBrands(): Promise<string[]> {
  const { data } = await instance.get<string[]>("/brands");
  return data;
}
