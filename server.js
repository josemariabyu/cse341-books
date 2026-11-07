import app from './app.js';

const PORT = process.env.PORT;

// Verificación de seguridad para asegurarse de que el archivo .env se cargó correctamente
if (!PORT) {
    throw new Error('PORT is not defined. Make sure your local npm scripts reference the .env file with --env-file=.env, or define PORT in your hosted environment settings.');
}

// Inicialización del servidor en el puerto especificado
app.listen(PORT, () => {
    console.log(`Server listening at http://127.0.0.1:${PORT}`);
});
