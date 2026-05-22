const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.json({
    "Mensaje":"Hola mundo, bienvenido al sistema",
  });
});

app.get('/aprendices', (req, res) => {
  res.json([
    {
      "nombre" : "Lucia Lizcano",
      "mensaje descriptivo" : "Mensaje descriptivo",
      "id": 1
    },

    {
      "nombre" : "Eileen Mendoza",
      "mensaje descriptivo" : "Mensaje descriptivo",
      "id": 2
    },

    {
      "nombre" : "Wendy Vera",
      "mensaje descriptivo" : "Mensaje descriptivo",
      "id": 3
    },

    {
      "nombre" : "Camilo Lizcano",
      "mensaje descriptivo" : "Mensaje descriptivo",
      "id": 4
    },
  ]);
});

app.get('/programas', (req, res) => {
  res.json([
    {
      "nombre" : "Analisis y Desarrollo de Software",
      "nivel" : "Tecnologo",
      "id": 1
    },

    {
      "nombre" : "Contenidos digitales",
      "nivel" : "Tecnico",
      "id": 2
    },

    {
      "nombre" : "HESQ",
      "nivel" : "Tecnologo",
      "id": 3
    },
  ]);
});

app.listen(port, () => {
  console.log(`Tengo un servidor que si funciona, y nos escucha por un puerto que es ===> ${port} <===`)
})