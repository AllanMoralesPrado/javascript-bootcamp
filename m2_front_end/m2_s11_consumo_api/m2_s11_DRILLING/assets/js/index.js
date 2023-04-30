let mostrarPelicula = (data) => {
    let render = `<img src="${data['poster']}" class="card-img-top" alt="${data['title']} poster">
    <div class="card-body">
      <h5 class="card-title">${data['title']}</h5>
      <p class="card-text">${data.synopsis}</p>
    </div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item"><strong>Título romanizado: </strong> ${data['hepburn']}</li>
      <li class="list-group-item"><strong>Año de estreno: </strong>${data['release']}</li>
      <li class="list-group-item"><strong>Director: </strong>${data['director']}</li>
    </ul>
    <div class="card-body d-grid gap-2 d-flex justify-content-center">
      <button class="btn btn-primary me-2" type="button">Más información</button>
    </div>`
    let inside = document.querySelector('body');
    const movie = document.createElement('div');
    movie.style.width = "18rem";
    movie.classList.add('card','center');
    movie.innerHTML = render;
    inside.prepend(movie);
}


let buscarPelicula = function () {
    // URL de la API Geek-jokes para obtener frases geek aleatorias
    const url = 'https://studio-ghibli-films-api.herokuapp.com/api/arrietty';

    // Realizar la petición utilizando el método fetch
    fetch(url)
        .then(response => response.json())
        .then(data => {
            mostrarPelicula(data);
        })
        .catch(error => {
            console.error('Error al obtener la información:', error);
        });
}

buscarPelicula();