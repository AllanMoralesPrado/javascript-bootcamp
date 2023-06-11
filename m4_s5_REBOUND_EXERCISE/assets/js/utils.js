// CLASE PRODUCTO
class Producto{
  // CAMPOS DE CLASE
  #nombre = 'Desconocido';
  #descripcion = 'No disponible';
  #precioUnitario;
  #stock;
  #imagen = '';  

  /**
   * Método constructor para crear una instacia de la clase Producto
   * @param {String} nombre - nombre del producto
   * @param {String} descripcion - descripcion del producto
   * @param {Number} precioUnitario - precio de una unidad de producto
   * @param {Number} stock - cantidad almacenada disponible de un producto
   * @param {String} imagen - ruta de archivo de imagen de un producto
   */
  constructor(nombre, descripcion, precioUnitario, stock, imagen){

    this.#nombre = nombre;
    this.#descripcion = descripcion;

    // Validar precioUnitario como número positivo
    if (typeof precioUnitario !== 'number' || precioUnitario <= 0) {
      throw new Error('El precio unitario debe ser un número positivo.');
    }
    this.#precioUnitario = precioUnitario;

    // Validar stock como número positivo
    if (typeof stock !== 'number' || stock <=0) {
      throw new Error('El stock debe ser un número positivo.');
    }
    this.#stock = stock;

    // Validar imagen como ruta de archivo
    if (typeof imagen !== 'string' || !/^\/?[a-zA-Z0-9-_./]+$/.test(imagen)) {
      throw new Error('La imagen debe ser una ruta de archivo válida.');
    }
    this.#imagen = imagen;
  }

  //GETTERS

  get nombre(){
    return this.#nombre;
  }

  get descripcion(){
    return this.#descripcion;
  }

  get precioUnitario(){
    return this.#precioUnitario;
  }

  get stock(){
    return this.#stock;
  }

  get imagen(){
    return this.#imagen;
  }

  get disponible(){
    return (this.#stock > 0);
  }

  get info(){
    return `
    Nombre: ${this.#nombre}
    Descripcion: ${this.#descripcion}
    Imagen: ${this.#imagen}`;
  }


  //SETTERS

  /**
   * Metodo para aumentar o disminuir el stock
   * @param {Number} cantidad - unidades adicionales
   */
  set stock(cantidad){
    const stockInicial = this.#stock;
    this.#stock += cantidad;
    if(this.#stock < 0){
      console.error("Valor de stock invalido! Abortado.");
      this.#stock = stockInicial;
    }
  }

  /**
   * Metodo estatico para calcular el precio total de llevar varias unidades de un producto
   * @param {Number} cantidad - numero de unidades de producto
   * @param {Producto} producto - instancia de la clase Producto
   * @returns {Number} - precio total por llevar 'cantidad' unidades por el 'precioUnitario' de un producto 'Producto'
   */
  static precioTotal(producto, cantidad = 0){
    return cantidad * producto.#precioUnitario;
  }
}


//CLASE TIENDA
class Tienda {
  constructor() {
    this.productos = [];
  }

  /**
   * Metodo que agrega un producto a la tienda mientras no exista en la tienda
   * @param {Producto} producto - instancia de la clase Producto 
   */
  agregarProducto(producto) {
    this.verificarProductoExistente(producto);
    this.productos.push(producto);
  }

  /**
   * Metodo que quita un producto de la tienda
   * @param {Producto} producto - producto a eliminar
   */
  quitarProducto(producto){
    this.verificarProductoExistente(producto);
    this.productos = this.productos.filter(producto => !(this.sonProductosIguales(producto)));
  }

  /**
   * Metodo que levanta un error personalizado si es que el nuevo producto que se añade ya existe en la tienda
   * @param {Producto} nuevoProducto - instancia de la clase Producto
   */
  verificarProductoExistente(nuevoProducto) {
    for (const productoExistente of this.productos) {
      if (this.sonProductosIguales(productoExistente, nuevoProducto)) {
        throw new Error(`El producto:
        ---------------------------
        ${productoExistente.info}
        ---------------------------
        ya existe en la tienda.`);
      }
    }
  }

  /**
   * Metodo que confirma si un producto es igual o semejante a otro
   * @param {Producto} producto1 - instancia de la clase Producto
   * @param {Producto} producto2 - instancia de la clase Producto
   * @returns {Boolean} - true si ambos productos son iguales 
   */
  sonProductosIguales(producto1, producto2) {
    return (
      (producto1.nombre === producto2.nombre 
        && producto1.descripcion === producto2.descripcion)
      || (producto1.nombre === producto2.nombre
        && producto1.imagen === producto2.imagen)
      || (producto1.descripcion === producto2.descripcion 
        && producto1.imagen === producto2.imagen)
    );
  }
}


// DATOS DE PRUEBA

let Simpleco = new Tienda();
let productoUno;
try{
  productoUno = new Producto(
    'Polera',
    'Color Negro',
    44_000,
    0, // error
    'assets/img/polera-negro.png'
  );
  
}catch(error){
  console.error(`ERROR: ${error.message}`);
}

// try{
//   for(let prod of poleras){
//     Simpleco.agregarProducto(prod);
//   }  
// }catch(error){
//   console.error(`ERROR\n ${error.message}`)
// }
