const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 3000;

// Configura el directorio de archivos estáticos
app.use(express.static(path.join(__dirname, 'src')));

// Ruta para el archivo index.html
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'src', 'index.html'));
});

// Inicia el servidor
app.listen(port, () => {
  console.log(`Servidor iniciado en el puerto ${port}`);
});