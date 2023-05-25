// Autor: Allan Morales
/**
 * Calcula el valor de cada cuota para un préstamo dado.
 *
 * @param {number} deuda - La cantidad de dinero adeudada.
 * @param {number} valorInteres - El interés aplicado al préstamo.
 * @param {number} cuotas - El número de cuotas en las que se dividirá el préstamo.
 * @returns {number} - El valor de cada cuota.
 */
const valorCuota = (deuda, valorInteres, cuotas) => parseInt((deuda + valorInteres) / cuotas);

/**
 * Calcula el interés aplicado al préstamo
 * 
 * @param {Number} deuda - La cantidad de dinero adeudada.
 * @param {Number} porcentaje - El porcentaje de interés que aplica a la deuda.
 * @returns {Number} - El valor del interés.
 */
const valorInteres = (deuda, porcentaje) => deuda * porcentaje * 0.01;

/**
 * 
 * @param {Number} valorCuota - El valor de cada cuota para un préstamo dado.
 * @returns {String} - El valor cuota formateado a texto de la forma /\$\d{1,3}(?:\.\d{3})*$/ 
 */
const formatearCuota = (valorCuota) => {
  const cadena = String(valorCuota);
  let formato = '';
  
  let contador = 0;
  for (let i = cadena.length - 1; i >= 0; i--) {
    formato = cadena.charAt(i) + formato;
    contador++;
    if (contador % 3 === 0 && i !== 0) {
      formato = '.' + formato;
    }
  }
  
  return '$' + formato;
}

//JQuery
$(document).ready(() => {
  const form = $('#form');
  const wannaPay = $('#wannaPay');
  const interestRate = $('#interestRate');
  const installment = $('#installment');

  form.on('submit', (event) => {
    event.preventDefault();

    const wannaPayValue = parseInt(wannaPay.val());
    const interestRateValue = parseInt(interestRate.val());
    const installmentValue = parseInt(installment.val());
    const isMessage = $('#message');
  
    if (isMessage.length) {
      isMessage.remove();
    }

    const message = $('<div></div>', {
      id: 'message',
      class: 'row text-start text-gradient fs-2 fw-semibold px-2',
      html: `¡NO TE PREOCUPES! PUEDES PAGARLO EN ${installmentValue} CUOTAS DE ${formatearCuota(valorCuota(wannaPayValue, valorInteres(wannaPayValue, interestRateValue), installmentValue))}`
    });

    form.append(message);
  });
});


//Vanilla JS
// const form = document.getElementById('form');
// const wannaPay = document.getElementById('wannaPay');
// const interestRate = document.getElementById('interestRate');
// const installment = document.getElementById('installment');

// form.addEventListener('submit', (event) => {
//   event.preventDefault();  

//   let wannaPayValue = parseInt(wannaPay.value);
//   let interestRateValue = parseInt(interestRate.value);
//   let installmentValue = parseInt(installment.value);
//   const isMessage = document.getElementById('message');
  
//   if(isMessage){
//     isMessage.remove();
//   }

//   const message = document.createElement('div');
//   message.id = 'message';
//   message.classList.add('row', 'text-start', 'text-gradient', 'fs-2', 'fw-semibold', 'px-2');

//   message.innerHTML = `¡NO TE PREOCUPES! PUEDES PAGARLO EN ${installmentValue} CUOTAS DE ${formatearCuota(valorCuota(wannaPayValue, valorInteres(wannaPayValue, interestRateValue), installmentValue))}`
//   form.appendChild(message);
// });