let gridWidth;
let gridHeight;

const gridContainer = document.querySelector('#gridContainer');

let allCells = document.getElementsByClassName('cell');


/*
** Generates a grid of cells based on user input
*/


function generateGrid(gridWidth, gridHeight) { 
    
    for(let yValue = 0; yValue < gridHeight; yValue++) {
        
        let row = document.createElement('div');
        row.classList.add('row');
        
        for(let xValue = 1; xValue <= gridWidth; xValue++) {
            
            let cell = document.createElement('div');
            cell.classList.add('cell');
            cell.setAttribute('cellaltered', 'false')
            
            addListeners(cell);
            
            row.appendChild(cell);
        }
        gridContainer.appendChild(row);
    }

}

/*
** Adding multiple event listerns to each cell, called in generateGrid()
** Allows single click to color as well as click and drag coloring
*/

let mouseDown =false;


function addListeners(cell) {
    
    cell.addEventListener('mouseenter', (e) => {
        if (mouseDown == false && e.target.getAttribute('cellaltered') == 'false') {
            e.target.style.backgroundColor = 'grey';
        } 
        if (mouseDown == false && e.target.getAttribute('cellaltered') == 'true') {
             return;
        }
        if (mouseDown == true && e.target.getAttribute('cellaltered') == 'false') {
            e.target.style.backgroundColor = 'black';
            e.target.setAttribute('cellaltered', 'true');
            mouseDown = true;
        }
    });

    cell.addEventListener('mouseleave', (e) => {
        if (e.target.getAttribute('cellaltered') == 'true') {
            return;
        } else {
            e.target.style.backgroundColor = 'lightgray';
        }        
    });
    
    cell.addEventListener('mousedown', (e) => {
        e.target.style.backgroundColor = 'black';
        e.target.setAttribute('cellaltered', 'true');
        mouseDown = true;
    });
    
    cell.addEventListener('mouseup', (e) => {
        mouseDown = false;
    });
    
}

/*
** Color buttons
*/

const redButton = document.querySelector('#redButton');
let redSelected = false;
redButton.addEventListener('click', () => {
    redSelected = true;
    console.log(redSelected);
});

const blueButton = document.querySelector('#blueButton');
let blueSelected = false;
blueButton.addEventListener('click', () => {
    blueSelected = true;
    console.log(blueSelected);
});

const yellowButton = document.querySelector('#yellowButton');
let yellowSelected = false;
yellowButton.addEventListener('click', () => {
    yellowSelected = true;
    console.log(yellowSelected);
});


/*
** Resetting the grid color to default
*/

const resetButton = document.querySelector('#resetButton');


resetButton.addEventListener('click', () => {
    
    while(allCells.length == 0) {
        return;
    }
    
    for(let i = 0; i < allCells.length; i++) {
        allCells[i].style.backgroundColor = "lightgray";
        allCells[i].setAttribute('cellaltered', 'false');
    }
    
    mouseDown = false;
    
});

/*
** Get user input to set grid size, will make new grid if one exists
*/

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


