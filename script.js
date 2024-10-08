const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "As músicas tme impacto nas emoções de quem ouve?",
        alternativas: [
            {
                Texto:"Sim",
                afirmacao:"afirmaçao 1"
            },
        {
          texto:  "Não",
          afirmacao: "afirmaçao 2"
        },
        ]
    },
    {
        enunciado: "Pergunta Você acredita que o bem estar tem relação com a música?",
        alternativas: [
            {
                Texto:"Sim",
                afirmacao:"afirmaçao 1"
            },
        {
          texto:  "Não",
          afirmacao: "afirmaçao 2"
        },
        ]
    },
    {
        enunciado: "A música pode promover mudanças sociais e culturais?",
        alternativas: [
            {
                Texto:"Sim",
                afirmacao:"afirmaçao 1"
            },
        {
          texto:  "Não",
          afirmacao: "afirmaçao 2"
        },
        ]
    },
];
let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
