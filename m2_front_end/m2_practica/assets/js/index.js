// 1.- Deberás consumir la API gratuita Digimon
// 2.- Al ingresar al enlace entregado deberás evaluar cual es la ruta correspondiente para poder realizar el ejercicio.

const digimonUrl = 'https://digimon-api.vercel.app/api/digimon';
const digimonGrid = document.querySelector('#digimonAlbum');
const digimonSearch = document.querySelector('#digimonSearch');
const datalist = document.createElement('datalist');
datalist.id = 'digimon-name'; // <datalist id="digimon-name"></datalist>
const input = document.querySelector('#digimonSearch input');
const button = document.querySelector('#digimonSearch button');
let digimonNames = [];

let addDigimon = (img, name, level) => {
    return `<div class="col">
    <div class="card mb-3">
    <div class="row g-0">
      <div id="digimon-picture" class="col-4">
        <img src="${img}" class="img-fluid rounded-start" alt="${name}.jpg">
      </div>
      <div id="digimon-description" class="col-8">
        <div class="card-body text-center">
          <h5 class="card-title">${name}</h5>
          <p class="card-text"><i>${level}</i></p>
        </div>
      </div>
    </div>
  </div>
  </div>`
}

fetch(digimonUrl)
.then((response) => {
  if(response.ok) {
    response.json().then((data) => {
      console.log(data); // Aquí puedes hacer lo que necesites con los datos devueltos por la API
      for (let digimon of data){ 
        digimonGrid.innerHTML += addDigimon(digimon.img, digimon.name, digimon.level)
        const optionElement = document.createElement('option'); // <option></option>
        optionElement.value = digimon.name; // <option>Koromon</option>
        digimonNames.push(digimon.name);
        datalist.appendChild(optionElement); // <datalist id = "digimon-name"> <option>Koromon</option> </datalist>
      } 
      input.parentNode.insertBefore(datalist, button);
    });
  } else {
    console.log('Respuesta de red OK pero respuesta HTTP no OK');
  }
})
.catch((error) => {
  console.log('Hubo un problema con la petición Fetch:' + error.message);
});

input.addEventListener('input', () => {
  const valorIngresado = input.value;
  if (!digimonNames.includes(valorIngresado)) {
    input.style.color = 'red';
  } else {
    input.style.color = 'black';
  }
})

digimonSearch.addEventListener('submit', (event) => {
  event.preventDefault();

  const prevMessage = document.getElementById('message');
  const backBtn = document.getElementById('backToMenu');
  
  if(prevMessage){
    prevMessage.remove();
  }

  if(backBtn){
    backBtn.remove();
  }

  const valorIngresado = input.value;
  const section = document.querySelector('section');
  const digimonAlbum = document.querySelector('#digimonAlbum');
  const message = document.createElement('div');
  message.id = 'message';
  const backToAlbum = document.createElement('button');
  backToAlbum.id = "backToMenu";
  backToAlbum.setAttribute('class','btn btn-primary col-8 mx-auto d-flex justify-content-center');
  backToAlbum.innerHTML = 'Regresar a la lista';
  
  digimonAlbum.style.display = 'none';
  message.setAttribute('class','col-10 col-sm-8 text-center mx-auto mt-3');

  if (!digimonNames.includes(valorIngresado)) {
    message.innerHTML += `<h1>
      Digimon no encontrado
    </h1>`
  } else {
    const digimonNameUrl = `https://digimon-api.vercel.app/api/digimon/name/${valorIngresado}`;
    fetch(digimonNameUrl)
    .then((response) => {
      if(response.ok) {
        response.json().then((data) => {
          message.innerHTML += addDigimon(data[0].img, data[0].name, data[0].level);
        });
      } else {
        console.log('Respuesta de red OK pero respuesta HTTP no OK');
      }
    })
    .catch((error) => {
      console.log('Hubo un problema con la petición Fetch:' + error.message);
    });
  }
  section.appendChild(message);
  section.appendChild(backToAlbum);

  backToAlbum.addEventListener('click', () => {
    if(message){
      message.remove();
      digimonAlbum.style.display = 'flex';
      backToAlbum.remove();
    }
  })
})