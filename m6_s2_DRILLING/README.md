## Javascript FullStack Web Development
### Módulo 6, Sesión 2 - INTRODUCCIÓN AL GESTOR DE PAQUETES NPM

# DRILLING: RECORDANDO USO DE GIT

### EJERCICIO

- Crea una nueva carpeta, e inicializa un nuevo repositorio de git.  
- Crea un archivo `.gitignore`, que omita la carpeta `node modules` al momento de subir cambios.  
- Busca en la web los paquetes más utilizados de npm, e instala los cinco primeros de la lista.  
- Haz un chequeo de los cambios en tu proyecto (git status) posterior a la instalación, agrega los cambios a git, y luego realiza un commit de estos cambios.  
- Elige dos paquetes de tu proyecto, y realiza una desinstalación.  
- Vuelve a realizar un chequeo de los cambios luego de la  desinstalación, añade los cambios, y guárdalos en el repositorio local de git.  
- ¿Puedes ver cuál es el archivo que cambia cada vez que realizas una instalación o desinstalación de paquetes? 

### DIVIDIENDO ARCHIVOS, INSTALANDO PAQUETES

Dados los siguientes Arrays: 

```JAVASCRIPT
let autos = ["mazda", "renault", "ferrari", "mazda", "jeep", "audi", "ferrari"];  
```

```JAVASCRIPT
let animales = [  
  {animal: 'perro', tipo: 'mascota', nombre: 'elvis'},  
  {animal: 'tigre', tipo: 'salvaje', nombre: 'hendrix'},  
  {animal: 'tiburon', tipo: 'salvaje', nombre: 'ray charles'},  
  {animal: 'gato', tipo: 'mascota', nombre: 'lady gaga'} 
 ];  
 ```
- Inicia un nuevo proyecto con npm init, e instala el paquete lodash (https://www.npmjs.com/package/lodash).
- Asegúrate de que la versión del paquete lodash en package.json sea la versión “^4.17.21”. 
- Crea un archivo `index.js`, y un archivo `datos.js`. 
- Agrega y exporta las variables autos y animales al archivo `datos.js`. 
- Importa las variables autos y animales dentro de tu archivo `index.js`. 
- Utiliza la documentación de *lodash* (https://lodash.com/docs/4.17.15) para requerir el paquete, e investiga cómo implementar los métodos `find()` y `uniq()`. 
- Utiliza el método `uniq()` para obtener un Array de elementos únicos desde la variable `autos`, y guarda el resultado en una variable en tu archivo `index.js`. 
- Utiliza  el  metod  `find()`  para  obtener  todos  los  animales  de  tipo  salvaje  de  la  variable `animales`, y guarda el resultado en una variable en tu archivo `index.js`. 
- Muestra por consola el resultado contenido en las variables creadas.

### SOLUCIÓN - PARTE 1

1. Crear repositorio git en un directorio
```bash
git init
```
2. Crear archivo `.gitignore`
```bash
- en cmd -
copy nul ".gitignore"

- en bash -
touch .gitignore
```
3. Instalar Top 5 paquetes npm: 
```bash
npm init
npm i loadsh express react axios moment
```
4. Se acaba de crear la carpeta `node_modules` configurar el archivo `.gitignore` para ignorarlo en el control de versiones, agregando lo siguiente:
```
# Ignorar archivos y directorios generados automáticamente

node_modules/
```
5. Comprobar estado del proyecto:
```bash
git status
```
RESULTADO
```
On branch master

No commits yet

Untracked files:
  (use "git add <file>..." to include in what will be committed)
        .gitignore
        README.md
        package-lock.json
        package.json

nothing added to commit but untracked files present (use "git add" to track)
```
6. Agregar cambios y realizar el commit:
```bash
git add -A && git commit -m "loadsh express react axios y moment"
```
RESULTADO
```
warning: LF will be replaced by CRLF in package-lock.json.
The file will have its original line endings in your working directory
warning: LF will be replaced by CRLF in package.json.
The file will have its original line endings in your working directory
[master (root-commit) ff532ad] loadsh express react axios y moment
 4 files changed, 815 insertions(+)
 create mode 100644 .gitignore
 create mode 100644 README.md
 create mode 100644 package-lock.json
 create mode 100644 package.json
```
7. Desintalar dos de los paquetes instalados:
```bash
npm uninstall loadsh axios
```
RESULTADO
```
removed 8 packages, and audited 63 packages in 740ms

8 packages are looking for funding
  run `npm fund` for details

found 0 vulnerabilities
```
8. Comprobar cambios, añadirlos y commitearlos:
```bash
git status && npm list
```
RESULTADO
```
On branch master
Changes not staged for commit:
  (use "git add <file>..." to update what will be committed)
  (use "git restore <file>..." to discard changes in working directory)
        modified:   README.md
        modified:   package-lock.json
        modified:   package.json

no changes added to commit (use "git add" and/or "git commit -a")
m6_s2_drilling@1.0.0 D:\Documentos\JavaScript bootcamp\m6_node_express\m6_s2_npm\m6_s2_DRILLING
├── express@4.18.2
├── moment@2.29.4
└── react@18.2.0
```
```bash
git add -A && git commit -m "loadsh y axios desinstalados"
```
RESULTADO
```
warning: LF will be replaced by CRLF in package-lock.json.
The file will have its original line endings in your working directory
warning: LF will be replaced by CRLF in package.json.
The file will have its original line endings in your working directory
[master a89b57a] loadsh y axios desinstalados
 3 files changed, 36 insertions(+), 81 deletions(-)
```
9. Revisar qué archivos cambian al instalar/desinstalar paquetes
```bash
git log
```
RESULTADO
```git
commit a89b57a1e1c51f46e70498f8bd394d6e0f5e5ed6 (HEAD -> master)
Author: Allan Morales Prado <allan.moralesp@utem.cl>
Date:   Wed Jun 21 20:34:10 2023 -0400

    loadsh y axios desinstalados

commit ff532add2ea3bbb3785d15bfeed4647b5bac4e97
Author: Allan Morales Prado <allan.moralesp@utem.cl>
Date:   Wed Jun 21 20:29:13 2023 -0400

    loadsh express react axios y moment
```
```bash
git diff ff532a a89b57 -- ./package.json
```
RESULTADO
```
diff --git a/package.json b/package.json
index bd7fe97..f4d13fe 100644
--- a/package.json
+++ b/package.json
@@ -18,9 +18,7 @@
   "author": "Allan",
   "license": "ISC",
   "dependencies": {
-    "axios": "^1.4.0",
     "express": "^4.18.2",
-    "loadsh": "^0.0.4",
     "moment": "^2.29.4",
     "react": "^18.2.0"
   }
```

```
git diff ff532a a89b57 -- ./package-lock.json
```
RESULTADO

```
diff --git a/package-lock.json b/package-lock.json
index 1563603..1854a6f 100644
:...skipping...
diff --git a/package-lock.json b/package-lock.json
index 1563603..1854a6f 100644
--- a/package-lock.json
+++ b/package-lock.json
@@ -9,9 +9,7 @@
       "version": "1.0.0",
       "license": "ISC",
       "dependencies": {
-        "axios": "^1.4.0",
         "express": "^4.18.2",
-        "loadsh": "^0.0.4",
         "moment": "^2.29.4",
         "react": "^18.2.0"
       }
@@ -33,21 +31,6 @@
       "resolved": "https://registry.npmjs.org/array-flatten/-/array-flatten-1.1.1.tgz",
       "integrity": "sha512-PCVAQswWemu6UdxsDFFX/+gVeYqKAod3D3UVm91jHwynguOwAvYPhx8nNlM++NqRcK6CxxpUafjmhIdKiHibqg=="
     },
-    "node_modules/asynckit": {
-      "version": "0.4.0",
-      "resolved": "https://registry.npmjs.org/asynckit/-/asynckit-0.4.0.tgz",
-      "integrity": "sha512-Oei9OH4tRh0YqU3GxhX79dM/mwVgvbZJaSNaRk+bshkj0S5cfHcgYakreBjrHwatXKbz+IoIdYLxrKim2MjW0Q=="
-    },
-    "node_modules/axios": {
-      "version": "1.4.0",
-      "resolved": "https://registry.npmjs.org/axios/-/axios-1.4.0.tgz",
-      "integrity": "sha512-S4XCWMEmzvo64T9GfvQDOXgYRDJ/wsSZc7Jvdgx5u1sd0JwsuPLqb3SYmusag+edF6ziyMensPVqLTSc1PiSEA==",
-      "dependencies": {
-        "follow-redirects": "^1.15.0",
-        "form-data": "^4.0.0",
-        "proxy-from-env": "^1.1.0"
-      }
-    },
     "node_modules/body-parser": {
       "version": "1.20.1",
       "resolved": "https://registry.npmjs.org/body-parser/-/body-parser-1.20.1.tgz",
@@ -91,17 +74,6 @@
         "url": "https://github.com/sponsors/ljharb"
       }
     },
-    "node_modules/combined-stream": {
-      "version": "1.0.8",
-      "resolved": "https://registry.npmjs.org/combined-stream/-/combined-stream-1.0.8.tgz",
-      "integrity": "sha512-FQN4MRfuJeHf7cBbBMJFXhKSDq+2kAArBlmRBvcvFE5BB1HZKXtSFASDhdlz9zOYwxh8lDdnvmMOe/+5cdoEdg==",
-      "dependencies": {
-        "delayed-stream": "~1.0.0"
-      },
-      "engines": {
-        "node": ">= 0.8"
-      }
-    },
     "node_modules/content-disposition": {
       "version": "0.5.4",
       "resolved": "https://registry.npmjs.org/content-disposition/-/content-disposition-0.5.4.tgz",
@@ -142,14 +114,6 @@
         "ms": "2.0.0"
       }
     },
-    "node_modules/delayed-stream": {
-      "version": "1.0.0",
-      "resolved": "https://registry.npmjs.org/delayed-stream/-/delayed-stream-1.0.0.tgz",
-      "integrity": "sha512-ZySD7Nf91aLB0RxL4KGrKHBXl7Eds1DAmEdcoVawXnLD7SDhpNgtuII2aAkg7a7QS41jxPSZ17p4VdGnMHk3MQ==",
-      "engines": {
-        "node": ">=0.4.0"
-      }
-    },
     "node_modules/depd": {
       "version": "2.0.0",
       "resolved": "https://registry.npmjs.org/depd/-/depd-2.0.0.tgz",
@@ -251,38 +215,6 @@
         "node": ">= 0.8"
       }
     },
-    "node_modules/follow-redirects": {
-      "version": "1.15.2",
-      "resolved": "https://registry.npmjs.org/follow-redirects/-/follow-redirects-1.15.2.tgz",
-      "integrity": "sha512-VQLG33o04KaQ8uYi2tVNbdrWp1QWxNNea+nmIB4EVM28v0hmP17z7aG1+wAkNzVq4KeXTq3221ye5qTJP91JwA==",
-      "funding": [
-        {
-          "type": "individual",
-          "url": "https://github.com/sponsors/RubenVerborgh"
-        }
-      ],
-      "engines": {
-        "node": ">=4.0"
-      },
-      "peerDependenciesMeta": {
-        "debug": {
-          "optional": true
-        }
-      }
-    },
-    "node_modules/form-data": {
-      "version": "4.0.0",
-      "resolved": "https://registry.npmjs.org/form-data/-/form-data-4.0.0.tgz",
-      "integrity": "sha512-ETEklSGi5t0QMZuiXoA/Q6vcnxcLQP5vdugSpuAyi6SVGi2clPPp+xgEhuMaHC+zGgn31Kd235W35f7Hykkaww==",
-      "dependencies": {
-        "asynckit": "^0.4.0",
-        "combined-stream": "^1.0.8",
-        "mime-types": "^2.1.12"
-      },
-      "engines": {
-        "node": ">= 6"
-      }
-    },
     "node_modules/forwarded": {
       "version": "0.2.0",
       "resolved": "https://registry.npmjs.org/forwarded/-/forwarded-0.2.0.tgz",
@@ -395,12 +327,6 @@
       "resolved": "https://registry.npmjs.org/js-tokens/-/js-tokens-4.0.0.tgz",
       "integrity": "sha512-RdJUflcE3cUzKiMqQgsCu06FPu9UdIJO0beYbPhHN4k6apgJtifcoCtT9bcxOpYBtpD2kCM6Sbzg4CausW/PKQ=="
     },
-    "node_modules/loadsh": {
-      "version": "0.0.4",
-      "resolved": "https://registry.npmjs.org/loadsh/-/loadsh-0.0.4.tgz",
-      "integrity": "sha512-U+wLL8InpfRalWrr+0SuhWgGt10M4OyAk6G8xCYo2rwpiHtxZkWiFpjei0vO463ghW8LPCdhqQxXlMy2qicAEw==",
-      "deprecated": "This is a typosquat on the popular Lodash package. This is not maintained nor is the original Lodash package."
-    },
     "node_modules/loose-envify": {
       "version": "1.4.0",
       "resolved": "https://registry.npmjs.org/loose-envify/-/loose-envify-1.4.0.tgz",
@@ -528,11 +454,6 @@
         "node": ">= 0.10"
       }
     },
-    "node_modules/proxy-from-env": {
-      "version": "1.1.0",
-      "resolved": "https://registry.npmjs.org/proxy-from-env/-/proxy-from-env-1.1.0.tgz",
-      "integrity": "sha512-D+zkORCbA9f1tdWRK0RaCR3GPv50cMxcrz4X8k5LTSUD1Dkw47mKJEZQNunItRTkWwgtaUSo1RVFRIG9ZXiFYg=="
-    },
     "node_modules/qs": {
       "version": "6.11.0",
       "resolved": "https://registry.npmjs.org/qs/-/qs-6.11.0.tgz",
```
### CONCLUSIÓN

Los archivos `package.json` y `package-lock.json` experimentan cambios cuando un paquete npm es instalado o desinstalado. En los ejemplos anteriores todas las líneas de texto precedidas por el símbolo *hyphen* (`-`) fueron borradas del archivo en el commit más reciente producto de la desinstalación de paquetes.

### SOLUCIÓN - PARTE 2

1. Instalación del paquete `lodash` versión *4.7.21*:
```
npm i lodash@4.17.21
```
2. Exportando variables del archivo datos.js
```javascript
// ---- datos.js ----
//...
// Exportando variables
module.exports = {
    autos:autos,
    animales:animales
}
```

2. Importando variables al archivo index.js
```javascript
// ---- index.js ----
var datos = require('./datos');
//...
```
3. Se utiliza el método .uniq() para devolver un Array sin datos duplicados y el método .find() para devolver el primer objeto de un Array que cumpla una condición definida.

4. Un ejemplo de implementación del método .uniq() consiste en devolver un Array de elementos únicos de la variable `autos` importada desde `datos.js`:
```javascript
// ---- index.js ----
//...
// Obtener Array con elementos únicos de la variable 'autos'
let autos = datos.autos;
let autos_unicos = _.uniq(autos);
console.log(`Autos únicos: ${autos_unicos}`);
```
5. Un ejemplo de implementación del método .find() consiste en devolver el primer objeto del Array `animales` importada del archivo `datos.js` cuyo valor de la propiedad `tipo` sea igual a `"salvaje"`:
```javascript
// Obtener al primer animal de tipo salvaje que se encuentre la variable 'animales'
let animales = datos.animales;
// El método find devuelve el primer elemento que haga que el callback devuelva true
let animal_salvaje = _.find(animales, function (o) { return o.tipo === 'salvaje'; });

if (animal_salvaje) {
    console.log('\nAnimal salvaje encontrado:');
    console.log(`${animal_salvaje.animal} - ${animal_salvaje.nombre}`);
} else {
    console.log('No se encontraron animales salvajes.');
}
```
6. Resultados
```
node index.js

Autos únicos: mazda,renault,ferrari,jeep,audi

Animal salvaje encontrado:
tigre - hendrix
```

NOTA FINAL:
Click [aquí](https://github.com/AllanMoralesPrado/m6_s2_DRILLING) para ir al repositorio original ya que esta carpeta no es un repositorio en sí