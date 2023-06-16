const artistInput = document.getElementById("artist");
const songInput = document.getElementById("song");
const form = document.querySelector("form");

async function obtenerLetra(url){
  await fetch(url, { 
    method: 'GET',  
    headers:{
      'Content-Type': 'application/json'
    } 
  }).then(res => res.json()) 
  .catch(error => console.error('Error:', error)) 
  .then(response => console.log('Success:', response));
}

form.addEventListener("submit", (event) => {
  event.preventDefault();
  let url = `https://api.lyrics.ovh/v1/${artistInput.value}/${songInput.value}`; 
  obtenerLetra(url);
})