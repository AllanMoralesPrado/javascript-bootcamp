let sitio = {
  nombre: "ecamp",
};

let handler = {
  get: function(target, prop, receiver) {
    console.log(`GET ${prop}`);
    return Reflect.get(target, prop, receiver);
  },
  set: function(target, prop, value, receiver) {
    console.log(`SET ${prop} = ${value}`);
    return Reflect.set(target, prop, value, receiver);
  }
};

let proxy = new Proxy(sitio, handler);

// usando un GET del objeto sitio
let nombre = proxy.nombre;
// usando un SET del objeto sitio
proxy.nombre = "ECAMP";

console.log(nombre)