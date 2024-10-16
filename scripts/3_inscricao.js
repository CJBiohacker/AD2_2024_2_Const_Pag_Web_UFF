// Questao 3 - a e b
const capturarElemento = (nomeElemento) => document.querySelector(nomeElemento);

const regrasMobile = (event) => {
  const tipoMobile = event.target.id;
  const totalNumeros = event.target.value.length;
  const regexpCaracteresEspeciais = /[^\w]+/g;
  let regraNumeros, valor, caractereEspecial;

  if (tipoMobile === "telefone") {
    regraNumeros = 8;

    if (totalNumeros !== regraNumeros) {
      return alert("O Telefone precisa de ter 8 dígitos.");
    }

    if (!regexpCaracteresEspeciais.test(totalNumeros)) {
      valor = event.target.value;
      caractereEspecial = valor.match(regexpCaracteresEspeciais).join("");
      return alert(
        `O Telefone só pode ter dígitos, caratere(s) ${caractereEspecial.toString()} inválido(s).`
      );
    }
  }

  if (tipoMobile === "celular") {
    regraNumeros = 9;

    if (totalNumeros !== regraNumeros) {
      return alert("O Celular precisa de ter 9 dígitos.");
    }

    if (!regexpCaracteresEspeciais.test(totalNumeros)) {
      valor = event.target.value;
      caractereEspecial = valor.match(regexpCaracteresEspeciais).join("");
      return alert(
        `O Celular só pode ter dígitos, caratere(s) ${caractereEspecial.toString()} inválido(s).`
      );
    }
  }
};

const telefone = capturarElemento("#telefone");
const celular = capturarElemento("#celular");

telefone.addEventListener("blur", (event) => regrasMobile(event));
celular.addEventListener("blur", (event) => regrasMobile(event));

// Questao 4
const matriculado = capturarElemento("#matriculado");
const matricula = capturarElemento("#matricula");
const atividade = capturarElemento("#atividade");
const plano = capturarElemento("#plano");
const valorTotal = capturarElemento("#valor");
const botaoCalculo = capturarElemento("#botao-calculo");

window.addEventListener("load", () => {
  matriculado.checked = false;
  matricula.value = "";
  atividade.value = "vazio";
  plano.value = "vazio";
  valorTotal.value = 0;
  valorTotal.addEventListener("focus", () => valorTotal.blur());
});

const calcularAtividadePlano = (atividade, plano, matriculado) => {
  if (atividade === "vazio" && plano === "vazio") {
    valorTotal.value = 0;
    return alert("Selecione uma atividade e um plano.");
  }

  if (atividade === "vazio") {
    valorTotal.value = 0;
    return alert("Selecione uma atividade.");
  }

  if (plano === "vazio") {
    valorTotal.value = 0;
    return alert("Selecione um plano.");
  }

  if (!matriculado) {
    valorTotal.value = 80;
  } else {
    valorTotal.value = 0;
    if (matricula.value.length === 0) valorTotal.value = 80;
  }

  if (plano === "anual") {
    if (atividade === "academia")
      valorTotal.value = Number(valorTotal.value) + 180 * 12;
    if (atividade === "nataçao")
      valorTotal.value = Number(valorTotal.value) + 220 * 12;
    if (atividade === "combo")
      valorTotal.value = Number(valorTotal.value) + 260 * 12;
  }

  if (plano === "semestral") {
    if (atividade === "academia")
      valorTotal.value = Number(valorTotal.value) + 300 * 6;
    if (atividade === "nataçao")
      valorTotal.value = Number(valorTotal.value) + 340 * 6;
    if (atividade === "combo")
      valorTotal.value = Number(valorTotal.value) + 380 * 6;
  }

  if (plano === "mensal") {
    if (atividade === "academia")
      valorTotal.value = Number(valorTotal.value) + 330;
    if (atividade === "nataçao")
      valorTotal.value = Number(valorTotal.value) + 390;
    if (atividade === "combo")
      valorTotal.value = Number(valorTotal.value) + 440;
  }
};

botaoCalculo.addEventListener("click", (event) => {
  calcularAtividadePlano(atividade.value, plano.value, matriculado.checked);
  event.preventDefault();
});
