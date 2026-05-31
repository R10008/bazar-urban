const produtos = [
  {
    id:1,
    nome:"Moletom Essentials",
    categoria:"camiseta",
    preco:74.99,
    checkout:"https://pay.risepay.com.br/Pay/0a3078e4af6a4f3ebaa1c73e784dfd74",
    status:"🔥 Mais vendido",
    tamanho:"M",
    estado:"Novo",
    medidas:"70x55cm",
    estoque:3,
    avaliacao:"★★★★★",
    visualizando:18,
    descricao:"Produto selecionado manualmente para o acervo Bazar Urban.",
    imagem:"https://img.ltwebstatic.com/v4/j/spmp/2026/05/05/21/1777926168f3cd63ed4fbf07e8024e74201fd4cfd5.webp"
  },
  {
    id:2,
    nome:"Jaqueta Denim Vintage",
    categoria:"camiseta",
    preco:87.02,
    checkout:"https://pay.risepay.com.br/Pay/a9d6d2bdadcc4132ab006755cf56180e",
    status:"Peça única",
    tamanho:"G",
    estado:"Excelente estado",
    medidas:"72x58cm",
    estoque:4,
    avaliacao:"★★★★★",
    visualizando:11,
    descricao:"Produto selecionado manualmente para o acervo Bazar Urban.",
    imagem:"https://img.ltwebstatic.com/v4/j/spmp/2025/10/26/57/17614743499a8331436665140cdddf005e797ead92_thumbnail_420x.webp"
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
    estoque:5,
    avaliacao:"★★★★★",
    visualizando:15,
    descricao:"Produto selecionado manualmente para o acervo Bazar Urban.",
    imagem:"https://down-br.img.susercontent.com/file/br-11134207-7r98o-m1e8lyn9mu002f"
  },
  {
    id:4,
    nome:"Short/Baggy Jeans Urban",
    categoria:"calca",
    preco:79.90,
    checkout:"https://pay.risepay.com.br/Pay/373bd0e1b03947d9be5f23bd8e858b84",
    status:"⚡ Últimas unidades",
    tamanho:"M",
    estado:"Excelente estado",
    medidas:"105x44cm",
    estoque:6,
    avaliacao:"★★★★★",
    visualizando:9,
    descricao:"Peça selecionada manualmente para composições streetwear na categoria shorts.",
    imagem:"https://i.pinimg.com/originals/0a/cb/9d/0acb9d6241abe0c9a0cf0cc5a7bc1f53.jpg"
  },
  {
    id:5,
    nome:"Tênis Urban Black",
    categoria:"tenis",
    preco:119.90,
    checkout:"https://pay.risepay.com.br/Pay/7e7993ee294b477a86495945c8d34cee",
    status:"🚚 Frete grátis",
    tamanho:"39/40",
    estado:"Novo",
    medidas:"39/40 BR",
    estoque:4,
    avaliacao:"★★★★★",
    visualizando:21,
    descricao:"Produto selecionado manualmente para o acervo Bazar Urban.",
    imagem:"https://tse4.mm.bing.net/th/id/OIP.pS8SlwykeNEKfAo_uCYIKgHaHa?cb=thfc1falcon&rs=1&pid=ImgDetMain&o=7&rm=3"
  },
  {
    id:6,
    nome:"Hoodie Oversized",
    categoria:"camiseta",
    preco:89.90,
    checkout:"https://pay.risepay.com.br/Pay/21c3ad7cde9946dcbb053635ea7af56e",
    status:"Peça única",
    tamanho:"G",
    estado:"Novo",
    medidas:"72x58cm",
    estoque:5,
    avaliacao:"★★★★★",
    visualizando:14,
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
    estoque:3,
    avaliacao:"★★★★★",
    visualizando:12,
    descricao:"Produto selecionado manualmente para o acervo Bazar Urban.",
    imagem:"https://cdn.shopify.com/s/files/1/0293/9277/files/11-17-23Studio8_CB_AG_11-48-12_59_23015641_Black_20618_JB.jpg?v=1700608183&width=461&height=691&crop=center"
  },

  {
    id:8,
    nome:"Camisa Urban Graphic I",
    categoria:"camiseta",
    preco:74.90,
    checkout:"https://pay.risepay.com.br/Pay/329a014ab3234ab48df7013180d88a49",
    status:"🔥 Drop novo",
    tamanho:"M",
    estado:"Novo",
    medidas:"Modelagem regular",
    estoque:2,
    avaliacao:"★★★★★",
    visualizando:19,
    descricao:"Camisa streetwear selecionada para composições urbanas e casuais.",
    imagem:"https://thf.bing.com/th/id/OIP.kyUjRNwA6BIesf4t62ejbwHaJ4?w=203&h=271&c=7&r=0&o=7&cb=thfc1falcon&pid=1.7&rm=3"
  },
  {
    id:9,
    nome:"Camisa Urban Graphic II",
    categoria:"camiseta",
    preco:85.90,
    checkout:"https://pay.risepay.com.br/Pay/cab3feb5960d41ac916837410150af02",
    status:"Peça única",
    tamanho:"M",
    estado:"Novo",
    medidas:"Modelagem regular",
    estoque:4,
    avaliacao:"★★★★★",
    visualizando:16,
    descricao:"Camisa com visual urbano, ideal para looks streetwear premium.",
    imagem:"https://thf.bing.com/th?id=OPHS.%2fRz8n0gtSqBhuA474C474&w=195&h=253&o=7&cb=thfc1falcon&pid=1.7&rm=3"
  },
  {
    id:10,
    nome:"Camisa Street Washed",
    categoria:"camiseta",
    preco:69.90,
    checkout:"https://pay.risepay.com.br/Pay/6964ad76daf5455aae59c267e88cc63f",
    status:"⚡ Últimas unidades",
    tamanho:"G",
    estado:"Novo",
    medidas:"Modelagem regular",
    estoque:5,
    avaliacao:"★★★★★",
    visualizando:13,
    descricao:"Camisa estilo street washed com pegada moderna e versátil.",
    imagem:"https://thf.bing.com/th/id/OIP.XVkQ6OOmYW-cnlp3lucAeQAAAA?w=203&h=270&c=7&r=0&o=7&cb=thfc1falcon&pid=1.7&rm=3"
  },
  {
    id:11,
    nome:"Camisa Urban Print",
    categoria:"camiseta",
    preco:89.90,
    checkout:"https://pay.risepay.com.br/Pay/de060af54b6f44d68dac28ae12750cd1",
    status:"🔥 Mais vendido",
    tamanho:"M",
    estado:"Novo",
    medidas:"Modelagem regular",
    estoque:3,
    avaliacao:"★★★★★",
    visualizando:22,
    descricao:"Camisa com estampa urbana para quem busca destaque no visual.",
    imagem:"https://img.ltwebstatic.com/images3_pi/2023/03/23/167956935273f743488acd75a72409555235a1994d.webp"
  },
  {
    id:12,
    nome:"Camisa Oversized Drop",
    categoria:"camiseta",
    preco:69.90,
    checkout:"https://pay.risepay.com.br/Pay/e3fa8de8b43b4a4ca306cdcd3df5d5b8",
    status:"Peça única",
    tamanho:"G",
    estado:"Novo",
    medidas:"Modelagem oversized",
    estoque:2,
    avaliacao:"★★★★★",
    visualizando:17,
    descricao:"Camisa oversized com identidade streetwear e acabamento moderno.",
    imagem:"https://img.ltwebstatic.com/images3_pi/2024/01/11/7d/1704939138b3d890a5f68cf3732e725f207e52451f_thumbnail_900x.jpg"
  },

  {
    id:13,
    nome:"Short Urban Cargo I",
    categoria:"calca",
    preco:69.90,
    checkout:"https://pay.risepay.com.br/Pay/d59ec2e589414c57bdd111991a517224",
    status:"🔥 Drop novo",
    tamanho:"M",
    estado:"Novo",
    medidas:"Modelagem casual",
    estoque:4,
    avaliacao:"★★★★★",
    visualizando:20,
    descricao:"Short urbano confortável, ideal para combinações streetwear.",
    imagem:"https://img.ltwebstatic.com/images3_pi/2022/04/07/1649323698a9c208fd83e44b772d307811b197db01_thumbnail_405x552.jpg"
  },
  {
    id:14,
    nome:"Short Urban Cargo II",
    categoria:"calca",
    preco:74.90,
    checkout:"https://pay.risepay.com.br/Pay/884850eaaac248c0b3d759069cb877da",
    status:"Peça única",
    tamanho:"M",
    estado:"Novo",
    medidas:"Modelagem casual",
    estoque:3,
    avaliacao:"★★★★★",
    visualizando:18,
    descricao:"Short com visual urbano, confortável e fácil de combinar.",
    imagem:"https://img.ltwebstatic.com/images3_pi/2021/11/06/1636174505dadf00c16270eaa1e13505cb27a3f741_thumbnail_405x552.jpg"
  },
  {
    id:15,
    nome:"Short Street Black",
    categoria:"calca",
    preco:69.90,
    checkout:"https://pay.risepay.com.br/Pay/5c133bd939bb47d9bd8d515d1a92356d",
    status:"⚡ Últimas unidades",
    tamanho:"M",
    estado:"Novo",
    medidas:"Modelagem casual",
    estoque:2,
    avaliacao:"★★★★★",
    visualizando:15,
    descricao:"Short preto streetwear com visual limpo e premium.",
    imagem:"https://i.pinimg.com/736x/f5/14/ae/f514aeb70362c73ca78f19211689354e.jpg"
  },
  {
    id:16,
    nome:"Short Utility Urban",
    categoria:"calca",
    preco:69.90,
    checkout:"https://pay.risepay.com.br/Pay/198d1415ac324bab93d044d371a16e6f",
    status:"Peça única",
    tamanho:"M",
    estado:"Novo",
    medidas:"Modelagem casual",
    estoque:4,
    avaliacao:"★★★★★",
    visualizando:14,
    descricao:"Short utility com pegada urbana e visual moderno.",
    imagem:"https://down-br.img.susercontent.com/file/br-11134207-7r98o-m5uiqzfqfyx177"
  },
  {
    id:17,
    nome:"Short Street Premium",
    categoria:"calca",
    preco:74.90,
    checkout:"https://pay.risepay.com.br/Pay/0a4d8ca93b004c2e924695b09551c10d",
    status:"🔥 Mais vendido",
    tamanho:"M",
    estado:"Novo",
    medidas:"Modelagem casual",
    estoque:2,
    avaliacao:"★★★★★",
    visualizando:23,
    descricao:"Short premium para looks urbanos com conforto e presença.",
    imagem:"https://tse1.explicit.bing.net/th/id/OIP.g_u1ARnv10OS30q9QDttCgHaJ3?cb=thfc1falcon&rs=1&pid=ImgDetMain&o=7&rm=3"
  },
  {
    id:18,
    nome:"Conjunto Urban Prime I",
    categoria:"conjunto",
    preco:84.90,
    checkout:"https://pay.risepay.com.br/Pay/a3613e18f55a4b00b7ec337f90861a3e",
    status:"🔥 Conjunto novo",
    tamanho:"M",
    estado:"Novo",
    medidas:"Camisa + short",
    estoque:4,
    avaliacao:"★★★★★",
    visualizando:24,
    descricao:"Conjunto camisa e short com visual streetwear premium para o drop Bazar Urban.",
    imagem:"https://img.ltwebstatic.com/v4/j/pi/2026/03/21/97/17740656909e3d92085425591bb4eba48e0e1b57bc.webp"
  },
  {
    id:19,
    nome:"Conjunto Street Prime II",
    categoria:"conjunto",
    preco:84.90,
    checkout:"https://pay.risepay.com.br/Pay/a3613e18f55a4b00b7ec337f90861a3e",
    status:"Peça única",
    tamanho:"M",
    estado:"Novo",
    medidas:"Camisa + short",
    estoque:3,
    avaliacao:"★★★★★",
    visualizando:20,
    descricao:"Conjunto selecionado para quem busca praticidade, conforto e estilo urbano.",
    imagem:"https://img.ltwebstatic.com/v4/j/pi/2026/03/23/9e/17742629341d7adaf2299fa49e1b88aa2ebc3d2014.webp"
  },
  {
    id:20,
    nome:"Conjunto Urban Elite",
    categoria:"conjunto",
    preco:84.90,
    checkout:"https://pay.risepay.com.br/Pay/a3613e18f55a4b00b7ec337f90861a3e",
    status:"⚡ Últimas unidades",
    tamanho:"M",
    estado:"Novo",
    medidas:"Camisa + short",
    estoque:2,
    avaliacao:"★★★★★",
    visualizando:19,
    descricao:"Conjunto com presença visual forte, ideal para looks casuais e streetwear.",
    imagem:"https://img.ltwebstatic.com/images3_pi/2025/03/24/8c/1742796099a842ff837a21caf25e4399836cc388b3.webp"
  },
  {
    id:21,
    nome:"Conjunto Drop Limited",
    categoria:"conjunto",
    preco:84.90,
    checkout:"https://pay.risepay.com.br/Pay/a3613e18f55a4b00b7ec337f90861a3e",
    status:"🔥 Mais vendido",
    tamanho:"M",
    estado:"Novo",
    medidas:"Camisa + short",
    estoque:3,
    avaliacao:"★★★★★",
    visualizando:27,
    descricao:"Conjunto de drop limitado com estética premium e acabamento urbano.",
    imagem:"https://img.ltwebstatic.com/v4/j/pi/2026/01/04/23/1767512085081755658af700563471afc0bbe091cf.webp"
  },
  {
    id:22,
    nome:"Conjunto Urban Legacy",
    categoria:"conjunto",
    preco:84.90,
    checkout:"https://pay.risepay.com.br/Pay/a3613e18f55a4b00b7ec337f90861a3e",
    status:"🔥 Drop novo",
    tamanho:"M",
    estado:"Novo",
    medidas:"Camisa + short",
    estoque:4,
    avaliacao:"★★★★★",
    visualizando:22,
    descricao:"Conjunto completo para quem quer montar look streetwear sem erro.",
    imagem:"https://img.ltwebstatic.com/v4/j/pi/2025/05/09/9d/1746769547190c1e2e61d0c5c48d4e6e094a1f8c6d.webp"
  },
  {
    id:23,
    nome:"Short Urban Flex",
    categoria:"calca",
    preco:74.90,
    checkout:"https://pay.risepay.com.br/Pay/71d30507f5c644c882825d5494120139",
    status:"🔥 Drop novo",
    tamanho:"M",
    estado:"Novo",
    medidas:"Modelagem casual",
    estoque:4,
    avaliacao:"★★★★★",
    visualizando:18,
    descricao:"Short confortável com visual urbano, ideal para o dia a dia.",
    imagem:"https://img.ltwebstatic.com/v4/j/pi/2025/12/15/8d/17657816355f26b7ff8af0d1e81fa90a2b5eb515cb.webp"
  },
  {
    id:24,
    nome:"Short Street Summer",
    categoria:"calca",
    preco:74.90,
    checkout:"https://pay.risepay.com.br/Pay/71d30507f5c644c882825d5494120139",
    status:"Peça única",
    tamanho:"M",
    estado:"Novo",
    medidas:"Modelagem casual",
    estoque:3,
    avaliacao:"★★★★★",
    visualizando:16,
    descricao:"Short leve e estiloso para combinações streetwear de verão.",
    imagem:"https://img.ltwebstatic.com/images3_pi/2023/05/15/1684145958e9ffc5e25e01d76a9c6f639177714650.webp"
  },
  {
    id:25,
    nome:"Short Cargo Premium",
    categoria:"calca",
    preco:69.90,
    checkout:"https://pay.risepay.com.br/Pay/f8817731cd2b4a49a21bde0ab2bd19b3",
    status:"⚡ Últimas unidades",
    tamanho:"M",
    estado:"Novo",
    medidas:"Modelagem casual",
    estoque:2,
    avaliacao:"★★★★★",
    visualizando:21,
    descricao:"Short cargo com pegada urbana e visual premium.",
    imagem:"https://img.ltwebstatic.com/v4/j/pi/2026/04/21/49/17767766381843d18de9a692ee72e31ba82a5e66b7.webp"
  },
  {
    id:26,
    nome:"Short Casual Essential",
    categoria:"calca",
    preco:49.90,
    checkout:"https://pay.risepay.com.br/Pay/f5ee5cb8330a4f6096a34b505b3b8bb8",
    status:"Preço especial",
    tamanho:"M",
    estado:"Novo",
    medidas:"Modelagem casual",
    estoque:5,
    avaliacao:"★★★★★",
    visualizando:14,
    descricao:"Short essencial com preço acessível e estilo urbano.",
    imagem:"https://img.ltwebstatic.com/v4/p/spmp/2026/03/25/60/1774382143d0683033cca0d908482c2c9770218f97.webp"
  },
  {
    id:27,
    nome:"Short Urban Gold",
    categoria:"calca",
    preco:79.90,
    checkout:"https://pay.risepay.com.br/Pay/0f68e584171c4638a8937c924b6180c9",
    status:"🔥 Mais vendido",
    tamanho:"M",
    estado:"Novo",
    medidas:"Modelagem casual",
    estoque:3,
    avaliacao:"★★★★★",
    visualizando:25,
    descricao:"Short com visual marcante para looks urbanos de destaque.",
    imagem:"https://img.ltwebstatic.com/v4/p/spmp/2026/03/25/b7/17743858298f9decf76acf18182cbe70a1fc4f76ed.webp"
  }
];

const listaProdutos = document.getElementById("listaProdutos");
const listaMaisVendidos = document.getElementById("listaMaisVendidos");
const pesquisa = document.getElementById("pesquisa");
const categoria = document.getElementById("categoria");

let carrinho = [];
let frete = 0;
let produtoSelecionado = null;

function dinheiro(valor){
  return `R$ ${Number(valor).toFixed(2).replace(".",",")}`;
}

function subtotalCarrinho(){
  return carrinho.reduce((total,item) => total + Number(item.preco),0);
}

function toast(msg){
  const el = document.getElementById("toast");
  if(!el) return;
  el.innerText = msg;
  el.classList.add("ativo");
  setTimeout(() => el.classList.remove("ativo"), 2400);
}

function renderizarProdutos(lista){
  listaProdutos.innerHTML = "";

  lista.forEach(produto => {
    listaProdutos.innerHTML += `
      <div class="card">
        <div class="imagem-card">
          <img src="${produto.imagem}" alt="${produto.nome}">
          <span class="selo-frete">🚚 Frete grátis</span>
        </div>

        <div class="card-info">
          <span class="badge">${produto.status}</span>

          <h3>${produto.nome}</h3>

          <div class="avaliacoes">${produto.avaliacao} <small>4.9/5 (114)</small></div>

          <p>${produto.descricao}</p>

          <p class="estoque">⚠️ Apenas ${produto.estoque} peças restantes</p>
          <p class="visualizando">👀 ${produto.visualizando} pessoas vendo agora</p>

          <div class="preco">
            ${dinheiro(produto.preco)}
          </div>

          <div class="card-botoes">
            <button class="btn secundario" onclick="abrirProduto(${produto.id})">
              Ver detalhes
            </button>

            <button class="btn carrinho-btn" onclick="adicionarCarrinho(${produto.id})">
              🛒
            </button>

            <button class="btn principal" onclick="comprarProduto(${produto.id})">
              ⚡ Comprar agora
            </button>
          </div>
        </div>
      </div>
    `;
  });
}

renderizarProdutos(produtos);

function renderizarMaisVendidos(){
  if(!listaMaisVendidos) return;

  const idsDestaque = [21, 11, 27, 5];
  const destaques = produtos.filter(produto => idsDestaque.includes(produto.id));

  listaMaisVendidos.innerHTML = "";

  destaques.forEach(produto => {
    listaMaisVendidos.innerHTML += `
      <div class="card card-destaque">
        <div class="imagem-card">
          <img src="${produto.imagem}" alt="${produto.nome}">
          <span class="selo-frete">🔥 Mais vendido</span>
        </div>

        <div class="card-info">
          <span class="badge">${produto.status}</span>
          <h3>${produto.nome}</h3>
          <div class="avaliacoes">${produto.avaliacao} <small>4.9/5 (114)</small></div>
          <p>${produto.descricao}</p>
          <p class="estoque">⚠️ Apenas ${produto.estoque} peças restantes</p>
          <p class="visualizando">👀 ${produto.visualizando} pessoas vendo agora</p>
          <div class="preco">${dinheiro(produto.preco)}</div>

          <div class="card-botoes">
            <button class="btn secundario" onclick="abrirProduto(${produto.id})">Ver detalhes</button>
            <button class="btn carrinho-btn" onclick="adicionarCarrinho(${produto.id})">🛒</button>
            <button class="btn principal" onclick="comprarProduto(${produto.id})">⚡ Comprar agora</button>
          </div>
        </div>
      </div>
    `;
  });
}

renderizarMaisVendidos();

const notificacoes = [
  "🔥 kleber6 acabou de comprar Conjunto Drop Limited",
  "🔥 João acabou de comprar Short Urban Gold",
  "🔥 felip acabou de comprar Camisa Urban Print",
  "🔥 denislon34 acabou de comprar Tênis Urban Black",
  "🔥 lucivan acabou de comprar Moletom Essentials",
  "🔥 Ana acabou de comprar Conjunto Urban Prime I"
];

let notificacaoIndex = 0;

function alternarNotificacaoCompra(){
  const box = document.getElementById("notificacaoCompra");
  if(!box) return;

  box.classList.add("ativo");
  box.innerText = notificacoes[notificacaoIndex];

  notificacaoIndex = (notificacaoIndex + 1) % notificacoes.length;

  setTimeout(() => {
    box.classList.remove("ativo");
  }, 4200);
}

setTimeout(alternarNotificacaoCompra, 1800);
setInterval(alternarNotificacaoCompra, 9000);


function abrirProduto(id){
  const produto = produtos.find(p => p.id === id);
  produtoSelecionado = produto;

  document.getElementById("modalProduto").style.display = "flex";
  document.getElementById("produtoImagem").src = produto.imagem;
  document.getElementById("produtoNome").innerText = produto.nome;
  document.getElementById("produtoDescricao").innerText = produto.descricao;
  document.getElementById("produtoPreco").innerText = dinheiro(produto.preco);
  document.getElementById("produtoStatus").innerText = produto.status;
  document.getElementById("produtoTamanho").innerText = produto.tamanho;
  document.getElementById("produtoEstado").innerText = produto.estado;
  document.getElementById("produtoMedidas").innerText = produto.medidas;
  document.getElementById("produtoEstoque").innerText = `Restam apenas ${produto.estoque} unidades`;
  document.getElementById("produtoAvaliacao").innerHTML = `${produto.avaliacao} <small>4.9/5 (114 avaliações)</small>`;
  document.getElementById("produtoVisualizando").innerText = `👀 ${produto.visualizando} pessoas vendo agora`;

  document.getElementById("btnAdicionarProduto").onclick = () => {
    adicionarCarrinho(produto.id);
    fecharProduto();
  };

  document.getElementById("btnComprarProduto").onclick = () => {
    comprarProduto(produto.id);
  };
}

function fecharProduto(){
  document.getElementById("modalProduto").style.display = "none";
}

function adicionarCarrinho(id){
  const produto = produtos.find(p => p.id === id);

  if(!carrinho.find(item => item.id === id)){
    carrinho.push(produto);
    toast("Produto adicionado ao carrinho ✔");
  }else{
    toast("Esse produto já está no carrinho");
  }

  atualizarCarrinho();
  abrirCarrinho();
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

function removerCarrinho(id){
  carrinho = carrinho.filter(item => item.id !== id);
  atualizarCarrinho();
}

function atualizarCarrinho(){
  document.getElementById("contador").innerText = carrinho.length;

  const area = document.getElementById("itensCarrinho");
  area.innerHTML = "";

  const subtotal = subtotalCarrinho();

  carrinho.forEach(item => {
    area.innerHTML += `
      <div class="item">
        <img src="${item.imagem}">
        <div>
          <h4>${item.nome}</h4>
          <p>${dinheiro(item.preco)}</p>
          <button class="remover" onclick="removerCarrinho(${item.id})">Remover</button>
        </div>
      </div>
    `;
  });

  if(carrinho.length === 0){
    area.innerHTML = `<p class="texto-menor">Seu carrinho está vazio.</p>`;
  }

  frete = 0;
  const total = subtotal + frete;

  document.getElementById("freteCarrinho").innerText = "Grátis";
  document.getElementById("subtotal").innerText = dinheiro(subtotal);
  document.getElementById("totalCarrinho").innerText = dinheiro(total);
  document.getElementById("checkoutSubtotal").innerText = dinheiro(subtotal);
  document.getElementById("checkoutFrete").innerText = "Grátis";
  document.getElementById("checkoutTotal").innerText = dinheiro(total);
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

  fecharCarrinho();
  document.getElementById("checkout").style.display = "flex";

  document.getElementById("areaDados").classList.remove("escondido");
  document.getElementById("areaEntrega").classList.add("escondido");
  document.getElementById("areaPagamento").classList.add("escondido");

  document.getElementById("passo1").classList.add("ativo");
  document.getElementById("passo2").classList.remove("ativo");
  document.getElementById("passo3").classList.remove("ativo");

  atualizarCarrinho();
}

function fecharCheckout(){
  document.getElementById("checkout").style.display = "none";
}

function proximaEntrega(){
  const nome = document.getElementById("nomeCliente").value.trim();
  const email = document.getElementById("emailCliente").value.trim();
  const whats = document.getElementById("whatsCliente").value.trim();

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
  const cep = document.getElementById("cepCliente").value.trim();
  const cidade = document.getElementById("cidadeCliente").value.trim();
  const endereco = document.getElementById("enderecoCliente").value.trim();

  if(!cep || cep.length < 8 || !cidade || !endereco){
    alert("Preencha CEP, cidade e endereço completo.");
    return;
  }

  frete = 0;
  document.getElementById("resultadoFrete").innerText =
    "🚚 Frete grátis aplicado ao seu pedido";

  atualizarCarrinho();

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
  if(carrinho.length > 1){
    alert("Seu carrinho tem mais de uma peça. Como cada peça possui checkout RisePay próprio, finalize uma peça por vez usando o botão ⚡ Comprar agora.");
    return;
  }

  const produto = produtoSelecionado || carrinho[0];

  if(!produto || !produto.checkout){
    alert("Checkout não encontrado para esse produto.");
    return;
  }

  window.location.href = produto.checkout;
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