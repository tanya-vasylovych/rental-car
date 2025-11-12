import css from "./Details.module.css";
import type { Car } from "../../types/cars";
import { IoLocationOutline } from "react-icons/io5";

interface CarsListProps {
  car: Car;
}

const Details = ({ car }: CarsListProps) => {
  const location = car.address.includes(",")
    ? car.address.substring(car.address.indexOf(",") + 2)
    : car.address;

  return (
    <div className={css.container}>
      <h2 className={css.title}>
        <span>{car.brand}</span> <span className={css.model}>{car.model}</span>,{" "}
        <span>{car.year}</span>
        <span className={css.id}>{`Id:${car.id.slice(0, 4)}`}</span>
      </h2>
      <p className={css.content}>
        <IoLocationOutline className={css.location} />
        <span>{location}</span>
        <span style={{ marginLeft: 16 }}>
          Mileage: {car.mileage.toLocaleString("ru-RU")} km
        </span>
      </p>
      <span className={css.price}>${car.rentalPrice}</span>
      <div>
        <p className={css.description}>{car.description}</p>
      </div>
    </div>
  );
};
export default Details;
