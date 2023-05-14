const boton = document.getElementById('formButton');

const reserva = new Proxy({},{
  set: (target, prop, val) => {
    if(prop === "edad" && val < 18){
      alert('Debes ser mayor de edad para crear una reservación');
      for (const key in target) {
        delete target[key];
      }
      return false;
    }
    target[prop] = val;
    return true;
  },
});

boton.addEventListener('click',(event) => {
  event.preventDefault();
  
  const nombre = document.getElementById('inputName').value;
  const apellido = document.getElementById('inputLastName').value;
  const correo = document.getElementById('inputEmail').value;
  const fecha = document.getElementById('inputDate').value;
  const edad = parseInt(document.getElementById('inputAge').value);

  reserva.nombre = nombre;
  reserva.apellido = apellido;
  reserva.correo = correo;
  reserva.fecha = fecha;
  reserva.edad = edad;

  console.log(reserva);
  
})