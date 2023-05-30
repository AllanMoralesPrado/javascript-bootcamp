/** ACLARACIÓN
 *  ESTE CÓDIGO FUE ADAPTADO DEL ARCHIVO ORIGINAL CON IA Y TIENE ERRORES
 *  SOLO SERÁ DE PROVECHO PARA ADAPTARLO Y LOGRAR QUE FUNCIONE CON UN PATRON
 *  DE DESARROLLO MVC, SINTAXIS JQUERY Y NOTACION ECMASCRIPT2015
 */

// MODELO
const ingredientesModel = {
  ingredientes: ["Carne", "Pollo", "Tocino", "Mozzarella", "Champiñón", "Cebolla", "Piña", "Pimentón"],
  ingredientesSeleccionados: [],
  precioPizzaXL: 15000,

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
  renderIngredientes: function (ingredientes) {
    const ingredientesCheckbox = $('#ingredientesCheckbox');
    ingredientes.forEach(ingrediente => {
      const checkbox = this.createCheckbox(ingrediente);
      ingredientesCheckbox.append(checkbox);
    });
  },

  createCheckbox: function (ingrediente) {
    const checkboxContainer = $('<div>').addClass('form-check');
    const inputIngrediente = $('<input>').attr({
      type: 'checkbox',
      name: `check${ingrediente}`,
      value: ingrediente,
      class: 'form-check-input',
      id: `check${ingrediente}`
    });
    const labelIngrediente = $('<label>').attr({
      class: 'form-check-label',
      for: `check${ingrediente}`
    }).text(ingrediente);

    checkboxContainer.append(inputIngrediente, labelIngrediente);
    return checkboxContainer;
  },

  renderSeleccionados: function (ingredientesSeleccionados) {
    const listaSeleccionados = $('#listaSeleccionados');
    listaSeleccionados.html(ingredientesSeleccionados.join(', '));
  },

  renderExtras: function (ingredientesExtras) {
    const listaExtras = $('#listaExtras');
    listaExtras.html(ingredientesExtras.join(', '));
  },

  renderPrecioPizzaXL: function (precioPizzaXL) {
    const precioPizzaXL_ = $('#precioPizzaXL');
    precioPizzaXL_.text(ingredientesModel.formatearPrecio(precioPizzaXL));
  },

  renderPrecioExtras: function (precioExtras) {
    const precioExtras_ = $('#precioExtras');
    precioExtras_.text(ingredientesModel.formatearPrecio(precioExtras));
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
    $(document).on('change', 'input[type="checkbox"]', (event) => {
      const ingrediente = $(event.target).val();
      const checked = $(event.target).prop('checked');
      this.toggleIngrediente(ingrediente, checked);
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
    this.renderSeleccionados();
    this.renderExtras();
  },

  renderSeleccionados: function () {
    ingredientesView.renderSeleccionados(ingredientesModel.ingredientesSeleccionados);
  },

  renderExtras: function () {
    const ingredientesGratis = 3;
    if (ingredientesModel.ingredientesSeleccionados.length > ingredientesGratis) {
      const ingredientesExtras = ingredientesModel.ingredientesSeleccionados.slice(ingredientesGratis);
      ingredientesView.renderExtras(ingredientesExtras);
    }
  },

  renderPrecioPizzaXL: function () {
    ingredientesView.renderPrecioPizzaXL(ingredientesModel.precioPizzaXL);
  },

  renderPrecioExtras: function () {
    const ingredientesExtras = ingredientesModel.ingredientesSeleccionados.slice(3);
    const precioExtras = ingredientesModel.calcularExtras(ingredientesExtras.length);
    ingredientesView.renderPrecioExtras(precioExtras);
  },

  addPropinaListeners: function () {
    const inputPropina = $('#inputPropina');
    const monitorPropina = $('#monitorPropina');
    const botonPropina = $('#botonPropina');

    let unaVez = false;

    const defaultPropina = () => {
      monitorPropina.text(ingredientesModel.formatearPrecio(1000));
      unaVez = true;
    };

    inputPropina.on('click', () => {
      if (!unaVez) {
        inputPropina.val(1000);
        defaultPropina();
      }
    });

    inputPropina.on('input', () => {
      monitorPropina.text(ingredientesModel.formatearPrecio(parseInt(inputPropina.val())));
    });

    botonPropina.on('click', () => {
      const propinaValue = inputPropina.val();
      if (!propinaValue) {
        alert('Aún no ha definido una propina');
      } else {
        alert(`Su propina de ${ingredientesModel.formatearPrecio(propinaValue)} ha sido enviada`);
      }
    });
  }
};

// Inicializar el controlador
$(document).ready(() => {
  ingredientesController.init();
});
