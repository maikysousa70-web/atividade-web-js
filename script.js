// Seleção dos elementos do DOM
const botao = document.getElementById("btnCalcular");
const inputPreco = document.getElementById("preco");
const inputDesconto = document.getElementById("desconto");
const painelResultado = document.getElementById("resultado");

// Função principal de validação e cálculo
function calcularDesconto() {
  // Variáveis para leitura dos valores
  const valorOriginal = parseFloat(inputPreco.value);
  const percentualDesconto = parseFloat(inputDesconto.value);

  // Validação dos dados de entrada
  if (isNaN(valorOriginal) || isNaN(percentualDesconto)) {
    painelResultado.className = "painel-resultado erro";
    painelResultado.textContent = "Por favor, preencha todos os campos com números válidos.";
    return;
  }

  if (valorOriginal <= 0) {
    painelResultado.className = "painel-resultado erro";
    painelResultado.textContent = "O preço deve ser maior que zero.";
    return;
  }

  if (percentualDesconto < 0 || percentualDesconto > 100) {
    painelResultado.className = "painel-resultado erro";
    painelResultado.textContent = "O desconto deve situar-se entre 0% e 100%.";
    return;
  }

  // Cálculo dos valores
  const totalDesconto = (valorOriginal * percentualDesconto) / 100;
  const valorFinal = valorOriginal - totalDesconto;

  // Atualização dinâmica do conteúdo na página
  painelResultado.className = "painel-resultado sucesso";
  painelResultado.innerHTML = `
    <strong>Cálculo Realizado com Sucesso:</strong><br>
    Desconto aplicado: <strong>${percentualDesconto}%</strong> (-${totalDesconto.toFixed(2)})<br>
    Preço a pagar: <strong>${valorFinal.toFixed(2)}</strong>
  `;
}

// Vinculação do evento de clique ao botão
botao.addEventListener("click", calcularDesconto);
