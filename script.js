//==============================
// ELEMENTOS
//==============================

const telaInicio = document.getElementById("telaInicio");
const telaQuiz = document.getElementById("telaQuiz");
const telaFinal = document.getElementById("telaFinal");

const btnJogar = document.getElementById("btnJogar");
const btnProxima = document.getElementById("btnProxima");
const voltarInicio = document.getElementById("voltarInicio");
const jogarNovamente = document.getElementById("jogarNovamente");
const menuPrincipal = document.getElementById("menuPrincipal");

const pergunta = document.getElementById("pergunta");
const alternativas = document.querySelectorAll(".alternativa");

const feedback = document.getElementById("feedback");

const numeroPergunta = document.getElementById("numeroPergunta");
const acertosTexto = document.getElementById("acertos");

const resultadoFinal = document.getElementById("resultadoFinal");
const mensagemFinal = document.getElementById("mensagemFinal");

//==============================
// PERGUNTAS
//==============================

const perguntas = [

{
pergunta:"Pergunta 1 - Texto da pergunta.",
alternativas:["Alternativa A","Alternativa B","Alternativa C","Alternativa D"],
correta:0
},

{
pergunta:"Pergunta 2 - Texto da pergunta.",
alternativas:["Alternativa A","Alternativa B","Alternativa C","Alternativa D"],
correta:2
},

{
pergunta:"Pergunta 3 - Texto da pergunta.",
alternativas:["Alternativa A","Alternativa B","Alternativa C","Alternativa D"],
correta:1
},

{
pergunta:"Pergunta 4 - Texto da pergunta.",
alternativas:["Alternativa A","Alternativa B","Alternativa C","Alternativa D"],
correta:3
},

{
pergunta:"Pergunta 5 - Texto da pergunta.",
alternativas:["Alternativa A","Alternativa B","Alternativa C","Alternativa D"],
correta:0
},

{
pergunta:"Pergunta 6 - Texto da pergunta.",
alternativas:["Alternativa A","Alternativa B","Alternativa C","Alternativa D"],
correta:1
},

{
pergunta:"Pergunta 7 - Texto da pergunta.",
alternativas:["Alternativa A","Alternativa B","Alternativa C","Alternativa D"],
correta:2
},

{
pergunta:"Pergunta 8 - Texto da pergunta.",
alternativas:["Alternativa A","Alternativa B","Alternativa C","Alternativa D"],
correta:0
},

{
pergunta:"Pergunta 9 - Texto da pergunta.",
alternativas:["Alternativa A","Alternativa B","Alternativa C","Alternativa D"],
correta:3
},

{
pergunta:"Pergunta 10 - Texto da pergunta.",
alternativas:["Alternativa A","Alternativa B","Alternativa C","Alternativa D"],
correta:1
}

];

//==============================

let indice = 0;
let acertos = 0;
let respondeu = false;

//==============================

function mostrarPergunta(){

respondeu=false;

feedback.innerHTML="";

btnProxima.style.display="none";

numeroPergunta.innerHTML=indice+1;

acertosTexto.innerHTML=acertos;

pergunta.innerHTML=perguntas[indice].pergunta;

alternativas.forEach((botao,i)=>{

botao.innerHTML=perguntas[indice].alternativas[i];

botao.disabled=false;

botao.classList.remove("correta");
botao.classList.remove("errada");

});

}

//==============================

alternativas.forEach((botao,i)=>{

botao.addEventListener("click",()=>{

if(respondeu) return;

respondeu=true;

const correta=perguntas[indice].correta;

alternativas.forEach(btn=>btn.disabled=true);

if(i===correta){

botao.classList.add("correta");

feedback.innerHTML="✅ Resposta correta!";

acertos++;

acertosTexto.innerHTML=acertos;

}else{

botao.classList.add("errada");

alternativas[correta].classList.add("correta");

feedback.innerHTML="❌ Resposta incorreta.";

}

btnProxima.style.display="block";

});

});

//==============================

btnProxima.addEventListener("click",()=>{

indice++;

if(indice<perguntas.length){

mostrarPergunta();

}else{

mostrarResultado();

}

});

//==============================

function mostrarResultado(){

telaQuiz.classList.remove("ativa");

telaFinal.classList.add("ativa");

resultadoFinal.innerHTML=acertos+" / "+perguntas.length;

if(acertos<=3){

mensagemFinal.innerHTML="Continue estudando!";

}
else if(acertos<=6){

mensagemFinal.innerHTML="Bom trabalho!";

}
else if(acertos<=8){

mensagemFinal.innerHTML="Muito bom!";

}
else{

mensagemFinal.innerHTML="Excelente! Você domina o conteúdo.";

}

}

//==============================

btnJogar.addEventListener("click",()=>{

indice=0;
acertos=0;

telaInicio.classList.remove("ativa");
telaFinal.classList.remove("ativa");
telaQuiz.classList.add("ativa");

mostrarPergunta();

});

//==============================

voltarInicio.addEventListener("click",()=>{

telaQuiz.classList.remove("ativa");
telaInicio.classList.add("ativa");

});

//==============================

menuPrincipal.addEventListener("click",()=>{

telaFinal.classList.remove("ativa");
telaInicio.classList.add("ativa");

});

//==============================

jogarNovamente.addEventListener("click",()=>{

indice=0;
acertos=0;

telaFinal.classList.remove("ativa");
telaQuiz.classList.add("ativa");

mostrarPergunta();

});

//==============================
// INÍCIO
//==============================

btnProxima.style.display="none";