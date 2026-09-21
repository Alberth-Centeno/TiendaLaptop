# Catálogo de Computadoras - Backend API

Este es el backend del Producto Mínimo Viable (PMV) para un catálogo de venta de computadoras. Está construido con **NestJS** y utiliza **PostgreSQL** como base de datos, con autenticación basada en **JWT** para proteger los endpoints de administración.

## 🚀 Tecnologías Utilizadas

- **Framework:** NestJS
- **Base de Datos:** PostgreSQL
- **ORM:** TypeORM
- **Autenticación:** Passport & JWT (JSON Web Tokens)
- **Encriptación:** Bcrypt
- **Documentación:** Swagger (OpenAPI)

## 📋 Requisitos Previos

- [Node.js](https://nodejs.org/) instalado.
- [PostgreSQL](https://www.postgresql.org/) corriendo localmente.
- Una base de datos creada en Postgres (ej. `catalogo_db`).

## ⚙️ Configuración e Instalación

1. Clona o descarga este repositorio y navega a la carpeta del proyecto.
2. Instala las dependencias:
   ```bash
   npm install

La API cuenta con una interfaz visual para probar todos los endpoints sin necesidad de Postman. Con el servidor corriendo, visita:

👉 http://localhost:3000/api/docs

autores : Alberth Centeno