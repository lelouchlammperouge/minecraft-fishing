let steveImgEl = document.getElementById("steve-img");
let alexImgEl = document.getElementById("alex-img");
let fishBtnEl = document.getElementById("fish-btn");
let imgResultEl = document.getElementById("img-result");
let numCodEl = document.getElementById("num-cod");
let numSalmonEl = document.getElementById("num-salmon");
let numTropicalEl = document.getElementById("num-tropicalfish");
let numPufferfishEl = document.getElementById("num-pufferfish");

let character = "Steve";
let numCod = 0;
let numSalmon = 0;
let numTropical = 0;
let NumPuffer1 = 0;

steveImgEl.addEventListener("click", selectSteve);
alexImgEl.addEventListener("click", selectAlex);
fishBtnEl.addEventListener("click", fishOnce);

function selectSteve() {
  steveImgEl.classList.add("active");
  alexImgEl.classList.remove("active");
  character = "Steve";
}

function selectAlex() {
  console.log("alex");
  steveImgEl.classList.remove("active");
  alexImgEl.classList.add("active");

  character = "Alex";
}

function fishOnce() {
  if ((character = "Steve")) {
    let randnum = Math.random();
    if (randnum < 0.7) {
      numCod++;
      imgResultEl.src = "img/Raw-Cod.png";
      numCodEl.innerHTML = numCod;
    } else if (randnum > 0.7 && randnum < 0.9) {
      numSalmon++;
      imgResultEl.src = "img/Raw-Salmon.png";
      numSalmonEl.innerHTML = numSalmon;
    } else if (randnum > 0.9 && randnum < 0.95) {
      numTropical++;
      imgResultEl.src = "img/Tropical-Fish.png";
      numTropicalEl.innerHTML = numTropical;
    } else {
      NumPuffer1++;
      imgResultEl.src = "img/Pufferfish.png";
      numPufferfishEl.innerHTML = NumPuffer1;
    }
  } else {
    let randnum1 = Math.random();
    if (randnum1 === 1) {
      numCod++;
      imgResultEl.src = "img/Raw-Cod.png";
      numCodEl.innerHTML = numCod;
    } else if (randnum1 > 0.9 && randnum < 1) {
      numSalmon++;
      imgResultEl.src = "img/Raw-Salmon.png";
      numSalmonEl.innerHTML = numSalmon;
    } else if (randnum1 > 0.5 && randnum < 0.8) {
      numTropical++;
      imgResultEl.src = "img/Tropical-Fish.png";
      numTropicalEl.innerHTML = numTropical;
    } else if (randnum1 <= 0.5) {
      NumPuffer1++;
      imgResultEl.src = "img/Pufferfish.png";
      numPufferfishEl.innerHTML = NumPuffer1;
    }
  }
}
