-- DDL: Base de datos

CREATE DATABASE enterprise;
\c enterprise

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
  celular VARCHAR(15),
  alta CHAR(1)
);

-- Tabla: TipoVehiculo
CREATE TABLE TipoVehiculo(
  idtipovehiculo INT PRIMARY KEY,
  nombre VARCHAR(120)
);

-- Tabla: Marca
CREATE TABLE Marca(
  idmarca INT PRIMARY KEY,
  nombre VARCHAR(120)
);

-- Tabla: Vehiculo
CREATE TABLE Vehiculo(
  idvehiculo INT PRIMARY KEY,
  patente VARCHAR(10),
  modelo VARCHAR(20),
  color VARCHAR(15),
  precio INT,
  frecuenciamantencion INT,
  marca_idmarca INT REFERENCES Marca(idmarca),
  tipovehiculo_idtipovehiculo INT REFERENCES TipoVehiculo(tipovehiculo_pk)
);

-- Tabla: Venta
CREATE TABLE Venta(
  folio INT PRIMARY KEY,
  fecha DATE,
  monto INT,
  vehiculo_idvehiculo INT REFERENCES Vehiculo(idvehiculo),
  cliente_rut VARCHAR(10) REFERENCES Cliente(rut)  
);

CREATE INDEX venta_idx ON Venta(vehiculo_idvehiculo);

-- Tabla: Mantencion
CREATE TABLE Mantencion(
  idmantencion INT PRIMARY KEY,
  fecha DATE,
  trabajosrealizados VARCHAR(1000),
  ventafolio INT REFERENCES Venta(folio)
);