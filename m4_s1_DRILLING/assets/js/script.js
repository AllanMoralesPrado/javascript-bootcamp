//JQUERY
$(document).ready(() => {
  const $form = $('#form');
  const $nombre = $('#nombre');
  const $apellido = $('#apellido');
  const $correo = $('#correo');
  const $mensaje = $('#mensaje');

  $form.on('submit', (event) => {
    event.preventDefault();
    const $motivo = $('#motivo');
    const $motivoSeleccionado = $motivo.find('option:selected');
    const mensajeCompleto = `DE: ${$nombre.val()} ${$apellido.val()} (${$correo.val()})
      ASUNTO: ${$motivoSeleccionado.text()}
      MENSAJE:
      ${$mensaje.val()}`;
    alert(mensajeCompleto);
  });
});

//VANILLA JS
// const form = document.getElementById('form');
// const nombre = document.getElementById('nombre');
// const apellido = document.getElementById('apellido');
// const correo = document.getElementById('correo');
// const mensaje = document.getElementById('mensaje');

// form.addEventListener('submit', (event) => {
//   event.preventDefault();
//   const motivo = document.getElementById('motivo');
//   const motivoSeleccionado = motivo.options[motivo.selectedIndex];
//   alert(`DE: ${nombre.value} ${apellido.value} (${correo.value})
//       ASUNTO: ${motivoSeleccionado.text}
//       MENSAJE: 
//       ${mensaje.value}`);
// })