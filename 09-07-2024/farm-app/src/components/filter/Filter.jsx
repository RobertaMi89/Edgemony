import React from "react";
import styles from "./filter.module.css";

function Filter({ filterType, handleFilterChange }) {
  return (
    <div className={styles.filterContainer}>
      <label>Filtra per tipo: </label>
      <select value={filterType} onChange={handleFilterChange}>
        <option value="">Tutti</option>
        <option value="cane">Cane 🐶</option>
        <option value="cavallo">Cavallo 🐴</option>
        <option value="mucca">Mucca 🐮</option>
        <option value="maiale">Maiale 🐷</option>
        <option value="pecora">Pecora 🐑</option>
        <option value="capra">Capra 🐐</option>
        <option value="coniglio">Coniglio 🐰</option>
        <option value="gallina">Gallina 🐔</option>
        <option value="gallo">Gallo 🐓</option>
        <option value="pulcino">Pulcino 🐤</option>
      </select>
    </div>
  );
}

export default Filter;
