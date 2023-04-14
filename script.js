window.onload = function () {
  let sizeInput = document.getElementById("size");
  let sizeOutput = document.getElementById("size-output");
  sizeOutput.innerHTML = sizeInput.value;

  sizeInput.oninput = function () {
    sizeOutput.innerHTML = this.value;
  };

  let costInput = document.getElementById("cost");
  let costOutput = document.getElementById("cost-output");
  costOutput.innerHTML = costInput.value;

  costInput.oninput = function () {
    costOutput.innerHTML = this.value;
  };
};

function calculate() {
  let size = document.getElementById("size").value;
  let cost = document.getElementById("cost").value;
  let result = document.getElementById("result");
  if (cost == 0) {
    let totalCost = size * 1000;
    result.innerHTML =
      "The estimated cost of applying solar panel per kilovolt (kV) is $" +
      totalCost.toLocaleString() +
      ".";
  } else {
    let kV = size * 1000;
    let instal = cost * 4;
    let totalCost = kV + instal;
    result.innerHTML =
      "The estimated cost of applying solar panel per kilovolt (kV) is $" +
      totalCost.toLocaleString() +
      ".";
  }
}
