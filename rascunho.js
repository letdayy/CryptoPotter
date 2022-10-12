// var inbox = document.querySelector('#idbox');
// var chooseOption = document.querySelector('#chooseOption');
// var btn = document.querySelector('button');
// var finalResult = "document.querySelector('#finalResult')";


// /* Base 64 */

// function codBase64(event) {



//   if (chooseOption == 'base64' && code == 'code') {
//     let messageCode = window.btoa(messageCode)

//     finalResult.innerHTML = messageCode
//   }
// }

// CRIPTOGRAFIA
var form = document.forms.form;

form.addEventListener('submit'), function(event) {
  event.preventDefault();


var inbox = form.inbox.value;
var chooseOption = form.chooseOption.value;
var buttons = form.code.value;
var increment = form.increment.value;
var result = '';

if (chooseOption == 'cesar') {
  result = cesar(code, inbox, increment);
} else {
  result = base64(code, inbox);
}

finalResult.innerHTML = `${result}`;

};

/* Cifra de César */

function cesar(code, inbox, increment) {
  increment = Number(increment);


  var result = '';

  for (var i = 0; i < inbox.length; i++) {
    var letter = inbox[i];
    var codigo = letter.charCodeAt();

    if (code == "encoder") {
      codigo += increment;
    } else {
      codigo -= increment;
    }
    result += String.fromCharCode(codigo);
  }
  return result;

}

/* Base 64 */
function base64(code, inbox) {
  if (code == "codificar") {
    return btoa(inbox);
  } else {
    return atob(inbox);
  }
}