const fijo1 = document.getElementById('fijo1');
const fijo2 = document.getElementById('fijo2');
const form = document.querySelector('form');
let enviado = false;

const verificar = () => {
    return new Promise((resolve, reject) => {
        if(!enviado){
            resolve(() => {
                fijo1.style.display = 'block';
                fijo2.style.display = 'none';
                enviado = true;
            });
        }else{
            const rejectFn = () => {
                fijo1.style.display = 'none';
                fijo2.style.display = 'block';
                throw new Error('Ya enviaste un mensaje.');
            };
            reject(rejectFn());
        }
    });
};

async function enviarmensaje(){
    try{
        let verificarEnvio = await verificar();
        verificarEnvio();
    }catch (err) {
        console.error(err.message);
    }
}

form.addEventListener("submit", (event) => {
    event.preventDefault();
    enviarmensaje();
});