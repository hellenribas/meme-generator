function pegaId (id) {
    return document.getElementById(id);
};
function criarElem (tag) {
    return document.createElement(tag)
};
function evento (pai, type, callback) {
pai.addEventListener(type, callback);
};
function texto() {
   const texto = pegaId('meme-text');
   const input = pegaId('text-input');
   texto.innerText = input.value;

};
// usei como referência o video https://www.youtube.com/watch?v=lzK8vM_wdoY&t=236s//
let upload = '';
function images () {
   const images = pegaId('meme-insert');
   const leitor = new FileReader();
   evento(leitor, 'load', function() {
       upload = leitor.result;
       pegaId('meme-image').style.backgroundImage = `url(${upload})`;

   });
   leitor.readAsDataURL(images.files[0]);
       
}
function botaoBorda (cor, id, nomeBotao) {
    const pai = pegaId('botao');
    let botao = criarElem('button');
    botao.style.backgroundColor = cor;
    botao.id = id;
    let text = document.createTextNode(nomeBotao);
    botao.appendChild(text);
    pai.appendChild(botao);
    return botao;
}
function borda (elem) {
    const pai = pegaId('meme-image-container');
    pai.style.border = elem;
}
function imgExtra (elem) {
    if (elem.id !== 'memes') {
  pegaId('meme-image').src = elem.src;  
}
}

evento(pegaId('text-input'), 'input', texto);
evento(pegaId('meme-insert'), 'change', images);
evento(botaoBorda('red', 'fire', 'Vermelho'), 'click',function () {
  borda('3px dashed red');
})
evento(botaoBorda('blue', 'water', 'Azul'), 'click', function (){
  borda('5px double blue');
});
evento(botaoBorda('green', 'earth', 'Verde'), 'click', function () {
  borda('6px groove green');
});
evento(pegaId('memes'), 'click',function (event) {
    imgExtra(event.target);
});
