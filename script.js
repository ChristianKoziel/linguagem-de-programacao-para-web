// //console.log("Integração ok");

// //Função simples
// function exibirBoasVindas(){
//     return console.log("Olá, seja bem vindo");
// }

// exibirBoasVindas();

// function soma(a, b ,c) {
//     const total = a + b + c;
//     return console.log("Total da soma: ", total);
// }

// soma(10, 12, 10);

// //funcao aninima
// const multiplicar = function (x, y){
//     return console.log("resultado", x * y);
// }

// multiplicar(2, 2);

// //arrow function
// const dividir = (a, b) => a/b;
// console.log("Divisão: ", dividir(10, 2));

// // funcao de callback
// function inicializarProjeto() {
//     exibirBoasVindas();
//     soma(40,50,20);
//     multiplicar(4,2);
//     dividir(20, 2);
// }

// inicializarProjeto();   

//exercicio 1
const idade=20;
if (idade >= 20) {
    console.log("voce é maior de idade");
} else {
    console.log("voce é menor de idade");
}

//exercico 2
let numero = prompt("digite um numero positivo");
if (numero % 2 == 0){
    cnsole.log("O numero" + numero,"É PAR");
}else if (numero % 2 != 0){
    console.log ("O numero" + numero, "É IMPAR");
}else{
    console.log ("O numero precisa ser positivo!")
}

//exercicio 3
let numero2 = prompt("Digite um número:");
if (numero2 > 0) {
    console.log("Número positivo");
} 
else if (numero2< 0){
console.log("Número negativo");
} else {
console.log("Zero");
}


//exercico 4
for (let i = 1; i < 11; i++) {
    let total =5 * i;
    console.log("5 x" + i + " = " + total);
}  

let contador = 10;