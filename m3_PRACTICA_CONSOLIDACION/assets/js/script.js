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
}

presupuestoBoton.addEventListener('click', () => {
  let valorPresupuesto = parseInt(presupuestoForm.monto.value);
  balance.presupuesto = valorPresupuesto;
  cargarBalance(balance);
})

gastoForm.boton.addEventListener('click', () => {
  let nombreGasto = gastoForm.nombre.value;
  let valorGasto = parseInt(gastoForm.monto.value);
  balance.sumarGastos = valorGasto;
  cargarBalance(balance);
  registrarGasto(nombreGasto, valorGasto);
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
}

function habilitarBorrado(claveRegistro){
  //Obtener valor del gasto
  const valorGasto = parseInt(document.getElementById(claveRegistro + '-valor').innerHTML.split('$ ')[1]);
  //Obtener Boton
  const boton = document.getElementById(claveRegistro + '-borrar');
  //Darle evento al boton
  boton.addEventListener('click',() => {
    balance.sumarGastos = (-1)*valorGasto;
    cargarBalance(balance);
    const registroGasto = document.getElementById(claveRegistro);
    registroGasto.remove();
  })
}
