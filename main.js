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
  let satchels = 0;
  let explos = 0;
  let c4s = 0;
  let rockets = 0;

  explos += woodenWall * 49;
  c4s += stoneWall * 2;
  c4s += metalWall * 4;
  c4s += armoredWall * 8;
  explos += woodenDoor * 19;
  explos += sheetDoor * 63;
  explos += garageDoor * 150;
  explos += armoredDoor * 250;
  satchel.innerHTML = satchels.toString();
  explo.innerHTML = explos.toString();
  c4.innerHTML = c4s.toString();
}