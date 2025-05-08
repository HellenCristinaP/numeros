/* let num = prompt("Digite um número: ");

if (num % 2 == 1) {
    alert("Esse número é impar");
} else if (num % 2 == 0) {
    alert("Esse número é par");
} else if (num == "") {
    alert("Você não digitou nada");
} else {
    alert("Não é um número");	
} */

// Verificar se é um número, e depois executar o código

$(document).ready(function() {
    $("#check").click(function() {
        let num = $("#number").val();
        let operator = num % 2;
        if (num == "") {
            alert("Você não digitou nada");
        } else if (isNaN(num)) {
            alert("Não é um número");
        } else if (operator == 1) {
            alert("Esse número é impar");
        } else if (operator == 0) {
            alert("Esse número é par");
        }
    });
});