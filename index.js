const container = document.createElement('div')
container.setAttribute('id', 'container');
document.body.appendChild(container);
const buttonSetGrid = document.createElement('button')
buttonSetGrid.textContent = "Set Grid"
document.body.appendChild(buttonSetGrid);
buttonSetGrid.addEventListener('click',getNumberForGrid)


function getNumberForGrid(){
    let number = +prompt('Set number for grid (not higher than 100)');
    if(number > 100) getNumberForGrid();
    else if(!isNaN(number)) {
        number === 0 ? null : drawGridElement(number);
    }
    else{
        getNumberForGrid()
    }
}

const drawGridElement = (elements = 16)=>{
    if(elements === null) return
    container.textContent = "";
    for(let i=0; i<elements * elements; i++){
    const div = document.createElement('div');
    div.addEventListener('mouseover', (e)=>{
    e.target.style.backgroundColor = "#ddd"
    })
    container.appendChild(div)
    }
    container.style.gridTemplateColumns = `repeat(${elements}, 10px)`;
    container.style.gridTemplateRows = `repeat(${elements}, 10px)`;
}
drawGridElement()
