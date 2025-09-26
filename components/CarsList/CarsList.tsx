import type { Car } from "../../types/cars";
import css from "./CarList.module.css";
import Image from "next/image";

interface CarsListProps {
  cars: Car[];
}

const CarsList = ({ cars }: CarsListProps) => {
  return (
    <ul className={css.list}>
      {cars.map((car) => (
        <li key={car.id} className={css.listItem}>
          <Image
            src={car.img}
            alt={`${car.brand} ${car.model} ${car.year}`}
            width={401}
            height={268}
            className={css.img}
            priority={true}
          />
          <h2
            className={css.title}
          >{`${car.brand} ${car.model} ${car.year}`}</h2>
          <p className={css.content}>{car.description}</p>
          <div>
            <button className={css.button} onClick={() => car.id}>
              Read more
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default CarsList;
