var jokebox = document.querySelector('#joke-box>p');

/**
 * Función para mostrar el chiste al usuario
 * @param {json} data que posee el chiste
 */
function contarChiste(data) {
    jokebox.innerHTML += data['joke'];
}

let buscarChiste = function () {
    // URL de la API Geek-jokes para obtener frases geek aleatorias
    const url = 'https://geek-jokes.sameerkumar.website/api?format=json';

    // Realizar la petición utilizando el método fetch
    fetch(url)
        .then(response => response.json())
        .then(data => {
            contarChiste(data);
        })
        .catch(error => {
            console.error('Error al obtener la información:', error);
        });
}

/**
 * Función para renovar chiste
 */
let otroChiste = () => {
    jokebox.innerHTML = '';
    buscarChiste();
}

buscarChiste();