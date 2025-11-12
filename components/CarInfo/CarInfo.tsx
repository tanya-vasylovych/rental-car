import css from "./CarInfo.module.css";
import type { Car } from "../../types/cars";
import { IoCheckmarkCircleOutline } from "react-icons/io5";
import { BsCalendar2Week, BsCarFront, BsFuelPump } from "react-icons/bs";
import { HiOutlineCog8Tooth } from "react-icons/hi2";

interface CarsListProps {
  car: Car;
}

const CarInfo = ({ car }: CarsListProps) => {
  return (
    <div className={css.container}>
      <div>
        <h3 className={css.title}>Rental Conditions: </h3>

        <ul className={css.list}>
          {Array.isArray(car.rentalConditions)
            ? car.rentalConditions.map((item, index) => (
                <li className={css.item} key={index}>
                  <IoCheckmarkCircleOutline className={css.checkmark} />
                  {item}
                </li>
              ))
            : car.rentalConditions}
        </ul>
      </div>
      <div>
        <h3 className={css.title}>Car Specifications: </h3>
        <ul className={css.list}>
          {" "}
          <li className={css.item}>
            <BsCalendar2Week className={css.checkmark} />
            {`Year: ${car.year}`}
          </li>
          <li className={css.item}>
            <BsCarFront className={css.checkmark} />
            {`Type: ${car.type}`}
          </li>
          <li className={css.item}>
            <BsFuelPump className={css.checkmark} />
            {`Fuel Consumption: ${car.fuelConsumption}`}
          </li>
          <li className={css.item}>
            <HiOutlineCog8Tooth className={css.checkmark} />
            {`Engine Size: ${car.engineSize}`}
          </li>
        </ul>
      </div>
      <div>
        <h3 className={css.title}>Accessories and functionalities: </h3>
        <ul className={css.list}>
          {((Array.isArray(car.accessories) ? car.accessories : []) as string[])
            .concat(
              Array.isArray(car.functionalities) ? car.functionalities : []
            )
            .map((item, index) => (
              <li className={css.item} key={index}>
                <IoCheckmarkCircleOutline className={css.checkmark} />
                {item}
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
};

export default CarInfo;
