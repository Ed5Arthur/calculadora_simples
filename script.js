// Módulo para a calculadora
const Calculadora = (() => {
  let entradaAtual = "";
  let operacao = null;
  let entradaAnterior = "";

  const display = document.getElementById("display");

  const atualizarDisplay = () => {
    display.value = entradaAtual || entradaAnterior || "0";
  };

  const adicionarAoDisplay = (valor) => {
    entradaAtual += valor;
    atualizarDisplay();
  };

  const definirOperacao = (op) => {
    if (entradaAtual === "") return;
    if (entradaAnterior !== "") {
      calcularResultado();
    }
    operacao = op;
    entradaAnterior = entradaAtual;
    entradaAtual = "";
    atualizarDisplay();
  };

  const calcularResultado = () => {
    const anterior = parseFloat(entradaAnterior);
    const atual = parseFloat(entradaAtual);
    if (isNaN(anterior) || isNaN(atual)) return;

    const operacoes = {
      "+": (a, b) => a + b,
      "-": (a, b) => a - b,
      "*": (a, b) => a * b,
      "/": (a, b) => (b !== 0 ? a / b : "Erro"),
    };

    entradaAtual = operacoes[operacao](anterior, atual).toString();
    operacao = null;
    entradaAnterior = "";
    atualizarDisplay();
  };

  const limparDisplay = () => {
    entradaAtual = "";
    entradaAnterior = "";
    operacao = null;
    atualizarDisplay();
  };

  return {
    adicionarAoDisplay,
    definirOperacao,
    calcularResultado,
    limparDisplay,
  };
})();

const {
  adicionarAoDisplay,
  definirOperacao,
  calcularResultado,
  limparDisplay,
} = Calculadora;

window.adicionarAoDisplay = adicionarAoDisplay;
window.definirOperacao = definirOperacao;
window.calcularResultado = calcularResultado;
window.limparDisplay = limparDisplay;
