T# Gestor de Productos - Aplicacion Full Stack

## Instrucciones para ejecutar

### 1. Instalar dependencias
```
cd backend
npm install
```

### 2. Crear archivo .env
Copia el contenido de .env.example a un archivo .env y rellena tus valores:
```
MONGO_URI=mongodb+srv://usuario:password@cluster.mongodb.net/productos
JWT_SECRET=tu-clave-secreta
PORT=3000
```

### 3. Ejecutar en desarrollo
```
npm run dev
```

### 4. Acceder a la aplicacion
Abre en tu navegador: http://localhost:3000/login.html

### 5. Ejecutar tests
```
npm test
```

## Estructura del proyecto

- backend/ = Servidor Express con APIs CRUD
- frontend/ = Interfaz de usuario (en desarrollo)
- .github/workflows/ = Configuracion de GitHub Actions para despliegue

## Que hace la app

- Registro e inicio de sesion de usuarios
- Crear, ver, actualizar y eliminar productos
- Uso de JWT para proteger rutas
- Base de datos MongoDB con Mongoose

## Despliegue en Render

1. Sube el proyecto a GitHub
2. Conecta tu repositorio en Render
3. Configura las variables de entorno en Render
4. Render desplegara automáticamente cada vez que hagas push

## Tecnologias usadas

- Node.js con Express.js
- MongoDB con Mongoose
- JWT para autenticacion
- Jest para tests
- GitHub Actions para CI/CD
- Render para hosting