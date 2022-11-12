const bgnum = Math.floor(Math.random() * 4);
document.getElementById("body").style.backgroundImage = `url('/src/assets/bgs/${bgnum}.png')`;
setInterval(function() {
    const bgnum = Math.floor(Math.random() * 4);
    document.getElementById("body").style.backgroundImage = `url('/src/assets/bgs/${bgnum}.png')`;
}, 60 * 1000);