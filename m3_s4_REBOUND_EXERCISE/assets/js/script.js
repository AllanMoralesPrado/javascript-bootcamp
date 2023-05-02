// Control de eventos para las fechas
const dateOrigin = document.getElementById('origen');
const dateDestination = document.getElementById('destino');

let fechaOrigen = document.getElementById('if-origen');
let fechaDestino = document.getElementById('if-destino');

dateOrigin.addEventListener('input',() => {
  fechaOrigen.innerHTML = dateOrigin.value;
})

dateDestination.addEventListener('input',() => {
  fechaDestino.innerHTML = dateDestination.value;
})

// Control de eventos para los lugares
const locationOrigin = document.getElementById('location-origin');
const locationDestination = document.getElementById('location-destination');

let lugarOrigen = document.getElementById('il-origen');
let lugarDestino = document.getElementById('il-destino');
let strO = 'New York, USA';
let strD = 'London, UK';


locationOrigin.addEventListener('input',() => {
  strO = locationOrigin.value.split(",")
  lugarOrigen.innerHTML = strO[0];
  escala(locationOrigin.value,locationDestination.value);
})

locationDestination.addEventListener('input',() => {
  strD =  locationDestination.value.split(",");
  lugarDestino.innerHTML = strD[0];
  escala(locationOrigin.value,locationDestination.value);
})

// Sentencia lógica contenida en una función
function escala(strO, strD){
  let message = document.getElementById('aviso-escala');
  if((strO === 'Chicago, USA' && strD === 'Venice, IT') 
  || (strO === 'Boston, USA' && strD === 'Paris, FR')){
    message.innerHTML = '¡Ojo! Tu vuelo tiene una escala.';
  }
  else{
    message.innerHTML = '¡Tu vuelo NO tiene una escala!';
  }
}