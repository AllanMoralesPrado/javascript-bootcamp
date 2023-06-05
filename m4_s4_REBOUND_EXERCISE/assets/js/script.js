/* AUTOR: ALLAN MORALES */

// FORM ELEMENTS
const nameInput = document.getElementById('name');
const lastName = document.getElementById('lastName');
const phoneNumber = document.getElementById('phoneNumber');
const email = document.getElementById('email');
const note = document.getElementById('note');
const submit = document.querySelector('form');

// METODO MOSTRARDATOS
const mostrarDatos = ({
  firstName,
  lastName,
  email,
  phoneNumber
}) => {
  const nombreCompleto = `${firstName} ${lastName}`;
  return `Nombre: ${nombreCompleto} Email:${email} ${phoneNumber}`;
};

const mostrarVentana = (modalContainer, {
  firstName,
  lastName,
  email,
  phoneNumber
}) => {
  modalContainer.style.display = 'block';
  const modalContent = document.querySelector('.modal-content');
  const nombreCompleto = `${firstName} ${lastName}`;
  modalContent.innerHTML = `
  <div class="pb-1 px-1" style="display:flex; justify-content: space-between;">
    <h3>Contacto Guardado</h3>
    <span id="crossButton" class="close">X</span>
  </div>
  <hr>
  <div class="pb-1 px-1" style="text-align:center; padding-top: 1rem;">
    Nombre: ${nombreCompleto} Email:${email} ${phoneNumber}
  </div>
  <hr>
  <div class="px-1" style="text-align:right; padding-top: 1rem;">
    <a id="modalCallButton" class="close" href="tel:${phoneNumber}">LLamar</a>
    <a id="modalEmailButton" class="close" href="mailto:${email}">Enviar Correo</a>
  </div>`;
  const close = document.querySelectorAll(".close");
  close.forEach(
    addEventListener("click", ()=> {
      modalContent.innerHTML = '';
      modalContainer.style.display = 'none';
    })
  );
};

// EVENT
submit.addEventListener('submit', (event) => {
  event.preventDefault();
  const datosContacto = {
    firstName: nameInput.value,
    lastName: lastName.value,
    phoneNumber: phoneNumber.value,
    email: email.value,
  };
  const modalContainer = document.getElementById('modalContainer');
  mostrarVentana(modalContainer, datosContacto);

})