const produtos = [];

const categorias = [
  "camiseta",
  "calca",
  "jaqueta",
  "tenis",
  "acessorio"
];

const nomes = [
  "Jaqueta Vintage",
  "Calça Cargo",
  "Tênis Street",
  "Moletom Urban",
  "Camiseta Oversized",
  "Boné Premium",
  "Jaqueta Jeans",
  "Tênis White",
  "Camiseta Basic",
  "Calça Wide Leg"
];

const tamanhos = ["P","M","G","GG"];
const estados = ["Novo","Seminovo","Excelente estado"];

for(let i = 1; i <= 40; i++){

  produtos.push({

    id:i,

    nome:`${nomes[Math.floor(Math.random()*nomes.length)]} ${i}`,

    categoria:
    categorias[Math.floor(Math.random()*categorias.length)],

    preco:
    (Math.random()*250+70).toFixed(2),

    status:"Peça única",

    tamanho:
    tamanhos[Math.floor(Math.random()*tamanhos.length)],

    estado:
    estados[Math.floor(Math.random()*estados.length)],

    medidas:"70x55cm",

    descricao:
    "Peça selecionada manualmente para o acervo exclusivo da Bazar Urban.",

    imagem:
    `https://picsum.photos/600/800?random=${i}`

  });

}

const areaProdutos =
document.getElementById("produtos");

const pesquisa =
document.getElementById("pesquisa");

const categoria =
document.getElementById("categoria");

let carrinho = [];

let frete = 0;

/* RENDER */

function renderizar(lista){

  areaProdutos.innerHTML = "";

  lista.forEach(produto => {

    areaProdutos.innerHTML += `

      <div class="card">

        <img src="${produto.imagem}">

        <div class="card-info">

          <span class="selo">
            ${produto.status}
          </span>

          <h3>${produto.nome}</h3>

          <p>${produto.descricao}</p>

          <div class="preco">
            R$ ${Number(produto.preco)
              .toFixed(2)
              .replace(".",",")}
          </div>

          <div class="card-buttons">

            <button class="btn-light"
            onclick="abrirProduto(${produto.id})">
              Ver peça
            </button>

            <button class="btn-dark"
            onclick="adicionarCarrinho(${produto.id})">
              Adicionar
            </button>

          </div>

        </div>

      </div>

    `;

  });

}

renderizar(produtos);

/* MODAL */

function abrirProduto(id){

  const produto =
  produtos.find(p => p.id === id);

  document.getElementById("modalProduto")
  .style.display = "flex";

  document.getElementById("modalImg")
  .src = produto.imagem;

  document.getElementById("modalNome")
  .innerText = produto.nome;

  document.getElementById("modalDescricao")
  .innerText = produto.descricao;

  document.getElementById("modalPreco")
  .innerText =
  `R$ ${Number(produto.preco)
    .toFixed(2)
    .replace(".",",")}`;

  document.getElementById("modalStatus")
  .innerText = produto.status;

  document.getElementById("modalTamanho")
  .innerText = produto.tamanho;

  document.getElementById("modalEstado")
  .innerText = produto.estado;

  document.getElementById("modalMedidas")
  .innerText = produto.medidas;

  document.getElementById("btnAdicionarModal")
  .onclick = () => {

    adicionarCarrinho(produto.id);

  };

}

function fecharModalProduto(){

  document.getElementById("modalProduto")
  .style.display = "none";

}

/* CARRINHO */

function adicionarCarrinho(id){

  const jaExiste =
  carrinho.find(item => item.id === id);

  if(jaExiste){

    alert("Essa peça já está no carrinho.");

    return;

  }

  const produto =
  produtos.find(p => p.id === id);

  carrinho.push(produto);

  atualizarCarrinho();

}

function removerCarrinho(id){

  carrinho =
  carrinho.filter(item => item.id !== id);

  atualizarCarrinho();

}

function atualizarCarrinho(){

  document.getElementById("contador")
  .innerText = carrinho.length;

  const area =
  document.getElementById("itensCarrinho");

  area.innerHTML = "";

  let subtotal = 0;

  carrinho.forEach(item => {

    subtotal += Number(item.preco);

    area.innerHTML += `

      <div class="item">

        <img src="${item.imagem}">

        <div>

          <h4>${item.nome}</h4>

          <p>
            R$ ${Number(item.preco)
              .toFixed(2)
              .replace(".",",")}
          </p>

          <button class="remover"
          onclick="removerCarrinho(${item.id})">
            remover
          </button>

        </div>

      </div>

    `;

  });

  const total = subtotal + frete;

  document.getElementById("subtotal")
  .innerText =
  `R$ ${subtotal.toFixed(2).replace(".",",")}`;

  document.getElementById("totalCarrinho")
  .innerText =
  `R$ ${total.toFixed(2).replace(".",",")}`;

  document.getElementById("checkoutSubtotal")
  .innerText =
  `R$ ${subtotal.toFixed(2).replace(".",",")}`;

  document.getElementById("checkoutFrete")
  .innerText =
  `R$ ${frete.toFixed(2).replace(".",",")}`;

  document.getElementById("checkoutTotal")
  .innerText =
  `R$ ${total.toFixed(2).replace(".",",")}`;

}

/* DRAWER */

function abrirCarrinho(){

  document.getElementById("carrinho")
  .classList.add("ativo");

}

function fecharCarrinho(){

  document.getElementById("carrinho")
  .classList.remove("ativo");

}

/* CHECKOUT */

function abrirCheckout(){

  if(carrinho.length === 0){

    alert("Seu carrinho está vazio.");

    return;

  }

  document.getElementById("checkout")
  .style.display = "flex";

}

function fecharCheckout(){

  document.getElementById("checkout")
  .style.display = "none";

}

function irEntrega(){

  const nome =
  document.getElementById("nomeCliente").value;

  const email =
  document.getElementById("emailCliente").value;

  if(!nome || !email){

    alert("Preencha seus dados.");

    return;

  }

  document.getElementById("checkoutDados")
  .classList.add("escondido");

  document.getElementById("checkoutEntrega")
  .classList.remove("escondido");

  document.getElementById("etapa1")
  .classList.remove("ativa");

  document.getElementById("etapa2")
  .classList.add("ativa");

}

function voltarDados(){

  document.getElementById("checkoutEntrega")
  .classList.add("escondido");

  document.getElementById("checkoutDados")
  .classList.remove("escondido");

  document.getElementById("etapa2")
  .classList.remove("ativa");

  document.getElementById("etapa1")
  .classList.add("ativa");

}

function calcularFreteCheckout(){

  const cep =
  document.getElementById("cepCliente").value;

  if(cep.length < 8){

    alert("Digite um CEP válido.");

    return;

  }

  frete = 27.90;

  document.getElementById("resultadoFrete")
  .innerText =
  `Frete calculado: R$ ${frete
    .toFixed(2)
    .replace(".",",")}`;

  atualizarCarrinho();

  document.getElementById("checkoutEntrega")
  .classList.add("escondido");

  document.getElementById("checkoutPagamento")
  .classList.remove("escondido");

  document.getElementById("etapa2")
  .classList.remove("ativa");

  document.getElementById("etapa3")
  .classList.add("ativa");

}

function voltarEntrega(){

  document.getElementById("checkoutPagamento")
  .classList.add("escondido");

  document.getElementById("checkoutEntrega")
  .classList.remove("escondido");

  document.getElementById("etapa3")
  .classList.remove("ativa");

  document.getElementById("etapa2")
  .classList.add("ativa");

}

/* PAGAMENTO */

function trocarPagamento(){

  const tipo =
  document.getElementById("pagamento").value;

  if(tipo === "pix"){

    document.getElementById("areaPix")
    .classList.remove("escondido");

    document.getElementById("areaCartao")
    .classList.add("escondido");

  }else{

    document.getElementById("areaCartao")
    .classList.remove("escondido");

    document.getElementById("areaPix")
    .classList.add("escondido");

  }

}

function copiarPix(){

  navigator.clipboard.writeText(
    "bazarurban@pix.com"
  );

  alert("Chave PIX copiada.");

}

/* FINALIZAR */

function confirmarPedido(){

  const pagamento =
  document.getElementById("pagamento").value;

  if(pagamento === "cartao"){

    const numero =
    document.getElementById("numeroCartao").value;

    const cvv =
    document.getElementById("cvvCartao").value;

    if(!numero || !cvv){

      alert("Preencha os dados do cartão.");

      return;

    }

  }

  const pedido =
  Math.floor(Math.random()*100000);

  alert(
    `Pedido #${pedido} confirmado com sucesso.`
  );

  carrinho = [];

  frete = 0;

  atualizarCarrinho();

  fecharCheckout();

  fecharCarrinho();

}

/* FILTRO */

pesquisa.addEventListener("input", filtrar);

categoria.addEventListener("change", filtrar);

function filtrar(){

  const texto =
  pesquisa.value.toLowerCase();

  const filtro =
  categoria.value;

  const filtrados = produtos.filter(produto => {

    const nome =
    produto.nome
    .toLowerCase()
    .includes(texto);

    const categoriaOk =
    filtro === "todos" ||
    produto.categoria === filtro;

    return nome && categoriaOk;

  });

  renderizar(filtrados);

}