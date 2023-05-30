/** AUTOR: ALLAN MORALES
 *  PROPUESTAS DE MEJORA: UTILIZAR UN PATRÓN DE DISEÑO
 *  CRITICAS: ES MÁS ECONÓMICO UTILIZAR VANILLA JS, CON ESO ES SUFICIENTE PARA RESOLVER LOS REQUERIMIENTOS
 */

const ingredientes = ["Carne", "Pollo", "Tocino", "Mozzarella", "Champiñón", "Cebolla", "Piña", "Pimentón"];
let ingredientesSeleccionados = [];
const precioPizzaXL = 15000;
let precioExtras = 0;

const calcularExtras = (extras) => extras * 800;

const formatearPrecio = (valor) => {
  const cadena = String(valor);
  if(isNaN(valor) || cadena === ''){
    return '$0';
  }
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

const anadirAtributos = (elemento, atributos) => {
  for(const atributo in atributos){
    const valor = (atributos.hasOwnProperty(atributo)) ? atributos[atributo]:"";
    elemento.setAttribute(atributo, valor);
  }
}

const anadirCheckbox = (ingrediente) => {
  // Configuramos atributos en un objeto
  const atributos = {
    "input": {
      "type":"checkbox",
      "name":`check${ingrediente}`,
      "value":ingrediente,
      "class":"form-check-input",
      "id":`check${ingrediente}`
    },
    "label": {
      "class":"form-check-label",
      "for":`check${ingrediente}`,
    }
  };
  // Creamos div que contendrá la información
  const checkboxContainer = document.createElement("div");
  // Creamos input checkbox para el ingrediente
  const inputIngrediente = document.createElement("input");
  anadirAtributos(inputIngrediente, atributos["input"]);
  // Creamos label para el ingrediente
  const labelIngrediente = document.createElement("label");
  anadirAtributos(labelIngrediente, atributos["label"]);
  labelIngrediente.innerHTML = ingrediente;
  // Insertamos input y label en el div contenedor
  checkboxContainer.appendChild(inputIngrediente);
  checkboxContainer.appendChild(labelIngrediente);

  return checkboxContainer;
}

const mostrarIngredientes = (ingredientesSeleccionados) => {
  const listaSeleccionados = document.getElementById('listaSeleccionados');
  const listaExtras = document.getElementById('listaExtras');
  listaSeleccionados.innerHTML = "";
  listaExtras.innerHTML = "";
  // Mostrar seleccionados
  listaSeleccionados.innerHTML = ingredientesSeleccionados.toString();
  // Mostrar extras
  const ingredientesGratis = 3;
  if(ingredientesSeleccionados.length >= ingredientesGratis){
    const ingredientesExtras = ingredientesSeleccionados.slice(ingredientesGratis);
    precioExtras_.innerHTML = formatearPrecio(calcularExtras(ingredientesExtras.length));
    listaExtras.innerHTML = ingredientesExtras.toString();
  }
};

// PROGRAMA
// Cargar lista de ingredientes
const ingredientesCheckbox = document.getElementById("ingredientesCheckbox");
for(const ingrediente of ingredientes){
  ingredientesCheckbox.appendChild(anadirCheckbox(ingrediente));
}

// Calcular monto por ingredientes extra
for(const inputIngrediente of document.querySelectorAll('input[type="checkbox"]')){
  inputIngrediente.addEventListener('change', (event) => {
    if (event.target.checked) {
      ingredientesSeleccionados.push(inputIngrediente.value);
    } else {
      ingredientesSeleccionados = ingredientesSeleccionados.filter(
        ingrediente => ingrediente != ingredientesSeleccionados.find(
          ingrediente => ingrediente === inputIngrediente.value)
      );
    }
    mostrarIngredientes(ingredientesSeleccionados);
  })
};

// Precio PizzaXL
const precioPizzaXL_ = document.getElementById('precioPizzaXL');
precioPizzaXL_.innerHTML = formatearPrecio(precioPizzaXL);

// Precio Extras
const precioExtras_ = document.getElementById('precioExtras');
precioExtras_.innerHTML = formatearPrecio(precioExtras);

// Actualizar propina
const inputPropina = document.getElementById('inputPropina');
const monitorPropina = document.getElementById('monitorPropina');

// Este evento solo se puede usar una vez
let unaVez = false;
const defaultPropina = () => {
  monitorPropina.innerHTML = formatearPrecio(1000);
  unaVez = true;
}

inputPropina.addEventListener('click', () => {
  if(!unaVez){
    inputPropina.value = 1000;
    defaultPropina();
  }
});

// Ajustar monto propina
inputPropina.addEventListener('input', () => {
  monitorPropina.innerHTML = formatearPrecio(parseInt(inputPropina.value));
});

// Enviar propina
const botonPropina = document.getElementById('botonPropina');
botonPropina.addEventListener('click',() => {
  if(!inputPropina.value){
    alert('Aún no ha definido una propina');
  }
  else{
    alert(`Su propina de ${formatearPrecio(inputPropina.value)} ha sido enviada`);
  }
});