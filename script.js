let type = undefined
let inicial = 0
let method = undefined

/* QUANDO APERTAR NO CIFRA DE CÉSAR APARECER O INCREMENTO UTILIZADO NA CIFRA */


/* QUANDO APERTAR EM CODIFICAR/DECODIFICAR MUDA O TEXTO DO BOTÃO */


/* QUANDO DIGITAR O TEXTO APARECE O RESULTADO DA SELEÇÃO NA OUTRA CAIXA DE TEXTO */


/* Escolher entre Cesar e Base64 */
function encodeType() {
    const options = document.querySelector('#option')
    const cesar = options.options[1]
    const base64 = options.options[2]
    const cesarInput = document.querySelector('#hidden')


    /* código para verificar se é césar ou base64 */
    options.onclick = function() {
        if (cesar.selected === true) {
            //se clicar em cesar aparece o hidden
            cesarInput.style.display = 'inline'
            type = 'cesar'

        } else if (base64.selected === true) {
            cesarInput.style.display = 'none'
            type = 'base64'

        }
    }

/* armazenar o valor escolhido no incremento */
cesarInput.addEventListener('change', function() {
    inicial = cesarInput.value
    inicial = Number(increment)
})
};
encodeType()


/* Quando clicar na cifra mostrar o incremento oculto */
escolhas.addEventListener("change", function (evento) {
    evento.preventDefault();

    var increment = document.getElementById("incrementNumber");

    if (evento.target.value == "cesar") {
        increment.style = "display: flex";
    } else {
        increment.style = "display: none";
    }
});

/* Cifra de César */
function encrypt(text, s) {
    let result = ""
    for (let i = 0; i < text.length; i++) {
        let char = text[i];
        if (char.toUpperCase(text[i])) {
            let ch = String.fromCharCode((char.charCodeAt(0) + s - 65) % 26 + 65);
            result += ch;
        }
        else {
            let ch = String.fromCharCode((char.charCodeAt(0) + s - 97) % 26 + 97);
            result += ch;
        }
    }
    return result;
}

/* Verificar se o usuário quer codificar ou decodificar */
    if (encoder.checked){
        method = 'encode'
        //chamar function encode 
        encode(type, increment, userInput())


    } else if (decoder.checked){
        method = 'decode'
        //chamar function decode 
        decode(type, increment, userInput())
    }

/* Verificação e alerta para espaço vazio */
function emptyInputs(){
    if (type == undefined){
        alert(`--- Selecione o método de codificação ---\nBase64 ou Cifra de César`)
    } else if(method == undefined){
        alert(`--- Escolha uma opção! ---\nCodificar ou Decodificar`)
    }
}

/* Função para modificar a mensagem do button */
function buttonText(){
    const codificador = document.querySelector('#codificador')
    const decodificador = document.querySelector('#decodificador') 
    const button = document.querySelector('button')
    
    codificador.addEventListener('click', function() {
        button.innerText = 'Codificar mensagem!'
    })

    decodificador.addEventListener('click', function() {
        button.innerText = 'Decodificar mensagem!'
    })
    
}
buttonText()


/* CRIPTOGRAFIAS */
var form = document.forms.form;

form.addEventListener("submit", function (evento) {
  evento.preventDefault();

  var text = form.text.value;
  var choose = form.chooseOption.value;
  var button = form.codific.value;
  var incrementNumber = form.incrementNumber.value;
  var finalMessage = "";

  if (choose == "cesar") {
    finalMessage = cesar(botoes, text, incrementNumber);
  } else {
    finalMessage = base64(botoes, text);
  }

  var textResult = document.getElementById("finalResult");
  textResult.innerHTML = `${finalMessage}`;
});

/* Cifra */
function cesar(codific, text, incrementNumber) {
  incrementNumber = Number(incrementNumber);

  var finalMessage = "";

  for (var i = 0; i < text.length; i++) {
    var letter = text[i];
    var code = letter.charCodeAt();

    if (codific == "codificar") {
      code += incrementNumber;
    } else {
      code -= incrementNumber;
    }
    finalMessage += String.fromCharCode(code);
  }
  return finalMessage;
}

/* Base */
function base64(codific, text) {
  if (codific == "codificar") {
    return btoa(text);
  } else {
    return atob(text);
  }
}
