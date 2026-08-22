# Imersão Dev Alura: Atletas do Brasil

Página web estática desenvolvida durante os estudos de HTML, CSS e JavaScript. A aplicação apresenta um campo de busca para encontrar atletas brasileiros a partir do nome ou da descrição.

## Funcionalidades

- pesquisar atletas por nome;
- pesquisar por palavras presentes na descrição;
- ignorar diferenças entre letras maiúsculas e minúsculas;
- exibir nome, descrição e link para mais informações;
- abrir os links em uma nova aba;
- mostrar aviso quando a busca é enviada sem texto.

Os dados da aplicação são mantidos localmente no arquivo `dados.js` e atualmente incluem Rayssa Leal, Rebeca Andrade e Beatriz Souza.

## Como funciona

```text
Usuário digita um termo
					↓
app.js percorre os dados
					↓
Compara título e descrição
					↓
Renderiza os resultados na página
```

A pesquisa é feita quando o botão **Pesquisar** chama a função `pesquisar()`. Os resultados são inseridos no elemento `#resultados-pesquisa`.

## Estrutura do projeto

```text
Imers-o-Dev-Alura---html-css-js/
├── README.md
├── index.html       # Estrutura da página
├── style.css        # Layout e estilos responsivos
├── app.js           # Lógica da pesquisa
└── dados.js         # Lista de atletas e links
```

## Tecnologias

- HTML5;
- CSS3;
- JavaScript;
- Google Fonts, usando a família Chakra Petch.

Não há servidor, banco de dados ou dependências npm necessárias.

## Como executar

Como é uma página estática, abra `index.html` diretamente no navegador.

Também é possível usar a extensão **Live Server** do VS Code:

1. Abra a pasta do projeto no VS Code.
2. Clique com o botão direito em `index.html`.
3. Selecione **Open with Live Server**.

## Como pesquisar

1. Digite o nome de uma atleta ou uma palavra da descrição.
2. Clique em **Pesquisar**.
3. Consulte os resultados exibidos.
4. Clique em **Mais Informações** para abrir a referência externa.

Exemplos de termos:

```text
Rayssa
ginasta
judoca
medalhas
```

## Dados

Cada item em `dados.js` segue este formato:

```js
{
	titulo: "Nome do atleta",
	descricao: "Descrição do atleta",
	link: "https://exemplo.com"
}
```

Para adicionar uma nova atleta, inclua outro objeto no array `dados`.

## Responsividade

O `style.css` possui regras para telas de até 768 px e 480 px, ajustando o tamanho do título, campo de busca, botão, área de resultados e rodapé.

## Observações

- A busca retorna uma área vazia quando nenhum item corresponde ao termo informado.
- Os links e os dados são demonstrativos.
- As informações detalhadas dos atletas são acessadas em páginas externas.
- A aplicação não possui persistência ou atualização automática dos dados.

## Objetivo

Praticar manipulação do DOM, eventos de formulário, filtragem de arrays, template strings, links externos e estilização responsiva com CSS.
