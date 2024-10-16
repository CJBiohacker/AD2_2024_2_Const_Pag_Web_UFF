const capturarElemento = (nomeElemento) => document.querySelector(nomeElemento);
const abrePaginaPlano = (caminhoPlano) => window.open(caminhoPlano, "_blank", "width=350,height=420");
const fechaPaginaPlano = () => window.close();

const planoAcademia = capturarElemento("#plano-academia");
const planoNatacao = capturarElemento("#plano-natacao");
const planoCombo = capturarElemento("#plano-combo");

planoAcademia.addEventListener("click", () => abrePaginaPlano("plano-academia.html"));
planoNatacao.addEventListener("click", () => abrePaginaPlano("plano-natacao.html"));
planoCombo.addEventListener("click", () => abrePaginaPlano("plano-combo.html"));
