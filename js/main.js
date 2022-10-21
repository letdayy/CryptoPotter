let output='';  
let keyCode=''; 
let validatePhrase= false; 



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


/* Cifra de César */
function codificar() { 
  do{ 
       if (phrase.length>0)
       { 
          for (i=0;i<phrase.length;i++)
          { 
              keyCode=phrase.charCodeAt(i);
  
             if ((keyCode != 32) && (keyCode < 65) || (keyCode > 90) && (keyCode < 97) || (keyCode > 122) )
             {
                alert('Por favor coloque uma palavra válida'); 
                cipher();  
             }
             else
             {
                   validatePhrase=true; 
              }
          }
  
       }
       else
       { //En el caso que no ingrese nada nos enviara un mensaje
               alert('Ha ingresado un texto vacio'); // muestra el mensaje de alerta que ha ingresado una palabra vacía
       }
  
  }while(ValidatePhrase===false);  

  for (i=0;i<phrase.length;i++)
  { 
   keyCode=phrase.charCodeAt(i);

    if (keyCode>=65 && keyCode<=90)
    {
      output += String.fromCharCode((phrase.charCodeAt(i)-65+33)%26+65); 

    } 
    else
    {
      (keyCode>=97 && keyCode<=122);
       	output += String.fromCharCode((phrase.charCodeAt(i)-97+33)%26+97); 
    }
  }


    return output; 
}

button = document.querySelector('#btnCodific');
choose = document.querySelector('.encoders')
result = '';

button.addEventListener("click"), function(event) {
    event.preventDefault();

    if (choose == 'encoder') {
        result = codificar
    } else {
        result = base64
    }
}





function decipher() { // declara la función de descifrado


  do{ // se utiliza un do while para que ingrese por lo menos una vez a solicitar la palabra 'phrase' y validarla
     phrase=prompt('Ingrese la palabra a descifrar');//Se pide que ingrese la palabra a descifrar.

     if (phrase.length>0)
     { //Se condiciona en el caso que la longitud de la palabra ingresada sea mayor a 0

      for (i=0;i<phrase.length;i++)
      { // se utiliza un for para recorrer através de los caracteres del palabra 'phrase'
        keyCode=phrase.charCodeAt(i);//Obtenemos el codigo ascii de cada caracter de la  palabra ingresada phrase

        if ((keyCode != 32) && (keyCode < 65) || (keyCode > 90) && (keyCode < 97) || (keyCode > 122) )
        { //Restringimos caso que la palabra posea números o caracteres invalidos
           alert('Por favor ingrese una palabra válida'); // muestra una alerta del palabra phrase inválida
           decipher(); // utilizando la recursividad se vuelve llamar a la función decipher ()
        }
        else
        {
           ValidatePhrase=true; // toma el valor de verdadero si la palabra phrase ingresada es válida
        }
      }

     }
     else 
     { //En el caso que no ingrese nada nos enviara un mensaje
        alert('Ha ingresado un texto vacio');
     }

  }while(ValidatePhrase===false);  // se volverá a realizar mientras no se halla podido validar la palabra phrase

  for (i=0;i<phrase.length;i++)
  {  // se utiliza un for para recorrer por los caracteres de la palabra phrase
    keyCode=phrase.charCodeAt(i);//Obtenemos el codigo ascii de cada caracter de la     palabra ingresada
    
    if (keyCode>=65 && keyCode<=90)
    {//para descifrar mayusculas
    	output += String.fromCharCode(((phrase.charCodeAt(i)-65+26+26-33) % 26)+65); // se acumula el caracter descifrado obtenido de la fórmula
    }
    else 
    {
      (keyCode>=97 && keyCode<=122);//para descifrar minusculas
    	output += String.fromCharCode(((phrase.charCodeAt(i)-97+26+26-33) % 26)+97);  // se acumula el caracter descifrado obtenido de la fórmula
    }
  }

  return output;   //Devuelve la palabra ya descifrada
}


