Ejecutar:
npm install express
node index.js


La función de este proyecto es devolver la hora actual y la fecha completa en distintos formatos a través de rutas. 

Para poder ejecutar el proyecto se necesita tener instalado Node.js y npm. Se puede verificar ejecutando en la terminal los comandos node -v y npm -v.

Para instalar y ejecutar el proyecto seguir los siguientes pasos:

Clonar el repositorio con el comando: git clone https://github.com/nschnaider/TP-5---Primer-servidor-con-Node-y-Express.git
Ingresar a la carpeta del proyecto: cd horaexpress
Instalar las dependencias: npm install
Ejecutar el servidor: npm start

Si el servidor ejecuta, en la consola va a aparecer el mensaje indicando que se está corriendo en http://localhost:3000


El servidor tiene las siguientes rutas:

/
Devuelve un mensaje de bienvenida.

/hora
Devuelve la hora actual en formato HH:MM:SS.

/fecha-completa
Devuelve la fecha y la hora completa en texto, por ejemplo: sábado 5 de abril de 2025, 16:24:51.

Si se ingresa a una ruta que no existe, el servidor va a responder con un mensaje de error 404 indicando que la ruta no se encontró.

El  proyecto está organizado así:

src/app.js contiene la configuración de Express y las rutas del servidor
src/time.js contiene la función que obtiene y formatea la hora actual
index.js es el archivo principal que inicia el servidor
package.json contiene la configuración del proyecto y sus dependencias