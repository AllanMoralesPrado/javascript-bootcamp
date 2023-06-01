# PRÁCTICA DE CONSOLIDACIÓN CURSO FULLSTACK JAVASCRIPT DEVELOPER v2 Nº4

## Descripción
Esta es una aplicación web que permite a los usuarios tener una idea de cómo serían algunos personajes de Star Wars, en la vida real respecto a su peso y su estatura. Los datos fueron obtenidos de la api [`SWAPI`](https://swapi.dev/).

Dicha información se entrega en un `timeline` que se divide en tres grupos:

- **Personajes principales:** *"Son aquellos personajes en los que se centra la historia, ya sea para describirlos, para contar su vida o para contar sus acciones y hazañas. Estos personajes son los que hacen avanzar el relato, ya que sus acciones modifican el curso de la historia."*
- **Personajes secundarios:** *"Son quienes complementan a los personajes principales y que pueden realizar acciones que modifican el curso del relato, aunque la historia no se centra tanto en ellos."*
- **Personajes terciarios o agregados:** *"Son aquellos personajes que no tienen una fuerte incidencia en la trama porque aparecen muy poco y porque sus acciones generalmente no contribuyen a que cambie el desarrollo de la historia."*

## Interfaz

Esta es la vista principal que tendrá el usuario:

[![Interfaz principal](https://i.postimg.cc/BZTtwSKB/2023-06-01.png)](https://postimg.cc/V5NYJc4J)

Para obtener la información necesaria solo hay que hacer clic sobre los índices que están posicionados al lado izquierdo de los puntos amarillos que aparecen en la `timeline`.

[![Interfaz con interacción](https://i.postimg.cc/8CS04bQH/Captura-de-pantalla-2023-06-01-174509.png)](https://postimg.cc/3kt1Jmw4)

Sólo puedes obtener información de cinco personajes por grupo.

[![Limitación de la interfaz](https://i.postimg.cc/hjJZPZ9K/Captura-de-pantalla-2023-06-01-174745.png)](https://postimg.cc/Hcg962ZN)

### DESARROLLO DE LA APLICACIÓN
- **Estructura y diseño visual:** La aplicación fue implementada con código HTML5, CSS3 utilizando la librería Bootstrap 5.
- **Lógica:** Se utilizó Javascript ES6 puro. Se utilizaron las APIs DOM y fetch para consumir los datos fuente.
- **Adaptación de código reutilizado y recursos complementarios:**
  - En [este link](https://mdbootstrap.com/docs/standard/extended/timeline/) podrás encontrar el código fuente que reutilicé para crear la `timeline`.
  - El fondo de pantalla minimalista puedes conseguirlo [aquí](https://wallpaperaccess.com/minimalist-star-wars).
  - El logotipo puedes obtenerlo de [este link](https://logosmarcas.net/wp-content/uploads/2020/11/Star-Wars-Emblema.png).
  - Fuentes (tipografías): Afton y Share Tech de `Google Fonts`.

### REFERENCIAS
- Hallet, P. (2023). SWAPI - The Star Wars API. https://swapi.dev/
- Giani, C. (29 de septiembre de 2022). Cuáles son los tipos de personajes. Ejemplos. https://www.ejemplos.co/tipos-de-personajes/