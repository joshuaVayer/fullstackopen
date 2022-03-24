const fs = require("fs");
const morgan = require("morgan");
const express = require("express");
const persons = require("./data/persons");
const { json } = require("express");

const PORT = 3001;
const app = express();

app.use(express.json());

app.use(morgan((tokens, req, res) => [
    tokens.method(req, res),
    tokens.url(req, res),
    tokens.status(req, res),
    tokens.res(req, res, 'content-length'), '-',
    tokens['response-time'](req, res), 'ms',
    JSON.stringify(req.body)
  ].join(' ')
));

app.get("/api/persons", (req, res) => {
  res.json(persons);
});

app.get("/api/persons/:id", (req, res) => {
  const id = Number(req.params.id);
  const person = persons.find(person => person.id === id);
  res.json(person);
});

// Create a new person
app.post("/api/persons", (req, res) => {
  const { body } = req;
  const { name, number, id } = body;

  if (!name || !number) {
    return res.status(400).json({ error: "name or number missing" });
  }

  const existingId = persons.find(person => person.id === id);
  if (existingId) {
    return res.status(400).json({ error: "id must be unique" });
  }

  const existingName = persons.find(person => person.name === name);
  if (existingName) {
    return res.status(400).json({ error: "name must be unique" });
  }

  const newPerson = {
    name,
    number,
    id
  };

  if (!newPerson.id) {
    newPerson.id =  Math.floor(Math.random() * 100000);
    console.log(`New id was assigned: ${newPerson.id}`);
  }

  const newDb = [...persons, newPerson];
  let data = JSON.stringify(newDb);
  fs.writeFileSync('./data/persons.json', data);

  res.json(newPerson);

});

// Delete a person
app.delete("/api/persons/:id", (req, res) => {
  const id = Number(req.params.id);
  const person = persons.find(person => person.id === id);
  if (!person) {
    return res.status(404).json({ error: "person not found" });
  }

  const newDb = persons.filter(person => person.id !== id);
  let data = JSON.stringify(newDb);
  fs.writeFileSync('./data/persons.json', data);

  res.status(204).end();
});

app.get("/info", (req, res) => {
  res.send(`<p>Phonebook has info for ${persons.length} people</p>
  <p>${new Date()}</p>`);
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});