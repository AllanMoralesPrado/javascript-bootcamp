import * as utils from './utils.js';

document.addEventListener('DOMContentLoaded', function() {
  // Aquí colocas el código de "main.js"
  let isVIP = false;
utils.signUp.addEventListener('click', () => {
  utils.vip.classList.remove('fw-bold','fancy-link-warning');
  utils.vip.classList.add('text-dark');
  utils.signUp.classList.remove('text-dark', 'fw-medium');
  utils.signUp.classList.add('fancy-link-primary');
  isVIP = false;
  const usernameField = document.getElementById('usernameField');
  if(usernameField){
    usernameField.remove();
  }
  utils.message.innerHTML = utils.defaultMessage;
  utils.submit.classList.remove('btn-warning');
  utils.submit.classList.add('btn-primary');
});

utils.vip.addEventListener('click', () => {
  utils.vip.classList.add('fw-bold','fancy-link-warning');
  utils.vip.classList.remove('text-dark');
  utils.signUp.classList.add('text-dark','fw-medium');
  utils.signUp.classList.remove('fancy-link-primary');
  isVIP = true;
  const usernameField = document.getElementById('usernameField');
  if(!usernameField){
    const form = document.querySelector('form');
    const firstChild = form.firstChild;
    form.insertBefore(utils.usernameInput(),firstChild);
  }
  utils.message.innerHTML = utils.vipMessage;
  utils.submit.classList.remove('btn-primary');
  utils.submit.classList.add('btn-warning');
});

utils.submit.addEventListener('click', (event) => {
  event.preventDefault();
  
  if(utils.isChecked()){
    let usuario;
    if(isVIP){
      const inputUsername1 = document.getElementById('InputUsername1');
      usuario = new utils.VIP(utils.email.value, utils.password.value, inputUsername1.value);
    }
    else{
      usuario = new utils.Account(utils.email.value, utils.password.value);
    }
    utils.showModal(usuario);
  }
});


});


