import { useState } from "react";
import styles from "./form.module.css";
import CardAnimal from "../animal/CardAnimal.jsx";
import Filter from "../filter/Filter.jsx";

function Form() {
  const [animalName, setAnimalName] = useState("");
  const [animalType, setAnimalType] = useState("");
  const [animals, setAnimals] = useState([]);
  const [filterType, setFilterType] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (animalName && animalType) {
      setAnimals([...animals, { name: animalName, type: animalType }]);
      setAnimalName("");
      setAnimalType("");
    }
  };

  const handleFilterChange = (e) => {
    setFilterType(e.target.value);
  };

  const handleDelete = (name) => {
    setAnimals(animals.filter((animal) => animal.name !== name));
  };

  const filteredAnimals = filterType
    ? animals.filter((animal) => animal.type === filterType)
    : animals;

  return (
    <div>
      <form className={styles.container} onSubmit={handleSubmit}>
        <div className={styles.brandLogo}></div>
        <div className={styles.brandTitle}>FARMER</div>
        <div className={styles.inputs}>
          <label>NOME ANIMALE</label>
          <input
            type="text"
            placeholder="Animal name"
            value={animalName}
            onChange={(e) => setAnimalName(e.target.value)}
          />
          <label>TIPO</label>
          <select
            value={animalType}
            onChange={(e) => setAnimalType(e.target.value)}
          >
            <option value="">--</option>
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
          <button type="submit">SUBMIT</button>
        </div>
      </form>
      <Filter filterType={filterType} handleFilterChange={handleFilterChange} />
      <div>
        {filteredAnimals.map((animal, index) => (
          <CardAnimal
            key={index}
            name={animal.name}
            type={animal.type}
            onDelete={handleDelete}
          />
        ))}
      </div>
    </div>
  );
}

export default Form;
