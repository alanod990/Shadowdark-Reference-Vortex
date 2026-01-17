async function carregarClasses() {
  try {
    const classesDB = await fetch("classes.json");
    const listClasses = await classesDB.json();
    const containerPrincipal = document.querySelector(".container");

    // 1. TÍTULO
    function criarDivTitulo(className) {
      const div = document.createElement("div");
      div.classList.add("subDivName");
      const h3Class = document.createElement("h3");
      h3Class.classList.add("classNameH3");
      h3Class.textContent = className;
      div.appendChild(h3Class);
      return div;
    }

    // 2. BIO (Flavor Text)
    function criarDivBio(textoBio) {
      const div = document.createElement("div");
      div.classList.add("classBio");
      const bioClass = document.createElement("p");
      bioClass.textContent = textoBio;
      div.appendChild(bioClass);
      return div;
    }

    // 3. ATRIBUTOS (Corrigido para aceitar Texto do JSON)
    function criarDivAtributos(textoAtributos) {
        const div = document.createElement("div");
        div.classList.add("container-atributos");
        // Como no JSON é string, usamos textContent direto
        div.textContent = textoAtributos;
        // Adicionamos negrito via CSS se necessário, ou usamos innerHTML se quiser formatar
        div.style.fontWeight = "bold"; 
        return div;
    }

    // 4. HABILIDADES (Lista)
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

    // 5. TALENTOS (Tabela 2d6)
    function criarDivTalentos(listaTalentos) {
        const div = document.createElement("div");
        div.classList.add("container-talentos");
        const tabela = document.createElement("table");
        tabela.classList.add("tabela-talentos");

        // Cabeçalho
        const linhaCabecalho = document.createElement("tr");
        const thDado = document.createElement("th");
        thDado.textContent = "2d6";
        const thEfeito = document.createElement("th");
        thEfeito.textContent = "Efeito";
        
        linhaCabecalho.appendChild(thDado);
        linhaCabecalho.appendChild(thEfeito);
        tabela.appendChild(linhaCabecalho);

        // Linhas
        listaTalentos.forEach((talento) => {
            const linha = document.createElement("tr");
            const tdDado = document.createElement("td");
            tdDado.textContent = talento.dResult;
            tdDado.classList.add("center"); // Classe CSS para centralizar
            
            const tdEfeito = document.createElement("td");
            tdEfeito.textContent = talento.dEffect;

            linha.appendChild(tdDado);
            linha.appendChild(tdEfeito);
            tabela.appendChild(linha);
        });
        div.appendChild(tabela);
        return div;
    }

    // 6. EXTRAS (Novo: Para tabelas de Títulos e Magias)
    function criarDivExtras(htmlExtras) {
        const div = document.createElement("div");
        div.classList.add("container-extras");
        // Importante: innerHTML permite que as tabelas do JSON funcionem
        div.innerHTML = htmlExtras;
        return div;
    }

    // --- LOOP PRINCIPAL ---
    listClasses.forEach((dadosClasse) => {
        const classCard = document.createElement("div");
        classCard.classList.add("classBlock");

        // Montagem na ordem desejada
        classCard.appendChild(criarDivTitulo(dadosClasse.nome));

        if (dadosClasse.flavor) {
            classCard.appendChild(criarDivBio(dadosClasse.flavor));
        }

        if (dadosClasse.atributos) {
            classCard.appendChild(criarDivAtributos(dadosClasse.atributos));
        }

        if (dadosClasse.habilidades && dadosClasse.habilidades.length > 0) {
            classCard.appendChild(criarDivHabilidades(dadosClasse.habilidades));
        }

        if (dadosClasse.extras) {
            classCard.appendChild(criarDivExtras(dadosClasse.extras));
        }

        if (dadosClasse.talentos && dadosClasse.talentos.length > 0) {
            classCard.appendChild(criarDivTalentos(dadosClasse.talentos));
        }

        containerPrincipal.appendChild(classCard);
    });

  } catch (erro) {
    console.error("Erro ao carregar as classes:", erro);
  }
}

carregarClasses();