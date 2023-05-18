// OBJETOS

const presupuestoBoton = document.getElementById('presupuestoBoton');

const presupuestoForm = {
  monto: document.getElementById('presupuestoInput'),
};

const gastoForm = {
  nombre: document.getElementById('gastoNombreInput'),
  monto: document.getElementById('gastoMontoInput'),
  boton: document.getElementById('gastoBoton')
}

const monitor = {
  presupuesto: document.getElementById('presupuesto'),
  gastos: document.getElementById('gastos'),
  saldo: document.getElementById('saldo')
}

const balance = {
  _presupuesto: 0,
  _gastos: 0,
  get presupuesto() {
    return this._presupuesto;
  },
  /**
   * @param {Number} monto
   */
  set presupuesto(monto) {
    this._presupuesto = monto;
  },
  get gastos() {
    return this._gastos;
  },
  /**
   * @param {Number} monto
   */
  set sumarGastos(monto) {
    this._gastos += monto;
  },
  get saldo(){
    return this._presupuesto - this.gastos;
  }
}

let num_gastos = 0;

function crearClave(){
  let cadena = "";
  let random = Math.floor(Math.random() * 5) + 6;
  for (let i = 0; i < random; i++){
    cadena = cadena.concat(String.fromCharCode(Math.floor(Math.random() * 26) + 65));
  }
  return cadena;
}

function cargarBalance(balance){
  monitor.presupuesto.innerHTML = `$ ${balance.presupuesto}`;
  monitor.gastos.innerHTML = `$ ${balance.gastos}`;
  monitor.saldo.innerHTML = `$ ${balance.saldo}`;
  //Crear Aviso de insuficiente presupuesto
  const advertencia = document.getElementById('advertencia');
  if(balance.saldo < 0 && !(advertencia)){
    const monitor_ = document.getElementById('monitor');
    monitor.saldo.style.color = 'red';
    const advertencia = document.createElement('div');
    advertencia.id = 'advertencia';
    advertencia.classList.add('row','text-center','justify-content-center');
    const mensaje = document.createElement('div');
    mensaje.classList.add('col-10','bg-warning', 'rounded-3', 'py-2');
    mensaje.innerHTML = 'ADVERTENCIA: El gasto excede el presupuesto.';
    advertencia.appendChild(mensaje);
    monitor_.appendChild(advertencia);
  }else{
    if (!(balance.saldo < 0) && advertencia){
      monitor.saldo.style.color = '#212529';
      advertencia.remove();
    }
  }
}

function inputError(input, movimiento){ 
  const aviso = document.createElement('span');
  aviso.id = movimiento + 'Error';
  aviso.classList.add('bg-warning','rounded-3','p-1', 'fw-semibold');
  aviso.innerHTML = 'Ingrese un valor válido';
  input.parentNode.insertBefore(aviso,input);
}

presupuestoBoton.addEventListener('click', () => {
  let valorPresupuesto = parseInt(presupuestoForm.monto.value);
  const error = document.getElementById('presupuestoError');
  if(isNaN(valorPresupuesto) || (valorPresupuesto == null)){
    if(!error){
      inputError(presupuestoForm.monto, 'presupuesto');
    }
  }
  else{
    balance.presupuesto = valorPresupuesto;
    cargarBalance(balance);
    if(error){
      error.remove();
    }
  }
})

gastoForm.boton.addEventListener('click', () => {
  let nombreGasto = gastoForm.nombre.value;
  let valorGasto = parseInt(gastoForm.monto.value);
  const error = document.getElementById('gastoError');
  if(isNaN(valorGasto) || (valorGasto == null)){
    if(!error){
      inputError(gastoForm.monto, 'gasto');
    }
  }
  else{
    balance.sumarGastos = valorGasto;
    cargarBalance(balance);
    registrarGasto(nombreGasto, valorGasto);
    if(error){
      error.remove();
    }
  } 
})

function registrarGasto(nombreGasto, valorGasto){
  const listaGastos = document.getElementById('gastosScroll');
  const nuevoRegistro = document.createElement('div');
  let claveRegistro = crearClave();
  nuevoRegistro.id = claveRegistro;
  nuevoRegistro.classList.add('row','text-start');
  nuevoRegistro.innerHTML = `<div class="col-6">
  ${nombreGasto}
</div>
<div class="col-4" id=${claveRegistro + '-valor'}>
  $ ${valorGasto}
</div>
<div class="col-2">
  <i class="fa-solid fa-trash-can delete-button" id=${claveRegistro + '-borrar'} style="color:#0d6efd;"></i>
</div>`;
  listaGastos.append(nuevoRegistro);
  habilitarBorrado(claveRegistro);
  if(num_gastos++ > 5 && !(listaGastos.classList.contains('overflow-y-scroll'))){
    listaGastos.classList.add('overflow-y-scroll');
  }
}

function habilitarBorrado(claveRegistro){
  const listaGastos = document.getElementById('gastosScroll');
  //Obtener valor del gasto - El SPLIT GENERA UN ARREGLO
  const valorGasto = parseInt(document.getElementById(claveRegistro + '-valor').innerHTML.split('$ ')[1]);
  //Obtener Boton
  const boton = document.getElementById(claveRegistro + '-borrar');
  //Darle evento al boton
  boton.addEventListener('click',() => {
    balance.sumarGastos = (-1)*valorGasto;
    cargarBalance(balance);
    const registroGasto = document.getElementById(claveRegistro);
    registroGasto.remove();
    if(num_gastos-- <= 6 && listaGastos.classList.contains('overflow-y-scroll')){
      listaGastos.classList.remove('overflow-y-scroll');
    }
  })
}
