
function pegaId (id) {
    return document.getElementById(id);
};
function criarElem (tag) {
    return document.createElement(tag)
};
function evento (pai, type, callback) {
pai.addEventListener(type, callback);
};
function texto () {
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
function borda1 () {
    const pai = pegaId('meme-image-container');
    pai.style.border = '3px dashed red';
}
function borda2 () {
    const pai = pegaId('meme-image-container');
    pai.style.border = '5px double blue';
}
function borda3 () {
    const pai = pegaId('meme-image-container');
    pai.style.border = '6px groove green';
}

evento(pegaId('text-input'), 'input', texto);
evento(pegaId('meme-insert'), 'change', images);
evento(botaoBorda('red', 'fire', 'Vermelho'), 'click', borda1);
evento(botaoBorda('blue', 'water', 'Azul'), 'click', borda2);
evento(botaoBorda('green', 'earth', 'Verde'), 'click', borda3);