-- Se muestra a continuación las sintaxis DML para trabajar sobre las tablas solicitadas
-- NOTA: El enunciado no datos concretos asi que las siguientes son solo fragmentos de codigo
-- donde se asume que se tiene conocimiento del tipo de dato valido y valores disponibles para cada campo

-- DML PARA LA TABLA: CUSTOMER
-- INSERCION
INSERT INTO public.customer(
	customer_id,
  store_id,
  first_name,
  last_name,
  email,
  address_id,
  activebool,
  create_date,
  last_update,
  active
)
VALUES (...); -- 10 valores

-- MODIFICACION
UPDATE public.customer
SET customer_id=?, store_id=?, first_name=?, last_name=?, email=?, address_id=?, activebool=?, create_date=?, last_update=?, active=?
WHERE <sentencia_logica>; -- Eliminar signos

-- ELIMINACION
DELETE FROM public.customer
WHERE <sentencia_logica>; -- Eliminar signos
	
-- DML PARA LA TABLA: STAFF
-- INSERCION
INSERT INTO public.staff(
	staff_id,
  first_name,
  last_name,
  address_id,
  email,
  store_id,
  active,
  username,
  password,
  last_update,
  picture
)
VALUES (...); -- 11 valores

-- MODIFICACION
UPDATE public.staff
SET staff_id=?, first_name=?, last_name=?, address_id=?, email=?, store_id=?, active=?, username=?, password=?, last_update=?, picture=?
WHERE <sentencia_logica>; -- Eliminar signos

-- ELIMINACION
DELETE FROM public.staff
WHERE <sentencia_logica>; -- Eliminar signos
	
-- DML PARA LA TABLA ACTOR
-- INSERCION
INSERT INTO public.actor(
	actor_id,
  first_name,
  last_name,
  last_update
)
VALUES (...); -- 4 valores

-- MODIFICACION
UPDATE public.actor
SET actor_id=?, first_name=?, last_name=?, last_update=?
WHERE <sentencia_logica>; -- Eliminar signos

-- ELIMINACION
DELETE FROM public.actor
WHERE <sentencia_logica>;

-- Listar todas las “rental” con los datos del “customer” dado un año y mes.

-- ALTAMENTE COSTOSO (PEOR CASO) SIN VALORES DADOS. SE OBSERVA SOLO FECHAS DE MAYO DEL 2005
SELECT rental.*,customer.*
FROM Rental
JOIN Customer
ON Rental.rental_id = Customer.customer_id;

-- UTILIZANDO DATOS DE LA FECHA OBTENIDOS DE LA CONSULTA ANTERIOR
SELECT rental.*,customer.*
FROM Rental
JOIN Customer
ON Rental.rental_id = Customer.customer_id
WHERE EXTRACT(MONTH FROM rental.rental_date) = '05' --valores dados
AND EXTRACT(YEAR FROM rental.rental_date) = '2005'; --valores dados

-- Listar Número, Fecha (payment_date) y Total (amount) de todas las “payment”.
SELECT payment_id AS Número,
	   payment_date AS Fecha, 
	   amount AS Total
FROM Payment
GROUP BY payment_id, payment_date;	   

-- Listar todas las “film” del año 2006 que contengan un (rental_rate) mayor a 4.0.
SELECT *
FROM film
WHERE rental_rate > 4 AND release_year = '2006';

-- DICCIONARIO DE DATOS (GRACIAS HINT M5S7)

SELECT
    t1.TABLE_NAME AS tabla_nombre, -- nombre de la tabla
    t1.COLUMN_NAME AS columna_nombre, -- nombre de la columna
    t1.COLUMN_DEFAULT AS columna_defecto,
    t1.IS_NULLABLE AS columna_nulo, -- permiso de valor null
    t1.DATA_TYPE AS columna_tipo_dato, -- tipo de dato
    -- LAS DEMAS LINEAS ROBUSTECEN LA CONSULTA
FROM 
    INFORMATION_SCHEMA.COLUMNS t1
    INNER JOIN PG_CLASS t2 ON (t2.RELNAME = t1.TABLE_NAME)
WHERE 
    t1.TABLE_SCHEMA = 'public'
ORDER BY
    t1.TABLE_NAME;