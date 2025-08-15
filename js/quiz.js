// Banco de questões
const questoes = [
  {
    pergunta: "Qual é a linguagem fundamental para estruturar uma página web?",
    alternativas: ["HTML", "CSS", "JavaScript", "PHP"],
    correta: 0
  },
  {
    pergunta: "Qual propriedade CSS é usada para criar um layout flexível?",
    alternativas: ["grid-template", "float", "display: flex", "position: absolute"],
    correta: 2
  },
  {
    pergunta: "Como se declara uma variável em JavaScript moderno?",
    alternativas: ["var x = 5", "let x = 5", "const x = 5", "both let and const"],
    correta: 3
  },
  {
    pergunta: "Qual é a função principal do Git?",
    alternativas: [
      "Editar código",
      "Controlar versões",
      "Estilizar páginas",
      "Debugar aplicações"
    ],
    correta: 1
  },
  {
    pergunta: "O que significa API?",
    alternativas: [
      "Application Programming Interface",
      "Advanced Programming Implementation",
      "Automated Programming Instance",
      "Application Process Integration"
    ],
    correta: 0
  },
  {
    pergunta: "Qual método HTTP é usado para enviar dados ao servidor?",
    alternativas: ["GET", "POST", "PUT", "DELETE"],
    correta: 1
  },
  {
    pergunta: "O que é responsividade em design web?",
    alternativas: [
      "Velocidade de carregamento",
      "Adaptação a diferentes telas",
      "Animações suaves",
      "Código organizado"
    ],
    correta: 1
  },
  {
    pergunta: "Qual é a melhor prática para nomear variáveis?",
    alternativas: [
      "Usar nomes curtos",
      "Usar números no início",
      "Usar nomes descritivos",
      "Usar apenas maiúsculas"
    ],
    correta: 2
  },
  {
    pergunta: "O que é um framework?",
    alternativas: [
      "Editor de código",
      "Sistema operacional",
      "Conjunto de ferramentas e bibliotecas",
      "Linguagem de programação"
    ],
    correta: 2
  },
  {
    pergunta: "Qual é a função do DOCTYPE em HTML?",
    alternativas: [
      "Definir o título da página",
      "Declarar a versão do HTML",
      "Criar um link",
      "Estilizar o documento"
    ],
    correta: 1
  }
];

// Elementos do DOM
const quizElement = document.getElementById('quiz');
const resultadoElement = document.getElementById('resultado');
const perguntaElement = document.getElementById('pergunta');
const alternativasElement = document.getElementById('alternativas');
const proximaButton = document.getElementById('proxima');
const questaoAtualElement = document.getElementById('questao-atual');
const totalQuestoesElement = document.getElementById('total-questoes');
const acertosElement = document.getElementById('acertos');
const totalElement = document.getElementById('total');
const reiniciarButton = document.getElementById('reiniciar');
const progressoPreenchido = document.querySelector('.progresso-preenchido');

let questaoAtual = 0;
let acertos = 0;
let alternativaSelecionada = null;

// Inicializar quiz
function iniciarQuiz() {
  questaoAtual = 0;
  acertos = 0;
  alternativaSelecionada = null;
  mostrarQuestao();
  atualizarProgresso();
  quizElement.style.display = 'block';
  resultadoElement.style.display = 'none';
}

// Mostrar questão atual
function mostrarQuestao() {
  const questao = questoes[questaoAtual];
  perguntaElement.textContent = questao.pergunta;
  
  alternativasElement.innerHTML = '';
  questao.alternativas.forEach((alternativa, index) => {
    const button = document.createElement('button');
    button.textContent = alternativa;
    button.classList.add('alternativa');
    button.addEventListener('click', () => selecionarAlternativa(index));
    alternativasElement.appendChild(button);
  });

  proximaButton.disabled = true;
  questaoAtualElement.textContent = questaoAtual + 1;
  totalQuestoesElement.textContent = questoes.length;
}

// Selecionar alternativa
function selecionarAlternativa(index) {
  const alternativas = alternativasElement.querySelectorAll('.alternativa');
  alternativas.forEach(alt => alt.classList.remove('selecionada'));
  alternativas[index].classList.add('selecionada');
  alternativaSelecionada = index;
  proximaButton.disabled = false;
}

// Verificar resposta e avançar
function proximaQuestao() {
  if (alternativaSelecionada === questoes[questaoAtual].correta) {
    acertos++;
  }

  questaoAtual++;
  alternativaSelecionada = null;

  if (questaoAtual < questoes.length) {
    mostrarQuestao();
    atualizarProgresso();
  } else {
    mostrarResultado();
  }
}

// Atualizar barra de progresso
function atualizarProgresso() {
  const progresso = ((questaoAtual) / questoes.length) * 100;
  progressoPreenchido.style.width = `${progresso}%`;
}

// Mostrar resultado final
function mostrarResultado() {
  quizElement.style.display = 'none';
  resultadoElement.style.display = 'block';
  acertosElement.textContent = acertos;
  totalElement.textContent = questoes.length;
}

// Event listeners
proximaButton.addEventListener('click', proximaQuestao);
reiniciarButton.addEventListener('click', iniciarQuiz);

// Iniciar quiz
iniciarQuiz();
