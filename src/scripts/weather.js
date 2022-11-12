//getnow function
function getnow() {
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
        //get temp
        document.getElementById("now").innerText = (data.main.feels_like - 273.15).toFixed(0) + "°C";
        //get status
        let status = data.weather[0].main;
        
        if ((data.weather[0].main).includes('Clear')) {
            console.log(data.weather[0].main);
            document.getElementById("now-emoji").innerText = "🌞";
        } else if ((data.weather[0].main).includes('Clouds')) {
            console.log(data.weather[0].main);
            document.getElementById("now-emoji").innerText = "☁️";
        } else if ((data.weather[0].main).includes('Rain')) {
            console.log(data.weather[0].main);
            document.getElementById("now-emoji").innerText = "🌧️";
        } else if ((data.weather[0].main).includes('Thunderstorm')) {
            console.log(data.weather[0].main);
            document.getElementById("now-emoji").innerText = "⛈️";
        } else if ((data.weather[0].main).includes('Snow')) {
            console.log(data.weather[0].main);
            document.getElementById("now-emoji").innerText = "❄️";
        } else if ((data.weather[0].main).includes('Snow')) {
            console.log(data.weather[0].main);
            document.getElementById("now-emoji").innerText = "❄️";
        } else if ((data.weather[0].main).includes('Mist')) {
            console.log(data.list[11].weather[0].main);
            document.getElementById("now-emoji").innerText = "🌫️";
        } 
      }
    });

}

//getnow
getnow();
setInterval(function() {
    getnow();
}, 60 * 1000);


//gehours function
function gethours() {
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
    getJSON('https://api.openweathermap.org/data/2.5/forecast?lat=46.4892648&lon=11.3296481&ctn=12&appid=4790a5688fb51270e09ea7bb403b8215',
    function(err, data) {
      if (err !== null) {
        alert('Something went wrong: ' + err);
      } else {
        //get temp
        document.getElementById("hour").innerText = (data.list[1].main.feels_like - 273.15).toFixed(0) + "°C";
        //get status
        let status = data.list[11].weather[0].main;
        
        if ((data.list[1].weather[0].main).includes('Clear')) {
            console.log(data.list[1].weather[0].main);
            document.getElementById("hour-emoji").innerText = "🌞";
        } else if ((data.list[1].weather[0].main).includes('Clouds')) {
            console.log(data.list[1].weather[0].main);
            document.getElementById("hour-emoji").innerText = "☁️";
        } else if ((data.list[1].weather[0].main).includes('Rain')) {
            console.log(data.list[1].weather[0].main);
            document.getElementById("hour-emoji").innerText = "🌧️";
        } else if ((data.list[1].weather[0].main).includes('Thunderstorm')) {
            console.log(data.list[1].weather[0].main);
            document.getElementById("hour-emoji").innerText = "⛈️";
        } else if ((data.list[1].weather[0].main).includes('Snow')) {
            console.log(data.list[1].weather[0].main);
            document.getElementById("hour-emoji").innerText = "❄️";
        } else if ((data.list[1].weather[0].main).includes('Snow')) {
            console.log(data.list[1].weather[0].main);
            document.getElementById("hour-emoji").innerText = "❄️";
        } else if ((data.list[1].weather[0].main).includes('Mist')) {
            console.log(data.list[1].weather[0].main);
            document.getElementById("hour-emoji").innerText = "🌫️";
        } 
      }
    });

}

//gethours
gethours();
setInterval(function() {
    gethours();
}, 60 * 1000);



//getom function
function gettom() {
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
    getJSON('https://api.openweathermap.org/data/2.5/forecast?lat=46.4892648&lon=11.3296481&ctn=12&appid=4790a5688fb51270e09ea7bb403b8215',
    function(err, data) {
      if (err !== null) {
        alert('Something went wrong: ' + err);
      } else {
        //get temp
        document.getElementById("tom").innerText = (data.list[11].main.feels_like - 273.15).toFixed(0) + "°C";
        //get status
        let status = data.list[11].weather[0].main;
        
        if ((data.list[11].weather[0].main).includes('Clear')) {
            console.log(data.list[11].weather[0].main);
            document.getElementById("tom-emoji").innerText = "🌞";
        } else if ((data.list[11].weather[0].main).includes('Clouds')) {
            console.log(data.list[11].weather[0].main);
            document.getElementById("tom-emoji").innerText = "☁️";
        } else if ((data.list[11].weather[0].main).includes('Rain')) {
            console.log(data.list[11].weather[0].main);
            document.getElementById("tom-emoji").innerText = "🌧️";
        } else if ((data.list[11].weather[0].main).includes('Thunderstorm')) {
            console.log(data.list[11].weather[0].main);
            document.getElementById("tom-emoji").innerText = "⛈️";
        } else if ((data.list[11].weather[0].main).includes('Snow')) {
            console.log(data.list[11].weather[0].main);
            document.getElementById("tom-emoji").innerText = "❄️";
        } else if ((data.list[11].weather[0].main).includes('Snow')) {
            console.log(data.list[11].weather[0].main);
            document.getElementById("tom-emoji").innerText = "❄️";
        } else if ((data.list[11].weather[0].main).includes('Mist')) {
            console.log(data.list[11].weather[0].main);
            document.getElementById("tom-emoji").innerText = "🌫️";
        } 
      }
    });

}

//gettom
gettom();
setInterval(function() {
    gettom();
}, 60 * 1000);