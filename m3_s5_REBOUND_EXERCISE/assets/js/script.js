/* Creación del objeto usuario */

class usuario {
  constructor(nombre, correo, trabajo, telefono, sobremi) {
    this.nombre = nombre;
    this.correo = correo;
    this.trabajo = trabajo;
    this.telefono = telefono;
    this.sobremi = sobremi;
  }
};

const form = document.querySelector('form');
const perfilNombre = document.getElementById('OutputName');
const perfilTrabajo = document.getElementById('OutputJob');
const perfilEmail = document.getElementById('OutputEmail');
const perfilTelefono = document.getElementById('OutputPhone');
const perfilSobreMi = document.getElementById('OutputAboutMe');

form.addEventListener('submit', (event) => {
  event.preventDefault(); // prevenir el envío del formulario

  // crear un objeto usuario con los valores del formulario
  const nuevoUsuario = new usuario(
    document.getElementById('InputName').value,
    document.getElementById('InputEmail').value,
    document.getElementById('InputJob').value,
    document.getElementById('InputPhone').value,
    document.getElementById('InputAboutMe').value
  );

  // actualizar la sección de información del perfil
  perfilNombre.textContent = nuevoUsuario.nombre;
  perfilTrabajo.textContent = nuevoUsuario.trabajo;
  perfilEmail.textContent = nuevoUsuario.correo;
  perfilTelefono.textContent = nuevoUsuario.telefono;
  perfilSobreMi.textContent = nuevoUsuario.sobremi;
});
