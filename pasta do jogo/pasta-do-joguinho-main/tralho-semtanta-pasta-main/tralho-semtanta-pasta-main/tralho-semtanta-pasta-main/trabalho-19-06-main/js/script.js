import { aleatorio } from "./aleatorio.js";
import { perguntas } from "./perguntas.js";

const Caixaprincipal = document.querySelector(".Caixa-principal");
const Caixapergunta = document.querySelector(".Caixa-pergunta");
const Caixaalternativa = document.querySelector(".Caixa-alternativa");
const Caixaresposta = document.querySelector(".Caixa-resposta");
const Textoresultado = document.querySelector(".Texto-resultado");






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
   const afirmaçoes = aleatorio(opçaoSelecionada.afirmaçoes);
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
