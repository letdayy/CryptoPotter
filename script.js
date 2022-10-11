/* QUANDO APERTAR NO CIFRA DE CÉSAR APARECER O INCREMENTO UTILIZADO NA CIFRA */


/* QUANDO APERTAR EM CODIFICAR/DECODIFICAR MUDA O TEXTO DO BOTÃO */


/* QUANDO DIGITAR O TEXTO APARECE O RESULTADO DA SELEÇÃO NA OUTRA CAIXA DE TEXTO */


/* VERIFICAR O TIPO DE CODIFICAÇÃO E O INCREMENTO QUE O USUÁRIO QUER */
function encodeType(){
    const options = document.querySelector('#option')
    const ceasar =  options.options[1]
    const base64 = options.options[2]
    const ceasarInput = document.querySelector('#hidden')


/* código para verificar se é césar ou base64 */
options.onclick = function(){
    if (ceasar.selected === true) {
        //se clicar em cesar aparece o hidden
        ceasarInput.style.display = 'inline'
        tipo = 'ceasar'
    
    } else if (base64.selected === true) {
        ceasarInput.style.display = 'none'
        tipo = 'base64'

    }
}
};