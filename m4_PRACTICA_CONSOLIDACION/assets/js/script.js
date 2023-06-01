
/**
 * Función que inserta una tarjeta a la timeline con información consumida de la API
 * 
 * @param {HTMLElement} row - Elemento (Bootstrap) fila de personajes.
 * @param {String} tipoPersonaje - Clase de personaje. 
 * @param {Number} numPersona - id del personaje.
 */
function cambiarTodo(row, tipoPersonaje, numPersona){
  let url = `https://swapi.dev/api/people/${numPersona}`;
  fetch(url,{
    headers: {
      'Content-Type':'application/json'
    },
    method: 'GET'
  })
  .then(response => response.json())
  .then(data => {
    htmlString = `<div class="col-4">
      <div class="card">
    <div class="timeline-circle ${tipoPersonaje}"></div> <!-- Círculo de la línea de tiempo -->
    <div class="card-body ps-5 py-4">
      <h5>${data.name}</h5>
      <p class="mt-2 mb-0">Estatura: ${data.height} cm. Peso: ${data.mass} Kg.</p>
      </div>
    </div>
  </div>`;
    row.insertAdjacentHTML('beforeend', htmlString);
  }).catch(error => {return console.error(error)});
}

document.addEventListener('DOMContentLoaded', () => {
  function* generador(row, tipoPersonaje, numPersona) {
    cambiarTodo(row, tipoPersonaje, numPersona);
    yield;
    cambiarTodo(row, tipoPersonaje, numPersona);
    yield;
    cambiarTodo(row, tipoPersonaje, numPersona);
    yield;
    cambiarTodo(row, tipoPersonaje, numPersona);
    yield;
    cambiarTodo(row, tipoPersonaje, numPersona);
    yield;
    return "Terminado :D";
  }

  let contador1 = 0;
  let contador2 = 5;
  let contador3 = 11;

  const div1 = document.getElementById('indexOne');
  const div2 = document.getElementById('indexTwo');
  const div3 = document.getElementById('indexThree');
  const principales = document.getElementById('principales');
  const secundarios = document.getElementById('secundarios');
  const agregados = document.getElementById('agregados');

  div1.addEventListener('click', () => {
    contador1++;
    if (contador1 <= 5) {
      const generador1 = generador(principales, 'principal', contador1);
      generador1.next();
    } else {
      console.log("It's over");
    }
  });

  div2.addEventListener('click', () => {
    contador2++;
    if (contador2 <= 11) {
      const generador1 = generador(secundarios, 'secundario', contador2);
      generador1.next();
    } else {
      console.log("It's over");
    }
  });

  div3.addEventListener('click', () => {
    contador3++;
    if (contador3 <= 16) {
      const generador1 = generador(agregados, 'agregado', contador3);
      generador1.next();
    } else {
      console.log("It's over");
    }
  });
});
