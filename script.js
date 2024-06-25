function tabuada(numero, msg) {
    msg.textContent = ""; // zera conteudo existente
    msg.style.display = "flex"; // exibe o conteudo 

    //se apos limpar inicio e fim da string ela for vazia ou se nao for um numero valido
    if (numero.trim() === "" || isNaN(numero)) {
        msg.innerHTML = "Digite um número válido";
        document.getElementById("numero").value = ""; // limpa o input 
    } else {
        for (let i = 1; i <= 10; i++) {
            // exibe a tabuada formatada
            msg.innerHTML += `${numero} x ${i} = ${numero * i} <br>`;
        }
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
