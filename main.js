function slide3and4() {
    var num = 0, 
        style3 = document.getElementById('elem-3').style, 
        style4 = document.getElementById('elem-4').style;
    window.setInterval(function () {
        // increase by num 1, reset to 0 at 11
        num = (num + 1) % 11;
        style3.marginLeft = (170 * num) + "px"; 
        style4.marginLeft = (130 * num) + "px"; 
    }, 700); // repeat forever, polling every 0.7 seconds
}

function passMeToSetInterval() {
  var d = new Date();
  var t = d.toLocaleTimeString();
  document.getElementById("time-here").innerHTML = t;
}
