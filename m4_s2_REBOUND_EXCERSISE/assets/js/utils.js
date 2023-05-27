//- - - - utils.js - - - -
// Autor: Allan Morales
class Account {
  constructor(email, password) {
    this._email = email;
    this._password = password;
  }

  get email() {
    return this._email;
  }

  set email(email) {
    this._email = email;
  }

  get password() {
    return this._password;
  }

  set password(password) {
    this._password = password;
  }
}

class VIP extends Account {
  constructor(email, password, username) {
    super(email, password);
    this._username = username;
  }

  get username() {
    return this._username;
  }

  set username(username) {
    this._username = username;
  }
}

// Mensajes y elementos
const signUp = document.getElementById('signUp');
const vip = document.getElementById('vip');
const message = document.getElementById('message');
const defaultMessage = "Complete los siguientes campos para crear su cuenta regular. Considere que a este tipo de cuenta se le asigna un nombre de usuraio.";
const vipMessage = "Complete los siguientes campos para crear su cuenta VIP. Por ser un usuario VIP podrá crear su nombre de usuario personalizado.";
const email = document.getElementById('InputEmail1');
const password = document.getElementById('InputPassword1');
const submit = document.getElementById('submit-btn');

// DOM
let usernameInput = () => {
  //div
  const div = document.createElement('div');
  div.classList.add('mb-3');
  div.id = 'usernameField';
  //label
  const label = document.createElement('label');
  label.classList.add('form-label');
  label.setAttribute('for','InputUsername1');
  label.innerHTML = 'NOMBRE DE USUARIO';
  //input
  const input = document.createElement('input');
  input.classList.add('form-control');
  input.setAttribute('placeholder', 'Ingrese su nombre de usuario');
  input.setAttribute('type', 'text');
  input.required = true;
  input.id = 'InputUsername1';
  //Building field
  div.appendChild(label);
  div.appendChild(input);
  return div;
}

let showModal = (account) => {
  const randomNumber = Math.floor(Math.random() * 999) + 1;
  let username = account?.username;
  username ??= `Usuario${randomNumber}`;

  const exampleModalLabel = document.getElementById('exampleModalLabel');
  exampleModalLabel.innerHTML = `Bienvenido ${username}`;
  
  const modalBody = document.querySelector('.modal-body');
  let defaultDescription = `${(account?.username) ? ('Usuario: ' + account.username + ' '):''}Email: ${account.email} Contraseña: ${account.password}`
  modalBody.innerHTML = defaultDescription;
}

const isChecked = () => {
  const checkbox = document.getElementById('Check1');
  if (!checkbox.checked) {
    alert("Debes aceptar los términos y condiciones");
    return false; // Evita el envío del formulario si el checkbox no está marcado
  }

  // Continuar con el envío del formulario si el checkbox está marcado
  return true;
}

export{
  Account,
  VIP,
  signUp,
  vip,
  message,
  defaultMessage,
  vipMessage,
  email,
  password,
  submit,
  usernameInput,
  showModal,
  isChecked
};