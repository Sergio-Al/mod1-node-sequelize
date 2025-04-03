# Proyecto Node con Sequelize y PostgreSQL en Docker

Ejercicio para la maestria.Este proyecto utiliza Node.js junto con Sequelize para gestionar una base de datos PostgreSQL que se ejecuta en un contenedor Docker.

## Requisitos Previos

- Node.js (v12 o superior)
- npm o yarn
- Docker y Docker Compose

## Instalación

1. **Clonar el repositorio**

  Abre una terminal y clona el repositorio:
  ```
  git clone https://github.com/Sergio-Al/mod1-node-sequelize.git
  cd mod1-node-sequelize
  ```

2. **Instalar dependencias de Node.js**

  Instala las dependencias con npm:
  ```
  npm install
  ```
  O usando yarn:
  ```
  yarn install
  ```

3. **Configurar la base de datos en Docker**

  Crea un archivo `docker-compose.yml` en la raíz del proyecto con el siguiente contenido:

  ```yaml
  version: '3'
  services:
    db:
      image: postgres:14.4
      restart: always
      ports:
        - "5432:5432"
      environment: 
        POSTGRES_PASSWORD: ${DB_PASSWORD}
        POSTGRES_DB: ${DB_NAME}
      container_name: tiendaDB
      volumes:
        - ./postgres:/var/lib/postgresql/data
  ```

  Ajusta los valores de `DB_PASSWORD` y `DB_NAME` según tus necesidades.

1. **Iniciar el contenedor Docker**

  Dentro del directorio del proyecto, ejecuta:
  ```
  docker-compose up -d
  ```

5. **Configurar Sequelize**

  Crea o edita el archivo de configuración de Sequelize (`config/config.json` o `config/config.js`) para que coincida con la configuración de PostgreSQL:

  ```js
  {
    development: {
    username: process.env.DB_USER || "postgres",
    password: process.env.DB_PASSWORD || "MySecretPassword",
    database: process.env.DB_NAME || "mi_base_de_datos",
    host: process.env.DB_HOST || "127.0.0.1",
    port: process.env.DB_PORT || 5432,
    dialect: "postgres"
    },
  }
  ```

6. Generar un archivo  `.env` con tus variables de entorno
  ```bash
  cp .env.example .env
  ```

7. **Ejecutar Migraciones**

  Si utilizas migraciones, ejecútalas con:
  ```
  npx sequelize-cli db:migrate
  ```

## Uso

- Para iniciar el servidor, ejecuta:
  ```
  npm start
  ```
  o
  ```
  yarn start
  ```
  
- Asegúrate de que el contenedor de Docker esté corriendo para que la conexión a la base de datos funcione correctamente.

## Despliegue

Para detener y remover los contenedores, ejecuta:
```
docker-compose down
```
