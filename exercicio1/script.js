
//**a)** Declare uma variável para armazenar um **nome**, sem atribuir um valor.

//let nome 


//**b)** Declare uma variável para armazenar uma **idade**, sem atribuir um valor.

//let idade


//**c)** Imprima na tela o **tipo** dessas variáveis que acabou de criar, usando o comando `typeof`.
//console.log (nome, typeof nome)
//console.log (idade, typeof idade)



//**d)** Reflita: por que esse tipo foi impresso? Escreva a resposta em um comentário de código.

// Tive o retorno de 'undefined', no qual informa que não está definido as variáveis


//**e)** Depois, disso, atualize o código para **perguntar** ao usuário seu nome e sua idade, atribuindo esses dois valores às variáveis que acabou de criar.

let nome =  prompt ("Nome")
let idade = Number (prompt("Qual é a sua idade?"))



//**f)** Novamente, imprima na tela o tipo dessas variáveis. O que você notou? Escreva em um comentário de código.

console.log (nome, typeof nome)
console.log (idade, typeof idade)


//**g)** Para finalizar, imprima na tela a mensagem: "Olá `nome`,  você tem `idade` anos". Onde `nome` e `idade` são os valores que o usuário inseriu
//>💡  Dica: para imprimir mais de um valor na mesma linha, você pode usar essa sintaxe:
//```jsx
//console.log(valor1, valor2)

console.log(`Olá ${nome}, você tem ${idade} anos".`)
