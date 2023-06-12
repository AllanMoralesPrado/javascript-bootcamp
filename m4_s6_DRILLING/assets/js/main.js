const counter = document.getElementById('counter');
const secondsInput = document.getElementById('secondsInput');
const errorMessage = document.getElementById('error-message');
const btnSuccess = document.querySelector('.btn-success');
const btnDanger = document.querySelector('.btn-danger');

function activateBtn(button){
    button.removeAttribute("disabled");
}

function deactivateBtn(button){
    button.setAttribute("disabled", "true");
}

btnSuccess.addEventListener("click", () => {
    if(secondsInput.value > 0 && secondsInput.value < 100){
        deactivateBtn(btnSuccess);
        activateBtn(btnDanger);
        errorMessage.style.display = "none";

        let seconds = parseInt(secondsInput.value);
        counter.innerHTML = seconds.toString().padStart(2, '0');

        let intervalId = setInterval(() => {
            seconds -= 1;
            counter.innerHTML = seconds.toString().padStart(2, '0');

            if (seconds === 0) {
                clearInterval(intervalId); // Detener el intervalo cuando el contador llega a cero
                // Aquí puedes realizar alguna acción adicional después de que el contador llegue a cero
                deactivateBtn(btnDanger);
                activateBtn(btnSuccess);
            }
        }, 1000);

        btnDanger.addEventListener("click", () => {
            if(!btnDanger.hasAttribute("disabled")){
                clearInterval(intervalId);
                counter.innerHTML = "00";
                deactivateBtn(btnDanger);
                activateBtn(btnSuccess);
            }
        });

    } else {
        errorMessage.style.display = "block";
    }
});
