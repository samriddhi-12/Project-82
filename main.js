var mousevent="empty";
var lastpositionofx,lastpositionofy;
canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
color="black";
widthoftheline=3;
canvas.addEventListener("mousedown",my_mousedown);
function my_mousedown(e){
    color=document.getElementById("Color").value;
    widthoftheline=document.getElementById("widthoftheline").value;
    
    mousevent="mouseDown";
}
canvas.addEventListener("mousemove",my_mousemove);
function my_mousemove(e){
    currentpositionofmouse_x=e.clientX-canvas.offsetLeft;
    currentpositionofmouse_y=e.clientY-canvas.offsetTop;
    if(mousevent=="mouseDown"){
        ctx.beginPath();
        ctx.strokeStyle=color;
        ctx.lineWidth="widthoftheline";

        console.log("last position of x and y coordinates=");
        console.log("x=" + lastpositionofx + "y=" + lastpositionofy);
        ctx.moveTo(lastpositionofx,lastpositionofy);

        console.log("current position of mouse_x and y coordinates=");
        console.log("x=" + currentpositionofmouse_x + "y=" + currentpositionofmouse_y);
        ctx.lineTo(currentpositionofmouse_x,currentpositionofmouse_y);
        ctx.stroke();
    }
       lastpositionofx = currentpositionofmouse_x;
       lastpositionofy = currentpositionofmouse_y;
       
}
       canvas.addEventListener("mouseup", my_mouseup);
       function my_mouseup(e){
           mousevent = "mouseUP";
       }
       canvas.addEventListener("mouseleave", my_mouseleave);
       function my_mouseleave(e){
           mousevent = "mouseleave";
       }
       function clearArea(){
           ctx.clearRect(0,0,ctx.canvas.width , ctx.canvas.height);
       }