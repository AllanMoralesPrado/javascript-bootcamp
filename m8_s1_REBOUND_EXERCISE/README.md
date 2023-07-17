## Javascript FullStack Web Development
### Módulo 8, Sesión 1 - APIS RESTFULL

# REBOUND  EXERCISE:  DISEÑANDO UNA API RESTFULL

### EJERCICIO
Realice el diseño de una API RESTful, que permita la gestión de tickets de servicios de una operadora telefónica. Cada ticket posee su id, y se pueden crear un número indefinido de mensajes para éste. Además, poseen dos estados:  “abierto” y  “cerrado”. Se pueden buscar por los recientemente actualizados, recientemente cerrados.

### SOLUCIÓN

- La estructura de URL 
- Los métodos HTTP 
- La creación y actualización de recursos

#### **Estructura de URL**

1. URL que representa la colección de recursos ticket
```
/tickets
```
2. URL que representa la colección UN recurso ticket
```
/tickets/22
```
#### **Métodos HTTP**

```
GET /tickets
GET /tickets/2
GET /tickets/2/mensajes
GET /tickets?estado=abierto
GET /tickets/actualizados
GET /tickets/cerrados
POST /tickets
POST /tickets/2/mensajes
PUT /tickets/92
PATCH /tickets/92
DELETE /tickets/4
```
#### **Creación y actualización de recursos**

**1. CREACIÓN de ticket**

***CLIENTE***

`HTTP Header`
```
POST /tickets
```
`HTTP Body`
```JSON
{
    "data": {
        "estado": "cerrado",
    }
}
```
***SERVIDOR (RESPUESTA EXITOSA)***

`HTTP Header`
```http
201 Created
Location: /tickets/48
```
<hr>

**2. CREACIÓN de mensaje a un ticket existente**

***CLIENTE***

`HTTP Header`
```
POST /tickets/48/mensajes
```
`HTTP Body`
```JSON
{
    "data": {
        "mensaje": "ejemplo de petición POST",
    }
}
```
***SERVIDOR (RESPUESTA EXITOSA)***

`HTTP Header`
```http
201 Created
Location: /tickets/48/mensajes/1
```

<hr>

**3. ACTUALIZACIÓN del estado de un ticket**

***CLIENTE***

`HTTP Header`
```
PATCH /tickets/48
```
`HTTP Body`
```JSON
{
    "data": {
        "estado": "cerrado",
    }
}
```
***SERVIDOR (RESPUESTA EXITOSA)***

`HTTP Header`
```http
200 OK
```

<hr>

**4. BÚSQUEDA de tickets recientemente actualizados**

***CLIENTE***

`HTTP Header`
```
GET /tickets/actualizados
```
***SERVIDOR (RESPUESTA EXITOSA)***

`HTTP Header`
```
200 OK
```

`HTTP Body`
```JSON
{
    "data": {
        "tickets": [
            {
                "id": "48",
                "estado": "cerrado"
            },
            {
                "id": "92",
                "estado": "abierto"
            }
        ]
    }
}
```

<hr>

**5. BÚSQUEDA de tickets recientemente cerrados**

***CLIENTE***

`HTTP Header`
```
GET /tickets/cerrados
```
***SERVIDOR (RESPUESTA EXITOSA)***

`HTTP Header`
```
200 OK
```

`HTTP Body`
```JSON
{
    "data": {
        "tickets": [
            {
                "id": "48",
                "estado": "cerrado"
            }
        ]
    }
}
```