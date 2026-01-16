// Função para buscar os dados e popular a página
async function carregarClasses() {
  try {
    const classesDB = await fetch("classes.json"); // carrega arquivo json
    const listClasses = await classesDB.json(); // transforma o arquivo em objetos
    const containerPrincipal = document.querySelector(".container"); // define classe da div que irá receber o conteúdo total

    listClasses.forEach((dadosClasse) => {
      // função que irá processar cada entrada de classe do arquivo json

      const classCard = document.createElement("div"); // cria a uma div para cada classe
      classCard.classList.add("classBlock"); // da à div a classe "classBlock"
      // CRIA A DIV CABEÇALHO E INCLUI UM H3
      function criarDivTitulo(className) {
        const div = document.createElement("div");
        div.classList.add("subDivName");

        const h3Class = document.createElement("h3");
        h3Class.textContent = className;
        h3Class.classList.add("classNameH3");

        div.appendChild(h3Class);
        return div;
      }
      // CRIA A DIV BIO
      function criarDivBio(classBio) {
        const div = document.createElement("div");
        div.classList.add(classBio);

        const bioClass = document.createElement("p");
        bioClass.textContent = classBio;
        bioClass.classList.add("classTextBio");

        div.appendChild(bioClass);
        return div;
      }

      // CRIA A DIV BARRA ATRIBUTOS
      function criarDivBio(classBio) {
        const div = document.createElement("div");
        div.classList.add(classBio);

        const bioClass = document.createElement("p");
        bioClass.textContent = classBio;
        bioClass.classList.add("classTextBio");

        div.appendChild(bioClass);
        return div;
      }

      function classNconttent(classDiv, classDivContent) {
        // função que irá popular a classDiv com conteúdo
        const div = document.createElement("div"); // cria uma div
        div.classList.add(classDiv); // da à div a classe "classDiv"
        div.textContent = classDivContent; // introduz o conteúdo na div. Reconsiderar este método
        return div; // retorna a div agora populada com conteúdo
      }

      // reconsiderar o seguinte método para criar todas as subdivs da classe
      classCard.appendChild(classNconttent("flavor-text", dadosClasse.flavor));
      classCard.appendChild(
        classNconttent("barra-atributos", dadosClasse.atributos)
      );
      classCard.appendChild(
        classNconttent("habilidades", dadosClasse.habilidades)
      );
      classCard.appendChild(classNconttent("talentos", dadosClasse.talentos));
      classCard.appendChild(classNconttent("extras", dadosClasse.extras));

      // Adiciona a classe completa ao container principal
      containerPrincipal.appendChild(classCard);
    });
  } catch (erro) {
    console.error("Erro ao carregar as classes:", erro);
  }
}

// Executa a função quando a página carregar
carregarClasses();
