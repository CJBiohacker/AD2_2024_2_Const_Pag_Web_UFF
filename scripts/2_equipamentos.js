const capturarElemento = (nomeElemento) => document.querySelector(nomeElemento);

const cadeiraExtensora = [
  `../imagens/CadeiraExtensora.png`,
  `Cadeira Extensora`,
  `O principal movimento articular realizado na cadeira extensora é a extensão de joelho, portanto
  o quadríceps (vasto lateral, vasto medial, vasto intermédio e reto femoral são os principais
  músculos trabalhados durante o exercício)`,
  `https://treinomestre.com.br/cadeira-extensora-como-potencializar-os-resultados-4-dicas-importantes/`,
];

const supinoVertical = [
  `../imagens/SupinoVertical.png`,
  `Supino Vertical`,
  `O supino vertical é um exercício popular e eficaz para desenvolver força, tamanho e definição nos 
    músculos da parte superior do corpo. Ao usar uma máquina de peso guiada, este exercício oferece uma 
    maneira acessível e controlada de direcionar os músculos do peito, ombros e tríceps.`,
  `https://www.academiacentralfitness.com.br/post/supino-m%C3%A1quina-como-fazer-benef%C3%ADcios-e-varia%C3%A7%C3%B5es`,
];

const remadaBaixa = [
  `../imagens/RemadaBaixa.png`,
  `Remada Baixa`,
  `A Remada Baixa é um exercício de máquina para costas feito sentado no banco usando a barra triângulo. 
    A Remada trabalha inúmeros músculos como o lombar, latíssimo do dorso, trapézio, deltoide posterior e 
    até mesmo o braquiorradial.`,
  `https://www.hipertrofia.org/blog/2018/03/24/remada-baixa/`,
];

const carregarDadosEquipamento = (event) => {
  const equipamento = event.target.id;
  const imagem = capturarElemento("#ImgDesc");
  const titulo = capturarElemento("#DescExe h3");
  const descricao = capturarElemento("#DescExe p");
  const fonte = document.createElement("a");

  if (equipamento) {
    if (equipamento === "cadeira") {
      imagem.src = cadeiraExtensora[0];
      titulo.textContent = cadeiraExtensora[1];
      descricao.textContent = cadeiraExtensora[2];
      fonte.href = cadeiraExtensora[3];
    }

    if (equipamento === "supino") {
      imagem.src = supinoVertical[0];
      titulo.textContent = supinoVertical[1];
      descricao.textContent = supinoVertical[2];
      fonte.href = supinoVertical[3];
    }

    if (equipamento === "remada") {
      imagem.src = remadaBaixa[0];
      titulo.textContent = remadaBaixa[1];
      descricao.textContent = remadaBaixa[2];
      fonte.href = remadaBaixa[3];
    }

    descricao.appendChild(fonte);
    fonte.target = "_blank";
    fonte.textContent = "[fonte]";
    event.preventDefault();
  }
};

const cadeira = capturarElemento("#cadeira");
const supino = capturarElemento("#supino");
const remada = capturarElemento("#remada");

cadeira.addEventListener("click", (event) => carregarDadosEquipamento(event));
supino.addEventListener("click", (event) => carregarDadosEquipamento(event));
remada.addEventListener("click", (event) => carregarDadosEquipamento(event));