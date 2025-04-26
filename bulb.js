function on() {

    document.getElementById("bulb").style.backgroundColor = "rgb(210, 232, 13)"
    document.getElementById("bulb").style.border = "2px solid orange"
    document.getElementById("bulb").style.boxShadow = "1px 1px 8px 6px rgb(234, 96, 16)" 

}
function off() {

    document.getElementById("bulb").style.backgroundColor = "rgb(255, 255, 255)"
    document.getElementById("bulb").style.border = "2px solid rgb(249, 249, 249)"
     document.getElementById("bulb").style.boxShadow = " 0 0  rgb(255, 0, 0)"
      

}

document.getElementById("bulb").addEventListener("mouseover",on)
document.getElementById("bulb").addEventListener("mouseout",off)