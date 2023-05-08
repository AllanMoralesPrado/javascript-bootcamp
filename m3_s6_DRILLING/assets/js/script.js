// Lista de miembros del equipo
let members = [];

// Nodo que contiene en html los nombres de los miembros del equipo
const members_ = document.getElementById('members');

// Elementos de Administración del equipo - Insertar
const addUserInput = document.getElementById('addUserInput');
const addUserbtn = document.getElementById('addUserBtn');

// Elementos de Administración del equipo - Borrar
const eraseUserInput = document.getElementById('eraseUserInput');
const eraseUserBtn = document.getElementById('eraseUserBtn');

// Disparadores de eventos
addUserbtn.addEventListener('click',() => {addUser(addUserInput)});
eraseUserBtn.addEventListener('click',() => {removeUser(eraseUserInput)});

// Función para agregar contenido al nodo members_
function showTeam(team){
  let teamString = '';
  switch(team.length){ // devuelve siempre un entero positivo
    // caso de arreglo vacío
    case 0:
      break;
    // caso de un solo miembro
    case 1:
      teamString = team[0];
      break;
    // caso con más de un miembro
    default:
      teamString = team[0];
      for(let name = 1; name < team.length; name++){
        teamString = teamString.concat(',',team[name]);
      }
  }  
  members_.innerHTML = teamString;
}

// funcion para agregar el nombre de un usuario al arreglo miembros y actualizar la lista en la página
function addUser(userNameInput){
  let userName = userNameInput.value;
  members.push(userName);
  showTeam(members);
}

// funcion para borrar el nombre de un usuario al arreglo miembros y actualizar la lista en la página
function removeUser(userNameInput){
  let userName = userNameInput.value;
  const found = (nameToErase) => nameToErase === userName;
  // Solo borrar cuando exista la primera ocurrencia del nombre exacto
  if(!(members.findIndex(found) === -1)){
    members.splice(members.findIndex(found),1);
  }
  showTeam(members);
}