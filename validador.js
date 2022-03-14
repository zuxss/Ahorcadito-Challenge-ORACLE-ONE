//captura las letras presionadas

function teclaPresionada(e) {
  validar(e.key.toUpperCase());
}
function validar(x) {
  //validador de solo letras
  const p = new RegExp("^[A-Z]+$", "i");
  if (x.length == 1) {
    if (p.test(x) || x == "ñ" || x == "Ñ") {
      comprobarLetra(x);
    }
  }
}
