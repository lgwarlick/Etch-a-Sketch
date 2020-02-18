let gridWidth = 16;
let gridHeight = 16;


const gridContainer = document.querySelector('#gridContainer');








function generateGrid(gridWidth, gridHeight){ 
    
    const gridContainer = document.querySelector('#gridContainer');
    
    for(let yValue = 0; yValue < gridHeight; yValue++) {
        
        let row = document.createElement('div');
        row.classList.add('row');
        
        for(let xValue = 1; xValue <= gridWidth; xValue++) {
            
            let cell = document.createElement('div');
            cell.classList.add('cell');
            row.appendChild(cell);
        }
        gridContainer.appendChild(row);
    }

}

generateGrid(gridWidth, gridHeight);

