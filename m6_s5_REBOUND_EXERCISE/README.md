## Javascript FullStack Web Development
### Módulo 6, Sesión 5 - CICLO DE VIDA DE NODE Y PERSISTENCIA

# REBOUND EXERCISE: DESCRIBE AUTO

### EJERCICIO

Dada la siguiente información inicial, en el formato json:

```JSON
{  
    "ferrari": { 
        "modelo": "F40", 
        "asientos": 2 
    }, 
 
    "porsche": { 
        "modelo": "911", 
        "asientos": 2 
    }, 
 
    "lamborghini": { 
        "modelo": "murcielago", 
        "asientos": 2 
    } 
}
```
- Crea  un  programa  para  modificar  estos  datos,  utilizando  el  módulo  `fs`.  Como  primer  argumento en la línea de comandos, debes pasar el nombre del auto que se modificará, para así acceder a sus propiedades.
- Crea una opción para leer el archivo completo, y otra para solo leer las características de un auto en particular.  
- Realiza  las  validaciones  correspondientes,  para  que  así  tu  programa  tome  el  camino  correcto de ejecución, dependiendo de los argumentos ingresados.

En resumen, tu programa podrá ser ejecutado de las siguientes tres formas: 
- Para añadir o modificar propiedades: 
    ```
    node autos.js ferrari puertas 3. 
    ```
- Para leer el archivo completo:
    ```
    node autos.js leer
    ``` 
- Para leer solo las características de un auto en particular:
    ```
    node autos.js leer porsche.
    ```
### SOLUCIÓN - DISEÑO

#### 1. Validar cantidad de argumentos ingresados en CLI

```mermaid
graph LR
    A[Inicio] --> B[Validar cantidad de argumentos]
    B -- Argumentos válidos --> C[Llamar a menuAuto]
    C --> D[Fin]
    B -- Argumentos inválidos --> E[Lanzar error]
    E --> F[Mostrar mensaje de error]
    F --> D[Fin]

```