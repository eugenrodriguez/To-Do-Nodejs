const express = require('express');
const sequelize = require('./config/dbConfig'); // Importa la configuración de la base de datos
const todoRoutes = require('./routes/TodoRoutes');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use('/todos', todoRoutes);

sequelize
    .authenticate()
    .then(() => {
        console.log("Conectado a la base de datos.");
        return sequelize.sync(); // Sincroniza modelos con la base de datos
    })
    .then(() => {
        app.listen(PORT, () => {
            console.log(`Servidor corriendo en el puerto ${PORT}`);
        });
    })
    .catch((error) => {
        console.error("Error al conectar con la base de datos:", error);
    });
