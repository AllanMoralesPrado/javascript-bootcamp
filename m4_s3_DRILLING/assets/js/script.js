// DATOS o MODELO
const mailDestinatario = document.getElementById('mailDestinatario');
const mailTitulo = document.getElementById('mailTitulo');
const mailMensaje = document.getElementById('mailMensaje');
const mailRemitente = document.getElementById('mailMensaje');
const mailCarbonCopy = document.querySelectorAll('.mailCarbonCopy');

// Vista (por consola)
const mostrarEnvio = (destinatario, remitente, titulo, mensaje, ...argRest) => {
  console.log(`PARA: ${destinatario}`);
  console.log(`TITULO: ${titulo}`);
  console.log(`MENSAJE: ${mensaje}`);
  console.log(`FROM: ${remitente}`);
  for(const dato of argRest[0]){
    if(dato.value !== ''){
      console.log(`CC: ${dato.value}`);
    }
  }
}

document.querySelector('button').addEventListener('click', (event) => {
  event.preventDefault();
  mostrarEnvio(
    mailDestinatario.value,
    mailRemitente.value,
    mailTitulo.value,
    mailMensaje.value,
    mailCarbonCopy
  );
});