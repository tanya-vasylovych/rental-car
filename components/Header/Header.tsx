import Link from "next/link";
import css from "./Header.module.css";
import Catalog from "../Catalog/Catalog";

const Header = () => {
  return (
    <header className={css.header}>
      <Link href="/" aria-label="Home">
        RentalCar
      </Link>
      <nav aria-label="Main Navigation">
        <ul className={css.navigation}>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Catalog />
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
