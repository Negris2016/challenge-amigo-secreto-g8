// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

// CHALLENGE ONE - AMIGO SECRETO

// Curso: ALURA LATAM ~ Principiante en Programación G8 - ONE
// Elaboró: Martínez Uranga Minerva

// *********************************************************************************************************************************************************** //

// declaración de variables
let listaCompletaAmigos = [];
let listaGanadoresPrevios = [];
let lugarGanador = 0;
let amigoGanador = "";
const listaAmigos = document.getElementById('listaAmigos');
const resultado = document.getElementById('resultado');

// funciones

// ingreso de amigos
function agregarAmigo(){

    let nomAmigo = document.getElementById('amigo').value;

    // validaciones
    const regex = /^[\p{L}]+( [\p{L}]+)*$/u;

    if(regex.test(nomAmigo) === true){

        listaCompletaAmigos.push(nomAmigo);
        console.log(listaCompletaAmigos);
    
    } else {
        alert('Por favor, inserte un nombre válido.');
    }
    limpiarDatoEntrada();
    muestraListaAmigos();
}

function muestraListaAmigos(){

    if(listaAmigos){

        // limpiamos contenedor
        listaAmigos.innerHTML = '';

        // llenamos
        listaCompletaAmigos.forEach(amigo => {

            const li = document.createElement('li');
            li.textContent = amigo;
            listaAmigos.appendChild(li);
            
        });
    } else {
        console.error('El contenedor de la lista no se ha encontrado');
      }
}

function limpiarDatoEntrada(){
    document.querySelector('#amigo').value = '';
}

// obtiene el número ganador
function sortearAmigo(){

    // valida que el arreglo tenga info
    if(listaCompletaAmigos.length > 0 ){

        lugarGanador = obtieneLugarAmigo();
        amigoGanador = listaCompletaAmigos[lugarGanador];
        console.log(`amigo ganador: ${amigoGanador}`);

        // mostramos el resultado
        resultado.innerHTML = '';

        const liResultado = document.createElement('li');

        liResultado.textContent = amigoGanador ? "Tu amigo secreto es \"" + amigoGanador + "\"" : "";

        resultado.appendChild(liResultado);
    }
}

function obtieneLugarAmigo(){

    lugarGanador = Math.floor(Math.random()*listaCompletaAmigos.length);
    console.log(`lugar ganador: ${lugarGanador}`);
    
    // controlamos un sorteo justo
    if(listaGanadoresPrevios.length === listaCompletaAmigos.length){
        alert('Se han premiado a todos los amigos de la lista.');

         // regresa a condiciones iniciales
         condicionesIniciales();
    
    }else{
        
        if(listaGanadoresPrevios.includes(lugarGanador)){  
            return obtieneLugarAmigo();
        }else{  
            listaGanadoresPrevios.push(lugarGanador);
            return lugarGanador;
        }
    }
}

function condicionesIniciales(){

    // regresamos las listas al inicio
    listaCompletaAmigos = [];
    listaGanadoresPrevios = [];

    // limpiamos contenedores
    listaAmigos.innerHTML = '';
    resultado.innerHTML = '';
}

