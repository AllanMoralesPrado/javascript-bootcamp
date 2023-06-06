// Selección de elementos de casillas de verificación y campos de texto
const checkboxes = document.querySelectorAll('input[type="checkbox"]');
const textInputs = document.querySelectorAll('input[type="text"]');

// Crear conjunto para almacenar actividades marcadas
const actividadesMarcadas = new Set();

// Manejador de eventos para las casillas de verificación
checkboxes.forEach((checkbox, index) => {
  checkbox.addEventListener('change', () => {
    if (checkbox.checked) {
      actividadesMarcadas.add(index + 1); // Almacenar el número de casilla marcada
      console.log(`Actividad marcada: Casilla ${index + 1}`);
    } else {
      actividadesMarcadas.delete(index + 1); // Eliminar el número de casilla desmarcada
      console.log(`Actividad desmarcada: Casilla ${index + 1}`);
    }
  });
});

// Crear conjunto para almacenar actividades a realizar
const actividadesPorRealizar = new Set();

// Agregar todas las actividades iniciales al conjunto
textInputs.forEach((input, index) => {
  actividadesPorRealizar.add({
    tarea: input.value,
    casilla: index + 1
  });
});

// Crear mapa para almacenar los conjuntos de actividades
const mapaActividades = new Map();
mapaActividades.set('Actividades Marcadas', actividadesMarcadas);
mapaActividades.set('Actividades por Realizar', actividadesPorRealizar);

console.log(mapaActividades);
