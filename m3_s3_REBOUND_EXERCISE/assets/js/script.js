const activities = [  {    img: 'assets/img/trekking-volcan-villarrica.jpg',    description: 'Modalidad de excursionismo que consiste en recorrer a pie largas distancias o zonas determinadas, generalmente de alta montaña y poco frecuenteadas por el turismo convencional.',    location: 'Volcán Villarrica'  },  {    img: 'assets/img/natación-lago-cochrane.jpg',    description: 'Deporte o ejercicio que consiste en nadar: en las pruebas de natación se compite en velocidad, en cualquiera de los cuatro estilos: braza, crol, espalda y mariposa.',    location: 'Lago Cochrane'  },  {    img: 'assets/img/ferry-lago-llanquihue.jpg',    description: 'Embarcación que realiza alternativamente el mismo recorrido entre dos puntos: especialmente la de grandes dimensiones destinada al transporte de cargas pesadas o pasajeros.',    location: 'Lago Llanquihue'  }];

var img, description, location;
let activities_ = document.getElementById('activities');

// Función que se encarga de actualizar la información en la página
function updatePage() {
  switch(activities_.value){
    case 'Trekking':
      img = activities[0]['img'];
      description = activities[0]['description'];
      location = activities[0]['location'];
      break;
    case 'Natación':
      img = activities[1]['img'];
      description = activities[1]['description'];
      location = activities[1]['location'];
      break;
    case 'Ferry':
      img = activities[2]['img'];
      description = activities[2]['description'];
      location = activities[2]['location'];
      break;
  }
  document.getElementById('img').innerHTML = `<img src="${img}" alt="" width="100%">`;
  document.querySelector('#description>p').innerHTML = description;
}

// Seleccionamos el valor por defecto y actualizamos la página
activities_.value = 'Trekking';
updatePage();

// Escuchamos el evento del select y actualizamos la página al cambiar de valor
activities_.addEventListener('change', () => {
  updatePage();
});
