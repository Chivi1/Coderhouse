class Entrada {
    constructor(id, torneo, nombre, precio) {
        this.id = id;
        this.torneo = torneo;
        this.nombre = nombre;
        this.precio = precio;
    }
}

const entrada1 = new Entrada(1, "liga de honor", "BLACKTAIL vs MAYCAM EVOLVE (lol)", 1200);
const entrada2 = new Entrada(2, "liga de honor", "BLACKTAIL vs ONESHOT (lol)", 1200);
const entrada3 = new Entrada(3, "liga de honor", "BLACKTAIL vs RENEGADOS (valorant)", 800);

let torneos = [entrada1,entrada2,entrada3] 
const suma = (a, b) => a + b
const resta = (a, b) => a - b
const mult = (a, b) => a * b

const resultadoEntrada = (entrada) => "seleccionaste " + entrada.nombre + " Torneo: " + entrada.torneo + " Precio: " + entrada.precio


function elegirEntrada(numeroEntrada) {
    const entrada = torneos.find(entrada => entrada.id == numeroEntrada);
    if (entrada == null) {
        alert("Seleccion no valida");
        throw new Error("¡Seleccion no valida!");
    }
    alert(resultadoEntrada(entrada));
    return entrada;
}

function sacarEntrada() {
    const numeroEntrada = prompt("Selecciona el partido que quieres ver con su numero de orden");
    const selecEntrada = elegirEntrada(parseInt(numeroEntrada));
    console.log(selecEntrada);
    let cantEntradas = prompt("Ingrese cantidad de entradas");
    let nuevoPrecio = mult(selecEntrada.precio, cantEntradas);
    alert("Seleccionaste: " + selecEntrada.nombre + "\nCantidad: " + cantEntradas + "\nPrecio: " + nuevoPrecio )
    console.log(cantEntradas, nuevoPrecio);
    return {cantEntradas, nuevoPrecio, selecEntrada} 
}

function entradaFinal(selecEntrada, cantEntradas) {
    for (let i = 0; i <= cantEntradas - 1; i++){
        let dueño  = prompt ("Ingrese su nombre y apellido");
        let dni = prompt ("Ingrese su numero de DNI");
        alert ("ENTRADA:\n Entrada numero: " + (i + 1) + "\n" + "Nombre: " + dueño + "\n"+ "DNI: " + dni);
    }
}

alert("Las entradas disponibles para este fin de semana son: \n 1: BLACKTAIL vs MAYCAM EVOLVE (lol) \n 2: BLACKTAIL vs ONESHOT (lol) \n 3: BLACKTAIL vs RENEGADOS (valorant)")

const {cantEntradas, nuevoPrecio, selecEntrada} = sacarEntrada();
alert(cantEntradas)
entradaFinal(selecEntrada, cantEntradas);