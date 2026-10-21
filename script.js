// Pega os elementos do HTML
let campo1 = document.getElementById("numero1");
let campo2 = document.getElementById("numero2");
let btnSomar = document.getElementById("btnSomar");
let btnSubtrair = document.getElementById("btnSubtrair");
let btnMultiplicar = document.getElementById("btnMultiplicar");
let textoResultado = document.getElementById("resultado");

// Função para validar os campos
function validarCampos() {
  let num1 = parseFloat(campo1.value);
  let num2 = parseFloat(campo2.value);

  if (isNaN(num1) || isNaN(num2)) {
    textoResultado.innerText = "Por favor, preencha os dois números!";
    textoResultado.style.color = "red";
    return null;
  }

  return { num1, num2 };
}

// Função para somar
function somar() {
  const valores = validarCampos();
  if (!valores) return;

  let total = valores.num1 + valores.num2;
  textoResultado.innerText = "Resultado: " + total;
  textoResultado.style.color = "#28a745";
}

// Função para subtrair
function subtrair() {
  const valores = validarCampos();
  if (!valores) return;

  let total = valores.num1 - valores.num2;
  textoResultado.innerText = "Resultado: " + total;
  textoResultado.style.color = "#dc3545";
}

// Função para multiplicar
function multiplicar() {
  const valores = validarCampos();
  if (!valores) return;

  let total = valores.num1 * valores.num2;
  textoResultado.innerText = "Resultado: " + total;
  textoResultado.style.color = "#007bff";
}

// Escuta os cliques nos botões
btnSomar.addEventListener("click", somar);
btnSubtrair.addEventListener("click", subtrair);
btnMultiplicar.addEventListener("click", multiplicar);
