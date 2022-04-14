const meme = 'meme-image';

function pegaId(id) {
  return document.getElementById(id);
}
function criarElem(tag) {
  return document.createElement(tag);
}
function evento(pai, type, callback) {
  pai.addEventListener(type, callback);
}
function texto() {
  const textos = pegaId('meme-text');
  const input = pegaId('text-input');
  textos.innerText = input.value;
}
// usei como referência o video https://www.youtube.com/watch?v=lzK8vM_wdoY&t=236s//
let upload = '';
function images() {
  const imagesAdd = pegaId('meme-insert');
  const leitor = new FileReader();
  evento(leitor, 'load', () => {
    upload = leitor.result;
    pegaId(meme).style.backgroundImage = '';
    pegaId(meme).style.backgroundImage = `url(${upload})`;
  });
  leitor.readAsDataURL(imagesAdd.files[0]);
}
function botaoBorda(cor, id, nomeBotao) {
  const pai = pegaId('botao');
  const botao = criarElem('button');
  botao.style.backgroundColor = cor;
  botao.id = id;
  const text = document.createTextNode(nomeBotao);
  botao.appendChild(text);
  pai.appendChild(botao);
  return botao;
}
function borda(elem) {
  const pai = pegaId('meme-image-container');
  pai.style.border = elem;
}
function imgExtra(elem) {
  if (elem.id !== 'memes') {
    pegaId(meme).style.backgroundImage = '';
    pegaId(meme).src = elem.src;
  }
}

evento(pegaId('text-input'), 'input', texto);
evento(pegaId('meme-insert'), 'change', images);
evento(botaoBorda('red', 'fire', 'Vermelho'), 'click', () => {
  borda('3px dashed red');
});
evento(botaoBorda('blue', 'water', 'Azul'), 'click', () => {
  borda('5px double blue');
});
evento(botaoBorda('green', 'earth', 'Verde'), 'click', () => {
  borda('6px groove green');
});
evento(pegaId('memes'), 'click', (event) => {
  imgExtra(event.target);
});
