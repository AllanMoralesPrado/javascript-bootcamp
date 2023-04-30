/* 
 * REQUERIMIENTOS 
 * 
 * Se notificará a los pasajeros sobre los documentos que deben portar, mediante un alert
 * Los elementos que muestran la hora y la fecha deben mostrar valores en tiempo real, utilizando objetos JavaScript.
 * El número de vuelo, y el terminal, deben mostrar un número nuevo cada vez que se refresque la página. Este comportamiento se logrará usando un objeto JavaScript
 */

// 1. Creación dinámica de la alerta con clases de bootstrap 3.4.1

// 1.0 Elemento oscurecedor
const darkLock = document.createElement('div');
darkLock.id = 'darkLock';
darkLock.style.position = 'absolute';
darkLock.style.width = '100%';
darkLock.style.height = '177%';
darkLock.style.zIndex = 9998;
darkLock.style.backgroundColor = 'rgba(0,0,0,0.5)'

// 1.1 Elemento alerta
const alertBox = document.createElement('div');
alertBox.id = 'alertBox';
alertBox.setAttribute('class','alert alert-dismissible fade in');
alertBox.setAttribute('role','alert');

// 1.2 Elementos componentes de la alerta
// 1.2.1 Mensaje de alerta
const alertMessage = document.createElement('p');
alertMessage.id = 'alertMessage';
alertMessage.innerHTML = 'Pasajero, se le recuerda que para abordar el avión debe tener en mano su pasaporte y su boleto de embarque. Manténgase atento a los avisos mediante esta plataforma.';
// 1.2.2 Barra horizontal divisoria
const hr = document.createElement('hr');
hr.style.marginBottom = 0;
hr.style.borderTop = '1px solid #cfcfcf'
// 1.2.3 Boton cerrar
const closeButton = document.createElement('button');
closeButton.setAttribute('type','button');
closeButton.setAttribute('class','close');
closeButton.setAttribute('data-dismiss','alert');
closeButton.setAttribute('aria-label','Close');
closeButton.innerHTML = '<span aria-hidden="true">Close</span>';

// 1.3 Incrustación de Elementos componentes al Elemento alerta
document.body.style.height = '100%';
document.body.style.margin = '0';
document.documentElement.style.height = '100%';
document.documentElement.style.margin = '0';
alertBox.appendChild(alertMessage);
alertBox.appendChild(hr);
alertBox.appendChild(closeButton);

// 1.4 Incrustación de los Elementos darkLock alerta al body
const welcomeBox = document.getElementById('welcomeBox');
document.body.insertBefore(darkLock,welcomeBox);
document.body.insertBefore(alertBox,welcomeBox);

// 1.5 Evento para restablecer el brillo de la página
closeButton.addEventListener('click', ()=>{
    document.body.removeChild(darkLock);
})

// 2. Hora y fecha en tiempo real
// 2.1 Capturar elementos reloj y calendario de la página
var reloj = document.getElementById('insertTime');
var calendario = document.getElementById('insertDate');

// 2.2 Crear actualizador del reloj y calendario
function mueveCalendario(){
    // hora
    let momentoActual = new Date();
    let hora = momentoActual.getHours()
    let minuto = momentoActual.getMinutes()

    let str_minuto = new String (minuto)
    if (str_minuto.length == 1)
       minuto = "0" + minuto

    let str_hora = new String (hora)
    if (str_hora.length == 1)
       hora = "0" + hora

    let horaImprimible = hora + " : " + minuto

    reloj.innerHTML = horaImprimible;

    // calendario
    let dia = momentoActual.getDate();
    let mes = momentoActual.getMonth() + 1;
    let anio = momentoActual.getFullYear();

    let fechaImprimible = dia + '-' + mes + '-' + anio;
    calendario.innerHTML = fechaImprimible;

    setTimeout("mueveCalendario()",1000);
}

// 2.3 Cargar el reloj en la página
document.body.addEventListener("load",mueveCalendario());

// 3. Refrescar el Numero de vuelo y terminal
// 3.1 Obtener los números de vuelo y terminal
const vuelo = document.querySelector('#flightNumber');
const terminal = document.querySelector('#terminalNumber');

document.addEventListener("DOMContentLoaded", () =>{
    let min = 1;
    let max = 10000;
    let rand = Math.floor(Math.random() * (max - min + 1) + min);
    vuelo.innerHTML = rand;

    min = 1;
    max = 10;
    rand = Math.floor(Math.random() * (max - min + 1) + min);
    terminal.innerHTML = rand;
})