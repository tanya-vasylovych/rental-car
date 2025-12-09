import Link from "next/link";
import css from "./Header.module.css";

import Logo from "../Logo/Logo";

const Header = () => {
  return (
    <header className={css.header}>
      <Link href="/" aria-label="Home" className={css.logo}>
        <Logo width={104} height={16} />
      </Link>
      <nav aria-label="Main Navigation">
        <ul className={css.navigation}>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/catalog/filter/">Catalog</Link>
          </li>
          <li>
            <Link href="/catalog/favorites/">Heart</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
