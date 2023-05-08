var producto = function(marca, modelo, precio, imagen){
  this.marca = marca;
  this.modelo = modelo;
  this.precio = precio;
  this.imagen = imagen;
}

const productoAsus = new producto('ASUS', 'Republic of Gamers G74SX-DH72 17.3" Laptop Computer', '4990', 'assets/img/producto-asus.jpg');
const productoMac = new producto('Apple', '13.3" MacBook Pro (Mid 2017, Silver)', '5990', 'assets/img/producto-macbook.jpg');

const imagenProducto = document.getElementById('ImagenProd');
const tituloProducto = document.getElementById('TituloProd');
const precioProducto = document.getElementById('PrecioProd');

const ficha = document.getElementById('ficha');
const verOtroProd = document.getElementById('VerOtroProd');


ficha.addEventListener('click', ()=>{
  imagenProducto.innerHTML = `<img src=${productoAsus.imagen} alt="producto" width="100%"></img>`;
  tituloProducto.innerHTML = productoAsus.marca + " " + productoAsus.modelo;
  precioProducto.innerHTML = '$' + String(productoAsus.precio);
});

// Definición de la función de actualización de producto
const actualizarProducto = () => {
  imagenProducto.innerHTML = `<img src=${productoMac.imagen} alt="producto" width="100%"></img>`;
  tituloProducto.innerHTML = productoMac.marca + ' ' + productoMac.modelo;
  precioProducto.innerHTML = '$' + String(productoMac.precio);
}

// Asignación de la función al evento click de VerOtroProd
verOtroProd.addEventListener('click', actualizarProducto);

// Ejecución automática de la función actualizarProducto
actualizarProducto();