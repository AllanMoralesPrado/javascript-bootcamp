-- DDL: Base de datos

CREATE DATABASE arriendos;
\c arriendos

-- DDL: Tablas

-- Tabla: Empresa
CREATE TABLE Empresa(
  rut VARCHAR(10) PRIMARY KEY,
  nombre VARCHAR(120),
  direccion VARCHAR(120),
  telefono VARCHAR(15),
  correo VARCHAR(80),
  web VARCHAR(50)
);

-- Tabla: Cliente
CREATE TABLE Cliente(
  rut VARCHAR(10) PRIMARY KEY,
  nombre VARCHAR(120),
  correo VARCHAR(80),
  direccion VARCHAR(120),
  celular VARCHAR(15)
);

-- Tabla: Herramienta
CREATE TABLE Herramienta(
  idherramienta INT PRIMARY KEY,
  nombre VARCHAR(120),
  preciodia INT
);

-- Tabla: Arriendo
CREATE TABLE Arriendo(
  folio INT PRIMARY KEY,
  fecha DATE,
  dias INT,
  valordia INT,
  garantia VARCHAR(30),
  herramienta_idherramienta INT REFERENCES Herramienta(idherramienta),
  cliente_rut varchar(10) REFERENCES Cliente(rut)
);