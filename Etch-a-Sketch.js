let gridWidth;
let gridHeight;

const gridContainer = document.querySelector('#gridContainer');

let allCells = document.getElementsByClassName('cell');


function generateGrid(gridWidth, gridHeight) { 
    
    for(let yValue = 0; yValue < gridHeight; yValue++) {
        
        let row = document.createElement('div');
        row.classList.add('row');
        
        for(let xValue = 1; xValue <= gridWidth; xValue++) {
            
            let cell = document.createElement('div');
            cell.classList.add('cell');
            
            addListeners(cell);
            
            row.appendChild(cell);
        }
        gridContainer.appendChild(row);
    }

}

function addListeners(cell) {
    cell.addEventListener('mouseenter', (e) => {
        e.target.style.backgroundColor = 'black';
    });

    cell.addEventListener('mouseleave', (e) => {
        e.target.style.backgroundColor = 'grey';
    });
    
}


const resetButton = document.querySelector('#resetButton');

resetButton.addEventListener('click', () => {
    
    while(allCells.length == 0) {
        return;
    }
    
    for(let i = 0; i < allCells.length; i++) {
        allCells[i].style.backgroundColor = "aquamarine";
    }
    
});


const startButton = document.querySelector('#startButton');

startButton.addEventListener('click', () => {
        
        if(allCells.length !== 0) {
            let child = gridContainer.lastElementChild;
            while(child) {
                gridContainer.removeChild(child);
                child = gridContainer.lastElementChild;
            }
        }      
    
        gridWidth = prompt("Grid width?");
        gridHeight = prompt("Grid height?");
        generateGrid(gridHeight, gridWidth);     
});

/*

*/