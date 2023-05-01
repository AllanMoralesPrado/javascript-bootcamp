
let getCodeButton = document.querySelector('#descuento>p');
let checkBox = document.getElementById('flexCheckDefault');

getCodeButton.addEventListener('click', ()=> {
  if(!checkBox.checked){
    alert('Para obtener un código de descuento debe aceptar los términos y condiciones');
  }
  else{
    const codigo = document.getElementById('codigo');
    codigo.innerHTML = 'MNO123ST';
  }
})

