//Forces input to be less then 20
function enforceMinMax(el) {
  if (el.value != "") {
    if (parseInt(el.value) < parseInt(el.min)) {
      el.value = el.min;
    }
    if (parseInt(el.value) > parseInt(el.max)) {
      el.value = el.max;
    }
  }
}

//Enables the clear button
let btnClear = document.getElementById('reset');
let inputs = document.querySelectorAll('input');
btnClear.addEventListener('click', () => {
  satchel.innerHTML = "0";
  explo.innerHTML = "0";
  c4.innerHTML = "0";
  rocket.innerHTML = "0";
  costOne.innerHTML = "0";
  costTwo.innerHTML = "0";
  costThree.innerHTML = "0";
  inputs.forEach(input => input.value = '');
});

//Giant function which does all the calculations
document.getElementById("submit").onclick = function(){
  let woodenWall = document.getElementById("woodenwall").value;
  let stoneWall = document.getElementById("stonewall").value;
  let metalWall = document.getElementById("metalwall").value;
  let armoredWall = document.getElementById("armoredwall").value;
  let woodenDoor = document.getElementById("woodendoor").value;
  let sheetDoor = document.getElementById("sheetdoor").value;
  let garageDoor = document.getElementById("garagedoor").value;
  let armoredDoor = document.getElementById("armoreddoor").value;
  let satchel = document.querySelector("#satchel");
  let explo = document.querySelector("#explo");
  let c4 = document.querySelector("#c4");
  let rocket = document.querySelector("#rocket");
  let costOne = document.querySelector("#costOne");
  let costTwo = document.querySelector("#costTwo");
  let costThree = document.querySelector("#costThree");
  let satchels = 0;
  let explos = 0;
  let c4s = 0;
  let rockets = 0;
  let sulfurOne = 0;
  let sulfurTwo = 0;
  let sulfurThree = 0;
  explos += woodenWall * 49;
  c4s += stoneWall * 2;
  c4s += metalWall * 4;
  c4s += armoredWall * 8;
  explos += woodenDoor * 19;
  explos += sheetDoor * 63;
  explos += garageDoor * 150;
  explos += armoredDoor * 250;

  rockets += woodenWall * 2;
  rockets += stoneWall * 4;
  rockets += metalWall * 8;
  rockets += armoredWall * 15;
  rockets += woodenDoor * 1;
  rockets += sheetDoor * 2;
  rockets += garageDoor * 3;
  rockets += armoredDoor * 5;

  satchels += woodenWall * 3;
  satchels += stoneWall * 10;
  satchels += metalWall * 23;
  satchels += armoredWall * 46;
  satchels += woodenDoor * 2;
  satchels += sheetDoor * 4;
  satchels += garageDoor * 9;
  satchels += armoredDoor * 15;

  sulfurOne += c4s * 2200;
  sulfurOne += explos * 25;
  sulfurTwo += rockets * 1400;
  sulfurThree += satchels * 480;

  satchel.innerHTML = satchels.toString();
  explo.innerHTML = explos.toString();
  c4.innerHTML = c4s.toString();
  rocket.innerHTML = rockets.toString();
  costOne.innerHTML = sulfurOne.toString();
  costTwo.innerHTML = sulfurTwo.toString();
  costThree.innerHTML = sulfurThree.toString();
}