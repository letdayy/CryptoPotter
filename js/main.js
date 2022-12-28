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

let codifyButton = document.querySelector('#button');

codifyButton.addEventListener('click', function (event){
    event.preventDefault();

    let message = document.querySelector('#message').value;
    let choose = document.querySelector('#chooseOption').value;
    let checked = document.querySelector("input[name=code_option]:checked").value;
    let increment = document.querySelector('#incrementNumber').value;
    let codifiedMessage = '';

    if (choose == 'cesar') {
        codifiedMessage = caesar(checked, message, increment);
    } else {
        codifiedMessage = base(checked, message);
    }

    let resultMessage = document.querySelector('#results');
    resultMessage.style = 'opacity: 1;'
    resultMessage.innerHTML = `${codifiedMessage}`;
});


function caesar(check, message, increment) {
    increment = Number(increment);

    let finalMessage = '';

    for (let i = 0; i < message.length; i++) {
        letter = message[i];
        code = letter.charCodeAt();

        if (check == 'code') {
            code += increment;
            finalMessage += String.fromCharCode(code);
        } else if (check == 'decode') {
            code -= increment;
            finalMessage += String.fromCharCode(code);
        }
    }

    return finalMessage;
};


function base(check, message) {
    if (check == 'code') {
        return btoa(message);
    } else {
        return atob(message);
    }
};