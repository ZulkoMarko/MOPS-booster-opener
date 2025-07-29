let pack = document.getElementById("booster");

function randomNumber(min, max) {
  return Math.ceil(Math.random() * (max - min) + min);
}

function openPack() {
  let cardsOpened = document.getElementById("booster2");

  //clear previous cards
  while (cardsOpened.firstChild) {
    cardsOpened.firstChild.remove();
  }
  //generate 3 cards
  for (let i = 0; i < 3; i++) {
    let cardDiv = document.createElement("div");
    let cardImg = document.createElement("img");
    cardImg.id = `card-${i}`;

    let num = randomNumber(1, 67);
    if (i == 2) {
      num = randomNumber(50, 67);
    }

    cardImg.src = "kartt/" + num.toString() + ".jpg";

    // draggable card not working for now

    cardDiv.appendChild(cardImg);
    document.querySelector("#booster2").appendChild(cardDiv);
  }
}

pack.addEventListener("click", openPack);
