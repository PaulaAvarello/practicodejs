
function calcTotal() {
    //primero defino las variables
    const precio=200
    var categoria =document.querySelector('.form-select').value
    let cant=document.getElementById("cant").value

    //creo un subtotal multiplicando el precio por la cant
    let subtotal=cant*precio
    //muestro el subtotal por consola para ver que funcione
    console.log(subtotal)

    //creo un switch para indicar que hacer en cada caso
    switch(categoria){
    case 'estudiante': descuento= 0.8
    break;
    case 'trainee': descuento= 0.5
    break;
    case 'junior': descuento= 0.15
    break;
    default : descuento =0
    }
     
    //le asigno a total el valor
    let total = subtotal- (subtotal * descuento);
    //hago que muestre en el id total el valor que obtuve de (let) total
    document.getElementById('total').innerText = total;
}

//creo una funcion para borrar todo lo del formulario
window.onload = function() {

    //creo la variable botonBorrar a partir del id borrar(del boton borrar)
    var botonBorrar = document.getElementById('borrar');

    // Añado un evento de escucha al botón de borrar para llamar la funcion
    botonBorrar.addEventListener('click', function() {
        // creo la var formulario a partir del id formulario(el que llama a procesar.js)
        var formulario = document.getElementById('formulario');

        // con un bucle for recorro todos los elementos del formulario
        for (var i = 0; i < formulario.elements.length; i++) {
            if (formulario.elements[i].type == 'text' || formulario.elements[i].type == 'textarea') {
                // borro todos los elementos de tipo texto
                formulario.elements[i].value = '';
            }else if (formulario.elements[i].type == 'number' || formulario.elements[i].type == 'number') {
                // Borra todos los elementos de tipo numerico
                formulario.elements[i].value = '';
             }
        }

        //creo la variable selectForm a partir del id seleccion(del select)
        var selectForm = document.getElementById('selection');

        // Borro la selección del elemento select
        selectForm.value = '';
    
        //creo la variable totalAPagar a partir del elemento total
         var totalAPagar = document.getElementById('total');

        // Borra el contenido del elemento total (reseteo)
        totalAPagar.innerHTML = ''});
        //asegurarme de cerrar aqui la llave del addEventListener(lo 
        //que quede afuera no se ejecutará)

}

    document.getElementById('resumen').addEventListener('click', function() {
    localStorage.setItem('resumen', document.getElementById('total').innerText);
    window.location.href = 'resume.html';
});

