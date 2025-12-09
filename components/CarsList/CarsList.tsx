import type { Car } from "../../types/cars";
import css from "./CarList.module.css";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { FiHeart } from "react-icons/fi";
import { useFavorites } from "../Favorites/Favorites";

interface CarsListProps {
  cars: Car[];
}

const CarsList = ({ cars }: CarsListProps) => {
  const router = useRouter();
  const { favorites, toggleFavorite } = useFavorites();

  return (
    <ul className={css.list}>
      {cars.map((car) => {
        const parts = car.address.split(",").map((part: string) => part.trim());
        const shortAddress = parts.slice(-2).join(" | ");
        const isFavorite = favorites.has(car.id);

        return (
          <li key={car.id} className={css.listItem}>
            <div className={css.imageWrapper}>
              <Image
                src={car.img}
                alt={`${car.brand} ${car.model} ${car.year}`}
                width={401}
                height={268}
                className={css.img}
                priority={true}
              />
              <FiHeart
                className={css.heartIcon}
                fill={isFavorite ? "#0b44cd" : "none"}
                stroke={isFavorite ? "#0b44cd" : "#fff"}
                onClick={() => toggleFavorite(car.id)}
              />
            </div>
            <h2 className={css.title}>
              <span className={css.left}>
                <span>{car.brand}</span>{" "}
                <span className={css.model}>{car.model}</span>,{" "}
                <span>{car.year}</span>
              </span>
              <span>${car.rentalPrice}</span>
            </h2>
            <p className={css.content}>
              {`${shortAddress} | ${car.rentalCompany} |\n ${
                car.type
              } | ${car.mileage.toLocaleString("ru-RU")} km`}
            </p>
            <div>
              <button
                className={css.button}
                onClick={() => router.push(`/catalog/${car.id}`)}
              >
                Read more
              </button>
            </div>
          </li>
        );
      })}
    </ul>
  );
};

export default CarsList;
