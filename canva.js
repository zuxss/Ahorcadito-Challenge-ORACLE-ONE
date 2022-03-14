const linea = document.querySelector("#graficoAhorcado");
const ahorcado = linea.getContext("2d");

function resetGrafico() {
  ahorcado.clearRect(0, 0, linea.width, linea.height);
  ahorcado.lineWidth = 10;
  ahorcado.strokeStyle = "#0a3871";
  ahorcado.beginPath();
  //barra vertical horca
  ahorcado.moveTo(50, 600);
  ahorcado.lineTo(50, 45);
  ahorcado.moveTo(50, 595);
  ahorcado.lineTo(350, 595);
  ahorcado.stroke();

  //barra superior horca
  ahorcado.moveTo(50, 50);
  ahorcado.lineTo(255, 50);
  ahorcado.moveTo(250, 50);
  ahorcado.lineTo(250, 100);
  ahorcado.stroke();
}

function graficarAhorcado(vidas) {
  if (vidas < 6) {
    //cabeza error1
    ahorcado.strokeStyle = "#0a3871";
    ahorcado.beginPath();
    ahorcado.arc(250, 150, 50, 0, 2 * Math.PI);
    ahorcado.stroke();
    if (vidas < 5) {
      //cuerpo error2
      ahorcado.moveTo(250, 200);
      ahorcado.lineTo(250, 400);
      ahorcado.stroke();
      if (vidas < 4) {
        //brazo error3
        ahorcado.moveTo(250, 240);
        ahorcado.lineTo(180, 280);
        ahorcado.stroke();
        if (vidas < 3) {
          //pierna error4
          ahorcado.moveTo(250, 400);
          ahorcado.lineTo(180, 480);
          ahorcado.stroke();
          if (vidas < 2) {
            //brazo otro error5
            ahorcado.moveTo(250, 240);
            ahorcado.lineTo(320, 280);
            ahorcado.stroke();
            if (vidas < 1) {
              //pierna otro error6
              ahorcado.moveTo(250, 400);
              ahorcado.lineTo(320, 480);
              ahorcado.stroke();
              if (vidas < 0) {
                alert(`Perdiste, la palabra era ${palabraSecreta}`);
                nuevoJuego();
              }
            }
          }
        }
      }
    }
  }
}
