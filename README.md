# grupo_wawiweb_backend

## Como levantar la base de datos:

Para poder probar lo que se lleva hasta la E2, se debe levantar la base de datos calendour_db_development mediante el comando createdb.
Toda interacción con la base de datos fue hecha mediante Sequelize, usando además Koa para tener distintos middlewares y poder probar la aplicación con sus distintos métodos. Además, accedemos a los datos mediante un usuario creado para interactuar con la aplicación el cual es opcional, llamado calendour_user.

Para tener una instancia de user cualquiera y un admin (OBLIGATORIO PARA FEEDBACK) se recomienda correr yarn seeds, ya que esto agregará estos dos que se pueden visualizar en el seeder de usuarios. Para ver las contraseñas para acceder ir a ese archivo.


Para poder correr todo bien es necesario crear un archivo .env con las siguientes definiciones:

DB_USERNAME = calendour_user
DB_PASSWORD = michischispop 
DB_NAME = calendour_db
DB_HOST = "localhost"
JWT_ALGORITHM = "HS256"
JWT_EXPIRATION_SECONDS = 86400
JWT_SECRET = "michispop"

Con lo que se entrega en el github, además de correr yarn para instalar todas las dependencias necesarias, quizás sea necesario realizar migraciones para poder probar las cosas, lo cual lo puedes hacer con yarn db:migrate, el cual usa un script para correr sequelize cli y poder realizar las migraciones.

Finalmente se debe correr yarn dev, el cual también es un script para correr nodemon el archivo index.js y ya estarás escuchando en el puerto 3000 para poder realizar las operaciones que quieras. En caso de usar postman, se recomienda crear la base de datos antes de probar para poder realizar los distintas operaciones CRUD.

Las dependencias para la API más importantes son de koa:
"koa": "^2.14.2",
"koa-body": "^6.0.1",
"koa-cors2": "^0.0.1",
"koa-logger": "^3.2.1",
"koa-router": "^11.0.2",
Donde es de suma importancia koa-cors, debido a que es una dependencia no vista en cápsula que sirvió para poder mandar datos entre frontend y backend.
Nuevamente, todas ya están en el package.json, por lo que solamente es necesario realizar un yarn para traer al computador local los paquetes.
Por otro lado, para la funcionalidad de la aplicación se usó de react-modal y de sus respectivas dependencias, además del uso de Bootstrap para poder usar distintos features.

## Documentación de la API:
https://uccl0-my.sharepoint.com/:w:/g/personal/dafne_valdivia_uc_cl/ESpA0gApmApOoSMLkB58LfsBmGHtUhwTeEteeIkAR9r6tw?e=Dvjuac