let eventoBatman = () => {
  let etiquetaAudio = document.createElement("audio");
  etiquetaAudio.setAttribute("src", "../sound/batman.mp3");
  etiquetaAudio.play();
  setTimeout(function () {
    window.location = "https://jvkbt.csb.app/";
  }, 12000);
};

let eventoWonderWoman = () => {
  let etiquetaAudio = document.createElement("audio");
  etiquetaAudio.setAttribute("src", "../sound/wonder.mp3");
  etiquetaAudio.play();
  setTimeout(function () {
    window.location = "https://jvkbt.csb.app/";
  }, 10000);
};

let eventoSuperman = () => {
  let etiquetaAudio = document.createElement("audio");
  etiquetaAudio.setAttribute("src", "../sound/supermn.mp3");
  etiquetaAudio.play();
  setTimeout(function () {
    window.location = "https://jvkbt.csb.app/";
  }, 13000);
};

let eventoHarley = () => {
  let etiquetaAudio = document.createElement("audio");
  etiquetaAudio.setAttribute("src", "../sound/harley.mp3");
  etiquetaAudio.play();
  setTimeout(function () {
    window.location = "https://jvkbt.csb.app/";
  }, 16000);
};
