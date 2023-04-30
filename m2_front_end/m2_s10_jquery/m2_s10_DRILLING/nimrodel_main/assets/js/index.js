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
  });

/* m2_s10_DRILLING */

$(document).ready(function(){
  $("#resBtn").click(function(){
    var nombre = $("#formRes #Nombre").val();
    var asistentes = $("#formRes #cantidadDeAsistentes").val();
    var correo = $("#formRes #Email").val();
    alert(`Estimado: ${nombre} agradecemos por reservar con nosotros. Hemos registrado ${asistentes} asistentes. Se ha enviado el código de confirmación al correo ${correo}
Gracias por preferirnos`);
  })

  function showModalOnClick(source, modal) {
  var jpg = $(source + '>img').clone();
  var h4 = $(source + ' div>h4').clone();
  var p = $(source + ' div>p').clone();

  $(source).click(function(){
    $(modal).prepend(jpg).css({'width':'50vw','height':'auto'});
    $(modal).prepend(p).css('text-align','center');
    $(modal).prepend(h4).css('text-align','center');
    $(modal).show();
  });

  $(modal + ' .close-button').click(function(){
    p.remove();
    jpg.remove();
    h4.remove();
    $(modal).hide();
  });
}

showModalOnClick('#items-bebidas', '#bebidas-modal');
showModalOnClick('#items-tablas', '#tablas-modal');
showModalOnClick('#items-shop', '#shop-modal');

})

/* 'body:not(' + modal + ':not(.close-button))'  */
/* modal + ' .close-button' */