"use client";
import css from "./page.module.css";

export default function Home() {
  const handleClick = () => {
    window.location.href = "/catalog/filter";
  };
  return (
    <div>
      <main>
        <div className={css.container}>
          <div className={css.text}>
            <div>
              <h1 className={css.title}>Find your perfect rental car</h1>
              <p className={css.description}>
                Reliable and budget-friendly rentals for any journey
              </p>
            </div>

            <button className={css.bttn} onClick={handleClick}>
              View Catalog
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}
