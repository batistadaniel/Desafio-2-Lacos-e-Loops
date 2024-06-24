
function tabuada(numero, msg) {
    
    msg.textContent = "";
    msg.style.display = "flex";

    if (!isNaN(numero) && numero.trim() !== "") {
        for (let i = 1; i <= 10; i++) {
            msg.innerHTML += `${numero} x ${i} = ${numero * i} <br>`;
        }
    } else {
        msg.innerHTML = "Digite um número válido";
        document.getElementById("numero").value = "";
    }
}

document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("resposta").addEventListener("submit", function(event) {
        event.preventDefault();
        let numero = document.getElementById("numero").value;
        let msg = document.getElementById("msg");

        tabuada(numero, msg);
    });
});

