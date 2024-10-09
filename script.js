function obterValores() {
    var valor1 = parseFloat(document.getElementById("valor1").value);
    var valor2 = parseFloat(document.getElementById("valor2").value);
    return { valor1, valor2 };
}

function somar() {
    var { valor1, valor2 } = obterValores();
    var resultado = valor1 + valor2;
    document.getElementById("resultado").textContent = "Resultado: " + resultado;
}

function subtrair() {
    var { valor1, valor2 } = obterValores();
    var resultado = valor1 - valor2;
    document.getElementById("resultado").textContent = "Resultado: " + resultado;
}

function multiplicar() {
    var { valor1, valor2 } = obterValores();
    var resultado = valor1 * valor2;
    document.getElementById("resultado").textContent = "Resultado: " + resultado;
}

function dividir() {
    var { valor1, valor2 } = obterValores();
    var resultado;
    if (valor2 !== 0) {
        resultado = valor1 / valor2;
    } else {
        resultado = "Não é possível dividir por zero!";
    }
    document.getElementById("resultado").textContent = "Resultado: " + resultado;
}
