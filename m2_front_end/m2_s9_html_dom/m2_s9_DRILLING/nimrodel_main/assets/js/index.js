function mostrarFormCom() {
    var docwidth = window.matchMedia("(min-width:576px) and (max-width: 767px)");
    if (docwidth.matches) {
        document.getElementById('Comuniquemonos').style.display = "flex";
        document.getElementById('Reserva').style.display = "none";
    }
}

function mostrarFormRes() {
    var docwidth = window.matchMedia("(min-width:576px) and (max-width: 767px)");
    if (docwidth.matches) {
        document.getElementById('Reserva').style.display = "flex";
        document.getElementById('Comuniquemonos').style.display = "none";
    }
}

const formCom = document.querySelector('#formCom');
const formRes = document.querySelector('#formRes');

formCom.addEventListener('submit', (event) => {
  event.preventDefault();
  const inputs = formCom.querySelectorAll('input');
  let isValid = true;

  inputs.forEach(input => {
    if (!input.value.trim()) {
      isValid = false;
      alert(`El campo '${input.name}' es obligatorio`);
    }
  });

  if (isValid) {
    alert(`Gracias ${inputs[0].value} hemos recibido su petición y enviaremos una pronta respuesta al correo ${inputs[1].value}`);
  }
});


formRes.addEventListener('submit', (event) => {
    event.preventDefault();
    const inputs = formRes.querySelectorAll('input');
    let isValid = true;
  
    inputs.forEach(input => {
      if (!input.value.trim()) {
        isValid = false;
        alert(`El campo '${input.name}' es obligatorio`);
      }
    });
  
    if (isValid) {
      alert(`Gracias ${inputs[0].value} hemos recibido su petición y enviaremos una pronta respuesta al correo ${inputs[1].value}`);
    }
  });