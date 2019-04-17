function slide3and4() {
    var num = 0, 
        style3 = document.getElementById('elem-3').style, 
        style4 = document.getElementById('elem-4').style;
    window.setInterval(function () {
        // increase by num 1, reset to 0 at 4
        num = (num + 1) % 6;
        style3.marginLeft = (170 * num) + "px"; 
        style4.marginLeft = (140 * num) + "px"; 
    }, 2500); // repeat forever, polling every 2.5 seconds
}

window.onload = function start() {
  slide3and4();
}
