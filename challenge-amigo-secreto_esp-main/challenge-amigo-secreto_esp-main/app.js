// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
//Crear el arreglo para guardar los nombres
let amigoSecreto = [];
//Inicializamos la función para agregar a los amigos
function agregarAmigo(){
    const inputAmigo = document.getElementById ('amigo');
    const nombre = inputAmigo.value.trim();
    //Verificamos que el campo no este vacio
    if (nombre === ""){
        alert('El campo esta vacio, ingresa un nombre.');
        return;
    }
    //Verificamos que el nombre no se repita
    if(amigoSecreto.includes(nombre)){
        alert(`El nombre ${nombre} ya esta registrado, ingresa uno diferente.`);
        return;
    }
    //Agregar los nombres al array
    amigoSecreto.push(nombre);
    //Vaciar el campo
    inputAmigo.value = "";
    //Actualización de la lista en el HTML
    actualizarLista();
}
//Actualizacion de la lista en la interfaz
function actualizarLista(){
    const listaAmigo = document.getElementById('listaAmigos');
    //Borrar el contenido actual dentro del campo
    listaAmigo.innerHTML = "";
    //Iterar el arreglo con un ciclo for
    for(let i = 0; i <amigoSecreto.length; i++){
        const li = document.createElement('li');
        li.textContent = amigoSecreto[i];
        listaAmigo.appendChild(li); 
    }
}
//Funcion para seleccionar un amigo de forma aleatoria
function sortearAmigo(){
    if(amigoSecreto.length === 0){
        alert('No hay amigos, debe haber almenos un amigo agregado');
        return;
    }
    //Se crea un indice de forma aleatoria
    const indice = Math.floor(Math.random()* amigoSecreto.length);
    //Seleccionar el nombre sorteado
    const sorteoAmigo = amigoSecreto [indice];
    //Muestra el amigo seleccionado en el HTML
    const resultado = document.getElementById('resultado');
    resultado.innerHTML = `El amigo sorteado: <strong> ${sorteoAmigo}</strong>`;
}