let botaoNao = document.querySelector('#botaoNao');
let botaoSim = document.querySelector('#botaoSim');
let contadorDeRecusadas = 0;
botaoNao.onmouseover = esquivaDoBotao;
botaoNao.onclick = RECUSADOOOOO;
botaoSim.onclick = ELAACEITOUUUUU;

function ELAACEITOUUUUU(){
    let msgSim = "AAAAEEEEEEOOOOOO TE AMO DEMAIS MANITAAAAAAA, TAMO NAMORANDOOOOOOOO ❤️";
    alert(msgSim);
}

function RECUSADOOOOO(){
    let msgNao = "PQP em, depois de " + contadorDeRecusadas + " tentativas aparentemente você não quer namorar comigo nesse momentooooo. MMMMMAAAAAASSSSSSS NOIS É BR POHAAAA DESISTO NUNNNNCAAAAA";
    alert(msgNao);
}

function esquivaDoBotao(){
    botaoNao.style.top = Math.floor(Math.random() * 80) + '%';
    botaoNao.style.left = Math.floor(Math.random() * 65) + '%';
    contadorDeRecusadas++;
}
