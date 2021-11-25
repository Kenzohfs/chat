let chat = document.querySelector('#chat');
let input = document.querySelector("#mensagem");
let nomePessoa = document.querySelector('#pessoa');
let chat2 = document.querySelector('#chat2');
let input2 = document.querySelector("#mensagem2");
let nomePessoa2 = document.querySelector('#pessoa2');

function dataAtual() {
    let data = new Date();

    dia = data.getDate();
    mes = (data.getMonth() + 1);
    ano = data.getFullYear();

    hora = data.getHours();
    minutos = data.getMinutes();
    segundos = data.getSeconds();

    let dataSpan = document.createElement('span');
    dataSpan.innerText = hora + ":" + minutos + ":" + segundos + " " + dia + "/" + mes + "/" + ano;

    return dataSpan;
}

function enviarMensagem() {
    let nome = nomePessoa.value;
    let mensagem = input.value
    if (!mensagem || mensagem == '') {
        return;
    }
    if (!nome || nome == '') {
        return;
    }
    let data1 = dataAtual();
    data1.className = 'datacss'
    let paragrafo = montarMensagem(mensagem, nome);
    chat.appendChild(paragrafo);
    paragrafo.appendChild(data1);
    input.value = '';
}

function montarMensagem(mensagem, nome) {
    let paragrafo = document.createElement('p');
    paragrafo.innerText = nome + ': ' + mensagem;
    paragrafo.className = 'fundo1';
    return paragrafo;
}

//chat pessoa2

function enviarMensagem2() {
    let nome = nomePessoa2.value;
    let mensagem = input2.value;
    if (!mensagem || mensagem == '') {
        return;
    }
    if (!nome || nome == '') {
        return;
    }
    let data1 = dataAtual();
    data1.className = 'datacss'
    let paragrafo = montarMensagem2(mensagem, nome);
    chat.appendChild(paragrafo);
    paragrafo.appendChild(data1);
    input2.value = '';
}

function montarMensagem2(mensagem, nome) {
    let paragrafo = document.createElement('p');
    paragrafo.innerText = nome + ': ' + mensagem;
    paragrafo.className = 'fundo2';
    return paragrafo;
}