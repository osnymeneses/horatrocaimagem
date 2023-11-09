let pHora = document.querySelector('.hora');
let saudacao = document.querySelector('.saudacao');

//data
let data = new Date();
let ano = data.getFullYear();
let mes = data.getMonth() + 1;
mes = mes < 10 ? '0' + mes : mes;
let dia = data.getDate();
dia = dia < 10 ? '0' + dia : dia;

// hora
let hora = data.getHours();
let minutos = data.getMinutes();
let segundos = data.getSeconds();

let pData = document.querySelector('.data');
pData.textContent = `${dia}/${mes}/${ano}`;

// atualiza hora + acrescimo de zero a esquerda
let intervalo = setInterval(relogio,1000);
function relogio() {
    let data = new Date();
    let h = data.getHours();
    h = h < 10 ? '0' + h : h;
    let m = data.getMinutes();
    m = m < 10 ? '0' + m : m;
    let s = data.getSeconds();
    s = s < 10 ? '0' + s : s;
 
    pHora.innerHTML = `${h}:${m}:${s}`;
}


// Executa quando a página é carregada
window.addEventListener('load', () => {
    let imgFundo = document.querySelector('#img-fundo-id');

    if(hora >= 6 && hora < 12) {
        imgFundo.classList.add('img-manha-dois');
        saudacao.textContent = 'Bom dia!';
    } else if(hora >= 12 && hora < 18) {
        imgFundo.classList.add('ceu_tarde_um');
        saudacao.textContent = 'Boa tarde!';
    } else if(hora >= 18 && hora <= 23) {
        imgFundo.classList.add('ceu_noite_um');
        saudacao.textContent = 'Boa noite!';
    } else {
        imgFundo.classList.add('madrugada');
        saudacao.textContent = 'Boa Madrugada!';
    }
    
})

