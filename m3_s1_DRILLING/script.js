/* 
 * REQUERIMIENTOS 
 * 
 * 1. La caja informativa, que insta a las personas a inscribirse, no debe ser codificada directamente en el HTML, sino que, debe ser generada dinámicamente utilizando JavaScript. 
 * 2. La fecha mostrada en la carta informativa, debe ser la del día en que la persona trata de inscribirse, pero aparte de ser generado dinámicamente, los valores del día, el mes y el año se obtendrán empleando el objeto Date() de JavaScript.
 */

// 1. Caja informativa con jQuery
$(document).ready(()=>{
    var infoBox = $(`<div class="container">
    <div class="row">
      <div class="col-xs-4 col-xs-offset-4" id="infoBox" style="margin-top: 4rem;">
        <h1><b>¡Apresúrese!</b></h1>
          <div class="col-xs-10 col-xs-offset-1">
            <h2><b>El plazo máximo para inscribirse es solo 2 días después de la siguiente fecha:</b></h2>
          </div>
          <div class="col-xs-12">
            <h1 id="insertDate"><b>30 / 12 / 2020</b></h1>
          </div>
      </div>
    </div>
  </div>`);
  $('.container').before(infoBox);

  // ver 2.
  mueveCalendario();
});

// 2. Fecha en tiempo real
// 2.1 Crear actualizador del calendario
function mueveCalendario(){

    // calendario
    let momentoActual = new Date();
    let dia = momentoActual.getDate();
    let mes = momentoActual.getMonth() + 1;
    let anio = momentoActual.getFullYear();

    let fechaImprimible = dia + ' / ' + mes + ' / ' + anio;
    $('#insertDate').html(`<b>${fechaImprimible}</b>`);

    setTimeout("mueveCalendario()",1000);
}