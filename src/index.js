//Importar el servidor

import app from './server.js'

app.listen(app.get('port'),()=>{
    console.log(`Server ok on http://localhost:${app.get('port')}`);
})


//Importar la conexión a la base de datos
import connection from './database.js';

connection()