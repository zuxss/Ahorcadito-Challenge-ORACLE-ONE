let listaPalabrasSecretas = [
  "PELOTA",
  "CELULAR",
  "VIDEOJUEGO",
  "PIZZA",
  "TAZA",
  "GATO",
];
let btnNuevaPalabra = document.querySelector("#nuevaPalabra");
let btnNuevoJuego = document.querySelector("#newJuego");
let contenedorAhorcado = document.querySelector("#contenedorAhorcado");
let entradasIncorrectas = document.querySelector("#entradasIncorrectas");
let divPalabraSecreta = document.querySelector("#palabraSecreta");
let vidas = 6;
let palabraSecreta = "";
let listaErrores = "";
let descubiertoArray = [];
let menu = document.querySelector("#menu");
let btnAgregar = document.querySelector("#btnAgregar");
let inputNuevaPalabra = document.querySelector("#inputNuevaPalabra");
inputNuevaPalabra.style.display = "none";
btnAgregar.style.display = "none";
//boton nueva palabra
btnNuevaPalabra.addEventListener("click", function () {
  inputNuevaPalabra.style.display = "initial";
  btnAgregar.style.display = "initial";
});
//boton agregar nueva palabra
btnAgregar.addEventListener("click", function () {
  let ingresoUsr = inputNuevaPalabra.value;
  inputNuevaPalabra.value = "";
  ingresoUsr = ingresoUsr.toUpperCase();
  const pattern = new RegExp("^[A-Z]+$", "i");
  if (pattern.test(ingresoUsr)) {
    listaPalabrasSecretas.push(ingresoUsr);
    alert(`Añadiste ${ingresoUsr} al juego`);
  }
  inputNuevaPalabra.style.display = "none";
  btnAgregar.style.display = "none";
});
//boton nuevo juego
btnNuevoJuego.addEventListener("click", function () {
  menu.style.display = "none";
  contenedorAhorcado.style.display = "flex";
  nuevoJuego();
  window.addEventListener("keydown", teclaPresionada);
});
function nuevoJuego() {
  palabraSecreta = definirPalabrasSecretas();
  vidas = 6;
  listaErrores = "";
  entradasIncorrectas.textContent = listaErrores.split("");
  resetGrafico();
  graficarAhorcado(6);
  descubiertoArray = [];
  mostarPalabraSecreta();
  calcularDescubiertos();
}
//Sortea palabra secreta aleatoria del array
function definirPalabrasSecretas() {
  return listaPalabrasSecretas[
    Math.floor(Math.random() * listaPalabrasSecretas.length)
  ];
}
//comprobar si el ingreso de texto esta en la palabra secreta
function comprobarLetra(letra) {
  if (palabraSecreta.includes(letra)) {
    if (!descubiertoArray.includes(letra)) {
      descubiertoArray.push(letra);
    }
    descubiertoArray = descubiertosOrdenado(descubiertoArray);
    mostarPalabraSecreta();
    let palabraSecretaArray = palabraSecreta.split("");
    if (compararArray(palabraSecretaArray, descubiertoArray)) {
      alert(`¡Ganaste! La palabra era ${palabraSecreta}`);
      menu.style.display = "flex";
      contenedorAhorcado.style.display = "none";
      nuevoJuego();
    }
  } else {
    if (!listaErrores.includes(letra)) {
      vidas--;
      listaErrores += letra;
      entradasIncorrectas.textContent = listaErrores.split("");
    }
    graficarAhorcado(vidas);
  }
}
function mostarPalabraSecreta() {
  divPalabraSecreta.textContent = calcularDescubiertos();
}

function descubiertosOrdenado(descubiertos) {
  let x = [];
  for (letra of descubiertos) {
    for (let i = 0; i < palabraSecreta.length; i++) {
      if (letra == palabraSecreta[i]) x[i] = letra;
    }
  }

  return x;
}

function calcularDescubiertos() {
  descubierto = "";
  for (let i = 0; i < palabraSecreta.length; i++) {
    if (descubiertoArray[i] != undefined) {
      if (descubiertoArray[i] == palabraSecreta[i]) {
        descubierto += palabraSecreta[i];
      } else {
        descubierto += "_";
      }
    } else {
      descubierto += "_";
    }
  }
  return descubierto;
}
function compararArray(arr1, arr2) {
  let ban = false;
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] != arr2[i]) {
      ban = false;
      break;
    } else {
      ban = true;
    }
  }
  return ban;
}
