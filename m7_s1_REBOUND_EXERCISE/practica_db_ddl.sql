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