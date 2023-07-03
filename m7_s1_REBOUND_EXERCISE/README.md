## Javascript FullStack Web Development
### Módulo 7, Sesión 1 - CONEXIÓN A UNA BASE DE DATOS

# REBOUND EXERCISE: CREANDO DE BASE DE DATOS EN POSTGRESQL 

### EJERCICIO

Siguiendo los pasos de cómo se ejecutó en los EXERCISES, crea una base de datos de nombre practica_db, y en la misma, genera dos tablas: estudiantes y cursos.

| estudiantes        |                           |   | cursos      |                           |
|--------------------|---------------------------|---|-------------|---------------------------|
| id                 | *Entero con autoincremento* |   | id          | *Entero con autoincremento* |
| nombres            | *Cadena de caracteres*      |   | titulo      | *Cadena de 80 caracteres*   |
| apellidos          | *Cadena de caracteres*      |   | descripcion | *Cadena de 80 caracteres*   |
| edad               | *Cadena de caracteres*      |   |             |                           |
| Nro identificación | *Entero*                    |   |             |                           |

### SOLUCIÓN

```SQL
-- Crear la base de datos
CREATE DATABASE practica_db;

-- Usar la base de datos
\c practica_db;

-- TABLA ESTUDIANTES
CREATE TABLE estudiantes(
    id SERIAL PRIMARY KEY,
    nombres VARCHAR(64) NOT NULL CHECK (nombres ~ '^[[:alpha:]]+([[:blank:]][[:alpha:]]+)*$'),
    apellidos VARCHAR(64) NOT NULL CHECK (apellidos ~ '^[[:alpha:]]+([[:blank:]][[:alpha:]]+)*$'),
    edad VARCHAR(64) NOT NULL,
    nro_identificacion INTEGER NOT NULL
);

-- TABLA CURSOS
CREATE TABLE cursos(
    id SERIAL PRIMARY KEY,
    titulo VARCHAR(80) NOT NULL CHECK (titulo ~ '^[[:alpha:]]+([[:blank:]][[:alpha:]]+)*$'),
    descripcion VARCHAR(80)
);
```

### NOTA
La ejecución del script se solicita en **m7_s1_DRILLING**