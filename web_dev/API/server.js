const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 3001;

app.use(cors());
app.use(express.json());

let skills = [
  { id: 1, name: 'Angular', level: 90, category: 'frontend' },
  { id: 2, name: 'Node.js / Express', level: 75, category: 'backend' },
  { id: 3, name: 'SQL', level: 80, category: 'backend' },
  { id: 4, name: 'Docker', level: 60, category: 'devops' }
];
let nextId = 5;

app.get('/skills', (req, res) => {
  res.json(skills);
});

app.get('/skills/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const skill = skills.find(s => s.id === id);

  if (skill) {
    res.json(skill);
  } else {
    res.status(404).json({ message: 'Habilidad no encontrada' });
  }
});

app.post('/skills', (req, res) => {
  const { name, level, category } = req.body;

  if (!name || !level) {
    return res.status(422).json({ message: 'El nombre y el nivel son requeridos.' });
  }

  const newSkill = {
    id: nextId++,
    name,
    level: parseInt(level),
    category: category || 'general'
  };

  skills.push(newSkill);
  res.status(201).json(newSkill);
});

app.patch('/skills/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const skillIndex = skills.findIndex(s => s.id === id);

  if (skillIndex === -1) {
    return res.status(404).json({ message: 'Habilidad no encontrada' });
  }

  const originalSkill = skills[skillIndex];
  const updatedSkill = { ...originalSkill, ...req.body };
  skills[skillIndex] = updatedSkill;

  res.json(updatedSkill);
});

app.delete('/skills/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const skillIndex = skills.findIndex(s => s.id === id);

  if (skillIndex === -1) {
    return res.status(404).json({ message: 'Habilidad no encontrada' });
  }

  skills.splice(skillIndex, 1);
  res.status(204).send();
});

app.listen(PORT, () => {
  console.log(`Servidor de API escuchando en http://localhost:${PORT}`);
});
