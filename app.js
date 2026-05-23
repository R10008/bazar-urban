const produtos = [
  {
    id:1,
    nome:"Moletom Essentials",
    categoria:"jaqueta",
    preco:74.99,
    checkout:"https://pay.risepay.com.br/Pay/0a3078e4af6a4f3ebaa1c73e784dfd74",
    status:"Peça única",
    tamanho:"M",
    estado:"Novo",
    medidas:"70x55cm",
    descricao:"Produto selecionado manualmente para o acervo Bazar Urban.",
    imagem:"https://m.media-amazon.com/images/I/51fZ8HdmIIL._AC_SX569_.jpg"
  },
  {
    id:2,
    nome:"Jaqueta Denim Vintage",
    categoria:"jaqueta",
    preco:87.02,
    checkout:"https://pay.risepay.com.br/Pay/a9d6d2bdadcc4132ab006755cf56180e",
    status:"Peça única",
    tamanho:"G",
    estado:"Excelente estado",
    medidas:"72x58cm",
    descricao:"Produto selecionado manualmente para o acervo Bazar Urban.",
    imagem:"https://conceitoprisma.com.br/wp-content/uploads/2022/07/jaqueta-jeans-vintage-conceito-prisma-azul-2.jpg"
  },
  {
    id:3,
    nome:"Camiseta Boxy Cream",
    categoria:"camiseta",
    preco:89.90,
    checkout:"https://pay.risepay.com.br/Pay/e9375a054d8845ebbcbe215776b6f176",
    status:"Peça única",
    tamanho:"M",
    estado:"Novo",
    medidas:"74x56cm",
    descricao:"Produto selecionado manualmente para o acervo Bazar Urban.",
    imagem:"https://down-br.img.susercontent.com/file/br-11134207-7r98o-m1e8lyn9mu002f"
  },
  {
    id:4,
    nome:"Calça Baggy Jeans",
    categoria:"calca",
    preco:79.90,
    checkout:"https://pay.risepay.com.br/Pay/373bd0e1b03947d9be5f23bd8e858b84",
    status:"Peça única",
    tamanho:"M",
    estado:"Excelente estado",
    medidas:"105x44cm",
    descricao:"Produto selecionado manualmente para o acervo Bazar Urban.",
    imagem:"https://www.tradeinn.com/f/14174/141749087/def-jeans-baggy.webp"
  },
  {
    id:5,
    nome:"Tênis Urban Black",
    categoria:"tenis",
    preco:119.90,
    checkout:"https://pay.risepay.com.br/Pay/7e7993ee294b477a86495945c8d34cee",
    status:"Peça única",
    tamanho:"39/40",
    estado:"Novo",
    medidas:"39/40 BR",
    descricao:"Produto selecionado manualmente para o acervo Bazar Urban.",
    imagem:"https://static.netshoes.com.br/produtos/tenis-mormai-urban-free/06/7FG-0207-006/7FG-0207-006_zoom1.jpg?ts=1769000049&ims=1088x"
  },
  {
    id:6,
    nome:"Hoodie Oversized",
    categoria:"jaqueta",
    preco:89.90,
    checkout:"https://pay.risepay.com.br/Pay/21c3ad7cde9946dcbb053635ea7af56e",
    status:"Peça única",
    tamanho:"G",
    estado:"Novo",
    medidas:"72x58cm",
    descricao:"Produto selecionado manualmente para o acervo Bazar Urban.",
    imagem:"https://cdna.lystit.com/photos/boohooman/a3624f80/boohooman-designer-black-Bonded-Scuba-Oversized-Hoodie.jpeg"
  },
  {
    id:7,
    nome:"Camiseta Street Off White",
    categoria:"camiseta",
    preco:99.90,
    checkout:"https://pay.risepay.com.br/Pay/21968022bb574a1eb7e030f80150009d",
    status:"Peça única",
    tamanho:"M",
    estado:"Novo",
    medidas:"74x56cm",
    descricao:"Produto selecionado manualmente para o acervo Bazar Urban.",
    imagem:"https://down-br.img.susercontent.com/file/br-11134207-7r98o-lzj1jzgduexxa2"
  }
];

const listaProdutos = document.getElementById("listaProdutos");
const pesquisa = document.getElementById("pesquisa");
const categoria = document.getElementById("categoria");

let carrinho = [];
let frete = 0;
let produtoSelecionado = null;

function renderizarProdutos(lista){
  listaProdutos.innerHTML = "";

  lista.forEach(produto => {
    listaProdutos.innerHTML += `
      <div class="card">
        <img src="${produto.imagem}">
        <div class="card-info">
          <span class="badge">${produto.status}</span>
          <h3>${produto.nome}</h3>
          <p>${produto.descricao}</p>

          <div class="preco">
            R$ ${Number(produto.preco).toFixed(2).replace(".",",")}
          </div>

          <div class="card-botoes">
            <button class="btn secundario" onclick="abrirProduto(${produto.id})">
              Ver peça
            </button>

            <button class="btn principal" onclick="comprarProduto(${produto.id})">
              Comprar
            </button>
          </div>
        </div>
      </div>
    `;
  });
}

renderizarProdutos(produtos);

function abrirProduto(id){
  const produto = produtos.find(p => p.id === id);

  document.getElementById("modalProduto").style.display = "flex";
  document.getElementById("produtoImagem").src = produto.imagem;
  document.getElementById("produtoNome").innerText = produto.nome;
  document.getElementById("produtoDescricao").innerText = produto.descricao;
  document.getElementById("produtoPreco").innerText =
    `R$ ${Number(produto.preco).toFixed(2).replace(".",",")}`;
  document.getElementById("produtoStatus").innerText = produto.status;
  document.getElementById("produtoTamanho").innerText = produto.tamanho;
  document.getElementById("produtoEstado").innerText = produto.estado;
  document.getElementById("produtoMedidas").innerText = produto.medidas;

  document.getElementById("btnAdicionarProduto").onclick = () => {
    comprarProduto(produto.id);
  };
}

function fecharProduto(){
  document.getElementById("modalProduto").style.display = "none";
}

function comprarProduto(id){
  const produto = produtos.find(p => p.id === id);

  if(!produto.checkout){
    alert("Esse produto ainda não tem checkout RisePay cadastrado.");
    return;
  }

  produtoSelecionado = produto;
  carrinho = [produto];
  frete = 0;

  atualizarCarrinho();
  fecharProduto();
  abrirCheckout();
}

function atualizarCarrinho(){
  document.getElementById("contador").innerText = carrinho.length;

  const area = document.getElementById("itensCarrinho");
  area.innerHTML = "";

  let subtotal = 0;

  carrinho.forEach(item => {
    subtotal += Number(item.preco);

    area.innerHTML += `
      <div class="item">
        <img src="${item.imagem}">
        <div>
          <h4>${item.nome}</h4>
          <p>R$ ${Number(item.preco).toFixed(2).replace(".",",")}</p>
        </div>
      </div>
    `;
  });

  const total = subtotal + frete;

  document.getElementById("subtotal").innerText =
    `R$ ${subtotal.toFixed(2).replace(".",",")}`;

  document.getElementById("totalCarrinho").innerText =
    `R$ ${total.toFixed(2).replace(".",",")}`;

  document.getElementById("checkoutSubtotal").innerText =
    `R$ ${subtotal.toFixed(2).replace(".",",")}`;

  document.getElementById("checkoutFrete").innerText =
    `R$ ${frete.toFixed(2).replace(".",",")}`;

  document.getElementById("checkoutTotal").innerText =
    `R$ ${total.toFixed(2).replace(".",",")}`;
}

atualizarCarrinho();

function abrirCarrinho(){
  document.getElementById("carrinho").classList.add("ativo");
}

function fecharCarrinho(){
  document.getElementById("carrinho").classList.remove("ativo");
}

function abrirCheckout(){
  if(carrinho.length === 0){
    alert("Seu carrinho está vazio.");
    return;
  }

  document.getElementById("checkout").style.display = "flex";

  document.getElementById("areaDados").classList.remove("escondido");
  document.getElementById("areaEntrega").classList.add("escondido");
  document.getElementById("areaPagamento").classList.add("escondido");

  document.getElementById("passo1").classList.add("ativo");
  document.getElementById("passo2").classList.remove("ativo");
  document.getElementById("passo3").classList.remove("ativo");
}

function fecharCheckout(){
  document.getElementById("checkout").style.display = "none";
}

function proximaEntrega(){
  const nome = document.getElementById("nomeCliente").value;
  const email = document.getElementById("emailCliente").value;
  const whats = document.getElementById("whatsCliente").value;

  if(!nome || !email || !whats){
    alert("Preencha nome, e-mail e WhatsApp.");
    return;
  }

  document.getElementById("areaDados").classList.add("escondido");
  document.getElementById("areaEntrega").classList.remove("escondido");

  document.getElementById("passo1").classList.remove("ativo");
  document.getElementById("passo2").classList.add("ativo");
}

function voltarDados(){
  document.getElementById("areaEntrega").classList.add("escondido");
  document.getElementById("areaDados").classList.remove("escondido");

  document.getElementById("passo2").classList.remove("ativo");
  document.getElementById("passo1").classList.add("ativo");
}

function calcularFrete(){
  const cep = document.getElementById("cepCliente").value;
  const cidade = document.getElementById("cidadeCliente").value;
  const endereco = document.getElementById("enderecoCliente").value;

  if(!cep || cep.length < 8 || !cidade || !endereco){
    alert("Preencha CEP, cidade e endereço completo.");
    return;
  }

  frete = 27.90;
  atualizarCarrinho();

  document.getElementById("resultadoFrete").innerText =
    `Frete calculado: R$ ${frete.toFixed(2).replace(".",",")}`;

  document.getElementById("areaEntrega").classList.add("escondido");
  document.getElementById("areaPagamento").classList.remove("escondido");

  document.getElementById("passo2").classList.remove("ativo");
  document.getElementById("passo3").classList.add("ativo");
}

function voltarEntrega(){
  document.getElementById("areaPagamento").classList.add("escondido");
  document.getElementById("areaEntrega").classList.remove("escondido");

  document.getElementById("passo3").classList.remove("ativo");
  document.getElementById("passo2").classList.add("ativo");
}

function confirmarPedido(){
  const produto = produtoSelecionado || carrinho[0];

  if(!produto || !produto.checkout){
    alert("Checkout não encontrado para esse produto.");
    return;
  }

  window.location.href = produto.checkout;
}

function fecharPedidoFinalizado(){
  document.getElementById("pedidoFinalizado").style.display = "none";
}

pesquisa.addEventListener("input", filtrar);
categoria.addEventListener("change", filtrar);

function filtrar(){
  const texto = pesquisa.value.toLowerCase();
  const filtro = categoria.value;

  const filtrados = produtos.filter(produto => {
    const nome = produto.nome.toLowerCase().includes(texto);
    const categoriaOk = filtro === "todos" || produto.categoria === filtro;
    return nome && categoriaOk;
  });

  renderizarProdutos(filtrados);
}