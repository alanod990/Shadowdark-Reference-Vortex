// Função para buscar os dados e popular a página
async function carregarClasses() {
  try {
    // Busca o arquivo JSON
    const resposta = await fetch("classes.json");
    const classes = await resposta.json();

    // Seleciona o container onde as classes serão inseridas
    // Baseado na class="container" do seu HTML
    const container = document.querySelector(".container");

    classes.forEach((classe) => {
      // Cria a div principal da classe
      const divClasse = document.createElement("div");
      divClasse.classList.add("bloco-classe");

      // Cria o título (h3)
      const titulo = document.createElement("h3");
      titulo.textContent = classe.nome;
      titulo.classList.add("titulo-classe");
      divClasse.appendChild(titulo);

      // Função auxiliar para criar as divs internas
      // Mapeando para as classes que você definiu no HTML:
      // flavor-text, barra-atributos, habilidades, talentos, extras
      function criarDivInfo(classeCss, texto) {
        const div = document.createElement("div");
        div.classList.add(classeCss);
        div.textContent = texto;
        return div;
      }

      2 .appendChild(criarDivInfo("flavor-text", classe.flavor));
      divClasse.appendChild(criarDivInfo("barra-atributos", classe.atributos));
      divClasse.appendChild(criarDivInfo("habilidades", classe.habilidades));
      divClasse.appendChild(criarDivInfo("talentos", classe.talentos));
      divClasse.appendChild(criarDivInfo("extras", classe.extras));

      // Adiciona a classe completa ao container principal
      container.appendChild(divClasse);
    });
  } catch (erro) {
    console.error("Erro ao carregar as classes:", erro);
  }
}

// Executa a função quando a página carregar
carregarClasses();
