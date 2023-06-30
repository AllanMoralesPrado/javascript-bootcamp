## Javascript FullStack Web Development
### Módulo 6 - Desarrollo de Aplicaciones Web Node Express

# PRÁCTICA DE CONSOLIDACIÓN: Animación Japonesa

### DESCRIPCIÓN:  

Dentro del marco de lo aprendido durante este Drill, hemos podido desarrollar servidores con Node, y consumir archivos externos haciendo uso de ésta y otras tecnologías.

### REQUERIMIENTOS:  
- Crear un servidor con node. 
- Crear un archivo principal llamado index.js. 
- En un archivo aparte, llamado anime.json, guardar los datos con la siguiente información:

```json
{ 
    "1": { 
        "nombre": "Akira", 
         "genero": "Seinen", 
         "año": "1988", 
         "autor": "Katsuhiro Otomo" 
    }, 
    "2": { 
        "nombre": "Dragon Ball", 
         "genero": "Shonen", 
         "año": "1986", 
         "autor": "Akira Toriyama" 
    }, 
    "3": { 
        "nombre": "Sailor Moon", 
         "genero": "Shojo", 
         "año": "1992", 
         "autor": "Naoko Takeuchi" 
    }, 
    "4": { 
        "nombre": "Naruto", 
         "genero": "Shonen", 
         "año": "2002", 
         "autor": "Masashi Kishimoto"
    }, 
    "5": { 
        "nombre": "Neon Genesis Evangelion", 
         "genero": "Mecha", 
         "año": "1995", 
         "autor": "Yoshiyuki Sadamoto" 
    } 
}
```

- Crear un programa que permita hacer el CRUD completo de los datos. El id será el primer argumento para acceder a las propiedades de cada anime. 
- Se deberá poder listar todos los datos del archivo y, además, leer los datos de un anime especifico, accediendo por su id y / o por su nombre.  
- Realizar un test para poder probar la respuesta del servidor que fue creado.

### DISEÑO DE LA SOLUCIÓN

#### **1. Dependencias utilizadas**
- Test Runner: Mocha
- Assertion Library: Cheri/Cheri-http
    ```
    m6_s8_cue@1.0.0
    ├── chai-http@4.4.0
    ├── chai@4.3.7
    └── mocha@10.2.0
    ```
    ```
    npm init -y && npm i mocha cheri cheri-http --save-dev
    ```
- Comando para ejecutar las tests
    ```
    npm run test
    ```
#### **2. Servidor**
- URL: `http://localhost:8080`

#### **3. Métodos utilizados para el CRUD**
- `GET`: Petición para leer el contenido
    - `http://localhost:8080/series`
    - `http://localhost:8080/series?id=` + `número`
    - `http://localhost:8080/series?nombre=` + `nombre`
    
    Código de estado: 200
- `POST`: Petición para crear un nuevo resgistro
    - `http://localhost:8080/series`
    - Cuerpo de la petición: raw - application/JSON:
        ```json
        {
            "nombre": "JoJo's Bizarre Adventure",
            "genero": "shonen",
            "año": "1987",
            "autor": "Hirohiko Araki"
        }
        ```
    Código de estado: 201
- `PUT`: Petición para modificar un registro existente
    - `http://localhost:8080/series?id=` + `número`
    - Cuerpo de la petición: raw - application/JSON:
        ```json
        {
            "nombre": "Slam Dunk",
            "genero": "shonen",
            "año": "1990",
            "autor": "Takehiko Inoue"
        }
        ```
    Código de estado: 201
- `DELETE`: Petición para eliminar un registro existente
    - `http://localhost:8080/series?id=` + `número`
    
    Código de estado: 200