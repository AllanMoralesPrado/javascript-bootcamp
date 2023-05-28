function* generarEntrenamientos(numSemanas, numDiasSemana) {
  const ejerciciosDisponibles = ["sentadilla", "banco", "peso muerto", "prensa"]; // Ejercicios disponibles en la versión 1.032.5

  const numEntrenamientos = numSemanas * numDiasSemana;
  let dia = 1;

  for (let i = 0; i < numEntrenamientos; i++) {
    const ejercicioIndex = i % ejerciciosDisponibles.length;
    const ejercicio = ejerciciosDisponibles[ejercicioIndex];

    yield `Dia ${dia}: ${ejercicio}`;
    dia += 2; // Incrementar en 2 para representar los días no consecutivos
  }
}

const weeksInput = document.getElementById('WeeksInput');
const daysByWeekInput = document.getElementById('DaysByWeekInput');
const goBtn = document.getElementById('go-btn').form;

export{
  generarEntrenamientos,
  weeksInput,
  daysByWeekInput,
  goBtn
};