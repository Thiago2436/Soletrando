const wordElement = document.getElementById('word');
const inputElement = document.getElementById('input');
const submitButton = document.getElementById('submit');
const resultElement = document.getElementById('result');
const scoreElement = document.getElementById('score');
const timeElement = document.getElementById('time');

let currentWord = '';
let score = 0;
let startTime;

// Busca uma palavra aleatória da API
async function getWord() {
  const response = await fetch('https://api.dicionario-aberto.net/random');
  const data = await response.json();
  return data.word.toLowerCase();
}

// Exibe a palavra na tela e reseta o campo de entrada
function displayWord(word) {
  wordElement.innerHTML = word;
  inputElement.value = '';
  inputElement.focus();
}

// Exibe a palavra por 10 segundos e, em seguida, ofusca-a por 3 segundos
async function showWord(word) {
  displayWord(word);
  await new Promise(resolve => setTimeout(resolve, 10000));
  wordElement.innerHTML = '*********';
  await new Promise(resolve => setTimeout(resolve, 3000));
}

// Verifica se a palavra digitada está correta e atualiza o score
async function checkWord() {
  const input = inputElement.value.toLowerCase();
  if (input === currentWord) {
    resultElement.innerHTML = 'Correto!';
    score++;
  } else {
    resultElement.innerHTML = 'Incorreto!';
    score--;
  }
  scoreElement.innerHTML = `Score: ${score}`;
  startGame();
}

// Inicia o jogo
async function startGame() {
  currentWord = await getWord();
  await showWord(currentWord);
}

// Atualiza o tempo
function updateTime() {
  const time = Math.floor((Date.now() - startTime) / 1000);
  timeElement.innerHTML = `Tempo: ${time}s`;
}

// Event listener para o botão de enviar
submitButton.addEventListener('click', checkWord);

// Event listener para a tecla Enter
inputElement.addEventListener('keyup', function(event) {
  if (event.keyCode === 13) {
    event.preventDefault();
    checkWord();
  }
});

// Inicia o jogo quando a página é carregada
startGame();
startTime = Date.now();
setInterval(updateTime, 1000);
scoreElement.innerHTML = `Score: ${score}`;
timeElement.innerHTML = 'Tempo: 0s';
