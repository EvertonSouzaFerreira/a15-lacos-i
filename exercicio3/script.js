// Crie um array com 5 strings. Faça um programa que percorra este array e imprima as strings em formato de ranking, como no exemplo abaixo:

// ```jsx
// //entrada
// const maioresPaises = ["Rússia", "Canadá", "China", "EUA", "Brasil"];

// //saída
// "1 - Rússia"
// "2 - Canadá"
// "3 - China"
// "4 - EUA"
// "5 - Brasil"
// ```


let arrayString = ["Rússia", "Canadá", "China", "EUA", "Brasil"];

for(let i = 0; i<= arrayString.length-1;i++){
    console.log(`${i+1} - ${arrayString[i]}`)
}
