let steveImgEl = document.getElementById("steve-img");
let alexImgEl = document.getElementById("alex-img");
let fishBtnEl = document.getElementById("fish-btn");
let imgResultEl = document.getElementById("img-result");
let numCodEl = document.getElementById("num-cod");
let numSalmonEl = document.getElementById("num-salmon");
let numTropicalEl = document.getElementById("num-tropicalfish");
let numPufferfishEl = document.getElementById("num-pufferfish");

let character = "Steve";

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
    alert("fish with Steve");
  } else {
    alert("fish with Alex");
  }
}
