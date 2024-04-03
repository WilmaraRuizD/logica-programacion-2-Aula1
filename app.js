 let numeroSecreo=0;
let intentos=0;

function asignarTituloElemento(element,text){
  let elementoHtml=document.querySelector(element);
  elementoHtml.innerHTML=text;
  return;
};

function verificarIntento(){
  let numeroUsuario=parseInt(document.getElementById('valorUsuario').value);

if(numeroSecreo===numeroUsuario){asignarTituloElemento('p',`Acertaste el número en ${intentos} ${(intentos===1)?'vez':'veces'}`) 
document.getElementById('reiniciar').removeAttribute('disabled');

} else {
  //El usuario no acerto 
 if(numeroUsuario>numeroSecreo){asignarTituloElemento('p',`El número es menor  `)}else{asignarTituloElemento('p',`El número es mayor `);}

 intentos++;
 limpiarCaja();
}
  return
}


function limpiarCaja(){
  document.querySelector('#valorUsuario').value='';
}


function generarNumeroSecreto() {
  let numeroSecreo=Math.floor(Math.random()*10)+1
  return numeroSecreo;
}

function condicionesIniciales(){
  asignarTituloElemento('h1','Juego del número secreto!');
  asignarTituloElemento('p','Indique un número del 1 a 10');
//generar numero aliatorio
  numeroSecreo=generarNumeroSecreto();

//inicializar numero de intentos 
  intentos=1;

}

function reiniciarJuego(){
  //limpiar la caja
limpiarCaja();
//indicar numero de cagas 
condicionesIniciales();

//desabilitar boton juego nuevo 
document.querySelector('#reiniciar').setAttribute('disabled','true');

}


condicionesIniciales();