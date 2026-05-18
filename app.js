const produtos = [
  {
    id:1,
    nome:"Jaqueta Vintage Black",
    categoria:"jaqueta",
    preco:49.90,
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

const nomesProdutos = [
  "Moletom Essentials",
  "Jaqueta Denim Vintage",
  "Camiseta Boxy Cream",
  "Calça Baggy Jeans",
  "Tênis Urban Black",
  "Hoodie Oversized",
  "Camiseta Street Off White",
  "Cargo Utility",
  "Jaqueta Varsity",
  "Moletom Heavy",
  "Tênis Classic Retro",
  "Camiseta Minimal",
  "Calça Wide Leg",
  "Jaqueta Workwear",
  "Boné Vintage",
  "Camiseta Underground",
  "Cargo Militar",
  "Tênis Shadow",
  "Moletom Basic Nude",
  "Jaqueta Puffer",
  "Camiseta Premium",
  "Wide Pants",
  "Tênis Skate Low",
  "Hoodie Midnight",
  "Camiseta Washed",
  "Jaqueta Canvas",
  "Cargo Black",
  "Tênis Runner",
  "Moletom Urban Fit",
  "Camiseta Vintage Tee",
  "Calça Carpenter",
  "Jaqueta Street",
  "Boné Black Label",
  "Camiseta Essential",
  "Calça Utility",
  "Tênis White Clean"
];

for(let i = 5; i <= 40; i++){
  produtos.push({
    id:i,
    nome:nomesProdutos[i - 5],
    categoria:["camiseta","calca","jaqueta","tenis","acessorio"][Math.floor(Math.random()*5)],
    preco:(Math.random()*250+70),
    status:"Peça única",
    tamanho:["P","M","G","GG"][Math.floor(Math.random()*4)],
    estado:["Novo","Excelente estado","Seminovo"][Math.floor(Math.random()*3)],
    medidas:"70x55cm",
    descricao:"Produto selecionado manualmente para o acervo Bazar Urban.",
    imagem:`https://picsum.photos/600/800?random=${i}`
  });
}

const listaProdutos = document.getElementById("listaProdutos");
const pesquisa = document.getElementById("pesquisa");
const categoria = document.getElementById("categoria");

let carrinho = JSON.parse(localStorage.getItem("bazarUrbanCarrinho")) || [];
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

function salvarCarrinho(){
  localStorage.setItem("bazarUrbanCarrinho", JSON.stringify(carrinho));
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
  salvarCarrinho();
  atualizarCarrinho();

  fecharProduto();
  abrirCheckout();
}

function adicionarCarrinho(id){
  comprarProduto(id);
}

function removerCarrinho(id){
  carrinho = carrinho.filter(item => item.id !== id);
  salvarCarrinho();
  atualizarCarrinho();
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

          <button class="remover" onclick="removerCarrinho(${item.id})">
            remover
          </button>
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

function mudarPagamento(){
  const forma = document.getElementById("formaPagamento").value;

  if(forma === "pix"){
    document.getElementById("boxPix").classList.remove("escondido");
    document.getElementById("boxCartao").classList.add("escondido");
  }else{
    document.getElementById("boxCartao").classList.remove("escondido");
    document.getElementById("boxPix").classList.add("escondido");
  }
}

function copiarPix(){
  navigator.clipboard.writeText("bazarurban@pix.com");
  alert("Pix copiado.");
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