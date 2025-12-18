import React from "react";
import css from "./CarLoader.module.css";

function CarLoader() {
  return (
    <div className={css.loader}>
      <div className={css.road}>
        <div className={css.car}></div>
      </div>
    </div>
  );
}

export default CarLoader;
