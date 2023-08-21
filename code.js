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

// eventos botones

sizeSlider.addEventListener('input',  function(){
    numeroCuadritos= sizeSlider.value;

    actualizar();

});

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



         div.addEventListener('click', function() {
             div.style.backgroundColor=colorPicker.value;
         });

        gameContent.appendChild(div);

    }


}
