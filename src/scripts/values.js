function random(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }
var paper;
var plastic;
var datap;
var datac;


setInterval(function() {
    

//API REQUEST
$.ajaxSetup({
  async: false
});
$.getJSON('http://127.0.0.1:5000/api/v1/paper/weight', function(data) {
    datac = data
});
$.getJSON('http://127.0.0.1:5000/api/v1/plastic/weight', function(data) {
    datap = data
});

var paper = (datac.pa_recycle_weight[0].pa_recycle_weight)
var plastic = (datap.pl_w[0].pl_recycle_weight)
var co = Math.round(((3.45 * plastic) + (0.95 * paper)))


document.getElementById('papercount').innerHTML = paper + 'g';
document.getElementById('plasticcount').innerHTML = plastic + 'g';
document.getElementById('cocount').innerHTML = co + 'g';
}, 200);