// Função para buscar os dados e popular a página
async function carregarClasses() {
  try {
    const classesDB = await fetch("classes.json"); // carrega arquivo json
    const listClasses = await classesDB.json(); // transforma o arquivo em objetos
    const selecDiv = document.querySelector(".container"); // define classe da div que irá receber o conteúdo total

    listClasses.forEach((theClass) => { // função que irá processar cada entrada de classe do arquivo json
      function classNconttent(classDiv, classDivContent) { // função que irá popular a classDiv com conteúdo
        const div = document.createElement("div"); // cria uma div
        div.classList.add(classDiv); // da à div a classe "classDiv"
        div.textContent = classDivContent; // introduz o conteúdo na div. Reconsiderar este método
        return div; // retorna a div agora populada com conteúdo
      }
      const makeSubDiv = document.createElement("div"); // cria a uma div para cada classe
      makeSubDiv.classList.add("subDiv"); // da à div a classe "classDiv"
      
// reconsiderar o seguinte método para criar todas as subdivs da classe
      makeSubDiv.appendChild(classNconttent("flavor-text", theClass.flavor));
      makeSubDiv.appendChild(classNconttent("barra-atributos", theClass.atributos));
      makeSubDiv.appendChild(classNconttent("habilidades", theClass.habilidades));
      makeSubDiv.appendChild(classNconttent("talentos", theClass.talentos));
      makeSubDiv.appendChild(classNconttent("extras", theClass.extras));

      // Adiciona a classe completa ao container principal
      selecDiv.appendChild(makeSubDiv);
    });
  } catch (erro) {
    console.error("Erro ao carregar as classes:", erro);
  }
}

// Executa a função quando a página carregar
carregarClasses();
