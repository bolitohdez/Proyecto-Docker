# Proyecto Fullstack con Docker (Node.js + MySQL)

Este proyecto es una aplicación fullstack básica que conecta un frontend en HTML con un backend en Node.js y una base de datos MySQL, todo ejecutándose dentro de contenedores Docker.

---

## 🛠️ Tecnologías utilizadas

* Node.js
* MySQL
* Docker & Docker Compose
* HTML, CSS, JavaScript

---

### 1. Clonar el repositorio

```
git clone <tu-repositorio>
cd Proyecto_Docker
```

---

### 2. Levantar el proyecto

```
docker-compose up --build
```

Esto iniciará automáticamente:

* Contenedor del backend (Node.js)
* Contenedor de la base de datos (MySQL)

---

## Acceso al proyecto

* Backend: http://localhost:3000
* API usuarios: http://localhost:3000/usuarios
* Frontend: abrir el archivo `Pagina.html` en tu navegador

---

## Base de datos

La base de datos utilizada es:

```sql
mi_db
```

### Crear la tabla manualmente si se requiere

1. Acceder al contenedor de MySQL:

```
docker exec -it <nombre_contenedor_db> mysql -u root -proot
o

docker exec -it proyecto_docker-db-1 mysql -u root -proot
```

2. Ejecutar:

```sql
USE mi_db;

CREATE TABLE usuarios (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nombre VARCHAR(100) NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

---

## Docker

El proyecto utiliza Docker Compose para orquestar los servicios:

* **backend**: aplicación Node.js con Express
* **db**: base de datos MySQL

---

## Notas importantes

* La base de datos se crea automáticamente al iniciar Docker si no existe.

* El frontend no está dockerizado; se abre manualmente en el navegador.

---

## 👨‍💻 Autor

**Danel Adair Hernandez Dzib**

---
