function random(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }

var plastic = random(0, 600);
var paper = random(2, 820);
var co = Math.round(((3.45 * plastic) + (0.95 * paper)))


document.getElementById('papercount').innerHTML = paper + 'g';
document.getElementById('plasticcount').innerHTML = plastic + 'g';
document.getElementById('cocount').innerHTML = co + 'g';