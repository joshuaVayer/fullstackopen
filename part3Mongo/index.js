const cors = require('cors');
const morgan = require("morgan");
const express = require("express");
const errorHandler = require("./errorHandler");

const { find, create, remove, update } = require("./mongo");

const PORT = process.env.PORT || 3001;
const app = express();


app.use(express.json());

app.use(express.static("frontend"));

app.use(cors());

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
  find().then(result => {
    res.json(result);
  });
});

app.get("/api/persons/:id", (req, res) => {
  const id = req.params.id;
  find().then(result => {
    const person = result.find(person => person.id === id);
    if (person) {
      res.json(person);
    } else {
      res.status(404).end();
    }
  });
});

// Create a new person
app.post("/api/persons", (req, res) => {
  const { name, number } = req.body;

  if (!name || !number) {
    return res.status(400).json({ error: "name or number missing" });
  }

  create({name, number}).then(result => {
    res.json(result);
  });
});

app.put("/api/persons/:id", (req, res) => {
  const id = req.params.id;
  const { name, number } = req.body;

  if (!name || !number) {
    return res.status(400).json({ error: "name or number missing" });
  }

  update(id, {name, number}).then(result => {
    res.json(result);
  });
});

// Delete a person
app.delete("/api/persons/:id", (req, res) => {
  const id = req.params.id;
  remove(id).then(() => {
    res.status(204).end();
  });
});

app.get("/info", (req, res) => {
  res.send(`<p>Phonebook has info for ${persons.length} people</p>
  <p>${new Date()}</p>`);
});

app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
