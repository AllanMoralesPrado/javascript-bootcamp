import { generarEntrenamientos, weeksInput, daysByWeekInput, goBtn } from './utils.js';

goBtn.addEventListener('click', (event) => {
  event.preventDefault();

  const numSemanas = parseInt(weeksInput.value);
  const numDiasSemana = parseInt(daysByWeekInput.value);

  if (isNaN(numSemanas) || isNaN(numDiasSemana)) {
    console.log("Por favor, ingresa números válidos para las semanas y los días.");
    return;
  }

  const rutina = generarEntrenamientos(numSemanas, numDiasSemana); // Generar rutina con los valores del formulario

  for (const entrenamiento of rutina) {
    console.log(entrenamiento);
  }
});
