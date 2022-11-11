function gettemp() {
    var getJSON = function(url, callback) {
        var xhr = new XMLHttpRequest();
        xhr.open('GET', url, true);
        xhr.responseType = 'json';
        xhr.onload = function() {
          var status = xhr.status;
          if (status === 200) {
            callback(null, xhr.response);
          } else {
            callback(status, xhr.response);
          }
        };
        xhr.send();
    };
    getJSON('https://api.openweathermap.org/data/2.5/weather?lat=46.4892648&lon=11.3296481&appid=4790a5688fb51270e09ea7bb403b8215',
    function(err, data) {
      if (err !== null) {
        alert('Something went wrong: ' + err);
      } else {
        document.getElementById("temp").innerText = (data.main.feels_like - 273.15).toFixed(0) + "°C";
      }
    });

}

gettemp();
setInterval(function() {
    gettemp();
}, 60 * 1000);

