
//Escreva um programa que faça 3 perguntas de Sim ou Não, e guarde cada resposta em uma variável. Por exemplo: "Você está usando uma roupa azul hoje?". Depois, siga os passos:

//a) Crie três novas variáveis, contendo as respostas;

//let ventoHoje = prompt ("Hoje está ventando?")
//let chuvaHoje = prompt ("Hoje está chovendo")
//let frioHoje = prompt ("Hoje está fazendo calor?")


//b) Imprima na tela todas as respostas. Por exemplo:
//```
//SIM
//SIM
//NÃO
//```

//console.log (ventoHoje)
//console.log (chuvaHoje)
//console.log (frioHoje)




//c) Altere seu programa, para que o texto das perguntas também sejam guardadas em variáveis. Seu comando de **prompt** deve mudar um pouco, como mostrado abaixo:

//```jsx
//mandando a pergunta como texto direto
//const respostaA = prompt("Você está usando uma roupa azul hoje?");

//mandando a pergunta como variável
//const perguntaA = "Você está usando uma roupa azul hoje?";
//const respostaA = prompt(perguntaA);
//```


let ventoHoje = "Hoje está ventando?"
let ventoHojeResposta = prompt(ventoHoje)

let chuvaHoje = "Hoje está chovendo?"
let chuvaHojeResposta = prompt(chuvaHoje)

let frioHoje = "Hoje está fazendo calor?"
let frioHojeResposta = prompt(frioHoje )

//d) Altere seu programa, para que a impressão das respostas também tenha as **perguntas**. Por exemplo:

//```
//Você está usando uma roupa azul hoje? - SIM

console.log (ventoHoje, ventoHojeResposta)
console.log (chuvaHoje, chuvaHojeResposta)
console.log (frioHoje, frioHojeResposta)

