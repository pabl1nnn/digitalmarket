var flag = false;
var div = document.getElementById("con");

function fun() {
    if (flag ^= true) {
                     div.style.display = "block"; 
    } else {
                     div.style.display = "none";
    }
}

function popup(url,ancho,alto) {
var posicion_x; 
var posicion_y; 
posicion_x=(screen.width/2)-(ancho/2); 
posicion_y=(screen.height/2)-(alto/2); 
window.open(url, "", "width="+ancho+",height="+alto+",menubar=0,toolbar=0,directories=0,scrollbars=no,resizable=no,left="+posicion_x+",top="+posicion_y+"");
}