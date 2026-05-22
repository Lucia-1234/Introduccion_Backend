# Implementación de un Servidor Backend Básico
## Análisis Práctico (Componente Reflexivo)


## Proceso de Configuración:
### ¿Qué pasos realizaste desde la creación de la carpeta hasta la ejecución del servidor?
El paso a paso que realice fue: 
1. Crear una carpeta llamada api
2. Verifique que node estuviera instalado en el sistema, verifique la version
  ```
    node -v
  ```
3. Verifique que npm estuviera instalado y actualice a la ultiva version 
  ```
    npm -v
    npm install -g npm
  ```
4. Se inicializo el proyecto
  ```
    npm init -y
  ```
5. Instalacion de librerias
  ```
    npm install 
  ```
6. Instalacion de Express
  ```
    npm install express
  ```
7. Cree el archivo index. js 
8. Configuracion del servidor 

    • Importa el framework.

    • Crea una instancia de aplicación.

    • Define un puerto.

    • Escucha solicitudes.
  ```
    const express = require('express')
    const app = express()
    const port = 3000

    app.get('/', (req, res) => {
      res.send('Hello World!')
    })

    app.listen(port, () => {
      console.log(`Example app listening on port ${port}`)
    })
  ```
9. Se cambio el scrip en packaje.json para poder ejecutar
  ```
    npm run dev
  ```

10. Se generaron las rutas 

    • / → Mensaje de bienvenida.

    • /saludo → Respuesta personalizada.

    • /usuarios → Información de usuarios.


### ¿Qué función cumple el archivo package.json?

La funcion del archivo package.json ayuda a la configuracion del proyecto, contiene información como nombre, versión, autor y licencia, gestiona dependencias para que el proyecto funcione y se pueda instalar con npm install, nos permite modificar comandos como "dev", "start", "test", que se ejecutan con npm run.


### ¿Qué ocurre al ejecutar npm install?

Al ejecutar npm install se descargan las librerías necesarias desde el registro oficial de npm, instala físicamente las dependencias en la carpeta node_modules, que contiene todo el código de terceros que tu proyecto necesita y genera el archivo package-lock.json creando o actualizando este archivo para registrar las versiones exactas de cada dependencia, garantizando que el proyecto sea reproducible en otros entornos.


## Compresion del Servidor
### ¿Qué significa que el servidor esté “escuchando” en un puerto?

Significa que el servidor ha abierto ese puerto y está esperando solicitudes de clientes (navegadores, aplicaciones) cuando un cliente envía una petición a ese puerto, el servidor la recibe y la procesa.

### ¿Qué sucede internamente cuando accedes a http://localhost:3000/?

El navegador interpreta localhost como la dirección IP 127.0.0.1, que apunta a tu propio equipo,  el navegador intenta establecer comunicación con el puerto 3000. Si el servidor está “escuchando” ahí, acepta la conexión, el navegador envía una petición GET a la ruta / del servidor,el navegador interpreta la respuesta y la muestra como página web.


## Analisis de Rutas
### ¿Qué diferencia existe entre cada ruta creada?

La diferencia de las rutas es que cada una muestra informacion diferente dependiendo de lo que le corresponda 

### ¿Qué papel cumplen los parámetros request y response?

  Request: Contiene toda la información que el cliente envía al servidor.
  Response: Permite al servidor enviar una respuesta al cliente

## Reflexión Técnica 
### ¿Qué dificultades encontraste?

Gracias a la especifica explicacion del instructor y el paso a paso definido pude lograr completra la actividad sin ningun inconveniente 

### ¿Qué aprendiste que no habías comprendido completamente en la parte teórica?

Aprendi a inplemetar un Framework de manera facil y a comprende un poco más el funcionamiento de npm 

### ¿Por qué es importante estructurar bien un proyecto desde el inicio?

Es muy importante estructurar bien un proyecto desde el inicio para poder escalarlo evitando frustracciones y ahorrando trabajo 