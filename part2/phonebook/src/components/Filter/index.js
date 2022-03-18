import { useEffect, useState } from "react";

const Filter = ({ persons, setPersons }) => {
  const [search, setSearch] = useState('');

  const handleSearch = (event) => {
    setSearch(event.target.value);
  };

  useEffect(() => {
    const filteredPersons = persons.filter(
      person => person.name.toLowerCase().includes(search.toLowerCase())
    );
    setPersons(filteredPersons);
  }, [search]);

  return (
    <div>
      filter shown with: <input value={search} onChange={handleSearch} />
    </div>
  );
}

export default Filter;