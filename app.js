// console.log(dados); // Loga os dados para depuração (pode ser removido em produção)

function pesquisar() {
    let input = document.getElementById("campo-pesquisa").value;
    input=input.toLowerCase();

    // Obtém a seção HTML onde os resultados serão exibidos
    let section = document.getElementById("resultados-pesquisa");

    if(input==""){
      return alert("Nada pesquisado")
    }
    // Inicializa uma string vazia para construir o HTML dos resultados
    let result = "";
    let titulo = "";
    let descricao = "";
  
    // Itera sobre cada dado da pesquisa e constrói o HTML correspondente
    for (let dado of dados) {
      titulo = dado.titulo.toLowerCase();
      descricao = dado.descricao.toLowerCase();

      if(titulo.includes(input) == true || descricao.includes(input)==true) {
              // Cria um item de resultado com título, descrição e link
            result += `
            <div class="item-resultado">
              <h2>
                <a href="#" target="_blank">${dado.titulo}</a>
              </h2>
              <p class="descricao-meta">
                ${dado.descricao}
              </p>
              <a href="${dado.link}" target="_blank">Mais Informações</a>
            </div>
          `;
        }
      }
      
  
    // Atualiza o conteúdo da seção com os resultados da pesquisa
    section.innerHTML = result;
  }