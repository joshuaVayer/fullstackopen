import { useState, useEffect } from 'react'
import Filter from './components/Filter'

const App = () => {
  const [name, setName] = useState('')
  const [number, setNumber] = useState('')

  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ]);

  useEffect(() => {}, []);

  const handleAddPerson = () => {
    if (!name || !number) {
      alert('Name and number are required');
      return;
    }

    const newPerson = {
      name: name,
      number: number,
    };

    const isDuplicate = persons.some(person => person.name === newPerson.name);

    if (isDuplicate) {
      alert(`${newPerson.name} is already added to phonebook`);
      return;
    }

    setPersons(persons.concat(newPerson));
    setName('');
    setNumber('');
  };

  return (
    <div>
      <h2>Phonebook</h2>
        <Filter persons={persons} setPersons={setPersons} />
      <form>
        <div>
          <div>
            name: <input type="text" value={name} onChange={event => setName(event.target.value)} />
          </div>
          <div>
            number: <input type="text" value={number} onChange={event => setNumber(event.target.value)} />
          </div>
        </div>
        <div>
        </div>
      </form>
      <button onClick={handleAddPerson}>add</button>
      <h2>Numbers</h2>
      {persons.map(person =>
        <p key={person.name}>{person.name} - {person.number}</p>
      )}
    </div>
  )
}

export default App