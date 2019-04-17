function slide() {
    var num = 0, 
        style1 = document.getElementById('elem1').style, 
        style2 = document.getElementById('elem2').style;
    window.setInterval(function () {
        // increase by num 1, reset to 0 at 4
        num = (num + 1) % 4;
        style1.marginLeft = (200 * num) + "px"; 
        style2.marginLeft = (200 * num) + "px"; 
    }, 3000); // repeat forever, polling every 3 seconds
}

window.onload = function start() {
  slide();
}
