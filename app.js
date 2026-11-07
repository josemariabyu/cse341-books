import express from 'express';

const app = express();

// Middleware para procesar cuerpos de solicitudes en formato JSON
app.use(express.json());

// Ruta raíz que responde un estado 200 y un mensaje JSON
app.get('/', (req, res) => {
    return res.status(200).json({ message: 'Server is running' });
});

export default app;
