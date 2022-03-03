import useBreedList from "./useBreedList";
import { useState } from "react";
import { useContext } from "react";
import ThemeContext from "./ThemeContext";

const ANIMALS = ["bird", "cat", "dog", "rabbit", "reptile"];

// TODO: refactor ./SearchParams.js to a new component
const Form = ({ requestPets }) => {
  const [theme, setTheme] = useContext(ThemeContext);

  const [location, updateLocation] = useState("");
  const [animal, updateAnimal] = useState("");
  const [breed, updateBreed] = useState("");
  const [breeds] = useBreedList(animal);

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        requestPets(animal, location, breed);
      }}
    >
      <label htmlFor="location">
        Location
        <input
          id="location"
          value={location}
          placeholder="Location"
          onChange={(e) => updateLocation(e.target.value)}
        />
      </label>
      <label htmlFor="animal">
        Animal
        <select
          id="animal"
          value={animal}
          onChange={(e) => {
            updateAnimal(e.target.value);
            updateBreed("");
          }}
          onBlur={(e) => {
            updateAnimal(e.target.value);
            updateBreed("");
          }}
        >
          <option />
          {ANIMALS.map((animal) => (
            <option key={animal} value={animal}>
              {animal}
            </option>
          ))}
        </select>
      </label>
      <label htmlFor="breed">
        Breed
        <select
          disabled={!breeds.length}
          id="breed"
          value={breed}
          onChange={(e) => updateBreed(e.target.value)}
          onBlur={(e) => updateBreed(e.target.value)}
        >
          <option />
          {breeds.map((breed) => (
            <option key={breed} value={breed}>
              {breed}
            </option>
          ))}
        </select>
      </label>
      <label htmlFor="theme">
        Theme
        <select
          value={theme}
          onChange={(e) => setTheme(e.target.value)}
          onBlur={(e) => setTheme(e.target.value)}
        >
          <option value="peru">peru</option>
          <option value="darkblue">darkblue</option>
          <option value="red">red</option>
          <option value="chartreuse">chartreuse</option>
          <option value="tomato">tomato</option>
        </select>
      </label>
      <button style={{ backgroundColor: theme }}>Submit</button>
    </form>
  );
};

export default Form;
