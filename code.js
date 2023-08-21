// definiendo todos los botones y elementos

const colorPicker= document.getElementById('colorPicker');
const Bcolor= document.getElementById('Bcolor');
const Brainbow= document.getElementById('Brainbow');
const Beraser= document.getElementById('Beraser');
const Bclear= document.getElementById('Bclear');
const sizeSlider= document.getElementById('sizeSlider');
const gameContent= document.getElementById('gameContent');


// Variables de juego
let numeroCuadritos = sizeSlider.value;
let color= colorPicker.value;
let mode='color'

// eventos botones

sizeSlider.addEventListener('input',  function(){
    numeroCuadritos= sizeSlider.value;

    actualizar();

});

Bcolor.addEventListener("click",function (){

    mode='color';
    botonActivo();


});
Brainbow.addEventListener("click",function (){

    mode='rainbow';
    botonActivo();


});
Beraser.addEventListener("click",function (){

    mode='eraser';
    botonActivo();


});
Bclear.addEventListener("click", actualizar);

//funciones de juego

function botonActivo (){
    switch (mode) {
        case 'color':
            Bcolor.classList.add('activo');
            Brainbow.classList.remove('activo');
            Beraser.classList.remove('activo');


            
            break;
         case 'rainbow':
            Bcolor.classList.remove('activo');
            Brainbow.classList.add('activo');
            Beraser.classList.remove('activo');
            
            break;
         case 'eraser':
            Bcolor.classList.remove('activo');
            Brainbow.classList.remove('activo');
            Beraser.classList.add('activo');
            
            break;
    
 
    }


}
function generarColorAleatorio() {
    const r = Math.floor(Math.random() * 256); // Valor aleatorio entre 0 y 255 para el rojo
    const g = Math.floor(Math.random() * 256); // Valor aleatorio entre 0 y 255 para el verde
    const b = Math.floor(Math.random() * 256); // Valor aleatorio entre 0 y 255 para el azul
  
    return `rgb(${r}, ${g}, ${b})`; // Formato RGB
  
  }
function actuador (e){

    if(mode=="color"){
         e.target.style.backgroundColor = colorPicker.value;


    }
    if(mode=="rainbow"){
        e.target.style.backgroundColor = generarColorAleatorio();


   }
   if(mode=="eraser"){
    e.target.style.backgroundColor = 'white';


}



}
function actualizar (){

    const delDiv = document.querySelectorAll('.grid-div');
    delDiv.forEach(function(elemento){
        elemento.remove();
    });
    CreateLayout();

}
function CreateLayout () {

    const tamañoCuadro = 500/numeroCuadritos; //500 por lo que mide el contedor
                                // y 16 porque es la altura , reemplazar

    for(let i = 0; i<(numeroCuadritos*numeroCuadritos);i++){
        const div = document.createElement('div');
        div.className='grid-div';
        div.style.flexGrow=1;
        div.style.flexShrink=0;
        div.style.flexBasis= tamañoCuadro+'px';
        div.style.minHeight= tamañoCuadro+'px';
        div.style.maxHeight= tamañoCuadro+'px';



         div.addEventListener('click', actuador);

        gameContent.appendChild(div);

    }


}
actualizar();
botonActivo();
