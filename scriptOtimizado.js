// Função para buscar os dados e popular a página
async function carregarClasses() {
  try {
    const classesDB = await fetch("classes.json"); // carrega arquivo json
    const listClasses = await classesDB.json(); // transforma o arquivo em objetos
    const containerPrincipal = document.querySelector(".container"); // define classe da div que irá receber o conteúdo total

    // CRIA A DIV CABEÇALHO
    function criarDivTitulo(className) {
      const div = document.createElement("div");
      div.classList.add("subDivName");

      const h3Class = document.createElement("h3");
      h3Class.classList.add("classNameH3");
      h3Class.textContent = className;

      div.appendChild(h3Class);
      return div;
    }

    // CRIA A DIV BIO
    function criarDivBio(textoBio) {
      const div = document.createElement("div");
      div.classList.add("classBio");

      const bioClass = document.createElement("p");
      bioClass.classList.add("classTextBio");
      bioClass.textContent = textoBio;

      div.appendChild(bioClass);
      return div;
    }

    // CRIA A BARRA DE ATRIBUTOS
    function criarDivAtributos(listaAtributos) {
        const div = document.createElement("div");
        div.classList.add("container-atributos");

        const listaUl = document.createElement("ul");
        listaUl.classList.add("lista-horizontal");

        listaAtributos.forEach((atributo) => {
            const itemLi = document.createElement("li");
            const tituloAttr = document.createElement("strong");
            tituloAttr.textContent = atributo.tipo;

            itemLi.appendChild(tituloAttr);
            itemLi.append(`: ${atributo.description}`);

            listaUl.appendChild(itemLi);
        });

        div.appendChild(listaUl);
        return div;
    }

    // CRIA A LISTA DE HABILIDADES
    function criarDivHabilidades(listaHabilidades) {
        const div = document.createElement("div");
        div.classList.add("container-habilidades");

        const listaUl = document.createElement("ul");
        listaUl.classList.add("lista-habilidades");  

        listaHabilidades.forEach((habilidade) => {
            const itemLi = document.createElement("li");
            const nomeHab = document.createElement("strong");
            nomeHab.textContent = habilidade.habNome;

            itemLi.appendChild(nomeHab);
            itemLi.append(`: ${habilidade.habDes}`);

            listaUl.appendChild(itemLi);
        });

        div.appendChild(listaUl);
        return div;
    }

    // CRIA A TABELA DE TALENTOS
    function criarDivTalentos(listaTalentos) {
        const div = document.createElement("div");
        div.classList.add("container-talentos");

        const tabela = document.createElement("table");
        tabela.classList.add("tabela-talentos");

        // 1. Cria o Cabeçalho (Título das colunas)
        const linhaCabecalho = document.createElement("tr");
    
        const thDado = document.createElement("th");
        thDado.textContent = "2d6"; // Título da coluna do dado
    
        const thEfeito = document.createElement("th");
        thEfeito.textContent = "Efeito"; // Título da coluna do efeito

        linhaCabecalho.appendChild(thDado);
        linhaCabecalho.appendChild(thEfeito);
        tabela.appendChild(linhaCabecalho);

        // 2. Preenche as linhas com os dados do JSON
        listaTalentos.forEach((talento) => {
            const linha = document.createElement("tr");

            const tdDado = document.createElement("td");
            tdDado.textContent = talento.dResult;
            tdDado.classList.add("celula-dado");

            const tdEfeito = document.createElement("td");
            tdEfeito.textContent = talento.dEffect;

            linha.appendChild(tdDado);
            linha.appendChild(tdEfeito);
            tabela.appendChild(linha);
        });

        div.appendChild(tabela);
    return div;
    }

    // O LOOP PRINCIPAL
    listClasses.forEach((dadosClasse) => {
        // 1. Cria o cartão principal da classe
        const classCard = document.createElement("div");
        classCard.classList.add("classBlock");

        // --- CHAMADA DAS FUNÇÕES AUXILIARES ---
        // 2. Título (Nome da Classe)
        const divTitulo = criarDivTitulo(dadosClasse.nome);
        classCard.appendChild(divTitulo);

        // 3. Bio (Texto de Flavor)
        // Verifica se existe o campo 'flavor' antes de criar
        if (dadosClasse.flavor) {
            const divBio = criarDivBio(dadosClasse.flavor);
            classCard.appendChild(divBio);
        }

        // 4. Atributos (Barra Horizontal)
        if (dadosClasse.atributos) {
            const divAtributos = criarDivAtributos(dadosClasse.atributos);
            classCard.appendChild(divAtributos);
        }

        // 5. Habilidades (Lista com bullet points)
        if (dadosClasse.habilidades) {
            const divHabilidades = criarDivHabilidades(dadosClasse.habilidades);
            classCard.appendChild(divHabilidades);
        }

        // 6. Talentos (Tabela 2d6)
        if (dadosClasse.talentos) {
            const divTalentos = criarDivTalentos(dadosClasse.talentos);
            classCard.appendChild(divTalentos);
        }

        // --- FINALIZAÇÃO ---

        // 7. Adiciona o cartão completo ao container principal da página
        // 'selecDiv' é a variável onde você guardou o document.querySelector(".container")
        containerPrincipal.appendChild(classCard);
    });

  } catch (erro) {
    console.error("Erro ao carregar as classes:", erro);
  }
}

// Executa a função quando a página carregar
carregarClasses();
