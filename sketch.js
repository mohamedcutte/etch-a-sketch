let container = document.getElementById("container");
let clear = document.getElementById("clear");
let erase = document.getElementById("erase");
let color = document.getElementById("color");
let size = document.getElementById("size");


color.addEventListener('click', randomClick);

erase.addEventListener('click', eraseClick);
clear.addEventListener('click', clearClick);
size.addEventListener('click', changeClick);


const box = 16;
createGridBoxes(box);


function randomClick(){
    random = true;
  }
  
  function eraseClick(){
    color = "white";
    random = false;
  }
  

  
  function changeClick(){
    clearGrid();
    dimensions = prompt("Enter dimensions (one number):", "e.g. 25");
    createGridBoxes(dimensions);
    color = 'black';
  }

function createGridBoxes(box){
    for (i = 0; i < box * box; i++){
        var square = document.createElement("div");
        square.setAttribute('id', 'square')
        square.style.width = container.clientWidth/box;
        square.style.height = container.clientHeight/box;
        square.style.display = "inline-block";
        square.style.float = "left";
        square.style.outline = "1px solid rgba(0, 0, 0, .2)";
        square.addEventListener("mouseover", changeColor);
        var elem = document.getElementById("container");
        elem.appendChild(square);
    }
    
}

function changeColor(){
    if(random){
      color = `rgb(${Math.random()*256},${Math.random()*256},${Math.random()*256})`;
    }
    this.style.backgroundColor = color;
  }
  
  function clearGrid(){
    while(container.firstChild){
      container.removeChild(container.firstChild);
    }
  }
  
  function clearClick(){
    clearGrid();
    createGridBoxes(box);
  }

