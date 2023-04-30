// var contenido = document.querySelector("#contenido");
// fetch('https://jsonplaceholder.typicode.com/posts')
//     .then(response => response.json())
//     .then(datos => {
//         tabla(datos)
//     });
// function tabla(datos) {
//     contenido.innerHTML = ""
//     for (let temp of datos) {
//         contenido.innerHTML += `
// <tr><th scope="row">${temp.userId}</ th>
// <td>${temp.id}</td>
// <td>${temp.title}</td>
// <td>${temp.body}</td>
// </tr>
// ` //acá cierran las comillas invertidas
//         if (temp.id == 10) {
//             break
//         }
//     }
// }

// var formulario = document.getElementById("boton");
// formulario.addEventListener("click", () => {
//     var idUsuario =
//         parseInt(document.getElementById("userID").value);
//     var titulo = document.getElementById("title").value;
//     var cuerpo = document.getElementById("body").value;
//     limpiar()
//     const newPost = {
//         title: titulo,
//         body: cuerpo,
//         userId: idUsuario
//     }
//     fetch('https://jsonplaceholder.typicode.com/posts', {
//         method: 'POST',
//         body: JSON.stringify(newPost),
//         headers: {
//             'Content-type': 'application/json; charset=UTF-8',
//         }
//     })
//         .then(response => response.json())
//         .then(json => console.log(json))
// })
// function limpiar() {
//     document.getElementById("formulario").reset();
// }

// URL de la API de GitHub para obtener información sobre un usuario
const url = 'https://api.github.com/users/octocat';

// Realizar la petición utilizando el método fetch
fetch(url)
  .then(response => response.json())
  .then(data => {
    console.log('Información del usuario:', data);
  })
  .catch(error => {
    console.error('Error al obtener la información:', error);
  });
