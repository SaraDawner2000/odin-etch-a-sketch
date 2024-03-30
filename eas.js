function buildGrid(size = 16){
    const container = document.querySelector("#container")
    for (let i = 0; i < size; i++){
        const line = document.createElement("div")
        line.classList.add("line")
        for (let j = 0; j < size; j++){
            const cell = document.createElement("div")
            cell.classList.add("cell")
            cell.addEventListener('mouseenter', ()=>{
                if(!cell.classList.contains('painted')){
                    cell.classList.add('painted')
                    const red = getRandomInt(256)
                    const green = getRandomInt(256)
                    const blue = getRandomInt(256)
                    cell.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`
                    cell.style.opacity = '0.1'
                }else{
                    let currentOpacity = parseFloat(cell.style.opacity)
                    if (currentOpacity <=1){
                        currentOpacity += 0.1
                        cell.style.opacity = `${currentOpacity}`
                    }
                }
            })
            line.appendChild(cell)
        }
        container.appendChild(line)
    }
}

function clearGrid(){
    container.textContent = '';
}

document.addEventListener('DOMContentLoaded',() => {
    buildGrid();
});
const gridSize = document.querySelector("#grid-size")
gridSize.addEventListener('click', () => {
    let size = parseInt(prompt("Enter a number for the grid size between 1 and 100", 16))
    while(!Number.isInteger(size) || size > 100 || size < 1){
        size = parseInt(prompt("The value you entered is not acceptable, enter a number between 1 and 100", 16))
    }
    clearGrid()
    buildGrid(size)
})

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}
