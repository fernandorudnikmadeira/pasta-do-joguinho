const Caixaprincipal = document.querySelector(".Caixa-principal");
const Caixapergunta = document.querySelector(".Caixa-pergunta");
const Caixaalternativa = document.querySelector(".Caixa-alternativa");
const Caixaresposta = document.querySelector(".Caixa-resposta");
const Textoresultado = document.querySelector(".Texto-resultado");

const perguntas = [
   {
    enunciado: "O que é a trigonometria?", 
    alternativas: [
      {
         texto: "É o estudo das relações entre ângulos e lados em um triângulo.",
         afirmacao: "afirmaçao"
      },
      {
         texto: "Estudo da fauna e flora da África do Sul.",
       afirmacao: "afirmaçao"
      }
      ]
},
{
      enunciado: "Aonde você pode utilizar a trigonometria? ", 
      alternativas: [
      "Em situações de cálculos dde distâncias inacessíveis.",
      "Em situações de descobrimento paleontológicos."
        
    ]
},
{
   enunciado: "Quais são os tipos de trigonometria?", 
   alternativas: [
   "função par, função ímpar, funçao crescente, entre outros.",
   "Seno, Cosceno, Tangente."
     
 ]
},
{
   enunciado: "Para que serve a trigonometria na física? ", 
   alternativas: [
   "Auxiliar em cáculos de calorimetria, magnetismo?",
   "Auxiliar em cálculos relacionaddos à cinemática, Dinâmica, entre outros?"
     
 ]
},

];

let Atual = 0;
let perguntaAtual;

function mostraPergunta(){
   perguntaAtual = perguntas[Atual];
   Caixapergunta. textContent = perguntaAtual.enunciado;
   mostraAlternativas();
}

function mostraAlternativas(){
      for(const alternativa of perguntaAtual.alternativas){
         const botaoAlternativas = document.createElement("button");
         botaoAlternativas.textContent = alternativa;
         Caixaalternativa.appendChild(botaoAlternativas);
      }

}
mostraPergunta();
