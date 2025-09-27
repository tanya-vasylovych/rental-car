import Image from "next/image";
import type { Car } from "../../types/cars";
import css from "./CarImage.module.css";

interface CarsListProps {
  car: Car;
}

const CarImage = ({ car }: CarsListProps) => {
  return (
    <div>
      {" "}
      <Image
        src={car.img}
        alt={`${car.brand} ${car.model} ${car.year}`}
        width={401}
        height={268}
        className={css.img}
        priority={true}
      />
    </div>
  );
};

export default CarImage;
