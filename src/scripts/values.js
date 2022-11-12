function random(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }

var plastic = random(0, 6);
var paper = random(2, 8);

if (paper > 1) {
    kgp = "kgs"
} else {
    kgp = "kg"
}

if (plastic > 1) {
    kgl = "kgs"
} else {
    kgl = "kg"
}

document.getElementById('papercount').innerHTML = paper + kgp;
document.getElementById('plasticcount').innerHTML = plastic + kgl;