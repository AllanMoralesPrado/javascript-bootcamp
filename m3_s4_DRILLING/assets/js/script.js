const validateEmail = (email) => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};

function itsOk(email, agreement){
  let ok = (validateEmail(email) && (agreement.checked));
  alert((ok) ? "¡Felicitaciones! Pronto escucharás de nosotros":"Parece que nos faltó algo");
}

const emailInput = document.getElementById('emailFormControlInput');
const agreementCheck = document.getElementById('flexCheckDefault');
const okButton = document.getElementById('okButton');

okButton.addEventListener('click', () => {
  itsOk(emailInput.value, agreementCheck);
})