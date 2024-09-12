const container=document.querySelector('.container')
const gridSize = 60


const containerWidth=container.clientWidth
const containerHeight=container.clientHeight
const cellWidth=containerWidth/gridSize
const cellHeight=containerHeight/gridSize

for (let index = 0; index < gridSize*gridSize; index++) {
    
    const div = document.createElement('div')
    div.style.width=`${cellWidth}px`;
    div.style.height=`${cellHeight}px`;
    div.classList.add('drawBox')
    container.appendChild(div)   
}

const boxes = document.querySelectorAll('.drawBox')

boxes.forEach(b => {
    b.addEventListener("mouseover",()=>drawer(b))
})

function drawer(b){
   b.style.backgroundColor="blue"
}

