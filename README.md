Este proyecto es una aplicación fullstack básica que conecta un frontend HTML con un backend en Node.js y una base de datos MySQL, todo corriendo dentro de contenedores Docker.

---

* Node.js
* MySQL
* Docker & Docker Compose
* HTML, CSS, JavaScript

### 1. Clonar el repositorio

```
git clone <tu-repositorio>
cd Proyecto_Docker
```

---

### 2. Configurar variables de entorno

Crea un archivo `.env` en la raíz del proyecto (ver ejemplo abajo).

---

### 3. Levantar el proyecto

```
docker-compose up --build
```

---

## 🌐 Acceso

* Backend: http://localhost:3000
* Endpoint usuarios: http://localhost:3000/usuarios
* Frontend: abre el archivo `index.html` en tu navegador

---

## 📦 Endpoints disponibles

### GET /usuarios

Obtiene todos los usuarios.

### POST /usuarios

Crea un nuevo usuario.

Ejemplo:

```json
{
  "nombre": "Danel"
}
```

---

## 🧪 Base de datos

Si la tabla no existe, puedes crearla manualmente:

```
docker exec -it <nombre_contenedor_db> mysql -uroot -p
```

Luego:

```sql
USE testdb;

CREATE TABLE usuarios (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nombre VARCHAR(100)
);
```

---

## 🐳 Docker

El proyecto utiliza Docker Compose para levantar:

* Contenedor backend (Node.js)
* Contenedor base de datos (MySQL)

---

## 🚀 Posibles mejoras

* Implementar autenticación (JWT)
* Migrar frontend a React
* Agregar validaciones
* Subir a la nube (AWS, Railway, etc.)

---

## 👨‍💻 Autor

Proyecto desarrollado con fines educativos.
