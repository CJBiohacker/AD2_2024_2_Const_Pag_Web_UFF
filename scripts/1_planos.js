const capturarElemento = (nomeElemento) => document.querySelector(nomeElemento);
const abrePaginaPlano = (caminhoPlano) => window.open(caminhoPlano, "_blank", "width=350,height=420");
const fechaPaginaPlano = () => window.close();

const planoAcademia = capturarElemento("#plano-academia");
const planoNatacao = capturarElemento("#plano-natacao");
const planoCombo = capturarElemento("#plano-combo");

planoAcademia.addEventListener("click", () => abrePaginaPlano("1_plano-academia.html"));
planoNatacao.addEventListener("click", () => abrePaginaPlano("1_plano-natacao.html"));
planoCombo.addEventListener("click", () => abrePaginaPlano("1_plano-combo.html"));
