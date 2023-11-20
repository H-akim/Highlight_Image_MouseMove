let focus = document.getElementById("focus");
let focushalfwidth = focus.offsetWidth / 2;

document.onmousemove = function(e){
    focus.style.left = e.pageX - focushalfwidth + "px";
    focus.style.top = e.pageY - focushalfwidth + "px";
}