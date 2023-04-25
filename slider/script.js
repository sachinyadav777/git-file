let item = document.getElementsByClassName("container-inner")[0]
let down = false
item.addEventListener("mousemove", move)
item.addEventListener("mousedown", dragdown)
item.addEventListener("mouseup", dragup)
function move(e){
    console.log(e.pageX) 
     e.preventDefault();
    if(!down) return;
    item.scrollLeft = e.pageX;
}
function dragdown(){
   down = true
}
function dragup(){
    down = false
 }

