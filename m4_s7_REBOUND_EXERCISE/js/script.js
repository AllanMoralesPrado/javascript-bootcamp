const fahrenheit = document.getElementById('fahrenheit');
const form = document.querySelector('form');
const celcius = document.getElementById('celcius');

let conversion = () => {
    return new Promise((resolve, reject) => {
        if(fahrenheit.value === ''){
            reject(new Error('Dato no válido'));
        }
        setTimeout(() => {
            resolve((5 / 9) * (fahrenheit.value - 32));
        }, 2000);
    });
}

async function mostrar(){
    try{
        let converted = await conversion();
        celcius.innerHTML = `<p class="fs-2 fw-semibold">${parseInt(converted)} ºC</p>`;
    } catch (err) {
        console.log(err);
    }
}

form.addEventListener("submit", (event) => {
    event.preventDefault();
    mostrar();
})