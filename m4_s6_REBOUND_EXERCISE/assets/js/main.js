let dom = document.querySelectorAll(".hora");

const delay = [0, 6, 5, 0, 7, 12, 13];

window.addEventListener("load", (event) => {
  // Hora de Santiago
  let desfase = new Date();
  desfase.setHours(delay[0]);
  dom[0].innerHTML = desfase.toLocaleTimeString("es-CL");

  setInterval(() => {
    let desfase = new Date();
    desfase.setHours(delay[0]);
    dom[0].innerHTML = desfase.toLocaleTimeString("es-CL");
  },1000);

  for(let i = 1, timer = 3000; i < dom.length; i++, timer += 4000){
    setTimeout(() => {
      setInterval(() => {
        let desfase = new Date();
        desfase.setHours(delay[i]);
        dom[i].innerHTML = desfase.toLocaleTimeString("es-CL");
      },1000);
    },timer);
  }
});

/**
 * 
 * En la siguiente actividad, practicaremos el uso de JavaScript asincrónico para crear una página web que
muestre la hora actual en diferentes lugares del mundo, incluyendo ciudades como: Santiago, París,
Londres, Nueva York, San Petersburgo, Beijing y Seúl.

El diseño de esta página es bastante simple. Usando Bootstrap, crearemos una serie de bloques que
incluirán: la bandera del país, el nombre de la ciudad capital, y la hora local de ese país. Tomando como
referencia a Santiago de Chile, debes buscar las diferencias de horas con las demás ciudades. Y utilizando
setInterval(), debes poder ver el tiempo cambiando cada segundo en vivo.

Un aspecto importante de esta página es que los tiempos no aparecen todos a la vez. Al cargarla, solo se
debería mostrar el primer “reloj”, correspondiente a Santiago. Cada zona horaria después de Santiago, se
mostrará paulatinamente. Para lograrlo, tendrás que usar el método setTimeout(), para introducir la
segunda zona horaria 4 segundos después de que se haya cargado la página. Asimismo, la tercera zona
horaria se tiene que mostrar 8 segundos después, la cuarta a los 12 segundos, y así sucesivamente con
las demás. Seúl debería poder verse al cabo de 24 segundos después de cargar la página completamente.
 */