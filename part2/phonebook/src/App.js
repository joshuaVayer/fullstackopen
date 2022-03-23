import { useState, useEffect } from 'react'
import Filter from './components/Filter'

const App = () => {
  const [name, setName] = useState('')
  const [number, setNumber] = useState('')

  const [persons, setPersons] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3001/persons')
      .then(response => {
        if (response.status !== 200) {
          console.log('Looks like there was a problem. Status Code: ' +
            response.status);
          return;
        }

        // Examine the text in the response
        response.json().then(function(data) {
          setPersons(data);
        });
      }).catch(error => {
        console.log(error);
      });
  }, []);

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