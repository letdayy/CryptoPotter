
/* Fazer o incremento aparecer quando clicar na Cifra */
let chooseOption = document.querySelector('#chooseOption');

chooseOption.addEventListener("change", function(event) {
    event.preventDefault();

    let increment = document.querySelector('#increment');

    if (event.target.value == 'cesar') {
        increment.style = 'display: flex';
    } else {
        increment.style = 'display: none';
    }
});


/* CRIPTOGRAFIAS */
let buttonCodific = document.querySelector('#btnCodific');

buttonCodific.addEventListener("click", function (evento) {
  event.preventDefault();
  
var text = document.querySelector('#inputText').value;
  // var text = formulario;
  var choose = document.querySelector('#chooseOption').value;
  var buttons = document.querySelector('#codific').value;

  var incrementNumber = document.querySelector('#incrementNumbers').value;
  var finalMessage = "";

  if (choose == "cesar") {
    finalMessage = cesar(buttons, text, incrementNumber);
  } else {
    finalMessage = base64(buttons, text);
  }

  var resultText = document.getElementById("exitTest");
  resultText.innerHTML = `${finalMessage}`;
});

/* Cifra */
function cesar(codific, text, incrementNumber) {
  incrementNumber = Number(incrementNumber);

  var finalMessage = "";

  for (var i = 0; i < text.length; i++) {
    var letra = text[i];
    var codigo = letra.charCodeAt();

    if (codific == "codificar") {
      codigo += incrementNumber;
    } else {
      codigo -= incrementNumber;
    }

    console.log(codigo)

    finalMessage += String.fromCharCode(codigo);
  }
  return finalMessage;
  var result = document.querySelector('#exitTest');
  result.innerHTML = `${finalMessage}`;
} 

/* Base */
function base64(codific, text) {
  if (codific == "codificar") {
    return btoa(text);
  } else {
    return atob(text);
  }
}








// var btnCodificar = document.querySelector('#codificar');

// btnCodificar.addEventListener('click'), function(event) {
//   event.preventDefault();

//   var codific = document.querySelector('#codific').value;
//   var codificar = document.querySelector('#codificar').value;
//   var result = document.querySelector('#texto').value;
//   var increment = document.querySelector('.numeroIncrementos').value;
// }