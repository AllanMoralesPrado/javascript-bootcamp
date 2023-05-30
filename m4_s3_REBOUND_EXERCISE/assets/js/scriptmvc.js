/** ACLARACIÓN
 *  ESTE CÓDIGO FUE ADAPTADO DEL ARCHIVO ORIGINAL CON IA Y TIENE ERRORES
 *  SOLO SERÁ DE PROVECHO PARA ADAPTARLO Y LOGRAR QUE FUNCIONE CON UN PATRON
 *  DE DESARROLLO MVC.
 */

// MODELO
const ingredientesModel = {
  ingredientes: ["Carne", "Pollo", "Tocino", "Mozzarella", "Champiñón", "Cebolla", "Piña", "Pimentón"],
  ingredientesSeleccionados: [],
  precioPizzaXL: 15000,
  precioExtras: 0,

  calcularExtras: function (extras) {
    return extras * 800;
  },

  formatearPrecio: function (valor) {
    const cadena = String(valor);
    if (isNaN(valor) || cadena === '') {
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
};

// VISTA
const ingredientesView = {
  ingredientesCheckbox: document.getElementById("ingredientesCheckbox"),
  listaSeleccionados: document.getElementById('listaSeleccionados'),
  listaExtras: document.getElementById('listaExtras'),
  precioPizzaXL: document.getElementById('precioPizzaXL'),
  precioExtras: document.getElementById('precioExtras'),

  renderIngredientes: function (ingredientes) {
    this.ingredientesCheckbox.innerHTML = "";
    for (const ingrediente of ingredientes) {
      const checkbox = this.anadirCheckbox(ingrediente);
      this.ingredientesCheckbox.appendChild(checkbox);
    }
  },

  renderSeleccionados: function (ingredientesSeleccionados) {
    this.listaSeleccionados.innerHTML = ingredientesSeleccionados.join(", ");
  },

  renderExtras: function (ingredientesExtras) {
    this.listaExtras.innerHTML = ingredientesExtras.join(", ");
  },

  renderPrecioPizzaXL: function (precioPizzaXL) {
    this.precioPizzaXL.innerHTML = ingredientesModel.formatearPrecio(precioPizzaXL);
  },

  renderPrecioExtras: function (precioExtras) {
    this.precioExtras.innerHTML = ingredientesModel.formatearPrecio(precioExtras);
  },

  anadirCheckbox: function (ingrediente) {
    // Configuramos atributos en un objeto
    const atributos = {
      "input": {
        "type": "checkbox",
        "name": `check${ingrediente}`,
        "value": ingrediente,
        "class": "form-check-input",
        "id": `check${ingrediente}`
      },
      "label": {
        "class": "form-check-label",
        "for": `check${ingrediente}`,
      }
    };
    // Creamos div que contendrá la información
    const checkboxContainer = document.createElement("div");
    // Creamos input checkbox para el ingrediente
    const inputIngrediente = document.createElement("input");
    this.anadirAtributos(inputIngrediente, atributos["input"]);
    // Creamos label para el ingrediente
    const labelIngrediente = document.createElement("label");
    this.anadirAtributos(labelIngrediente, atributos["label"]);
    labelIngrediente.innerHTML = ingrediente;
    // Insertamos input y label en el div contenedor
    checkboxContainer.appendChild(inputIngrediente);
    checkboxContainer.appendChild(labelIngrediente);

    return checkboxContainer;
  },

  anadirAtributos: function (elemento, atributos) {
    for (const atributo in atributos) {
      const valor = atributos.hasOwnProperty(atributo) ? atributos[atributo] : "";
      elemento.setAttribute(atributo, valor);
    }
  }
};

// CONTROLADOR
const ingredientesController = {
  init: function () {
    this.renderIngredientes();
    this.addIngredientesListeners();
    this.renderPrecioPizzaXL();
    this.renderPrecioExtras();
    this.addPropinaListeners();
  },

  renderIngredientes: function () {
    ingredientesView.renderIngredientes(ingredientesModel.ingredientes);
  },

  addIngredientesListeners: function () {
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');
    checkboxes.forEach(checkbox => {
      checkbox.addEventListener('change', (event) => {
        this.toggleIngrediente(event.target.value, event.target.checked);
      });
    });
  },

  toggleIngrediente: function (ingrediente, checked) {
    if (checked) {
      ingredientesModel.ingredientesSeleccionados.push(ingrediente);
    } else {
      ingredientesModel.ingredientesSeleccionados = ingredientesModel.ingredientesSeleccionados.filter(
        item => item !== ingrediente
      );
    }
    this.renderIngredientesSeleccionados();
  },

  renderIngredientesSeleccionados: function () {
    const ingredientesSeleccionados = ingredientesModel.ingredientesSeleccionados;
    ingredientesView.renderSeleccionados(ingredientesSeleccionados);

    const ingredientesGratis = 3;
    if (ingredientesSeleccionados.length >= ingredientesGratis) {
      const ingredientesExtras = ingredientesSeleccionados.slice(ingredientesGratis);
      const precioExtras = ingredientesModel.calcularExtras(ingredientesExtras.length);
      ingredientesView.renderExtras(ingredientesExtras);
      ingredientesView.renderPrecioExtras(precioExtras);
    } else {
      ingredientesView.renderExtras([]);
      ingredientesView.renderPrecioExtras(0);
    }
  },

  renderPrecioPizzaXL: function () {
    ingredientesView.renderPrecioPizzaXL(ingredientesModel.precioPizzaXL);
  },

  addPropinaListeners: function () {
    const inputPropina = document.getElementById('inputPropina');
    const monitorPropina = document.getElementById('monitorPropina');
    const botonPropina = document.getElementById('botonPropina');

    let unaVez = false;
    const defaultPropina = function () {
      monitorPropina.innerHTML = ingredientesModel.formatearPrecio(1000);
      unaVez = true;
    };

    inputPropina.addEventListener('click', () => {
      if (!unaVez) {
        inputPropina.value = 1000;
        defaultPropina();
      }
    });

    inputPropina.addEventListener('input', () => {
      monitorPropina.innerHTML = ingredientesModel.formatearPrecio(parseInt(inputPropina.value));
    });

    botonPropina.addEventListener('click', () => {
      if (!inputPropina.value) {
        alert('Aún no ha definido una propina');
      } else {
        alert(`Su propina de ${ingredientesModel.formatearPrecio(inputPropina.value)} ha sido enviada`);
      }
    });
  }
};

ingredientesController.init();
