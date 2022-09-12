// Utilizando o laço `while`, escreva um código que recebe um `prompt` perguntando se a pessoa deseja comer mais coxinhas. “S” deve representar “sim”, e “N” deve representar “não”. Crie também uma `let conta` para guardar o valor total.

// Toda vez que a resposta for **sim**, o laço deve se repetir, e devemos adicionar R$2.50 ao valor total. Quando a resposta não for **sim**, devemos imprimir o valor total da conta.

let sum = 0
let valor = 2.50
let pergunta = prompt('Gostaria de mais uma Coxinha? (S/N) ').toUpperCase()

while(pergunta !== 'N'){
        if(pergunta === 'S'){
            sum = sum + valor
            pergunta = prompt('Gostaria de mais uma Coxinha? ').toUpperCase()
            
        }else{
            alert('Nao entendi Sua resposta')
            pergunta = prompt('Gostaria de mais uma Coxinha? ').toUpperCase()
        }
        
}

console.log(`O valor a pagar e de R$:${sum}`)
