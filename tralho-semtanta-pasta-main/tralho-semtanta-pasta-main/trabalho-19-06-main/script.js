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
         afirmacao: "afirmaçoes"
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
         {
            texto:"Em situações de cálculos dde distâncias inacessíveis.",
            afirmaçao: "afirmaçao"
         },
         {
            texto: "Em situações de descobrimento paleontológicos.",
            afirmaçao: "afirmaçao"
         }

    ]
},
{
   enunciado: "Quais são os tipos de trigonometria?", 
   alternativas: [
      {
         texto:  "função par, função ímpar, funçao crescente, entre outros.",
         afirmaçao: "afirmaçao"
      },
      {
         texto: "Seno, Cosceno, Tangente.",
         afirmaçao: "afirmaçao"
      } 
     
 ]
},
{
   enunciado: "Para que serve a trigonometria na física? ", 
   alternativas: [
      {
         texto: "Auxiliar em cáculos de calorimetria, magnetismo?",
         afirmaçao: "afirmaçao"
      },
       {
         texto:"Auxiliar em cálculos relacionaddos à cinemática, Dinâmica, entre outros?",
         afirmaçao: "afirmaçao"
       } 
   
     
 ]
},

];

let Atual = 0;
let perguntaAtual;
let historiaFinal= "";

function mostraPergunta(){
   if(Atual >= perguntas.length){
      mostraRusultado();
      return;
   }
   perguntaAtual = perguntas[Atual];
   Caixapergunta. textContent = perguntaAtual.enunciado;
   Caixaalternativa.textContent = "";
   mostraAlternativas();
}

function mostraAlternativas(){
      for(const alternativa of perguntaAtual.alternativas){
         const botaoAlternativas = document.createElement("button");
         botaoAlternativas.textContent = alternativa.texto;
         botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa))
         Caixaalternativa.appendChild(botaoAlternativas);
      }

}
function respostaSelecionada(opçaoSelecionada){
   const afirmaçoes = opçaoSelecionada.afirmaçoes;
   historiaFinal += afirmaçoes + " ";
   Atual++;
   mostraPergunta();
}

function mostraRusultado(){
   Caixapergunta.textContent = "Para que serve a trigonometria na física?",
   Textoresultado.textContent = historiaFinal;
   Caixaalternativa.textContent = "";
}


mostraPergunta();
