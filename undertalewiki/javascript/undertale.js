/* Les fonctions créent une variable contenant la zone concernée de la page, et y ajoute ou en retire les deux effets */
/*(utilisées dans zones.html)*/

function disableEffects(zone) {
  const transparentDiv = zone.querySelector(".transparent");
  transparentDiv.classList.add("no-background");
  zone.classList.add("no-blur");
}

function enableEffects(zone) {
  const transparentDiv = zone.querySelector(".transparent");
  transparentDiv.classList.remove("no-background");
  zone.classList.remove("no-blur");
}

/* Fonction utilisée dans toutes les pages pour faire jouer un son à chaque passage de souris dans la navbar */
function playHoverSound() {
  var hoverSound = document.getElementById("hover-sound");
  hoverSound.currentTime = 0;
  hoverSound.play();
}

/* Fonction utilisée UNIQUEMENT dans la page personnages, petit easter egg quand Flowey est cliqué */
function playFloweyClickSound() {
  var hoverSound = document.getElementById("flowey-laugh");
  hoverSound.currentTime = 0;
  hoverSound.play();
}
