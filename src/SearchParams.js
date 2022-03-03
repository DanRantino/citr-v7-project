import { useEffect, useState } from "react";
import Results from "./Results";
import Form from "./Form";

const SearchParams = () => {
  const [pets, setPets] = useState([]);
  useEffect(() => {
    requestPets("", "", "");
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  async function requestPets(animal, location, breed) {
    const res = await fetch(
      `http://pets-v2.dev-apis.com/pets?animal=${animal}&location=${location}&breed=${breed}`
    );
    const json = await res.json();
    setPets(json.pets);
  }

  return (
    <div className="search-params">
      <Form requestPets={requestPets} />
      <Results pets={pets} />
    </div>
  );
};

export default SearchParams;
