import { useState } from "react";
import css from "./Filter.module.css";
import { FaChevronDown } from "react-icons/fa";

const brands = [
  "Aston Martin",
  "Audi",
  "BMW",
  "Bentley",
  "Buick",
  "Chevrolet",
  "Chrysler",
  "GMC",
  "HUMMER",
  "Hyundai",
  "Kia",
  "Lamborghini",
  "Land Rover",
  "Lincoln",
  "MINI",
  "Mercedes-Benz",
  "Mitsubishi",
  "Nissan",
  "Pontiac",
  "Subaru",
  "Volvo",
];

const generatePrices = (start: number, end: number, step: number): number[] => {
  const prices = [];
  for (let i = start; i <= end; i += step) {
    prices.push(i);
  }
  return prices;
};

const prices = generatePrices(30, 120, 10);

const MileageRangeInput = ({
  from,
  to,
  onFromChange,
  onToChange,
}: {
  from: string;
  to: string;
  onFromChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onToChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) => (
  <div className={css.mileageRangeContainer}>
    <input
      type="number"
      placeholder="From"
      value={from}
      onChange={onFromChange}
      className={css.mileageInput}
      min={0}
    />
    <span className={css.mileageSeparator}>|</span>
    <input
      type="number"
      placeholder="To"
      value={to}
      onChange={onToChange}
      className={css.mileageInput}
      min={0}
    />
  </div>
);

const Filter = () => {
  const [selectedBrand, setSelectedBrand] = useState("");
  const [selectedPrice, setSelectedPrice] = useState("");
  const [mileageFrom, setMileageFrom] = useState("");
  const [mileageTo, setMileageTo] = useState("");

  const handleBrandChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedBrand(e.target.value);
  };

  const handlePriceChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedPrice(e.target.value);
  };

  return (
    <div className={css.container}>
      <div className={css.selectWrapper}>
        <select
          className={css.select}
          value={selectedBrand}
          onChange={handleBrandChange}
        >
          <option value="">Select a brand</option>
          {brands.map((brand) => (
            <option key={brand} value={brand}>
              {brand}
            </option>
          ))}
        </select>
        <FaChevronDown className={css.selectIcon} />
      </div>

      <div className={css.selectWrapper}>
        <select
          className={css.select}
          value={selectedPrice}
          onChange={handlePriceChange}
        >
          <option value="">Select a price</option>
          {prices.map((price) => (
            <option key={price} value={price}>
              {price}
            </option>
          ))}
        </select>
        <FaChevronDown className={css.selectIcon} />
      </div>
      <MileageRangeInput
        from={mileageFrom}
        to={mileageTo}
        onFromChange={(e) => setMileageFrom(e.target.value)}
        onToChange={(e) => setMileageTo(e.target.value)}
      />

      <button
        className={css.search}
        onClick={() =>
          console.log({
            selectedBrand,
            selectedPrice,
            mileageFrom,
            mileageTo,
          })
        }
      >
        Search
      </button>
    </div>
  );
};

export default Filter;
