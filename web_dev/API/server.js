// server.js
const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 3001; // Angular usa el puerto 4200

// === Middlewares ===
// Permite que la API reciba peticiones desde otros orígenes (como tu app de Angular)
app.use(cors());
// Permite que la API entienda datos enviados en formato JSON
app.use(express.json());

// === Base de Datos en Memoria (un simple array) ===
let skills = [
  { id: 1, name: 'Angular', level: 90, category: 'frontend' },
  { id: 2, name: 'Node.js / Express', level: 75, category: 'backend' },
  { id: 3, name: 'SQL', level: 80, category: 'backend' },
  { id: 4, name: 'Docker', level: 60, category: 'devops' }
];
let nextId = 5;

// === Rutas (Endpoints) ===

// 1. GET /skills - Obtener todas las habilidades
app.get('/skills', (req, res) => {
  res.json(skills);
});

// 2. GET /skills/:id - Obtener una habilidad por su ID
app.get('/skills/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const skill = skills.find(s => s.id === id);

  if (skill) {
    res.json(skill);
  } else {
    // Validación (404 Not Found)
    res.status(404).json({ message: 'Habilidad no encontrada' });
  }
});

// 3. POST /skills - Crear una nueva habilidad
app.post('/skills', (req, res) => {
  const { name, level, category } = req.body;

  // Validación (422 Unprocessable Entity)
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
  // Devolvemos el nuevo recurso con el código 201 (Created)
  res.status(201).json(newSkill);
});

// 4. PATCH /skills/:id - Actualizar una habilidad existente
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

// 5. DELETE /skills/:id - Eliminar una habilidad
app.delete('/skills/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const skillIndex = skills.findIndex(s => s.id === id);

  if (skillIndex === -1) {
    return res.status(404).json({ message: 'Habilidad no encontrada' });
  }

  skills.splice(skillIndex, 1);
  // Devolver el código 204 (No Content) para indicar éxito sin cuerpo de respuesta
  res.status(204).send();
});


// === Iniciar el servidor ===
app.listen(PORT, () => {
  console.log(`Servidor de API escuchando en http://localhost:${PORT}`);
});