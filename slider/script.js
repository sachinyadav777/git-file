let item = document.getElementsByClassName("container-inner")[0]
item.addEventListener("mousemove", move)
item.addEventListener("mousedown", dragdown)
item.addEventListener("mouseup", dragup)
let down = false
let prevpage
let prevscroll
function move(e){
      e.preventDefault();
       
    if(!down){
        return;
    }
    else{
        // console.log(e.pageX) 
        let position = e.pageX - prevpage
        item.scrollLeft = prevscroll - position;
    } 
    
} 
function dragdown(e){
   down = true
   prevpage = e.pageX
   prevscroll = item.scrollLeft
}
function dragup(){
    down = false
    console.log(prevpage)
    console.log(prevscroll )

 }

