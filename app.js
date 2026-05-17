const produtos = [
  {
    id:1,
    nome:"Jaqueta Vintage Black",
    categoria:"jaqueta",
    preco: 49.99,
    checkout:"https://pay.risepay.com.br/Pay/3d2f366ed6e84090aeb4973b2c463b08",
    status:"Peça única",
    tamanho:"G",
    estado:"Excelente estado",
    medidas:"70x58cm",
    descricao:"Jaqueta vintage oversized selecionada manualmente.",
    imagem:"https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=1200"
  },

  {
    id:2,
    nome:"Camiseta Oversized",
    categoria:"camiseta",
    preco:79.90,
    checkout:"https://pay.risepay.com.br/Pay/ddb6e3bf7cb440f8b73cf5176b82c87f",
    status:"Peça única",
    tamanho:"M",
    estado:"Nova",
    medidas:"74x56cm",
    descricao:"Camiseta premium streetwear minimalista.",
    imagem:"https://images.unsplash.com/photo-1503341504253-dff4815485f1?q=80&w=1200"
  },

  {
    id:3,
    nome:"Calça Cargo Urban",
    categoria:"calca",
    preco:149.90,
    checkout:"https://pay.risepay.com.br/Pay/20d0ac2a83db41b88cb7196932875d6d",
    status:"Peça única",
    tamanho:"42",
    estado:"Excelente estado",
    medidas:"105x44cm",
    descricao:"Calça cargo urbana com modelagem reta.",
    imagem:"https://images.unsplash.com/photo-1541099649105-f69ad21f3246?q=80&w=1200"
  },

  {
    id:4,
    nome:"Tênis Street White",
    categoria:"tenis",
    preco:229.90,
    checkout:"https://pay.risepay.com.br/Pay/44df9a55b6054f318fd1cfa61bfa75b1",
    status:"Peça única",
    tamanho:"41",
    estado:"Novo",
    medidas:"41 BR",
    descricao:"Tênis casual premium para composição street.",
    imagem:"https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1200"
  }
];

for(let i = 5; i <= 40; i++){

  produtos.push({

    id:i,

    nome:`Peça Exclusiva ${i}`,

    categoria:["camiseta","calca","jaqueta","tenis","acessorio"]
    [Math.floor(Math.random()*5)],

    preco:(Math.random()*250+70),

    status:"Peça única",

    tamanho:["P","M","G","GG"][Math.floor(Math.random()*4)],

    estado:["Novo","Excelente estado","Seminovo"]
    [Math.floor(Math.random()*3)],

    medidas:"70x55cm",

    descricao:
    "Produto selecionado manualmente para o acervo Bazar Urban.",

    imagem:
    `https://picsum.photos/600/800?random=${i}`

  });

}

/* ELEMENTOS */

const listaProdutos =
document.getElementById("listaProdutos");

const pesquisa =
document.getElementById("pesquisa");

const categoria =
document.getElementById("categoria");

/* STORAGE */

let carrinho =
JSON.parse(localStorage.getItem("bazarUrbanCarrinho"))
|| [];

let frete = 0;

/* RENDER */

function renderizarProdutos(lista){

  listaProdutos.innerHTML = "";

  lista.forEach(produto => {

    listaProdutos.innerHTML += `

      <div class="card">

        <img src="${produto.imagem}">

        <div class="card-info">

          <span class="badge">
            ${produto.status}
          </span>

          <h3>${produto.nome}</h3>

          <p>${produto.descricao}</p>

          <div class="preco">
            R$ ${Number(produto.preco)
              .toFixed(2)
              .replace(".",",")}
          </div>

          <div class="card-botoes">

            <button class="btn secundario"
            onclick="abrirProduto(${produto.id})">
              Ver peça
            </button>

            <button class="btn principal"
            onclick="adicionarCarrinho(${produto.id})">
              Comprar
            </button>

          </div>

        </div>

      </div>

    `;

  });

}

renderizarProdutos(produtos);

/* PRODUTO */

function abrirProduto(id){

  const produto =
  produtos.find(p => p.id === id);

  document.getElementById("modalProduto")
  .style.display = "flex";

  document.getElementById("produtoImagem")
  .src = produto.imagem;

  document.getElementById("produtoNome")
  .innerText = produto.nome;

  document.getElementById("produtoDescricao")
  .innerText = produto.descricao;

  document.getElementById("produtoPreco")
  .innerText =
  `R$ ${Number(produto.preco)
    .toFixed(2)
    .replace(".",",")}`;

  document.getElementById("produtoStatus")
  .innerText = produto.status;

  document.getElementById("produtoTamanho")
  .innerText = produto.tamanho;

  document.getElementById("produtoEstado")
  .innerText = produto.estado;

  document.getElementById("produtoMedidas")
  .innerText = produto.medidas;

  document.getElementById("btnAdicionarProduto")
  .onclick = () => {

    adicionarCarrinho(produto.id);

  };

}

function fecharProduto(){

  document.getElementById("modalProduto")
  .style.display = "none";

}

/* CARRINHO */

function salvarCarrinho(){

  localStorage.setItem(
    "bazarUrbanCarrinho",
    JSON.stringify(carrinho)
  );

}

function adicionarCarrinho(id){

  const produto =
  produtos.find(p => p.id === id);

  if(produto.checkout){

    window.open(produto.checkout, "_blank");

    return;

  }

  alert("Checkout não encontrado.");

}

function removerCarrinho(id){

  carrinho =
  carrinho.filter(item => item.id !== id);

  salvarCarrinho();

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
  `R$ ${(subtotal + frete)
    .toFixed(2)
    .replace(".",",")}`;

}

atualizarCarrinho();

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

function proximaEntrega(){

  const nome =
  document.getElementById("nomeCliente").value;

  const email =
  document.getElementById("emailCliente").value;

  if(!nome || !email){

    alert("Preencha os dados.");

    return;

  }

  document.getElementById("areaDados")
  .classList.add("escondido");

  document.getElementById("areaEntrega")
  .classList.remove("escondido");

  document.getElementById("passo1")
  .classList.remove("ativo");

  document.getElementById("passo2")
  .classList.add("ativo");

}

function voltarDados(){

  document.getElementById("areaEntrega")
  .classList.add("escondido");

  document.getElementById("areaDados")
  .classList.remove("escondido");

  document.getElementById("passo2")
  .classList.remove("ativo");

  document.getElementById("passo1")
  .classList.add("ativo");

}

function calcularFrete(){

  const cep =
  document.getElementById("cepCliente").value;

  if(cep.length < 8){

    alert("Digite um CEP válido.");

    return;

  }

  frete = 27.90;

  atualizarCarrinho();

  document.getElementById("resultadoFrete")
  .innerText =
  `Frete calculado: R$ ${frete
    .toFixed(2)
    .replace(".",",")}`;

  document.getElementById("areaEntrega")
  .classList.add("escondido");

  document.getElementById("areaPagamento")
  .classList.remove("escondido");

  document.getElementById("passo2")
  .classList.remove("ativo");

  document.getElementById("passo3")
  .classList.add("ativo");

}

function voltarEntrega(){

  document.getElementById("areaPagamento")
  .classList.add("escondido");

  document.getElementById("areaEntrega")
  .classList.remove("escondido");

  document.getElementById("passo3")
  .classList.remove("ativo");

  document.getElementById("passo2")
  .classList.add("ativo");

}

/* PAGAMENTO */

function mudarPagamento(){

  const forma =
  document.getElementById("formaPagamento").value;

  if(forma === "pix"){

    document.getElementById("boxPix")
    .classList.remove("escondido");

    document.getElementById("boxCartao")
    .classList.add("escondido");

  }else{

    document.getElementById("boxCartao")
    .classList.remove("escondido");

    document.getElementById("boxPix")
    .classList.add("escondido");

  }

}

function copiarPix(){

  navigator.clipboard.writeText(
    "bazarurban@pix.com"
  );

  alert("Pix copiado.");

}

/* PEDIDO */

function confirmarPedido(){

  const forma =
  document.getElementById("formaPagamento").value;

  if(forma === "cartao"){

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

  document.getElementById("numeroPedido")
  .innerText =
  `Pedido #${pedido} confirmado com sucesso.`;

  document.getElementById("pedidoFinalizado")
  .style.display = "flex";

  carrinho = [];

  frete = 0;

  salvarCarrinho();

  atualizarCarrinho();

  fecharCheckout();

  fecharCarrinho();

}

function fecharPedidoFinalizado(){

  document.getElementById("pedidoFinalizado")
  .style.display = "none";

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
    produto.nome.toLowerCase()
    .includes(texto);

    const categoriaOk =
    filtro === "todos" ||
    produto.categoria === filtro;

    return nome && categoriaOk;

  });

  renderizarProdutos(filtrados);

}